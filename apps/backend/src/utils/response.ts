import { Response } from 'express';

interface SuccessResponseData {
  message: string;
  data?: any;
}

interface ErrorResponseData {
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
    message,
  };

  if (error !== undefined) {
    response.error = error;
  }

  return res.status(statusCode).json(response);
};
