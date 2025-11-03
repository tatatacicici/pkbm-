import { Router } from 'express';
import { MajorController } from '../controllers/major.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const majorController = new MajorController();

router.get('/', (req, res) => majorController.getAll(req, res));
router.get('/:id', (req, res) => majorController.getById(req, res));
router.post('/', authMiddleware, (req, res) => majorController.create(req, res));
router.put('/:id', authMiddleware, (req, res) => majorController.update(req, res));
router.delete('/:id', authMiddleware, (req, res) => majorController.delete(req, res));

export default router;
