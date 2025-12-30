import sequelize from './../../config/database';
import { QueryTypes } from 'sequelize';

export class AssignmentsService {
  async getAssignments(userId: string, sessionId: string) {
    try {
      return await sequelize.query(
        `SELECT 
          a.id,
          a.title,
          a.description,
          a.due_date,
          a.created_at,
          CASE 
            WHEN uas.id IS NOT NULL THEN 'SUBMITTED'
            ELSE 'PENDING'
          END as status
        FROM assignments a
        LEFT JOIN user_assignment_submissions uas ON a.id = uas.assignment_id AND uas.user_id = $1
        WHERE a.session_id = $2 AND a.deleted_at IS NULL
        ORDER BY a.created_at DESC`,
        { bind: [userId, sessionId], type: QueryTypes.SELECT }
      );
    } catch (error: any) {
      throw new Error(`Failed to fetch assignments: ${error.message}`);
    }
  }

  async getAssignmentDetail(userId: string, assignmentId: string) {
    try {
      return await sequelize.query(
        `SELECT 
          a.*,
          uas.submission_text,
          uas.file_urls,
          uas.submitted_at,
          uas.grade,
          uas.feedback
        FROM assignments a
        LEFT JOIN user_assignment_submissions uas ON a.id = uas.assignment_id AND uas.user_id = $1
        WHERE a.id = $2 AND a.deleted_at IS NULL`,
        { bind: [userId, assignmentId], type: QueryTypes.SELECT }
      );
    } catch (error: any) {
      throw new Error(`Failed to fetch assignment detail: ${error.message}`);
    }
  }

  async submitAssignment(
    userId: string,
    assignmentId: string,
    submissionText: string,
    fileUrls: string[] = []
  ) {
    try {
      await sequelize.query(
        `INSERT INTO user_assignment_submissions (
          id, user_id, assignment_id, submission_text, file_urls, submitted_at, created_at, updated_at
        ) VALUES (
          gen_random_uuid(), $1, $2, $3, $4, NOW(), NOW(), NOW()
        )
        ON CONFLICT (user_id, assignment_id) 
        DO UPDATE SET
          submission_text = EXCLUDED.submission_text,
          file_urls = EXCLUDED.file_urls,
          submitted_at = EXCLUDED.submitted_at,
          updated_at = EXCLUDED.updated_at`,
        { bind: [userId, assignmentId, submissionText, JSON.stringify(fileUrls)] }
      );

      return { success: true, message: 'Assignment submitted successfully' };
    } catch (error: any) {
      throw new Error(`Failed to submit assignment: ${error.message}`);
    }
  }

  async deleteAssignmentFile(
    userId: string,
    submissionId: string,
    fileIndex: number
  ) {
    try {
      await sequelize.query(
        `UPDATE user_assignment_submissions
         SET file_urls = array_remove(file_urls, file_urls[$1]),
             updated_at = NOW()
         WHERE id = $2 AND user_id = $3`,
        { bind: [fileIndex, submissionId, userId] }
      );

      return { success: true, message: 'File deleted successfully' };
    } catch (error: any) {
      throw new Error(`Failed to delete assignment file: ${error.message}`);
    }
  }
}