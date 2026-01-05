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
          s.name as title,
          s.description,
          s.subject_code as code,
          ss.created_at as enrollment_date,
          COUNT(DISTINCT ses.id) as total_sessions,
          COUNT(DISTINCT m.id) as total_modules,
          COUNT(DISTINCT CASE WHEN ssp.status = 'SUBMITTED' THEN m.id END) as completed_modules
        FROM subjects s
        LEFT JOIN student_subjects ss ON s.id = ss.subject_id AND ss.student_id = $1
        LEFT JOIN sessions ses ON s.id = ses.subject_id AND ses.deleted_at IS NULL
        LEFT JOIN modules m ON ses.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN student_session_progress ssp ON m.id = ssp.module_id AND ssp.student_id = $1 AND ssp.type = 'MODULE'
        WHERE s.deleted_at IS NULL AND ss.student_id = $1
        GROUP BY s.id, ss.id
        ORDER BY ss.created_at DESC`,
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
          s.name as subject_title,
          s.description,
          s.subject_code as code,
          ses.id as session_id,
          ses.title as session_title,
          ses.created_at as start_date,
          ses.updated_at as end_date,
          CAST(COUNT(DISTINCT m.id) as INTEGER) as total_modules,
          CAST(COUNT(DISTINCT CASE WHEN ssp.status = 'SUBMITTED' THEN m.id END) as INTEGER) as completed_modules,
          CAST(ROUND(
            COUNT(DISTINCT CASE WHEN ssp.status = 'SUBMITTED' THEN m.id END)::numeric / 
            NULLIF(COUNT(DISTINCT m.id), 0) * 100
          ) as INTEGER) as progress_percentage
        FROM subjects s
        LEFT JOIN student_subjects ss ON s.id = ss.subject_id AND ss.student_id = $1
        LEFT JOIN sessions ses ON s.id = ses.subject_id AND ses.deleted_at IS NULL
        LEFT JOIN modules m ON ses.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN student_session_progress ssp ON m.id = ssp.module_id 
          AND ssp.student_id = $1 AND ssp.type = 'MODULE'
        WHERE s.deleted_at IS NULL AND ss.student_id = $1
        GROUP BY s.id, s.name, s.description, s.subject_code, ses.id, ses.title, ses.created_at, ses.updated_at
        ORDER BY s.created_at DESC, ses.created_at DESC`,
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
          ses.created_at as start_date,
          ses.updated_at as end_date,
          'ACTIVE' as status,
          COUNT(DISTINCT m.id) as total_modules,
          COUNT(DISTINCT CASE WHEN ssp.status = 'SUBMITTED' THEN m.id END) as completed_modules
        FROM sessions ses
        LEFT JOIN modules m ON ses.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN student_session_progress ssp ON m.id = ssp.module_id 
          AND ssp.student_id = $1 AND ssp.type = 'MODULE'
        WHERE ses.subject_id = $2 AND ses.deleted_at IS NULL
        GROUP BY ses.id
        ORDER BY ses.session_no ASC`,
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
          m."order" as module_order,
          m.video_id,
          m.duration_sec as video_duration,
          COALESCE(ssp.status = 'SUBMITTED', false) as is_completed,
          ssp.timestamp_submitted as completed_at,
          CASE WHEN ssp.status = 'SUBMITTED' THEN 100 ELSE 0 END as progress_percentage
        FROM modules m
        LEFT JOIN student_session_progress ssp ON m.id = ssp.module_id 
          AND ssp.student_id = $1 AND ssp.type = 'MODULE'
        WHERE m.session_id = $2 AND m.deleted_at IS NULL
        ORDER BY m."order" ASC`,
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
          COALESCE(ssp.status = 'SUBMITTED', false) as is_completed,
          ssp.timestamp_submitted as completed_at,
          0 as watch_duration
        FROM modules m
        LEFT JOIN student_session_progress ssp ON m.id = ssp.module_id 
          AND ssp.student_id = $1 AND ssp.type = 'MODULE'
        WHERE m.id = $2 AND m.deleted_at IS NULL`,
        { bind: [userId, moduleId], type: QueryTypes.SELECT }
      );

      if (!module || module.length === 0) {
        throw new Error('Module not found');
      }

      // Get related resources (if table exists)
      let resources: any[] = [];
      try {
        resources = await sequelize.query(
          `SELECT id, title, url, type, file_size
          FROM module_resources
          WHERE module_id = $1 AND deleted_at IS NULL
          ORDER BY created_at ASC`,
          { bind: [moduleId], type: QueryTypes.SELECT }
        );
      } catch {
        // Table might not exist, continue without resources
      }

      return {
        ...module[0],
        resources,
      };
    } catch (error: any) {
      // Preserve "Module not found" error message
      if (error.message === 'Module not found') {
        throw error;
      }
      throw new Error(`Failed to fetch module content: ${error.message}`);
    }
  }

  /**
   * Submit module resume / mark as watched
   */
  async submitModuleResume(userId: string, moduleId: string) {
    try {
      // Get session_id and subject_id from module
      const moduleInfo = await sequelize.query(
        `SELECT m.session_id, s.subject_id 
         FROM modules m 
         JOIN sessions s ON m.session_id = s.id 
         WHERE m.id = $1`,
        { bind: [moduleId], type: QueryTypes.SELECT }
      ) as any[];

      const sessionId = moduleInfo[0]?.session_id;
      const subjectId = moduleInfo[0]?.subject_id;

      await sequelize.query(
        `INSERT INTO student_session_progress (
          id, student_id, session_id, subject_id, module_id, type, status, timestamp_taken, timestamp_submitted, created_at, updated_at
        ) VALUES (
          gen_random_uuid(), $1, $2, $3, $4, 'MODULE', 'SUBMITTED', NOW(), NOW(), NOW(), NOW()
        )
        ON CONFLICT (student_id, session_id, subject_id, module_id, type)
        DO UPDATE SET
          status = EXCLUDED.status,
          timestamp_submitted = EXCLUDED.timestamp_submitted,
          updated_at = EXCLUDED.updated_at`,
        { bind: [userId, sessionId, subjectId, moduleId] }
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
        SET status = 'SUBMITTED',
            timestamp_submitted = NOW(),
            updated_at = NOW()
        WHERE student_id = $1 AND module_id = $2 AND type = 'MODULE'`,
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
          COUNT(DISTINCT ss.subject_id) as total_subjects,
          COUNT(DISTINCT ses.id) as total_sessions,
          COUNT(DISTINCT m.id) as total_modules,
          COUNT(DISTINCT CASE WHEN ssp.status = 'SUBMITTED' THEN m.id END) as completed_modules,
          CAST(ROUND(
            COUNT(DISTINCT CASE WHEN ssp.status = 'SUBMITTED' THEN m.id END)::numeric / 
            NULLIF(COUNT(DISTINCT m.id), 0) * 100
          ) as INTEGER) as overall_progress
        FROM student_subjects ss
        LEFT JOIN sessions ses ON ss.subject_id = ses.subject_id AND ses.deleted_at IS NULL
        LEFT JOIN modules m ON ses.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN student_session_progress ssp ON m.id = ssp.module_id 
          AND ssp.student_id = $1 AND ssp.type = 'MODULE'
        WHERE ss.student_id = $1`,
        { bind: [userId], type: QueryTypes.SELECT }
      );

      return stats[0] || {};
    } catch (error: any) {
      throw new Error(`Failed to fetch study stats: ${error.message}`);
    }
  }
}
