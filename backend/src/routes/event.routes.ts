import { Router } from 'express';
import { EventController } from '../controllers/event.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const eventController = new EventController();

router.get('/', (req, res) => eventController.getAll(req, res));
router.get('/:id', (req, res) => eventController.getById(req, res));
router.post('/', authMiddleware, (req, res) => eventController.create(req, res));
router.put('/:id', authMiddleware, (req, res) => eventController.update(req, res));
router.delete('/:id', authMiddleware, (req, res) => eventController.delete(req, res));

export default router;
