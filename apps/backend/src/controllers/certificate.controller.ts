import { Request, Response } from 'express';
import { CertificateService } from '../services/certificate.service';
import { successResponse, errorResponse } from '../utils/response';

const certificateService = new CertificateService();

export class CertificateController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const certificates = await certificateService.getUserCertificates(userId);
      return successResponse(res, 'Certificates retrieved successfully', certificates);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve certificates', 500, error.message);
    }
  }

  async getSubjectCertificates(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const certificates = await certificateService.getSubjectCertificates(userId);
      return successResponse(res, 'Subject certificates retrieved successfully', certificates);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve subject certificates', 500, error.message);
    }
  }

  async getEventCertificates(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const certificates = await certificateService.getEventCertificates(userId);
      return successResponse(res, 'Event certificates retrieved successfully', certificates);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve event certificates', 500, error.message);
    }
  }
}
