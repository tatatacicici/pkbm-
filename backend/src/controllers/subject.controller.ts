import { Request, Response } from "express";
import { SubjectService } from "../services/study/subject.service";
import { successResponse, errorResponse } from "../utils/response";

const subjectService = new SubjectService();

export class SubjectController {
  async getAll(req: Request, res: Response) {
    try {
      const data = await subjectService.getAll();
      return successResponse(res, "Subjects retrieved", data);
    } catch (err: any) {
      return errorResponse(res, "Failed", 500, err.message);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await subjectService.getById(id);

      if (!data) return errorResponse(res, "Subject not found", 404);

      return successResponse(res, "Subject retrieved", data);
    } catch (err: any) {
      return errorResponse(res, "Failed", 500, err.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const data = await subjectService.create(req.body);
      return successResponse(res, "Subject created", data);
    } catch (err: any) {
      return errorResponse(res, "Failed", 500, err.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const data = await subjectService.update(id, req.body);
      return successResponse(res, "Subject updated", data);
    } catch (err: any) {
      return errorResponse(res, "Failed", 500, err.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      await subjectService.delete(id);
      return successResponse(res, "Subject deleted", null);
    } catch (err: any) {
      return errorResponse(res, "Failed", 500, err.message);
    }
  }
}
