import { Router, Request, Response } from 'express';
import { MyStudyController } from '../controllers/mystudy.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router: Router = Router();
const myStudyController = new MyStudyController();

// Health check (FROM APPS)
router.get('/v1/studi-ku/ping', (req, res) =>
  myStudyController.ping(req, res)
);

// My Study endpoints
router.get('/v1/studi-ku/user', authMiddleware, (req, res) =>
  myStudyController.getMyStudy(req as any, res)
);

router.get('/v2/my-study', authMiddleware, (req, res) =>
  myStudyController.getMyStudyV2(req as any, res)
);

// Subjects & Sessions
router.get('/v3/my-study/subjects/:subject_id/sessions', authMiddleware, (req, res) =>
  myStudyController.getSubjectSessions(req as any, res)
);

// Modules
router.get(
  '/v2/my-study/subjects/:subject_id/sessions/:session_id/modules',
  authMiddleware,
  (req, res) => myStudyController.getModules(req as any, res)
);

router.get(
  '/v2/my-study/subjects/:subject_id/sessions/:session_id/modules/:module_id',
  authMiddleware,
  (req, res) => myStudyController.getModuleContent(req as any, res)
);

router.post('/v1/studi-ku/module/:id/resume', authMiddleware, (req, res) =>
  myStudyController.submitModuleResume(req as any, res)
);

router.post('/v2/my-study/modules/:module_id/watch', authMiddleware, (req, res) =>
  myStudyController.markVideoWatched(req as any, res)
);

// Quizzes
router.get(
  '/v2/my-study/subjects/:subject_id/sessions/:session_id/quizzes',
  authMiddleware,
  (req, res) => myStudyController.getQuizzes(req as any, res)
);

router.get(
  '/v2/my-study/subjects/:subject_id/sessions/:session_id/quizzes/:id',
  authMiddleware,
  (req, res) => myStudyController.getQuizDetail(req as any, res)
);

router.get('/v1/studi-ku/quiz/take/:id', authMiddleware, (req, res) =>
  myStudyController.takeQuiz(req as any, res)
);

router.post('/v1/studi-ku/quiz/submit/:id', authMiddleware, (req, res) =>
  myStudyController.submitQuiz(req as any, res)
);

router.get('/v1/studi-ku/quiz/:id/result', authMiddleware, (req, res) =>
  myStudyController.getQuizResult(req as any, res)
);

router.get('/v2/my-study/quiz-history', authMiddleware, (req, res) =>
  myStudyController.getQuizHistory(req as any, res)
);

// Assignments
router.get(
  '/v2/my-study/subjects/:subject_id/sessions/:session_id/assignments',
  authMiddleware,
  (req, res) => myStudyController.getAssignments(req as any, res)
);

router.get(
  '/v2/my-study/assignments/:id',
  authMiddleware,
  (req, res) => myStudyController.getAssignmentDetail(req as any, res)
);

router.post(
  '/v2/my-study/assignments/:id/submit',
  authMiddleware,
  (req, res) => myStudyController.submitAssignment(req as any, res)
);

router.delete(
  '/v2/my-study/assignments/:submission_id/files/:file_index',
  authMiddleware,
  (req, res) => myStudyController.deleteAssignmentFile(req as any, res)
);

export default router;