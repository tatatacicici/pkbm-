import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { successResponse, errorResponse } from '../utils/response';

const userService = new UserService();

export class UserController {
  async getProfile(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const user = await userService.getUserProfile(userId);
      
      if (!user) {
        return errorResponse(res, 'User not found', 404);
      }

      return successResponse(res, 'Profile retrieved successfully', user);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve profile', 500, error.message);
    }
  }

  async getProfileMe(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const user = await userService.getUserProfile(userId);
      
      if (!user) {
        return errorResponse(res, 'User not found', 404);
      }

      return successResponse(res, 'Profile retrieved successfully', user);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve profile', 500, error.message);
    }
  }

  async updateProfile(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const updatedUser = await userService.updateUserProfile(userId, req.body);
      
      return successResponse(res, 'Profile updated successfully', updatedUser);
    } catch (error: any) {
      return errorResponse(res, 'Failed to update profile', 500, error.message);
    }
  }

  async updateAvatar(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { avatar } = req.body;
      
      const updatedUser = await userService.updateUserProfile(userId, { avatar });
      
      return successResponse(res, 'Avatar updated successfully', updatedUser);
    } catch (error: any) {
      return errorResponse(res, 'Failed to update avatar', 500, error.message);
    }
  }

  async completeProfile(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const updatedUser = await userService.updateUserProfile(userId, req.body);
      
      return successResponse(res, 'Profile completed successfully', updatedUser);
    } catch (error: any) {
      return errorResponse(res, 'Failed to complete profile', 500, error.message);
    }
  }
}
