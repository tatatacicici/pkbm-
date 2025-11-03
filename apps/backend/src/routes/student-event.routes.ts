import { Router } from 'express';
import { EventController } from '../controllers/event.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const eventController = new EventController();

router.post('/', authMiddleware, (req, res) => eventController.register(req, res));
router.get('/registered', authMiddleware, (req, res) => eventController.getRegistered(req, res));
router.get('/incoming', authMiddleware, (req, res) => eventController.getIncoming(req, res));
router.get('/history', authMiddleware, (req, res) => eventController.getHistory(req, res));

export default router;
