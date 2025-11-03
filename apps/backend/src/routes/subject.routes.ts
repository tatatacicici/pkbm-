import { Router } from 'express';
import { SubjectController } from '../controllers/subject.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const subjectController = new SubjectController();

router.get('/', (req, res) => subjectController.getAll(req, res));
router.get('/:id', (req, res) => subjectController.getById(req, res));
router.post('/', authMiddleware, (req, res) => subjectController.create(req, res));
router.put('/:id', authMiddleware, (req, res) => subjectController.update(req, res));
router.delete('/:id', authMiddleware, (req, res) => subjectController.delete(req, res));

export default router;
