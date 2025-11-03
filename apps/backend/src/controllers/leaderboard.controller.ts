import { Request, Response } from 'express';
import { LeaderboardService } from '../services/leaderboard.service';
import { successResponse, errorResponse } from '../utils/response';

const leaderboardService = new LeaderboardService();

export class LeaderboardController {
  async getGlobal(req: Request, res: Response): Promise<Response> {
    try {
      const { page = 1, limit = 10 } = req.query;
      const leaderboard = await leaderboardService.getGlobalLeaderboard({
        page: Number(page),
        limit: Number(limit),
      });
      return successResponse(res, 'Global leaderboard retrieved successfully', leaderboard);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve global leaderboard', 500, error.message);
    }
  }

  async getByFaculty(req: Request, res: Response): Promise<Response> {
    try {
      const { facultyId } = req.params;
      const { page = 1, limit = 10 } = req.query;
      const leaderboard = await leaderboardService.getFacultyLeaderboard(facultyId, {
        page: Number(page),
        limit: Number(limit),
      });
      return successResponse(res, 'Faculty leaderboard retrieved successfully', leaderboard);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve faculty leaderboard', 500, error.message);
    }
  }

  async getByMajor(req: Request, res: Response): Promise<Response> {
    try {
      const { majorId } = req.params;
      const { page = 1, limit = 10 } = req.query;
      const leaderboard = await leaderboardService.getMajorLeaderboard(majorId, {
        page: Number(page),
        limit: Number(limit),
      });
      return successResponse(res, 'Major leaderboard retrieved successfully', leaderboard);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve major leaderboard', 500, error.message);
    }
  }

  async getBySemester(req: Request, res: Response): Promise<Response> {
    try {
      const { semesterId } = req.params;
      const { page = 1, limit = 10 } = req.query;
      const leaderboard = await leaderboardService.getSemesterLeaderboard(semesterId, {
        page: Number(page),
        limit: Number(limit),
      });
      return successResponse(res, 'Semester leaderboard retrieved successfully', leaderboard);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve semester leaderboard', 500, error.message);
    }
  }
}
