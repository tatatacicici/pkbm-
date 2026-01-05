import { Quizzes, QuizzesQuestions, QuizzesAnswers, StudentSessionProgress } from '../../models';
import sequelize from './../../config/database';
import { QueryTypes } from 'sequelize';

export class QuizService {
  /**
   * Ambil quiz + questions + possible answers
   */
  async takeQuiz(userId: string, quizId: string) {
    try {
      const quiz = await Quizzes.findOne({
        where: { id: quizId, deletedAt: null as any },
      });

      if (!quiz) {
        throw new Error('Quiz not found');
      }

      // Check if user sudah submit quiz (single attempt enforcement)
      const existingSubmission = await StudentSessionProgress.findOne({
        where: {
          studentId: userId,
          quizId: quizId,
          type: 'QUIZ',
          status: 'SUBMITTED',
        } as any,
      });

      if (existingSubmission) {
        throw new Error('You have already submitted this quiz');
      }

      const questions = await QuizzesQuestions.findAll({
        where: { quizId: quizId, deletedAt: null as any },
        order: [['createdAt', 'ASC']],
      });

      // Attach answers untuk setiap question
      const questionsWithAnswers = await Promise.all(
        questions.map(async (q) => {
          const answers = await QuizzesAnswers.findAll({
            where: { questionId: q.id, deletedAt: null as any },
            attributes: ['id', 'answer'],
            order: [['createdAt', 'ASC']],
          });

          return {
            id: q.id,
            question: (q as any).question,
            type: (q as any).type,
            answers: answers.map((a: any) => ({
              id: a.id,
              text: (a as any).answer,
            })),
          };
        })
      );

      return {
        id: quiz.id,
        title: (quiz as any).title,
        description: (quiz as any).description,
        durationSec: (quiz as any).durationSec || (quiz as any).duration_sec,
        questions: questionsWithAnswers,
      };
    } catch (error: any) {
      throw new Error(`Failed to retrieve quiz: ${error.message}`);
    }
  }

  /**
   * Submit quiz answers dengan single-attempt enforcement
   * FIX: Gunakan EXCLUDED keyword yang benar
   */
  async submitQuiz(
    userId: string,
    quizId: string,
    answers: Array<{ question_id: string; answer_id: string }>
  ) {
    try {
      // Validation
      if (!Array.isArray(answers)) {
        throw new Error('Answers must be an array');
      }

      // Check quiz exist
      const quiz = await Quizzes.findOne({
        where: { id: quizId, deletedAt: null as any },
      });

      if (!quiz) {
        throw new Error('Quiz not found');
      }

      // Check single attempt
      const existingSubmission = await StudentSessionProgress.findOne({
        where: {
          studentId: userId,
          quizId: quizId,
          type: 'QUIZ',
          status: 'SUBMITTED',
        } as any,
      });

      if (existingSubmission) {
        throw new Error('You have already submitted this quiz once');
      }

      // Calculate score
      let correctCount = 0;
      for (const answer of answers) {
        const correctAnswer = await QuizzesAnswers.findOne({
          where: {
            id: answer.answer_id,
            questionId: answer.question_id,
            isCorrect: true,
            deletedAt: null as any,
          } as any,
        });

        if (correctAnswer) {
          correctCount++;
        }
      }

      const totalQuestions = await QuizzesQuestions.count({
        where: { quizId: quizId, deletedAt: null as any },
      });

      const score = (correctCount / totalQuestions) * 100;

      // Get session_id and subject_id from quiz
      const quizSession = await sequelize.query(
        `SELECT q.session_id, s.subject_id 
         FROM quizzes q 
         JOIN sessions s ON q.session_id = s.id 
         WHERE q.id = $1`,
        { bind: [quizId], type: QueryTypes.SELECT }
      ) as any[];

      const sessionId = quizSession[0]?.session_id;
      const subjectId = quizSession[0]?.subject_id;

      // Insert or update progress
      await sequelize.query(
        `INSERT INTO student_session_progress (
          id, student_id, session_id, subject_id, quiz_id, type, score, status, timestamp_taken, timestamp_submitted, created_at, updated_at
        ) VALUES (
          gen_random_uuid(), $1, $2, $3, $4, 'QUIZ', $5, 'SUBMITTED', NOW(), NOW(), NOW(), NOW()
        )
        ON CONFLICT (student_id, session_id, subject_id, module_id, type)
        DO UPDATE SET
          score = EXCLUDED.score,
          status = EXCLUDED.status,
          timestamp_submitted = EXCLUDED.timestamp_submitted,
          updated_at = EXCLUDED.updated_at`,
        { bind: [userId, sessionId, subjectId, quizId, score] }
      );

      // Get progress_id that was just created/updated
      const progressResult = await sequelize.query(
        `SELECT id FROM student_session_progress 
         WHERE student_id = $1 AND quiz_id = $2 AND type = 'QUIZ' 
         ORDER BY updated_at DESC LIMIT 1`,
        { bind: [userId, quizId], type: QueryTypes.SELECT }
      ) as any[];
      
      const progressId = progressResult[0]?.id;

      // Store detailed answers in progress_question_answers
      if (progressId) {
        for (const answer of answers) {
          // Check if already exists
          const existing = await sequelize.query(
            `SELECT id FROM progress_question_answers 
             WHERE progress_id = $1 AND question_id = $2`,
            { bind: [progressId, answer.question_id], type: QueryTypes.SELECT }
          ) as any[];

          if (existing.length > 0) {
            // Update existing
            await sequelize.query(
              `UPDATE progress_question_answers 
               SET answer_id = $1 
               WHERE progress_id = $2 AND question_id = $3`,
              { bind: [answer.answer_id, progressId, answer.question_id] }
            );
          } else {
            // Insert new
            await sequelize.query(
              `INSERT INTO progress_question_answers (id, progress_id, question_id, answer_id)
               VALUES (gen_random_uuid(), $1, $2, $3)`,
              { bind: [progressId, answer.question_id, answer.answer_id] }
            );
          }
        }
      }

      return {
        score: Math.round(score),
        correctAnswers: correctCount,
        totalQuestions,
        passed: score >= 70,
      };
    } catch (error: any) {
      throw new Error(`Failed to submit quiz: ${error.message}`);
    }
  }

