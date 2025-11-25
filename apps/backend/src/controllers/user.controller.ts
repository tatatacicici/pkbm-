import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { successResponse, errorResponse } from '../utils/response';

const userService = new UserService();

export class UserController {
  
  async getProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;
      const user = await userService.getUserProfile(userId);

      if (!user) return errorResponse(res, 'User not found', 404);

      return successResponse(res, 'Profile retrieved successfully', user);
    } catch (err: any) {
      return errorResponse(res, 'Failed to retrieve profile', 500, err.message);
    }
  }


  async getProfileMe(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;

      const user = await userService.getUserProfile(userId);
      const completed = await userService.isProfileCompleted(userId);

      return successResponse(res, 'Profile loaded', {
        ...user,
        isProfileCompleted: completed,
      });
    } catch (err: any) {
      return errorResponse(res, 'Failed to get profile', 500, err.message);
    }
  }

async updateProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;
      const updated = await userService.updateUserProfile(userId, req.body);

      return successResponse(res, 'Profile updated successfully', updated);
    } catch (err: any) {
      return errorResponse(res, 'Failed to update profile', 500, err.message);
    }
  }


async updateAvatar(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;

      if (!req.file) {
        return errorResponse(res, 'No file uploaded', 400);
      }

      const filePath = `/uploads/avatar/${req.file.filename}`;
      const updated = await userService.updateUserProfile(userId, { avatar: filePath });

      return successResponse(res, 'Avatar updated successfully', updated);
    } catch (err: any) {
      return errorResponse(res, 'Failed to upload avatar', 500, err.message);
    }
  }
async completeProfile(req: Request, res: Response) {
    try {
      const userId = (req as any).userId;
      const updated = await userService.updateUserProfile(userId, req.body);

      return successResponse(res, 'Profile completed successfully', updated);
    } catch (err: any) {
      return errorResponse(res, 'Failed to complete profile', 500, err.message);
    }
  }
}
