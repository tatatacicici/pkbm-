import { Request, Response, NextFunction } from 'express';
import { AuthService } from './auth.service';
import { errorResponse } from '../utils/response';

const authService = new AuthService();

export const authMiddleware = (req: Request, res: Response, next: NextFunction): void => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      errorResponse(res, 'Authorization token required', 401);
      return;
    }

    const token = authHeader.substring(7);

    const decoded = authService.verifyToken(token);

    (req as any).userId = decoded.userId;
    (req as any).userEmail = decoded.email;

    next();
  } catch (error: any) {
    errorResponse(res, 'Invalid or expired token', 401, error.message);
  }
};