  /**
   * Ambil result untuk user pada quiz
   */
  async getQuizResult(userId: string, quizId: string) {
    try {
      const result = await sequelize.query(
        `SELECT 
          ssp.id,
          ssp.score,
          ssp.timestamp_submitted as completed_at,
          q.title,
          q.duration_sec
        FROM student_session_progress ssp
        LEFT JOIN quizzes q ON ssp.quiz_id = q.id
        WHERE ssp.student_id = $1 
          AND ssp.quiz_id = $2
          AND ssp.type = 'QUIZ'
        LIMIT 1`,
        { bind: [userId, quizId], type: QueryTypes.SELECT }
      );

      if (!result || result.length === 0) {
        throw new Error('Quiz result not found');
      }

      return result[0];
    } catch (error: any) {
      throw new Error(`Failed to fetch quiz result: ${error.message}`);
    }
  }

  /**
   * Get quizzes for a session
   */
  async getQuizzes(sessionId: string) {
    try {
      return await Quizzes.findAll({
        where: { sessionId: sessionId, deletedAt: null as any },
        order: [['createdAt', 'ASC']],
      } as any);
    } catch (error: any) {
      throw new Error(`Failed to fetch quizzes: ${error.message}`);
    }
  }

  /**
   * Get quiz detail
   */
  async getQuizDetail(quizId: string) {
    try {
      const quiz = await Quizzes.findByPk(quizId);

      if (!quiz) {
        throw new Error('Quiz not found');
      }

      return quiz;
    } catch (error: any) {
      throw new Error(`Failed to fetch quiz detail: ${error.message}`);
    }
  }

  /**
   * Get quiz history untuk user
   */
  async getQuizHistory(userId: string) {
    try {
      return await sequelize.query(
        `SELECT 
          ssp.id,
          ssp.score,
          ssp.timestamp_submitted as completed_at,
          q.id as quiz_id,
          q.title
        FROM student_session_progress ssp
        LEFT JOIN quizzes q ON ssp.quiz_id = q.id
        WHERE ssp.student_id = $1 AND ssp.type = 'QUIZ'
        ORDER BY ssp.timestamp_submitted DESC`,
        { bind: [userId], type: QueryTypes.SELECT }
      );
    } catch (error: any) {
      throw new Error(`Failed to fetch quiz history: ${error.message}`);
    }
  }
}