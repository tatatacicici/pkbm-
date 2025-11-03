import { Router } from 'express';
import { UserController } from '../controllers/user.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const userController = new UserController();

router.get('/profile', authMiddleware, (req, res) => userController.getProfile(req, res));
router.get('/profile/me', authMiddleware, (req, res) => userController.getProfileMe(req, res));
router.put('/profile', authMiddleware, (req, res) => userController.updateProfile(req, res));
router.put('/profile/avatar', authMiddleware, (req, res) => userController.updateAvatar(req, res));
router.post('/profile/complete', authMiddleware, (req, res) => userController.completeProfile(req, res));

export default router;
