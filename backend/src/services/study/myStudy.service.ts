import sequelize from '../../config/database';
import { QueryTypes } from 'sequelize';

export class MyStudyService {
  async getMyStudy(userId: string) {
    const subjects = await sequelize.query(
      `SELECT 
          s.id, s.title, s.description, s.thumbnail,
          us.progress_percentage, us.enrolled_at, us.completed_at,
          COUNT(DISTINCT sess.id) as total_sessions,
          COUNT(DISTINCT CASE 
            WHEN EXISTS (
              SELECT 1 FROM modules m
              LEFT JOIN user_module_progress ump 
                  ON m.id = ump.module_id AND ump.user_id = $1
              WHERE m.session_id = sess.id 
                AND m.deleted_at IS NULL
                AND ump.completed_at IS NOT NULL
            ) THEN sess.id 
          END) as completed_sessions
        FROM subjects s
        LEFT JOIN user_subjects us 
            ON s.id = us.subject_id AND us.user_id = $1
        LEFT JOIN sessions sess 
            ON s.id = sess.subject_id AND sess.deleted_at IS NULL
        WHERE s.deleted_at IS NULL
        GROUP BY s.id, us.id
        ORDER BY s.created_at DESC`,
      { bind: [userId], type: QueryTypes.SELECT }
    );

    return { subjects };
  }

  async getMyStudyStats(userId: string) {
    const subjects = await sequelize.query(
      `SELECT 
          s.id, us.enrolled_at, us.completed_at
        FROM subjects s
        LEFT JOIN user_subjects us 
            ON s.id = us.subject_id AND us.user_id = $1
        WHERE s.deleted_at IS NULL`,
      { bind: [userId], type: QueryTypes.SELECT }
    );

    return {
      total_subjects: subjects.length,
      enrolled_subjects: subjects.filter((s: any) => s.enrolled_at).length,
      completed_subjects: subjects.filter((s: any) => s.completed_at).length,
    };
  }

  async getSubjectSessions(userId: string, subjectId: string) {
    return await sequelize.query(
      `SELECT 
          s.id, s.title, s.description, s.order_number,
          COUNT(DISTINCT m.id) as total_modules,
          COUNT(DISTINCT q.id) as total_quizzes,
          COUNT(DISTINCT a.id) as total_assignments,
          COUNT(DISTINCT CASE 
              WHEN ump.completed_at IS NOT NULL 
              THEN m.id END
          ) as completed_modules
        FROM sessions s
        LEFT JOIN modules m 
            ON s.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN quizzes q 
            ON s.id = q.session_id AND q.deleted_at IS NULL
        LEFT JOIN assignments a 
            ON s.id = a.session_id AND a.deleted_at IS NULL
        LEFT JOIN user_module_progress ump 
            ON m.id = ump.module_id AND ump.user_id = $1
        WHERE s.subject_id = $2 AND s.deleted_at IS NULL
        GROUP BY s.id
        ORDER BY s.order_number ASC`,
      { bind: [userId, subjectId], type: QueryTypes.SELECT }
    );
  }

  async getModules(userId: string, sessionId: string) {
    return await sequelize.query(
      `SELECT 
          m.id, m.title, m.content, m.video_url, m.order_number,
          ump.completed_at, ump.resume_text
        FROM modules m
        LEFT JOIN user_module_progress ump 
            ON m.id = ump.module_id AND ump.user_id = $1
        WHERE m.session_id = $2 AND m.deleted_at IS NULL
        ORDER BY m.order_number ASC`,
      { bind: [userId, sessionId], type: QueryTypes.SELECT }
    );
  }

  async getModuleContent(userId: string, moduleId: string) {
    const result = await sequelize.query(
      `SELECT 
          m.id, m.title, m.content, m.video_url, m.order_number,
          ump.completed_at, ump.resume_text
        FROM modules m
        LEFT JOIN user_module_progress ump 
            ON m.id = ump.module_id AND ump.user_id = $1
        WHERE m.id = $2 AND m.deleted_at IS NULL`,
      { bind: [userId, moduleId], type: QueryTypes.SELECT }
    );

    return result[0] || null;
  }
}
