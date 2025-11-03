import { Request, Response } from 'express';
import { DashboardService } from '../services/dashboard.service';
import { successResponse, errorResponse } from '../utils/response';

const dashboardService = new DashboardService();

export class DashboardController {
  async getDashboardData(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const data = await dashboardService.getDashboardData(userId);
      return successResponse(res, 'Dashboard data retrieved successfully', data);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve dashboard data', 500, error.message);
    }
  }
}
