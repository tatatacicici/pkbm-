import { Response } from 'express';

interface SuccessResponseData {
  success: boolean;
  message: string;
  data?: any;
}

interface ErrorResponseData {
  success: boolean;
  message: string;
  error?: any;
}

export const successResponse = (
  res: Response,
  message: string,
  data?: any,
  statusCode: number = 200
) => {
  const response: SuccessResponseData = {
    success: true,
    message,
  };

  if (data !== undefined) {
    response.data = data;
  }

  return res.status(statusCode).json(response);
};

export const errorResponse = (
  res: Response,
  message: string,
  statusCode: number = 500,
  error?: any
) => {
  const response: ErrorResponseData = {
    success: false,
    message,
  };

  if (error !== undefined) {
    response.error = error;
  }

  return res.status(statusCode).json(response);
};
