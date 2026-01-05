import { Request, Response } from 'express';
import { MyStudyService } from '../services/study/mystudy.service';
import { QuizService } from '../services/study/quiz.service';
import { AssignmentsService } from '../services/study/assignments.service';
import { successResponse, errorResponse } from '../utils/response';

type AuthedRequest = Request & { user: { id: string } };

const myStudyService = new MyStudyService();
const quizService = new QuizService();
const assignmentsService = new AssignmentsService();

export class MyStudyController {
  // Health check (FROM APPS)
  async ping(req: Request, res: Response): Promise<Response> {
    try {
      return successResponse(res, 'Studi-ku API is up');
    } catch (error: any) {
      return errorResponse(res, 'Ping failed', 500, error.message);
    }
  }

  // FROM APPS - refactored
  async getMyStudy(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const data = await myStudyService.getMyStudy(userId);
      return successResponse(res, 'My study data retrieved', data);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to retrieve my study data',
        500,
        error.message
      );
    }
  }

  async getMyStudyV2(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const data = await myStudyService.getMyStudyV2(userId);
      return successResponse(res, 'My study data (v2) retrieved', data);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve my study v2', 500, error.message);
    }
  }

  async getSubjectSessions(
    req: AuthedRequest,
    res: Response
  ): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { subject_id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      if (!subject_id) {
        return errorResponse(res, 'Subject ID is required', 400);
      }

      const data = await myStudyService.getSubjectSessions(userId, subject_id);
      return successResponse(res, 'Subject sessions retrieved', data);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to retrieve subject sessions',
        500,
        error.message
      );
    }
  }

  async getModules(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { subject_id, session_id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const data = await myStudyService.getModules(userId, session_id);
      return successResponse(res, 'Modules retrieved', data);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve modules', 500, error.message);
    }
  }

  async getModuleContent(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { module_id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const data = await myStudyService.getModuleContent(userId, module_id);
      return successResponse(res, 'Module content retrieved', data);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to retrieve module content',
        500,
        error.message
      );
    }
  }

  async submitModuleResume(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const result = await myStudyService.submitModuleResume(userId, id);
      return successResponse(res, 'Module resume submitted', result);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to submit module resume',
        500,
        error.message
      );
    }
  }

  // QUIZ METHODS
  async getQuizzes(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { session_id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const data = await quizService.getQuizzes(session_id);
      return successResponse(res, 'Quizzes retrieved', data);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve quizzes', 500, error.message);
    }
  }

  async getQuizDetail(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const data = await quizService.getQuizDetail(id);
      return successResponse(res, 'Quiz detail retrieved', data);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to retrieve quiz detail',
        500,
        error.message
      );
    }
  }

  async takeQuiz(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const result = await quizService.takeQuiz(userId, id);
      return successResponse(res, 'Quiz retrieved', result);
    } catch (error: any) {
      return errorResponse(res, error.message || 'Failed', 400, error.message);
    }
  }

  async submitQuiz(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { id } = req.params;
      const { answers } = req.body;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const result = await quizService.submitQuiz(userId, id, answers);
      return successResponse(res, 'Quiz submitted successfully', result);
    } catch (error: any) {
      return errorResponse(
        res,
        error.message || 'Failed to submit quiz',
        400,
        error.message
      );
    }
  }

  async getQuizResult(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const result = await quizService.getQuizResult(userId, id);
      return successResponse(res, 'Quiz result retrieved', result);
    } catch (error: any) {
      return errorResponse(
        res,
        error.message || 'Failed to get result',
        404,
        error.message
      );
    }
  }

  async getQuizHistory(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const data = await quizService.getQuizHistory(userId);
      return successResponse(res, 'Quiz history retrieved', data);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to retrieve quiz history',
        500,
        error.message
      );
    }
  }

  // ASSIGNMENT METHODS
  async getAssignments(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { session_id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const data = await assignmentsService.getAssignments(userId, session_id);
      return successResponse(res, 'Assignments retrieved', data);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to retrieve assignments',
        500,
        error.message
      );
    }
  }

  async getAssignmentDetail(
    req: AuthedRequest,
    res: Response
  ): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const data = await assignmentsService.getAssignmentDetail(userId, id);
      return successResponse(res, 'Assignment detail retrieved', data);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to retrieve assignment detail',
        500,
        error.message
      );
    }
  }

  async submitAssignment(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { id } = req.params;
      const { submission_text, file_urls } = req.body;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      const result = await assignmentsService.submitAssignment(
        userId,
        id,
        submission_text,
        file_urls
      );
      return successResponse(res, 'Assignment submitted successfully', result);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to submit assignment',
        500,
        error.message
      );
    }
  }

  async deleteAssignmentFile(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { submission_id, file_index } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      await assignmentsService.deleteAssignmentFile(
        userId,
        submission_id,
        parseInt(file_index)
      );
      return successResponse(res, 'Assignment file deleted', null);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to delete assignment file',
        500,
        error.message
      );
    }
  }

  async markVideoWatched(req: AuthedRequest, res: Response): Promise<Response> {
    try {
      const userId = req.user?.id;
      const { module_id } = req.params;

      if (!userId) {
        return errorResponse(res, 'Unauthorized', 401);
      }

      await myStudyService.markVideoWatched(userId, module_id);
      return successResponse(res, 'Video marked as watched', null);
    } catch (error: any) {
      return errorResponse(
        res,
        'Failed to mark video as watched',
        500,
        error.message
      );
    }
  }
}
