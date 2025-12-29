import { Router } from 'express';
import { NotificationController } from '../controllers/notification.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const notificationController = new NotificationController();

router.get('/', authMiddleware, (req, res) => notificationController.getAll(req, res));
router.put('/:id/read', authMiddleware, (req, res) => notificationController.markAsRead(req, res));
router.put('/read-all', authMiddleware, (req, res) => notificationController.markAllAsRead(req, res));

export default router;
