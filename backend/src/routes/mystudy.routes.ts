import { Router } from 'express';
import { MyStudyController } from '../controllers/mystudy.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const myStudyController = new MyStudyController();

router.get('/v1/studi-ku/user', authMiddleware, (req, res) => myStudyController.getMyStudy(req, res));
router.get('/v2/my-study', authMiddleware, (req, res) => myStudyController.getMyStudyV2(req, res));

router.get('/v3/my-study/subjects/:subject_id/sessions', authMiddleware, (req, res) => myStudyController.getSubjectSessions(req, res));

router.get('/v2/my-study/subjects/:subject_id/sessions/:session_id/modules', authMiddleware, (req, res) => myStudyController.getModules(req, res));
router.get('/v2/my-study/subjects/:subject_id/sessions/:session_id/modules/:module_id', authMiddleware, (req, res) => myStudyController.getModuleContent(req, res));
router.post('/v1/studi-ku/module/:id/resume', authMiddleware, (req, res) => myStudyController.submitModuleResume(req, res));

router.get('/v2/my-study/subjects/:subject_id/sessions/:session_id/quizzes', authMiddleware, (req, res) => myStudyController.getQuizzes(req, res));
router.get('/v2/my-study/subjects/:subject_id/sessions/:session_id/quizzes/:id', authMiddleware, (req, res) => myStudyController.getQuizDetail(req, res));
router.get('/v1/studi-ku/quiz/take/:id', authMiddleware, (req, res) => myStudyController.takeQuiz(req, res));
router.post('/v1/studi-ku/quiz/submit/:id', authMiddleware, (req, res) => myStudyController.submitQuiz(req, res));
router.get('/v1/studi-ku/quiz/result/:id', authMiddleware, (req, res) => myStudyController.getQuizResult(req, res));
router.get('/v1/studi-ku/quiz/history/:id', authMiddleware, (req, res) => myStudyController.getQuizHistory(req, res));

router.get('/v2/my-study/subjects/:subject_id/sessions/:session_id/assignments', authMiddleware, (req, res) => myStudyController.getAssignments(req, res));
router.get('/v2/my-study/subjects/:subject_id/sessions/:session_id/assignments/:id', authMiddleware, (req, res) => myStudyController.getAssignmentDetail(req, res));
router.post('/v2/my-study/subjects/:subject_id/sessions/:session_id/assignments/:assignment_id/submission', authMiddleware, (req, res) => myStudyController.submitAssignment(req, res));
router.delete('/v2/my-study/subjects/:subject_id/sessions/:session_id/assignments/:assignment_id/files/:file_id', authMiddleware, (req, res) => myStudyController.deleteAssignmentFile(req, res));

router.post('/v1/watched-video-progress/video/:id/taken', authMiddleware, (req, res) => myStudyController.markVideoWatched(req, res));

export default router;
