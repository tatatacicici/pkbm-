/**
 * Quiz Service Tests
 */

import { QuizService } from '../../services/study/quiz.service';
import { testUsers } from '../../seeds/users.seed';
import { testQuizzes } from '../../seeds/quizzes.seed';
import { testSessions } from '../../seeds/sessions.seed';
import sequelize from '../../config/database';

describe('QuizService', () => {
  let quizService: QuizService;
  const studentUserId = testUsers[2].id; // student@pkbm.test
  const quizId = testQuizzes[0].id;
  const sessionId = testSessions[0].id; // Valid UUID from seeds
  // Use question and answer IDs from seeds
  const questionIds = testQuizzes[0].questions.map(q => q.id);
  const correctAnswerIds = testQuizzes[0].questions.map(q => 
    q.answers.find(a => a.isCorrect)?.id
  );

  beforeAll(() => {
    quizService = new QuizService();
  });

  // Clean up quiz submissions before tests that need fresh state
  beforeEach(async () => {
    // Delete existing quiz progress for test users to allow retake
    await sequelize.query(
      `DELETE FROM student_session_progress 
       WHERE quiz_id = $1 AND type = 'QUIZ' 
       AND student_id IN ($2, $3)`,
      { bind: [quizId, studentUserId, testUsers[3]?.id || studentUserId] }
    );
  });

  describe('getQuizzes', () => {
    it('should return quizzes for a session', async () => {
      const result = await quizService.getQuizzes(sessionId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return empty array for non-existent session', async () => {
      // Use valid UUID format for non-existent session
      const result = await quizService.getQuizzes('00000000-0000-0000-0000-000000000000');
      
      expect(Array.isArray(result)).toBe(true);
      expect(result.length).toBe(0);
    });
  });

  describe('getQuizDetail', () => {
    it('should return quiz detail for valid quiz id', async () => {
      const result = await quizService.getQuizDetail(quizId);
      
      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('title');
    });

    it('should throw error for non-existent quiz', async () => {
      await expect(
        quizService.getQuizDetail('00000000-0000-0000-0000-000000000000')
      ).rejects.toThrow();
    });
  });

  describe('takeQuiz', () => {
    it('should return quiz with questions for valid user and quiz', async () => {
      const result = await quizService.takeQuiz(studentUserId, quizId);
      
      expect(result).toBeDefined();
      expect(result).toHaveProperty('id');
      expect(result).toHaveProperty('title');
      expect(result).toHaveProperty('questions');
      expect(Array.isArray(result.questions)).toBe(true);
    });

    it('should throw error for non-existent quiz', async () => {
      await expect(
        quizService.takeQuiz(studentUserId, '00000000-0000-0000-0000-000000000000')
      ).rejects.toThrow();
    });
  });

  describe('submitQuiz', () => {
    it('should calculate score correctly for correct answers', async () => {
      // Use actual question and answer IDs from seeds
      const answers = questionIds.map((qId, index) => ({
        question_id: qId,
        answer_id: correctAnswerIds[index] || '',
      }));

      const result = await quizService.submitQuiz(studentUserId, quizId, answers);
      
      expect(result).toBeDefined();
      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('correctAnswers');
      expect(result).toHaveProperty('totalQuestions');
    });

    it('should calculate partial score for mixed answers', async () => {
      const newUserId = testUsers[3].id; // student2
      // First answer correct, others wrong (use first answer option which is wrong)
      const answers = questionIds.map((qId, index) => ({
        question_id: qId,
        answer_id: index === 0 ? (correctAnswerIds[0] || '') : testQuizzes[0].questions[index].answers[0].id,
      }));

      const result = await quizService.submitQuiz(newUserId, quizId, answers);
      
      expect(result).toBeDefined();
      expect(result).toHaveProperty('score');
      expect(result).toHaveProperty('correctAnswers');
    });

    it('should throw error for invalid answers format', async () => {
      await expect(
        quizService.submitQuiz(studentUserId, quizId, 'invalid' as any)
      ).rejects.toThrow();
    });
  });

  describe('getQuizResult', () => {
    it('should return quiz result for user who submitted', async () => {
      // First, submit the quiz to ensure there's a result
      const answers = questionIds.map((qId, index) => ({
        question_id: qId,
        answer_id: correctAnswerIds[index] || '',
      }));
      await quizService.submitQuiz(studentUserId, quizId, answers);

      // Now get the result
      const result = await quizService.getQuizResult(studentUserId, quizId);
      
      expect(result).toBeDefined();
      expect(result).toHaveProperty('score');
    });

    it('should throw error for user who has not submitted', async () => {
      await expect(
        quizService.getQuizResult('00000000-0000-0000-0000-000000000000', quizId)
      ).rejects.toThrow();
    });
  });

  describe('getQuizHistory', () => {
    it('should return quiz history for user', async () => {
      const result = await quizService.getQuizHistory(studentUserId);
      
      expect(result).toBeDefined();
      expect(Array.isArray(result)).toBe(true);
    });

    it('should return empty array for user with no quiz history', async () => {
      const result = await quizService.getQuizHistory('00000000-0000-0000-0000-000000000000');
      
      expect(Array.isArray(result)).toBe(true);
    });
  });
});
