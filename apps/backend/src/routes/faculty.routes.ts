import { Router } from 'express';
import { FacultyController } from '../controllers/faculty.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const facultyController = new FacultyController();

router.get('/', (req, res) => facultyController.getAll(req, res));
router.get('/:id', (req, res) => facultyController.getById(req, res));
router.post('/', authMiddleware, (req, res) => facultyController.create(req, res));
router.put('/:id', authMiddleware, (req, res) => facultyController.update(req, res));
router.delete('/:id', authMiddleware, (req, res) => facultyController.delete(req, res));

export default router;
