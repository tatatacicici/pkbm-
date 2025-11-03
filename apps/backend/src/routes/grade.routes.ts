import { Router } from 'express';
import { GradeController } from '../controllers/grade.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const gradeController = new GradeController();

router.get('/subjects', authMiddleware, (req, res) => gradeController.getSubjectGrades(req, res));

export default router;
