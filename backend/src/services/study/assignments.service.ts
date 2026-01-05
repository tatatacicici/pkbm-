import sequelize from './../../config/database';
import { QueryTypes } from 'sequelize';

export class AssignmentsService {
  async getAssignments(userId: string, sessionId: string) {
    try {
      return await sequelize.query(
        `SELECT 
          a.id,
          a.title,
          a."desc" as description,
          a.duration_days,
          a.created_at,
          a."order",
          CASE 
            WHEN ssp.id IS NOT NULL AND ssp.status = 'SUBMITTED' THEN 'SUBMITTED'
            WHEN ssp.id IS NOT NULL THEN ssp.status
            ELSE 'PENDING'
          END as status,
          ssp.score,
          ssp.timestamp_submitted as submitted_at
        FROM assignments a
        LEFT JOIN student_session_progress ssp ON a.id = ssp.assignment_id 
          AND ssp.student_id = $1 AND ssp.type = 'ASSIGNMENT'
        WHERE a.session_id = $2 AND a.deleted_at IS NULL
        ORDER BY a."order" ASC, a.created_at DESC`,
        { bind: [userId, sessionId], type: QueryTypes.SELECT }
      );
    } catch (error: any) {
      throw new Error(`Failed to fetch assignments: ${error.message}`);
    }
  }

  async getAssignmentDetail(userId: string, assignmentId: string) {
    try {
      const assignment = await sequelize.query(
        `SELECT 
          a.id,
          a.title,
          a."desc" as description,
          a.duration_days,
          a.exercise,
          a.answer_key_status,
          a."order",
          a.status as assignment_status,
          a.created_at,
          ssp.id as progress_id,
          ssp.status as submission_status,
          ssp.score,
          ssp.module_answer as submission_text,
          ssp.timestamp_submitted as submitted_at,
          ssp.timestamp_scored as graded_at
        FROM assignments a
        LEFT JOIN student_session_progress ssp ON a.id = ssp.assignment_id 
          AND ssp.student_id = $1 AND ssp.type = 'ASSIGNMENT'
        WHERE a.id = $2 AND a.deleted_at IS NULL`,
        { bind: [userId, assignmentId], type: QueryTypes.SELECT }
      );

      // Get submission documents if progress exists
      if (assignment.length > 0 && (assignment[0] as any).progress_id) {
        const documents = await sequelize.query(
          `SELECT id, document_url, document_filename, created_at
           FROM submission_documents
           WHERE progress_id = $1 AND deleted_at IS NULL
           ORDER BY created_at ASC`,
          { bind: [(assignment[0] as any).progress_id], type: QueryTypes.SELECT }
        );
        (assignment[0] as any).documents = documents;
      }

      return assignment;
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
      // Get assignment info to get session_id and subject_id
      const assignmentInfo = await sequelize.query(
        `SELECT a.id, a.session_id, s.subject_id
         FROM assignments a
         JOIN sessions s ON a.session_id = s.id
         WHERE a.id = $1`,
        { bind: [assignmentId], type: QueryTypes.SELECT }
      ) as any[];

      if (!assignmentInfo.length) {
        throw new Error('Assignment not found');
      }

      const { session_id, subject_id } = assignmentInfo[0];

      // Insert or update progress
      const result = await sequelize.query(
        `INSERT INTO student_session_progress (
          id, student_id, session_id, subject_id, assignment_id, type, status, 
          module_answer, timestamp_taken, timestamp_submitted, created_at, updated_at
        ) VALUES (
          gen_random_uuid(), $1, $2, $3, $4, 'ASSIGNMENT', 'SUBMITTED', 
          $5, NOW(), NOW(), NOW(), NOW()
        )
        ON CONFLICT (student_id, session_id, subject_id, module_id, type)
        DO UPDATE SET
          module_answer = EXCLUDED.module_answer,
          status = EXCLUDED.status,
          timestamp_submitted = EXCLUDED.timestamp_submitted,
          updated_at = EXCLUDED.updated_at
        RETURNING id`,
        { bind: [userId, session_id, subject_id, assignmentId, submissionText], type: QueryTypes.SELECT }
      ) as any[];

      // If fileUrls provided, insert into submission_documents
      if (fileUrls.length > 0 && result.length > 0) {
        const progressId = result[0].id;
        for (const url of fileUrls) {
          await sequelize.query(
            `INSERT INTO submission_documents (id, progress_id, document_url, document_filename, created_at, updated_at)
             VALUES (gen_random_uuid(), $1, $2, $3, NOW(), NOW())`,
            { bind: [progressId, url, url.split('/').pop() || 'file'] }
          );
        }
      }

      return { success: true, message: 'Assignment submitted successfully' };
    } catch (error: any) {
      if (error.message === 'Assignment not found') {
        throw error;
      }
      throw new Error(`Failed to submit assignment: ${error.message}`);
    }
  }

  async deleteAssignmentFile(
    userId: string,
    documentId: string
  ) {
    try {
      // Verify ownership through progress
      await sequelize.query(
        `UPDATE submission_documents sd
         SET deleted_at = NOW(), updated_at = NOW()
         FROM student_session_progress ssp
         WHERE sd.progress_id = ssp.id 
           AND sd.id = $1 
           AND ssp.student_id = $2
           AND sd.deleted_at IS NULL`,
        { bind: [documentId, userId] }
      );

      return { success: true, message: 'File deleted successfully' };
    } catch (error: any) {
      throw new Error(`Failed to delete assignment file: ${error.message}`);
    }
  }
}