/**
 * Subject Service Tests
 */

import { SubjectService } from '../../services/subject.service';
import { testSubjects } from '../../seeds/subjects.seed';

// Type for subject
interface Subject {
  id: string;
  title?: string;
  name?: string;
  code?: string;
  subject_code?: string;
  description?: string;
  deleted_at?: Date | null;
  [key: string]: any;
}

describe('SubjectService', () => {
  let subjectService: SubjectService;
  const testSubjectId = testSubjects[0].id;

  beforeAll(() => {
    subjectService = new SubjectService();
  });

  describe('getAll', () => {
    it('should return all subjects', async () => {
      const result = await subjectService.getAll();
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should not include deleted subjects', async () => {
      const result = await subjectService.getAll();
      
      // All returned subjects should not have deleted_at set
      result.forEach((subject: any) => {
        expect(subject.deleted_at).toBeNull();
      });
    });
  });

  describe('getById', () => {
    it('should return subject for valid id', async () => {
      const result = await subjectService.getById(testSubjectId);
      
      expect(result).toBeDefined();
      expect(result).toHaveProperty('id', testSubjectId);
      expect(result).toHaveProperty('name');
      expect(result).toHaveProperty('subject_code');
    });

    it('should throw error for non-existent subject', async () => {
      // Use valid UUID format that doesn't exist in database
      await expect(
        subjectService.getById('00000000-0000-0000-0000-000000000000')
      ).rejects.toThrow('Subject not found');
    });
  });

  describe('create', () => {
    it('should create a new subject', async () => {
      const newSubject = {
        name: 'Test Subject',
        description: 'Test description',
        subject_code: 'TST-999',
      };

      const result = await subjectService.create(newSubject) as unknown as Subject | Subject[];
      
      expect(result).toBeDefined();
      // Clean up created subject
      const resultArray = Array.isArray(result) ? result : [result];
      if (resultArray.length > 0 && resultArray[0]?.id) {
        await subjectService.delete(resultArray[0].id);
      }
    });

    it('should require name', async () => {
      const invalidSubject = {
        description: 'No name',
        subject_code: 'NO-NAME',
      };

      await expect(
        subjectService.create(invalidSubject)
      ).rejects.toThrow();
    });
  });

  describe('update', () => {
    it('should update existing subject', async () => {
      // Create a test subject first
      const createResult = await subjectService.create({
        name: 'Original Name',
        description: 'Original description',
        subject_code: 'UPD-001',
      }) as unknown as Subject | Subject[];

      const resultArray = Array.isArray(createResult) ? createResult : [createResult];
      if (resultArray.length > 0 && resultArray[0]?.id) {
        const updateResult = await subjectService.update(resultArray[0].id, {
          name: 'Updated Name',
          description: 'Updated description',
          subject_code: 'UPD-001',
        });

        expect(updateResult).toBeDefined();
        
        // Clean up
        await subjectService.delete(resultArray[0].id);
      }
    });

    it('should throw error for non-existent subject', async () => {
      // Use valid UUID format that doesn't exist in database
      await expect(
        subjectService.update('00000000-0000-0000-0000-000000000000', { name: 'Test' })
      ).rejects.toThrow('Subject not found');
    });
  });

  describe('delete', () => {
    it('should soft delete a subject', async () => {
      // Create a test subject first
      const createResult = await subjectService.create({
        name: 'To Be Deleted',
        description: 'Will be deleted',
        subject_code: 'DEL-001',
      }) as unknown as Subject | Subject[];

      const resultArray = Array.isArray(createResult) ? createResult : [createResult];
      if (resultArray.length > 0 && resultArray[0]?.id) {
        const deleteResult = await subjectService.delete(resultArray[0].id);
        
        expect(deleteResult).toBeDefined();
        expect(deleteResult.success).toBe(true);

        // Verify it's soft deleted (not returned in getAll)
        await expect(
          subjectService.getById(resultArray[0].id)
        ).rejects.toThrow('Subject not found');
      }
    });
  });
});
