import { Router } from 'express';
import { ArticleController } from '../controllers/article.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const articleController = new ArticleController();

router.get('/', (req, res) => articleController.getAll(req, res));
router.get('/filter', (req, res) => articleController.getAll(req, res));
router.get('/related/:id', (req, res) => articleController.getRelated(req, res));
router.get('/:id', (req, res) => articleController.getById(req, res));
router.post('/', authMiddleware, (req, res) => articleController.create(req, res));
router.put('/:id', authMiddleware, (req, res) => articleController.update(req, res));
router.delete('/:id', authMiddleware, (req, res) => articleController.delete(req, res));
router.post('/favorite/:id', authMiddleware, (req, res) => articleController.toggleFavorite(req, res));

export default router;
