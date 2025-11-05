import { Router } from 'express';
import { AuthController } from './auth.controller';
import { authMiddleware } from '../middlewares/authMiddleware';
import { validate } from '../middlewares/validation';
import { 
  registerSchema, 
  loginSchema, 
  changePasswordSchema, 
  resetPasswordSchema 
} from '../validation/auth.validation';

const router = Router();
const authController = new AuthController();

router.post('/register', validate(registerSchema), (req, res) => authController.register(req, res));
router.post('/login', validate(loginSchema), (req, res) => authController.login(req, res));
router.post('/logout', authMiddleware, (req, res) => authController.logout(req, res));
router.post('/refresh', (req, res) => authController.refreshToken(req, res));
router.post('/change-password', authMiddleware, validate(changePasswordSchema), (req, res) => authController.changePassword(req, res));
router.post('/reset-password', validate(resetPasswordSchema), (req, res) => authController.resetPassword(req, res));

router.get('/profile', authMiddleware, (req, res) => authController.getProfile(req, res));

export default router;
