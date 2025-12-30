import sequelize from '../../config/database';
import { QueryTypes } from 'sequelize';

export class MyStudyService {
  /**
   * Get my study data - combined subjects, sessions, modules
   */
  async getMyStudy(userId: string) {
    try {
      const data = await sequelize.query(
        `SELECT 
          s.id,
          s.title,
          s.description,
          s.code,
          us.enrollment_date,
          COUNT(DISTINCT ses.id) as total_sessions,
          COUNT(DISTINCT m.id) as total_modules,
          COUNT(DISTINCT CASE WHEN sspm.completed = true THEN m.id END) as completed_modules
        FROM subjects s
        LEFT JOIN user_subjects us ON s.id = us.subject_id AND us.user_id = $1
        LEFT JOIN sessions ses ON s.id = ses.subject_id AND ses.deleted_at IS NULL
        LEFT JOIN modules m ON ses.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN student_session_progress sspm ON m.id = sspm.module_id AND sspm.user_id = $1
        WHERE s.deleted_at IS NULL AND us.user_id = $1
        GROUP BY s.id, us.id
        ORDER BY us.enrollment_date DESC`,
        { bind: [userId], type: QueryTypes.SELECT }
      );

      return data;
    } catch (error: any) {
      throw new Error(`Failed to fetch my study data: ${error.message}`);
    }
  }

  /**
   * Get my study data V2 - with more detailed progress
   */
  async getMyStudyV2(userId: string) {
    try {
      const data = await sequelize.query(
        `SELECT 
          s.id as subject_id,
          s.title as subject_title,
          s.description,
          s.code,
          ses.id as session_id,
          ses.title as session_title,
          ses.start_date,
          ses.end_date,
          CAST(COUNT(DISTINCT m.id) as INTEGER) as total_modules,
          CAST(COUNT(DISTINCT CASE WHEN sspm.completed = true THEN m.id END) as INTEGER) as completed_modules,
          CAST(ROUND(
            COUNT(DISTINCT CASE WHEN sspm.completed = true THEN m.id END)::numeric / 
            NULLIF(COUNT(DISTINCT m.id), 0) * 100
          ) as INTEGER) as progress_percentage
        FROM subjects s
        LEFT JOIN user_subjects us ON s.id = us.subject_id AND us.user_id = $1
        LEFT JOIN sessions ses ON s.id = ses.subject_id AND ses.deleted_at IS NULL
        LEFT JOIN modules m ON ses.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN student_session_progress sspm ON m.id = sspm.module_id 
          AND sspm.user_id = $1 AND sspm.type = 'MODULE'
        WHERE s.deleted_at IS NULL AND us.user_id = $1
        GROUP BY s.id, s.title, s.description, s.code, ses.id, ses.title, ses.start_date, ses.end_date
        ORDER BY s.created_at DESC, ses.start_date DESC`,
        { bind: [userId], type: QueryTypes.SELECT }
      );

      return data;
    } catch (error: any) {
      throw new Error(`Failed to fetch my study v2 data: ${error.message}`);
    }
  }

  /**
   * Get subject sessions
   */
  async getSubjectSessions(userId: string, subjectId: string) {
    try {
      const data = await sequelize.query(
        `SELECT 
          ses.id,
          ses.title,
          ses.description,
          ses.start_date,
          ses.end_date,
          ses.status,
          COUNT(DISTINCT m.id) as total_modules,
          COUNT(DISTINCT CASE WHEN sspm.completed = true THEN m.id END) as completed_modules
        FROM sessions ses
        LEFT JOIN modules m ON ses.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN student_session_progress sspm ON m.id = sspm.module_id 
          AND sspm.user_id = $1 AND sspm.type = 'MODULE'
        WHERE ses.subject_id = $2 AND ses.deleted_at IS NULL
        GROUP BY ses.id
        ORDER BY ses.start_date ASC`,
        { bind: [userId, subjectId], type: QueryTypes.SELECT }
      );

      return data;
    } catch (error: any) {
      throw new Error(`Failed to fetch subject sessions: ${error.message}`);
    }
  }

