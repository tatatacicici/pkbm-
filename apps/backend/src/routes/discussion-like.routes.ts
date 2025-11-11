import { Router } from 'express';
import { DiscussionController } from '../controllers/discussion.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const discussionController = new DiscussionController();

router.post('/', authMiddleware, (req, res) => discussionController.toggleLike(req, res));
router.post('/comment', authMiddleware, (req, res) => discussionController.toggleLike(req, res));
router.post('/reply', authMiddleware, (req, res) => discussionController.toggleLike(req, res));

export default router;
