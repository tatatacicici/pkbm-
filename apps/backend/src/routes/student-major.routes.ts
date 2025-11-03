import { Router } from 'express';
import { MajorController } from '../controllers/major.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const majorController = new MajorController();

router.post('/', authMiddleware, (req, res) => majorController.enrollStudent(req, res));

export default router;
