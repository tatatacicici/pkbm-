import { Request, Response } from 'express';
import { QuizService } from '../services/study/quiz.service';
import { successResponse, errorResponse } from '../utils/response';

const quizService = new QuizService();

export class QuizController {
  async takeQuiz(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const result = await quizService.takeQuiz(id);
      return successResponse(res, 'Quiz retrieved', result);
    } catch (err: any) {
      return errorResponse(res, err.message || 'Failed', 400, err.message);
    }
  }

  async submitQuiz(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;
      const { answers } = req.body;

      if (!userId) return errorResponse(res, 'Unauthorized', 401);

      const out = await quizService.submitQuiz(userId, id, answers);
      return successResponse(res, 'Quiz submitted', out);
    } catch (err: any) {
      // hide internal details in production
      return errorResponse(res, err.message || 'Failed to submit', 400, err.message);
    }
  }

  async getQuizResult(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;

      if (!userId) return errorResponse(res, 'Unauthorized', 401);

      const result = await quizService.getQuizResult(userId, id);
      return successResponse(res, 'Quiz result', result);
    } catch (err: any) {
      return errorResponse(res, err.message || 'Failed', 404, err.message);
    }
  }
}
