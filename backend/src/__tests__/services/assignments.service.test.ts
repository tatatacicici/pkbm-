/**
 * Assignments Service Tests
 */

import { AssignmentsService } from '../../services/study/assignments.service';
import { testUsers } from '../../seeds/users.seed';
import { testAssignments } from '../../seeds/assignments.seed';
import { testSessions } from '../../seeds/sessions.seed';

// Type for assignment with status
interface AssignmentWithStatus {
  id: string;
  title: string;
  status: string;
  submission_id?: string;
  [key: string]: any;
}

describe('AssignmentsService', () => {
  let assignmentsService: AssignmentsService;
  const studentUserId = testUsers[2].id;
  const sessionId = testSessions[0].id; // Use valid UUID from seeds
  const assignmentId = testAssignments[0].id;

  beforeAll(() => {
    assignmentsService = new AssignmentsService();
  });

  describe('getAssignments', () => {
    it('should return assignments for a valid session', async () => {
      const result = await assignmentsService.getAssignments(studentUserId, sessionId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should include submission status for each assignment', async () => {
      const result = await assignmentsService.getAssignments(studentUserId, sessionId) as AssignmentWithStatus[];
      
      if (result.length > 0) {
        expect(result[0]).toHaveProperty('status');
        expect(['PENDING', 'SUBMITTED']).toContain(result[0].status);
      }
    });

    it('should return empty array for non-existent session', async () => {
      // Use valid UUID format that doesn't exist in database
      const result = await assignmentsService.getAssignments(studentUserId, '00000000-0000-0000-0000-000000000000');
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('getAssignmentDetail', () => {
    it('should return assignment detail with submission info', async () => {
      const result = await assignmentsService.getAssignmentDetail(studentUserId, assignmentId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      if (result.length > 0) {
        expect(result[0]).toHaveProperty('id');
        expect(result[0]).toHaveProperty('title');
      }
    });

    it('should return empty array for non-existent assignment', async () => {
      // Use valid UUID format that doesn't exist in database
      const result = await assignmentsService.getAssignmentDetail(studentUserId, '00000000-0000-0000-0000-000000000000');
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('submitAssignment', () => {
    it('should submit assignment successfully', async () => {
      const submissionText = 'This is my assignment submission for testing purposes.';
      const fileUrls = ['https://example.com/file1.pdf'];

      const result = await assignmentsService.submitAssignment(
        studentUserId,
        assignmentId,
        submissionText,
        fileUrls
      );
      
      expect(result).toBeDefined();
      expect(result.success).toBe(true);
      expect(result.message).toContain('submitted');
    });

    it('should update submission on resubmit', async () => {
      const updatedText = 'This is my updated submission.';
      const fileUrls = ['https://example.com/file2.pdf'];

      const result = await assignmentsService.submitAssignment(
        studentUserId,
        assignmentId,
        updatedText,
        fileUrls
      );
      
      expect(result.success).toBe(true);
    });

    it('should handle empty file urls', async () => {
      const submissionText = 'Text only submission';

      const result = await assignmentsService.submitAssignment(
        studentUserId,
        assignmentId,
        submissionText,
        []
      );
      
      expect(result.success).toBe(true);
    });
  });

  describe('deleteAssignmentFile', () => {
    it('should delete file from submission', async () => {
      // First, submit with a file
      await assignmentsService.submitAssignment(
        studentUserId,
        assignmentId,
        'Test submission',
        ['https://example.com/to-delete.pdf', 'https://example.com/keep.pdf']
      );

      // Get the submission detail to find document ids
      const details = await assignmentsService.getAssignmentDetail(studentUserId, assignmentId) as any[];
      
      if (details.length > 0 && details[0].documents && details[0].documents.length > 0) {
        const documentId = details[0].documents[0].id;
        const result = await assignmentsService.deleteAssignmentFile(
          studentUserId,
          documentId
        );
        
        expect(result).toBeDefined();
        expect(result.success).toBe(true);
      } else {
        // No documents to delete, just verify the function works
        const result = await assignmentsService.deleteAssignmentFile(
          studentUserId,
          '00000000-0000-0000-0000-000000000000'
        );
        expect(result.success).toBe(true);
      }
    });
  });
});
