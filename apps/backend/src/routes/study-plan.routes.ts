import { Router } from 'express';
import { StudyPlanController } from '../controllers/study-plan.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const studyPlanController = new StudyPlanController();

router.get('/enrolled', authMiddleware, (req, res) => studyPlanController.getEnrolled(req, res));
router.get('/studyplan', authMiddleware, (req, res) => studyPlanController.getStudyPlan(req, res));
router.get('/major', authMiddleware, (req, res) => studyPlanController.getMajorContracts(req, res));
router.get('/draft', authMiddleware, (req, res) => studyPlanController.getDraft(req, res));
router.post('/draft', authMiddleware, (req, res) => studyPlanController.sendDraft(req, res));
router.post('/send-draft', authMiddleware, (req, res) => studyPlanController.sendDraft(req, res));

export default router;
