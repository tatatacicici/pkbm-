import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '../utils/response';

interface CustomError extends Error {
  statusCode?: number;
  status?: number;
}

export const errorHandler = (
  err: CustomError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const statusCode = err.statusCode || err.status || 500;
  const message = err.message || 'Internal Server Error';

  console.error(`[ERROR] ${req.method} ${req.path} - ${message}`);
  console.error(err.stack);

  return errorResponse(res, message, statusCode);
};

export const notFoundHandler = (req: Request, res: Response) => {
  return errorResponse(res, `Route ${req.originalUrl} not found`, 404);
};
