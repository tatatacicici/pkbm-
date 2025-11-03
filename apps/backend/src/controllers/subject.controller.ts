import { Request, Response } from 'express';
import { SubjectService } from '../services/subject.service';
import { successResponse, errorResponse } from '../utils/response';

const subjectService = new SubjectService();

export class SubjectController {
  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const { page = 1, limit = 10, search, majorId } = req.query;
      const subjects = await subjectService.getAllSubjects({
        page: Number(page),
        limit: Number(limit),
        search: search as string,
        majorId: majorId as string,
      });
      
      return successResponse(res, 'Subjects retrieved successfully', subjects);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve subjects', 500, error.message);
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const subject = await subjectService.getSubjectById(id);
      
      if (!subject) {
        return errorResponse(res, 'Subject not found', 404);
      }

      return successResponse(res, 'Subject retrieved successfully', subject);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve subject', 500, error.message);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const subject = await subjectService.createSubject(req.body);
      return successResponse(res, 'Subject created successfully', subject, 201);
    } catch (error: any) {
      return errorResponse(res, 'Failed to create subject', 500, error.message);
    }
  }

  async update(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      const subject = await subjectService.updateSubject(id, req.body);
      return successResponse(res, 'Subject updated successfully', subject);
    } catch (error: any) {
      return errorResponse(res, 'Failed to update subject', 500, error.message);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;
      await subjectService.deleteSubject(id);
      return successResponse(res, 'Subject deleted successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to delete subject', 500, error.message);
    }
  }
}
