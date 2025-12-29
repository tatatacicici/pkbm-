import { Router } from 'express';
import { DashboardController } from '../controllers/dashboard.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const dashboardController = new DashboardController();

router.get('/', authMiddleware, (req, res) => dashboardController.getDashboardData(req, res));

export default router;
