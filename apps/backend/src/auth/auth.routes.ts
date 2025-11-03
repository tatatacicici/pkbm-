import { Router } from 'express';
import { AuthController } from './auth.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const authController = new AuthController();

router.post('/register', (req, res) => authController.register(req, res));
router.post('/login', (req, res) => authController.login(req, res));
router.post('/logout', authMiddleware, (req, res) => authController.logout(req, res));
router.post('/refresh', (req, res) => authController.refreshToken(req, res));
router.post('/change-password', authMiddleware, (req, res) => authController.changePassword(req, res));
router.post('/reset-password', (req, res) => authController.resetPassword(req, res));

router.get('/profile', authMiddleware, (req, res) => authController.getProfile(req, res));

export default router;
