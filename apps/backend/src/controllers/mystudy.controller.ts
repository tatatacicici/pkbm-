import { Request, Response } from 'express';
import { MyStudyService } from '../services/study/myStudy.service';
import { successResponse, errorResponse } from '../utils/response';

const myStudyService = new MyStudyService();

export class MyStudyController {
  async getMyStudy(req: Request & { userId?: string }, res: Response) {
    try {
      const userId = req.userId!;
      const data = await myStudyService.getMyStudy(userId);
      return successResponse(res, 'OK', data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      return errorResponse(res, 'Error', 500, message);
    }
  }

  async getMyStudyV2(req: Request & { userId?: string }, res: Response) {
    try {
      const userId = req.userId!;
      const subjects = await myStudyService.getMyStudy(userId);
      const stats = await myStudyService.getMyStudyStats(userId);

      return successResponse(res, 'OK', { subjects, stats });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      return errorResponse(res, 'Error', 500, message);
    }
  }
}
