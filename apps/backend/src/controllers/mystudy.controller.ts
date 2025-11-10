import { Request, Response } from 'express';
import { successResponse, errorResponse } from '../utils/response';
import { sequelize } from '../models';
import { QueryTypes } from 'sequelize';

export class MyStudyController {
  async getMyStudy(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;

      const userSubjects = await sequelize.query(
        `SELECT 
          s.id, s.title, s.description, s.thumbnail,
          us.progress_percentage, us.enrolled_at, us.completed_at,
          COUNT(DISTINCT sess.id) as total_sessions,
          COUNT(DISTINCT CASE WHEN usp.completed_at IS NOT NULL THEN sess.id END) as completed_sessions
        FROM subjects s
        LEFT JOIN user_subjects us ON s.id = us.subject_id AND us.user_id = $1
        LEFT JOIN sessions sess ON s.id = sess.subject_id
        LEFT JOIN user_module_progress usp ON sess.id IN (
          SELECT session_id FROM modules WHERE id = usp.module_id
        )
        WHERE s.deleted_at IS NULL
        GROUP BY s.id, us.id
        ORDER BY s.created_at DESC`,
        {
          bind: [userId],
          type: QueryTypes.SELECT
        }
      );

      return successResponse(res, 'My study data retrieved successfully', {
        subjects: userSubjects
      });
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve my study data', 500, error.message);
    }
  }

  async getMyStudyV2(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;

      const userSubjects = await sequelize.query(
        `SELECT 
          s.id, s.title, s.description, s.thumbnail,
          us.progress_percentage, us.enrolled_at, us.completed_at,
          COUNT(DISTINCT sess.id) as total_sessions
        FROM subjects s
        LEFT JOIN user_subjects us ON s.id = us.subject_id AND us.user_id = $1
        LEFT JOIN sessions sess ON s.id = sess.subject_id AND sess.deleted_at IS NULL
        WHERE s.deleted_at IS NULL
        GROUP BY s.id, us.id
        ORDER BY s.created_at DESC`,
        {
          bind: [userId],
          type: QueryTypes.SELECT
        }
      );

      return successResponse(res, 'My study data retrieved successfully', {
        subjects: userSubjects,
        stats: {
          total_subjects: userSubjects.length,
          enrolled_subjects: userSubjects.filter((s: any) => s.enrolled_at).length,
          completed_subjects: userSubjects.filter((s: any) => s.completed_at).length
        }
      });
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve my study data', 500, error.message);
    }
  }

  async getSubjectSessions(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { subject_id } = req.params;

      const sessions = await sequelize.query(
        `SELECT 
          s.id, s.title, s.description, s.order_number,
          COUNT(DISTINCT m.id) as total_modules,
          COUNT(DISTINCT q.id) as total_quizzes,
          COUNT(DISTINCT a.id) as total_assignments,
          COUNT(DISTINCT CASE WHEN ump.completed_at IS NOT NULL THEN m.id END) as completed_modules
        FROM sessions s
        LEFT JOIN modules m ON s.id = m.session_id AND m.deleted_at IS NULL
        LEFT JOIN quizzes q ON s.id = q.session_id AND q.deleted_at IS NULL
        LEFT JOIN assignments a ON s.id = a.session_id AND a.deleted_at IS NULL
        LEFT JOIN user_module_progress ump ON m.id = ump.module_id AND ump.user_id = $1
        WHERE s.subject_id = $2 AND s.deleted_at IS NULL
        GROUP BY s.id
        ORDER BY s.order_number ASC`,
        {
          bind: [userId, subject_id],
          type: QueryTypes.SELECT
        }
      );

      return successResponse(res, 'Subject sessions retrieved successfully', {
        sessions
      });
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve subject sessions', 500, error.message);
    }
  }

  async getModules(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { session_id } = req.params;

      const modules = await sequelize.query(
        `SELECT 
          m.id, m.title, m.content, m.video_url, m.order_number,
          ump.completed_at, ump.resume_text
        FROM modules m
        LEFT JOIN user_module_progress ump ON m.id = ump.module_id AND ump.user_id = $1
        WHERE m.session_id = $2 AND m.deleted_at IS NULL
        ORDER BY m.order_number ASC`,
        {
          bind: [userId, session_id],
          type: QueryTypes.SELECT
        }
      );

      return successResponse(res, 'Modules retrieved successfully', {
        modules
      });
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve modules', 500, error.message);
    }
  }

  async getModuleContent(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { module_id } = req.params;

      const module = await sequelize.query(
        `SELECT 
          m.id, m.title, m.content, m.video_url, m.order_number,
          ump.completed_at, ump.resume_text
        FROM modules m
        LEFT JOIN user_module_progress ump ON m.id = ump.module_id AND ump.user_id = $1
        WHERE m.id = $2 AND m.deleted_at IS NULL`,
        {
          bind: [userId, module_id],
          type: QueryTypes.SELECT
        }
      );

      if (!module || module.length === 0) {
        return errorResponse(res, 'Module not found', 404);
      }

      return successResponse(res, 'Module content retrieved successfully', module[0]);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve module content', 500, error.message);
    }
  }

  async submitModuleResume(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;
      const { resume_text } = req.body;

      await sequelize.query(
        `INSERT INTO user_module_progress (user_id, module_id, resume_text, completed_at)
        VALUES ($1, $2, $3, NOW())
        ON CONFLICT (user_id, module_id) 
        DO UPDATE SET resume_text = $3, completed_at = NOW(), updated_at = NOW()`,
        {
          bind: [userId, id, resume_text]
        }
      );

      return successResponse(res, 'Module resume submitted successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to submit module resume', 500, error.message);
    }
  }

  async getQuizzes(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { session_id } = req.params;

      const quizzes = await sequelize.query(
        `SELECT 
          q.id, q.title, q.description, q.duration_minutes, q.passing_score, q.order_number,
          COUNT(qq.id) as total_questions,
          MAX(uqa.score) as best_score,
          COUNT(DISTINCT uqa.id) as total_attempts
        FROM quizzes q
        LEFT JOIN quiz_questions qq ON q.id = qq.quiz_id AND qq.deleted_at IS NULL
        LEFT JOIN user_quiz_attempts uqa ON q.id = uqa.quiz_id AND uqa.user_id = $1
        WHERE q.session_id = $2 AND q.deleted_at IS NULL
        GROUP BY q.id
        ORDER BY q.order_number ASC`,
        {
          bind: [userId, session_id],
          type: QueryTypes.SELECT
        }
      );

      return successResponse(res, 'Quizzes retrieved successfully', {
        quizzes
      });
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve quizzes', 500, error.message);
    }
  }

  async getQuizDetail(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;

      const quiz = await sequelize.query(
        `SELECT 
          q.id, q.title, q.description, q.duration_minutes, q.passing_score,
          COUNT(qq.id) as total_questions,
          MAX(uqa.score) as best_score,
          COUNT(DISTINCT uqa.id) as total_attempts
        FROM quizzes q
        LEFT JOIN quiz_questions qq ON q.id = qq.quiz_id AND qq.deleted_at IS NULL
        LEFT JOIN user_quiz_attempts uqa ON q.id = uqa.quiz_id AND uqa.user_id = $1
        WHERE q.id = $2 AND q.deleted_at IS NULL
        GROUP BY q.id`,
        {
          bind: [userId, id],
          type: QueryTypes.SELECT
        }
      );

      if (!quiz || quiz.length === 0) {
        return errorResponse(res, 'Quiz not found', 404);
      }

      return successResponse(res, 'Quiz detail retrieved successfully', quiz[0]);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve quiz detail', 500, error.message);
    }
  }

  async takeQuiz(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params;

      const quiz = await sequelize.query(
        `SELECT 
          q.id, q.title, q.description, q.duration_minutes,
          json_agg(
            json_build_object(
              'id', qq.id,
              'question', qq.question,
              'order_number', qq.order_number,
              'answers', (
                SELECT json_agg(
                  json_build_object(
                    'id', qa.id,
                    'answer_text', qa.answer_text,
                    'order_number', qa.order_number
                  ) ORDER BY qa.order_number
                )
                FROM quiz_answers qa
                WHERE qa.question_id = qq.id AND qa.deleted_at IS NULL
              )
            ) ORDER BY qq.order_number
          ) as questions
        FROM quizzes q
        LEFT JOIN quiz_questions qq ON q.id = qq.quiz_id AND qq.deleted_at IS NULL
        WHERE q.id = $1 AND q.deleted_at IS NULL
        GROUP BY q.id`,
        {
          bind: [id],
          type: QueryTypes.SELECT
        }
      );

      if (!quiz || quiz.length === 0) {
        return errorResponse(res, 'Quiz not found', 404);
      }

      return successResponse(res, 'Quiz retrieved successfully', quiz[0]);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve quiz', 500, error.message);
    }
  }

  async submitQuiz(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;
      const { answers } = req.body;

      const attemptId = await sequelize.query(
        `INSERT INTO user_quiz_attempts (user_id, quiz_id, started_at)
        VALUES ($1, $2, NOW())
        RETURNING id`,
        {
          bind: [userId, id],
          type: QueryTypes.INSERT
        }
      );

      const attemptUuid = (attemptId[0] as any)[0].id;

      let correctCount = 0;
      let totalQuestions = 0;

      for (const answer of answers) {
        const correctAnswer = await sequelize.query(
          `SELECT id, is_correct FROM quiz_answers WHERE id = $1 AND deleted_at IS NULL`,
          {
            bind: [answer.answer_id],
            type: QueryTypes.SELECT
          }
        );

        const isCorrect = correctAnswer.length > 0 && (correctAnswer[0] as any).is_correct;
        
        await sequelize.query(
          `INSERT INTO user_quiz_answers (attempt_id, question_id, answer_id, is_correct)
          VALUES ($1, $2, $3, $4)`,
          {
            bind: [attemptUuid, answer.question_id, answer.answer_id, isCorrect]
          }
        );

        if (isCorrect) correctCount++;
        totalQuestions++;
      }

      const score = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;

      await sequelize.query(
        `UPDATE user_quiz_attempts 
        SET score = $1, correct_answers = $2, total_questions = $3, completed_at = NOW()
        WHERE id = $4`,
        {
          bind: [score, correctCount, totalQuestions, attemptUuid]
        }
      );

      return successResponse(res, 'Quiz submitted successfully', {
        attempt_id: attemptUuid,
        score,
        correct_answers: correctCount,
        total_questions: totalQuestions
      });
    } catch (error: any) {
      return errorResponse(res, 'Failed to submit quiz', 500, error.message);
    }
  }

  async getQuizResult(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;

      const result = await sequelize.query(
        `SELECT 
          uqa.id, uqa.score, uqa.correct_answers, uqa.total_questions, uqa.completed_at,
          q.title, q.passing_score
        FROM user_quiz_attempts uqa
        JOIN quizzes q ON uqa.quiz_id = q.id
        WHERE uqa.id = $1 AND uqa.user_id = $2`,
        {
          bind: [id, userId],
          type: QueryTypes.SELECT
        }
      );

      if (!result || result.length === 0) {
        return errorResponse(res, 'Quiz result not found', 404);
      }

      return successResponse(res, 'Quiz result retrieved successfully', result[0]);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve quiz result', 500, error.message);
    }
  }

  async getQuizHistory(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;

      const history = await sequelize.query(
        `SELECT 
          uqa.id, uqa.score, uqa.correct_answers, uqa.total_questions, 
          uqa.started_at, uqa.completed_at
        FROM user_quiz_attempts uqa
        WHERE uqa.quiz_id = $1 AND uqa.user_id = $2
        ORDER BY uqa.started_at DESC`,
        {
          bind: [id, userId],
          type: QueryTypes.SELECT
        }
      );

      return successResponse(res, 'Quiz history retrieved successfully', {
        attempts: history
      });
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve quiz history', 500, error.message);
    }
  }

  async getAssignments(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { session_id } = req.params;

      const assignments = await sequelize.query(
        `SELECT 
          a.id, a.title, a.description, a.due_date, a.max_score, a.order_number,
          uas.score, uas.submitted_at, uas.graded_at, uas.teacher_comment
        FROM assignments a
        LEFT JOIN user_assignment_submissions uas ON a.id = uas.assignment_id AND uas.user_id = $1
        WHERE a.session_id = $2 AND a.deleted_at IS NULL
        ORDER BY a.order_number ASC`,
        {
          bind: [userId, session_id],
          type: QueryTypes.SELECT
        }
      );

      return successResponse(res, 'Assignments retrieved successfully', {
        assignments
      });
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve assignments', 500, error.message);
    }
  }

  async getAssignmentDetail(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;

      const assignment = await sequelize.query(
        `SELECT 
          a.id, a.title, a.description, a.due_date, a.max_score,
          uas.submission_text, uas.file_urls, uas.score, uas.submitted_at, 
          uas.graded_at, uas.teacher_comment
        FROM assignments a
        LEFT JOIN user_assignment_submissions uas ON a.id = uas.assignment_id AND uas.user_id = $1
        WHERE a.id = $2 AND a.deleted_at IS NULL`,
        {
          bind: [userId, id],
          type: QueryTypes.SELECT
        }
      );

      if (!assignment || assignment.length === 0) {
        return errorResponse(res, 'Assignment not found', 404);
      }

      return successResponse(res, 'Assignment detail retrieved successfully', assignment[0]);
    } catch (error: any) {
      return errorResponse(res, 'Failed to retrieve assignment detail', 500, error.message);
    }
  }

  async submitAssignment(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { assignment_id } = req.params;
      const { submission_text, file_urls } = req.body;

      await sequelize.query(
        `INSERT INTO user_assignment_submissions (user_id, assignment_id, submission_text, file_urls, submitted_at)
        VALUES ($1, $2, $3, $4, NOW())
        ON CONFLICT (user_id, assignment_id) 
        DO UPDATE SET submission_text = $3, file_urls = $4, submitted_at = NOW(), updated_at = NOW()
        WHERE user_assignment_submissions.user_id = $1 AND user_assignment_submissions.assignment_id = $2`,
        {
          bind: [userId, assignment_id, submission_text, file_urls ? `{${file_urls.join(',')}}` : null]
        }
      );

      return successResponse(res, 'Assignment submitted successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to submit assignment', 500, error.message);
    }
  }

  async deleteAssignmentFile(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { assignment_id, file_id } = req.params;

      await sequelize.query(
        `UPDATE user_assignment_submissions
        SET file_urls = array_remove(file_urls, $3)
        WHERE user_id = $1 AND assignment_id = $2`,
        {
          bind: [userId, assignment_id, file_id]
        }
      );

      return successResponse(res, 'Assignment file deleted successfully');
    } catch (error: any) {
      return errorResponse(res, 'Failed to delete assignment file', 500, error.message);
    }
  }

  async markVideoWatched(req: Request, res: Response): Promise<Response> {
    try {
      const userId = (req as any).userId;
      const { id } = req.params;

      await sequelize.query(
        `INSERT INTO watched_videos (user_id, video_id)
        VALUES ($1, $2)
        ON CONFLICT (user_id, video_id) DO NOTHING`,
        {
          bind: [userId, id]
        }
      );

      return successResponse(res, 'Video marked as watched');
    } catch (error: any) {
      return errorResponse(res, 'Failed to mark video as watched', 500, error.message);
    }
  }
}
