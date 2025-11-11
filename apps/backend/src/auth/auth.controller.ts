import { Request, Response } from 'express';
import { AuthService } from './auth.service';
import { successResponse, errorResponse } from '../utils/response';

const authService = new AuthService();

export class AuthController {
  async register(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password, fullName, phoneNumber, userName } = req.body;

      if (!email || !password || !fullName) {
        return errorResponse(res, 'Email, password, and full name are required', 400);
      }

      const result = await authService.register({ email, password, fullName, phoneNumber, userName });

      return successResponse(res, 'Registration successful', result, 201);
    } catch (error: any) {
      return errorResponse(res, 'Registration failed', 500, error.message);
    }
  }

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

  async logout(req: Request, res: Response): Promise<Response> {
    try {
      return successResponse(res, 'Logout successful');
    } catch (error: any) {
      return errorResponse(res, 'Logout failed', 500, error.message);
    }
  }

  async refreshToken(req: Request, res: Response): Promise<Response> {
    try {
      const { refreshToken } = req.body;
      
      if (!refreshToken) {
        return errorResponse(res, 'Refresh token is required', 400);
      }

      const result = await authService.refreshToken(refreshToken);
      return successResponse(res, 'Token refreshed successfully', result);
    } catch (error: any) {
      return errorResponse(res, 'Token refresh failed', 401, error.message);
    }
  }

  async changePassword(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { oldPassword, newPassword } = req.body;

      if (!oldPassword || !newPassword) {
        return errorResponse(res, 'Old password and new password are required', 400);
      }

      await authService.changePassword(userId, oldPassword, newPassword);
      return successResponse(res, 'Password changed successfully');
    } catch (error: any) {
      return errorResponse(res, 'Password change failed', 500, error.message);
    }
  }

  async resetPasswordRequest(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body;

      if (!email) {
        return errorResponse(res, 'Email is required', 400);
      }

      await authService.resetPasswordRequest(email);
      return successResponse(res, 'Password reset email sent successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to send password reset email', 500, error.message);
    }
  }

  async resetPasswordVerify(req: Request, res: Response): Promise<Response> {
    try {
      const { email, otp } = req.body;

      if (!email || !otp) {
        return errorResponse(res, 'Email and OTP are required', 400);
      }

      const result = await authService.verifyOtp(email, otp);
      return successResponse(res, 'OTP verified successfully', result);
    } catch (error: any) {
      return errorResponse(res, 'OTP verification failed', 400, error.message);
    }
  }

  async resetPassword(req: Request, res: Response): Promise<Response> {
    try {
      const { email, otp, newPassword } = req.body;

      if (!email || !otp || !newPassword) {
        return errorResponse(res, 'Email, OTP, and new password are required', 400);
      }

      await authService.resetPassword(email, otp, newPassword);
      return successResponse(res, 'Password reset successfully');
    } catch (error: any) {
      return errorResponse(res, 'Password reset failed', 500, error.message);
    }
  }

  async emailVerificationRequest(req: Request, res: Response): Promise<Response> {
    try {
      const { email } = req.body;

      if (!email) {
        return errorResponse(res, 'Email is required', 400);
      }

      await authService.sendEmailVerification(email);
      return successResponse(res, 'Verification email sent successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to send verification email', 500, error.message);
    }
  }

  async emailVerificationVerify(req: Request, res: Response): Promise<Response> {
    try {
      const { email, otp } = req.body;

      if (!email || !otp) {
        return errorResponse(res, 'Email and OTP are required', 400);
      }

      await authService.verifyEmail(email, otp);
      return successResponse(res, 'Email verified successfully');
    } catch (error: any) {
      return errorResponse(res, 'Email verification failed', 400, error.message);
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
