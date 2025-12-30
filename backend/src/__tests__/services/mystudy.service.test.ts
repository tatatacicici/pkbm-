/**
 * MyStudy Service Tests
 */

import { MyStudyService } from '../../services/study/mystudy.service';
import { testUsers } from '../../seeds/users.seed';
import { testSubjects } from '../../seeds/subjects.seed';
import { testSessions } from '../../seeds/sessions.seed';
import { testModules } from '../../seeds/modules.seed';

describe('MyStudyService', () => {
  let myStudyService: MyStudyService;
  const studentUserId = testUsers[2].id; // student@pkbm.test
  const subjectId = testSubjects[0].id;
  const sessionId = testSessions[0].id;
  const moduleId = testModules[0].id;

  beforeAll(() => {
    myStudyService = new MyStudyService();
  });

  describe('getMyStudy', () => {
    it('should return study data for enrolled user', async () => {
      const result = await myStudyService.getMyStudy(studentUserId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return empty array for user with no enrollments', async () => {
      const result = await myStudyService.getMyStudy('non-existent-user-id');
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('getMyStudyV2', () => {
    it('should return detailed study data with progress', async () => {
      const result = await myStudyService.getMyStudyV2(studentUserId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
      // Check for progress-related fields if data exists
      if (result.length > 0) {
        expect(result[0]).toHaveProperty('subject_id');
        expect(result[0]).toHaveProperty('session_id');
      }
    });
  });

  describe('getSubjectSessions', () => {
    it('should return sessions for a valid subject', async () => {
      const result = await myStudyService.getSubjectSessions(studentUserId, subjectId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return empty array for non-existent subject', async () => {
      const result = await myStudyService.getSubjectSessions(studentUserId, 'non-existent-subject-id');
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('getModules', () => {
    it('should return modules for a valid session', async () => {
      const result = await myStudyService.getModules(studentUserId, sessionId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return modules with completion status', async () => {
      const result = await myStudyService.getModules(studentUserId, sessionId);
      
      if (result.length > 0) {
        expect(result[0]).toHaveProperty('is_completed');
      }
    });
  });

  describe('getModuleContent', () => {
    it('should return module content for valid module', async () => {
      const result = await myStudyService.getModuleContent(studentUserId, moduleId);
      
      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('title');
    });

    it('should throw error for non-existent module', async () => {
      await expect(
        myStudyService.getModuleContent(studentUserId, 'non-existent-module-id')
      ).rejects.toThrow('Module not found');
    });
  });

  describe('submitModuleResume', () => {
    it('should mark module as completed', async () => {
      const result = await myStudyService.submitModuleResume(studentUserId, moduleId);
      
      expect(result).toBeDefined();
      expect(result.success).toBe(true);
      expect(result.message).toContain('completed');
    });
  });

  describe('markVideoWatched', () => {
    it('should mark video as watched', async () => {
      const result = await myStudyService.markVideoWatched(studentUserId, moduleId);
      
      expect(result).toBeDefined();
      expect(result.success).toBe(true);
    });
  });

  describe('getMyStudyStats', () => {
    it('should return study statistics for user', async () => {
      const result = await myStudyService.getMyStudyStats(studentUserId);
      
      expect(result).toBeDefined();
      // Stats object should have relevant fields
      expect(typeof result).toBe('object');
    });
  });
});
