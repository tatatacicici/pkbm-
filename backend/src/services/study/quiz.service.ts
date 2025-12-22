import { Op } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { Quizzes } from '../../models/tables/Quizzes';
import { QuizzesQuestions } from '../../models/tables/QuizzesQuestions';
import { QuizzesAnswers } from '../../models/tables/QuizzesAnswers';
import { StudentSessionProgress } from '../../models/tables/StudentSessionProgress';
import { ProgressQuestionAnswers } from '../../models/tables/ProgressQuestionAnswers';
import { Users } from '../../models/tables/Users';

export class QuizService {
  /**
   * Ambil quiz + questions + possible answers
   */
  async takeQuiz(quizId: string) {
    const quiz = await Quizzes.findOne({
      where: { id: quizId, deletedAt: null as any },
    });

    if (!quiz) throw new Error('Quiz not found');

    const questions = await QuizzesQuestions.findAll({
      where: { quizId: quizId, deletedAt: null as any },
      order: [['createdAt', 'ASC']],
    });

    // attach answers for each question
    const questionsWithAnswers = await Promise.all(
      questions.map(async (q) => {
        const answers = await QuizzesAnswers.findAll({
          where: { questionId: q.id, deletedAt: null as any },
          order: [['createdAt', 'ASC']],
        });

        return {
          id: q.id,
          question: q.question,
          answers: answers.map((a) => ({
            id: a.id,
            answer: a.answer,
            // do NOT expose isCorrect to client
          })),
        };
      })
    );

    return {
      id: quiz.id,
      title: quiz.title,
      description: quiz.description,
      durationSec: quiz.durationSec,
      questions: questionsWithAnswers,
    };
  }

  /**
   * Submit quiz answers.
   * Single-attempt enforcement: kalau ada StudentSessionProgress record untuk quiz (same studentId + quizId + type='QUIZ' and completed), reject.
   * We store score + timestampSubmitted + create/replace ProgressQuestionAnswers.
   *
   * answers: [{ question_id, answer_id }]
   */
  async submitQuiz(userId: string, quizId: string, answers: Array<{ question_id: string; answer_id: string }>) {
    // validation basic
    if (!Array.isArray(answers)) throw new Error('Answers must be array');

    // check quiz exist
    const quiz = await Quizzes.findOne({ where: { id: quizId, deletedAt: null as any } });
    if (!quiz) throw new Error('Quiz not found');

    // try find existing progress row for this user+quiz
    let progress = await StudentSessionProgress.findOne({
      where: {
        studentId: userId,
        quizId: quizId,
        type: 'QUIZ',
        deletedAt: null as any,
      } as any,
    });

    if (progress && progress.status === 'COMPLETED') {
      throw new Error('You have already submitted this quiz');
    }

    // if no progress, create one
    if (!progress) {
      progress = await StudentSessionProgress.create({
        id: uuidv4(),
        studentId: userId,
        sessionId: quiz.sessionId, // keep relation if needed
        subjectId: (quiz as any).subjectId || null,
        type: 'QUIZ',
        status: 'IN_PROGRESS',
        timestampTaken: new Date(),
        quizId: quizId,
        createdAt: new Date(),
        updatedAt: new Date(),
      } as any);
    }

    // remove previous answers for this progress (single attempt semantics)
    await ProgressQuestionAnswers.destroy({
      where: { progressId: progress.id } as any,
    });

    // insert new answers and compute score
    let correctCount = 0;
    let totalQuestions = 0;

    for (const a of answers) {
      totalQuestions++;

      // safe-check: ensure that answer belongs to the question and question belongs to the quiz
      const question = await QuizzesQuestions.findOne({ where: { id: a.question_id, deletedAt: null as any } });
      if (!question) {
        // skip invalid question (could also throw)
        continue;
      }

      // check that question belongs to this quiz
      if ((question as any).quizId !== quizId) {
        continue;
      }

      const answerRec = await QuizzesAnswers.findOne({ where: { id: a.answer_id, questionId: a.question_id, deletedAt: null as any } });
      const isCorrect = !!(answerRec && answerRec.isCorrect);

      if (isCorrect) correctCount++;

      // persist answer link
      await ProgressQuestionAnswers.create({
        id: uuidv4(),
        questionId: a.question_id,
        answerId: a.answer_id,
        progressId: progress.id,
      } as any);
    }

    const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

    // finalize progress
    await progress.update({
      score,
      status: 'COMPLETED',
      timestampSubmitted: new Date(),
      updatedAt: new Date(),
    } as any);

    return {
      progressId: progress.id,
      score,
      correctAnswers: correctCount,
      totalQuestions,
    };
  }

  /**
   * Ambil result (summary) untuk user pada quiz (single-attempt)
   */
  async getQuizResult(userId: string, quizId: string) {
    const progress = await StudentSessionProgress.findOne({
      where: {
        studentId: userId,
        quizId,
        type: 'QUIZ',
        deletedAt: null as any,
      } as any,
    });

    if (!progress) throw new Error('Result not found');

    // collect answers
    const answers = await ProgressQuestionAnswers.findAll({
      where: { progressId: progress.id } as any,
    });

    // map detail per question
    const detail = await Promise.all(
      answers.map(async (a) => {
        const question = await QuizzesQuestions.findOne({ where: { id: a.questionId } });
        const answer = await QuizzesAnswers.findOne({ where: { id: a.answerId } });
        return {
          question_id: a.questionId,
          question: question ? (question as any).question : null,
          answer_id: a.answerId,
          answer: answer ? (answer as any).answer : null,
          isCorrect: answer ? (answer as any).isCorrect : false,
        };
      })
    );

    return {
      progressId: progress.id,
      score: progress.score,
      submittedAt: progress.timestampSubmitted,
      details: detail,
    };
  }
}
