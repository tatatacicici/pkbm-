import { Router } from 'express';
import { JobController } from '../controllers/job.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const jobController = new JobController();

router.post('/', authMiddleware, (req, res) => jobController.apply(req, res));
router.get('/user', authMiddleware, (req, res) => jobController.getUserApplications(req, res));

export default router;
