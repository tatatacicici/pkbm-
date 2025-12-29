import { Router } from 'express';
import { JobController } from '../controllers/job.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const jobController = new JobController();

router.get('/', (req, res) => jobController.getAll(req, res));
router.get('/constants', (req, res) => jobController.getConstants(req, res));

export default router;
