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
          s.title,
          us.user_id,
          AVG(usp.score) as average_score,
          MAX(usp.score) as highest_score,
          COUNT(DISTINCT usp.id) as total_assessments
        FROM subjects s
        LEFT JOIN user_subjects us ON s.id = us.subject_id AND us.user_id = $1
        LEFT JOIN student_session_progress usp ON us.id = usp.user_subject_id
        WHERE s.deleted_at IS NULL AND us.user_id = $1
        GROUP BY s.id, us.id
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
          s.title,
          ssp.id as progress_id,
          ssp.score,
          ssp.completed_at
        FROM subjects s
        LEFT JOIN user_subjects us ON s.id = us.subject_id AND us.user_id = $1
        LEFT JOIN student_session_progress ssp ON us.id = ssp.user_subject_id
        WHERE s.id = $2 AND s.deleted_at IS NULL AND us.user_id = $1
        ORDER BY ssp.completed_at DESC`,
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
          s.title,
          AVG(ssp.score) as average_score,
          CASE 
            WHEN AVG(ssp.score) >= 70 THEN true 
            ELSE false 
          END as is_eligible
        FROM subjects s
        LEFT JOIN user_subjects us ON s.id = us.subject_id AND us.user_id = $1
        LEFT JOIN student_session_progress ssp ON us.id = ssp.user_subject_id
        WHERE s.deleted_at IS NULL AND us.user_id = $1
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