import { Request, Response } from 'express';
import { FacultyService } from '../services/faculty.service';
import { successResponse, errorResponse } from '../utils/response';

const facultyService = new FacultyService();

export class FacultyController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const faculties = await facultyService.getAllFaculties();
      return successResponse(res, 'Faculties retrieved successfully', faculties);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve faculties', 500, error.message);
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const faculty = await facultyService.getFacultyById(id);
      
      if (!faculty) {
        return errorResponse(res, 'Faculty not found', 404);
      }

      return successResponse(res, 'Faculty retrieved successfully', faculty);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve faculty', 500, error.message);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const faculty = await facultyService.createFaculty(req.body);
      return successResponse(res, 'Faculty created successfully', faculty, 201);
    } catch (error: any) {
      return errorResponse(res, 'Failed to create faculty', 500, error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const faculty = await facultyService.updateFaculty(id, req.body);
      return successResponse(res, 'Faculty updated successfully', faculty);
    } catch (error: any) {
      return errorResponse(res, 'Failed to update faculty', 500, error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await facultyService.deleteFaculty(id);
      return successResponse(res, 'Faculty deleted successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to delete faculty', 500, error.message);
    }
  }
}
