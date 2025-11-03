import { Request, Response } from 'express';
import { MajorService } from '../services/major.service';
import { successResponse, errorResponse } from '../utils/response';

const majorService = new MajorService();

export class MajorController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { facultyId } = req.query;
      const majors = await majorService.getAllMajors(facultyId as string);
      return successResponse(res, 'Majors retrieved successfully', majors);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve majors', 500, error.message);
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const major = await majorService.getMajorById(id);
      
      if (!major) {
        return errorResponse(res, 'Major not found', 404);
      }

      return successResponse(res, 'Major retrieved successfully', major);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve major', 500, error.message);
    }
  }

  async enrollStudent(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { majorId } = req.body;
      const result = await majorService.enrollStudent(userId, majorId);
      return successResponse(res, 'Successfully enrolled to major', result);
    } catch (error: any) {
      return errorResponse(res, 'Failed to enroll to major', 500, error.message);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const major = await majorService.createMajor(req.body);
      return successResponse(res, 'Major created successfully', major, 201);
    } catch (error: any) {
      return errorResponse(res, 'Failed to create major', 500, error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const major = await majorService.updateMajor(id, req.body);
      return successResponse(res, 'Major updated successfully', major);
    } catch (error: any) {
      return errorResponse(res, 'Failed to update major', 500, error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await majorService.deleteMajor(id);
      return successResponse(res, 'Major deleted successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to delete major', 500, error.message);
    }
  }
}
