import { Request, Response } from 'express';
import { NotificationService } from '../services/notification.service';
import { successResponse, errorResponse } from '../utils/response';

const notificationService = new NotificationService();

export class NotificationController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { page = 1, limit = 20 } = req.query;
      const notifications = await notificationService.getNotifications(userId, {
        page: Number(page),
        limit: Number(limit),
      });
      
      return successResponse(res, 'Notifications retrieved successfully', notifications);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve notifications', 500, error.message);
    }
  }

  async markAsRead(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await notificationService.markAsRead(id);
      return successResponse(res, 'Notification marked as read');
    } catch (error: any) {
      return errorResponse(res, 'Failed to mark notification as read', 500, error.message);
    }
  }

  async markAllAsRead(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      await notificationService.markAllAsRead(userId);
      return successResponse(res, 'All notifications marked as read');
    } catch (error: any) {
      return errorResponse(res, 'Failed to mark all notifications as read', 500, error.message);
    }
  }
}