  /**
   * Get modules for a session
   */
  async getModules(userId: string, sessionId: string) {
    try {
      const data = await sequelize.query(
        `SELECT 
          m.id,
          m.title,
          m.description,
          m.module_order,
          m.type,
          m.video_url,
          m.video_duration,
          COALESCE(sspm.completed, false) as is_completed,
          sspm.completed_at,
          sspm.progress_percentage
        FROM modules m
        LEFT JOIN student_session_progress sspm ON m.id = sspm.module_id 
          AND sspm.user_id = $1 AND sspm.type = 'MODULE'
        WHERE m.session_id = $2 AND m.deleted_at IS NULL
        ORDER BY m.module_order ASC`,
        { bind: [userId, sessionId], type: QueryTypes.SELECT }
      );

      return data;
    } catch (error: any) {
      throw new Error(`Failed to fetch modules: ${error.message}`);
    }
  }

  /**
   * Get module content details
   */
  async getModuleContent(userId: string, moduleId: string) {
    try {
      const module = await sequelize.query(
        `SELECT 
          m.*,
          COALESCE(sspm.completed, false) as is_completed,
          sspm.completed_at,
          sspm.watch_duration
        FROM modules m
        LEFT JOIN student_session_progress sspm ON m.id = sspm.module_id 
          AND sspm.user_id = $1 AND sspm.type = 'MODULE'
        WHERE m.id = $2 AND m.deleted_at IS NULL`,
        { bind: [userId, moduleId], type: QueryTypes.SELECT }
      );

      if (!module || module.length === 0) {
        throw new Error('Module not found');
      }

      // Get related resources
      const resources = await sequelize.query(
        `SELECT id, title, url, type, file_size
        FROM module_resources
        WHERE module_id = $1 AND deleted_at IS NULL
        ORDER BY created_at ASC`,
        { bind: [moduleId], type: QueryTypes.SELECT }
      );

      return {
        ...module[0],
        resources,
      };
    } catch (error: any) {
      throw new Error(`Failed to fetch module content: ${error.message}`);
    }
  }

  /**
   * Submit module resume / mark as watched
   */
  async submitModuleResume(userId: string, moduleId: string) {
    try {
      await sequelize.query(
        `INSERT INTO student_session_progress (
          id, user_id, module_id, type, completed, completed_at, progress_percentage, created_at, updated_at
        ) VALUES (
          gen_random_uuid(), $1, $2, 'MODULE', true, NOW(), 100, NOW(), NOW()
        )
        ON CONFLICT (user_id, module_id, type)
        DO UPDATE SET
          completed = EXCLUDED.completed,
          completed_at = EXCLUDED.completed_at,
          progress_percentage = EXCLUDED.progress_percentage,
          updated_at = EXCLUDED.updated_at`,
        { bind: [userId, moduleId] }
      );

      return { success: true, message: 'Module marked as completed' };
    } catch (error: any) {
      throw new Error(`Failed to submit module resume: ${error.message}`);
    }
  }

  /**
   * Mark video as watched
   */
  async markVideoWatched(userId: string, moduleId: string) {
    try {
      await sequelize.query(
        `UPDATE student_session_progress
        SET watch_duration = (SELECT video_duration FROM modules WHERE id = $2),
            progress_percentage = 100,
            updated_at = NOW()
        WHERE user_id = $1 AND module_id = $2 AND type = 'MODULE'`,
        { bind: [userId, moduleId] }
      );

      return { success: true, message: 'Video marked as watched' };
    } catch (error: any) {
      throw new Error(`Failed to mark video as watched: ${error.message}`);
    }
  }

  /**
   * Get my study stats
   */
  async getMyStudyStats(userId: string) {
    try {
      const stats = await sequelize.query(
        `SELECT 
          COUNT(DISTINCT us.subject_id) as total_subjects,
          COUNT(DISTINCT ses.id) as total_sessions,
          COUNT(DISTINCT m.id) as total_modules,
          COUNT(DISTINCT CASE WHEN sspm.completed = true THEN m.id END) as completed_modules,
          CAST(ROUND(
            COUNT(DISTINCT CASE WHEN sspm.completed = true THEN m.id END)::numeric / 
            NULLIF(COUNT(DISTINCT m.id), 0) * 100
          ) as INTEGER) as overall_progress
        FROM user_subjects us
        LEFT JOIN sessions ses ON us.subject_id = ses.subject_id AND ses.deleted_at IS NULL
        LEFT JOIN modules m ON ses.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN student_session_progress sspm ON m.id = sspm.module_id 
          AND sspm.user_id = $1 AND sspm.type = 'MODULE'
        WHERE us.user_id = $1`,
        { bind: [userId], type: QueryTypes.SELECT }
      );

      return stats[0] || {};
    } catch (error: any) {
      throw new Error(`Failed to fetch study stats: ${error.message}`);
    }
  }
}
