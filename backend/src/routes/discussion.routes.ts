import { Router } from 'express';
import { DiscussionController } from '../controllers/discussion.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const discussionController = new DiscussionController();

router.get('/', (req, res) => discussionController.getAll(req, res));
router.get('/forum', (req, res) => discussionController.getAll(req, res));
router.post('/forum', authMiddleware, (req, res) => discussionController.create(req, res));
router.post('/comments', authMiddleware, (req, res) => discussionController.addComment(req, res));
router.post('/reply', authMiddleware, (req, res) => discussionController.addReply(req, res));

export default router;
