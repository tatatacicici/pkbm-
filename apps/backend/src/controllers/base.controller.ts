import { Request, Response } from 'express';
import { successResponse } from '../utils/response';

export class BaseController {
  public ping = async (req: Request, res: Response) => {
    return successResponse(res, 'pong');
  };
}
