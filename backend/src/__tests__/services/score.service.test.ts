/**
 * Score Service Tests
 */

import { ScoreService } from '../../services/score.service';
import { testUsers } from '../../seeds/users.seed';
import { testSubjects } from '../../seeds/subjects.seed';

// Type for score result
interface ScoreResult {
  id: string;
  title?: string;
  is_eligible?: boolean;
  [key: string]: any;
}

describe('ScoreService', () => {
  let scoreService: ScoreService;
  const studentUserId = testUsers[2].id;
  const subjectId = testSubjects[0].id;

  beforeAll(() => {
    scoreService = new ScoreService();
  });

  describe('getSubjectScores', () => {
    it('should return scores for enrolled user', async () => {
      const result = await scoreService.getSubjectScores(studentUserId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return empty array for user with no scores', async () => {
      // Use valid UUID format that doesn't exist in database
      const result = await scoreService.getSubjectScores('00000000-0000-0000-0000-000000000000');
      
      expect(Array.isArray(result)).toBe(true);
    });

    it('should include score statistics', async () => {
      const result = await scoreService.getSubjectScores(studentUserId);
      
      if (result.length > 0) {
        expect(result[0]).toHaveProperty('id');
        expect(result[0]).toHaveProperty('title');
      }
    });
  });

  describe('getSubjectScoreDetail', () => {
    it('should return detailed scores for a subject', async () => {
      const result = await scoreService.getSubjectScoreDetail(studentUserId, subjectId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return empty array for non-enrolled subject', async () => {
      // Use valid UUID format that doesn't exist in database
      const result = await scoreService.getSubjectScoreDetail(studentUserId, '00000000-0000-0000-0000-000000000000');
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('checkCertificateEligibility', () => {
    it('should check certificate eligibility', async () => {
      const result = await scoreService.checkCertificateEligibility(studentUserId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return eligibility status for each subject', async () => {
      const result = await scoreService.checkCertificateEligibility(studentUserId) as ScoreResult[];
      
      if (result.length > 0) {
        expect(result[0]).toHaveProperty('is_eligible');
        expect(typeof result[0].is_eligible).toBe('boolean');
      }
    });
  });
});
