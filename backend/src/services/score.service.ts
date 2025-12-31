import sequelize from '../config/database';
import { QueryTypes } from 'sequelize';

export class ScoreService {
  /**
   * Get all scores untuk user across subjects
   */
  async getSubjectScores(userId: string) {
    try {
      const scores = await sequelize.query(
        `SELECT 
          s.id,
          s.name as title,
          ss.student_id,
          AVG(ssp.score) as average_score,
          MAX(ssp.score) as highest_score,
          COUNT(DISTINCT ssp.id) as total_assessments
        FROM subjects s
        INNER JOIN student_subjects ss ON s.id = ss.subject_id AND ss.student_id = $1
        LEFT JOIN student_session_progress ssp ON s.id = ssp.subject_id AND ssp.student_id = $1
        WHERE s.deleted_at IS NULL
        GROUP BY s.id, ss.id
        ORDER BY s.created_at DESC`,
        { bind: [userId], type: QueryTypes.SELECT }
      );

      return scores;
    } catch (error: any) {
      throw new Error(`Failed to fetch subject scores: ${error.message}`);
    }
  }

  /**
   * Get detailed score untuk specific subject
   */
  async getSubjectScoreDetail(userId: string, subjectId: string) {
    try {
      const details = await sequelize.query(
        `SELECT 
          s.id,
          s.name as title,
          ssp.id as progress_id,
          ssp.score,
          ssp.timestamp_submitted as completed_at
        FROM subjects s
        INNER JOIN student_subjects ss ON s.id = ss.subject_id AND ss.student_id = $1
        LEFT JOIN student_session_progress ssp ON s.id = ssp.subject_id AND ssp.student_id = $1
        WHERE s.id = $2 AND s.deleted_at IS NULL
        ORDER BY ssp.timestamp_submitted DESC`,
        { bind: [userId, subjectId], type: QueryTypes.SELECT }
      );

      return details;
    } catch (error: any) {
      throw new Error(`Failed to fetch subject score details: ${error.message}`);
    }
  }

  /**
   * Check apakah user eligible untuk certificate
   */
  async checkCertificateEligibility(userId: string) {
    try {
      const eligibility = await sequelize.query(
        `SELECT 
          s.id,
          s.name as title,
          AVG(ssp.score) as average_score,
          CASE 
            WHEN AVG(ssp.score) >= 70 THEN true 
            ELSE false 
          END as is_eligible
        FROM subjects s
        INNER JOIN student_subjects ss ON s.id = ss.subject_id AND ss.student_id = $1
        LEFT JOIN student_session_progress ssp ON s.id = ssp.subject_id AND ssp.student_id = $1
        WHERE s.deleted_at IS NULL
        GROUP BY s.id
        HAVING AVG(ssp.score) IS NOT NULL`,
        { bind: [userId], type: QueryTypes.SELECT }
      );

      return eligibility;
    } catch (error: any) {
      throw new Error(`Failed to check certificate eligibility: ${error.message}`);
    }
  }
}