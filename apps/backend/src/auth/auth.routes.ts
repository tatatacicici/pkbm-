import { Router } from 'express';
import { AuthController } from './auth.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const authController = new AuthController();

router.post('/login', (req, res) => authController.login(req, res));

router.get('/profile', authMiddleware, (req, res) => authController.getProfile(req, res));

export default router;
