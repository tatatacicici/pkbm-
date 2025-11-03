import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { successResponse, errorResponse } from '../utils/response';

const authService = new AuthService();

export class AuthController {
  async login(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return errorResponse(res, 'Email and password are required', 400);
      }

      const result = await authService.login(email, password);

      return successResponse(res, 'Login successful', result, 200);
    } catch (error: any) {
      if (error.message === 'Invalid credentials' || error.message === 'User has no password set') {
        return errorResponse(res, error.message, 401);
      }
      return errorResponse(res, 'Login failed', 500, error.message);
    }
  }

  async getProfile(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const user = await authService.getUserById(userId);

      if (!user) {
        return errorResponse(res, 'User not found', 404);
      }

      return successResponse(res, 'Profile retrieved successfully', { user }, 200);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve profile', 500, error.message);
    }
  }
}
