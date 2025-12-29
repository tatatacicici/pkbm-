import {Request, Response} from 'express';
import {ScoreService} from '../services/score.services';
import {successResponse, errorResponse} from '../utils/response';

const scoreService = new ScoreService();

type AuthedRequest = Request & { user: { id: string } };

export class ScoreController {
    async getMyScores(req: AuthedRequest, res: Response) {
        try{
            const userId = req.user.id;
            if (!userId){
                return errorResponse(res, 401, 'Unauthorized');
            }

            const data = await scoreService.getSubjectScores(userId);
            return successResponse(res, 200, 'Scores retrieved successfully', data);
        } catch (err: unknown){
            const message = err instanceof Error ? err.message : 'Internal Server Error';
            return errorResponse(res, 'Failed to retrieve scores', 500, message);'';
        }
    }
async getSubjectScore(req: AuthedRequest, res: Response) {
    try {
      const userId = req.userId;
      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const { subject_id } = req.params;

      const data = await scoreService.getSubjectScoreDetail(
        userId,
        subject_id,
      );
      return successResponse(res, 'Subject score retrieved', data);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      return errorResponse(res, 'Failed to get subject score', 500, message);
    }
  }

  async checkCertificateEligibility(req: AuthedRequest, res: Response) {
    try {
      const userId = req.userId;
      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const data = await scoreService.checkCertificateEligibility(userId);
      return successResponse(
        res,
        'Certificate eligibility checked',
        data,
      );
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : 'Unknown error';
      return errorResponse(
        res,
        'Failed to check certificate eligibility',
        500,
        message,
      );
    }
  }
}
