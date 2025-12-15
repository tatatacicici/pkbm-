import { Router } from 'express';
import { AuthController } from '../auth/auth.controller';

const router = Router();
const authController = new AuthController();

router.post('/request', (req, res) => authController.resetPasswordRequest(req, res));
router.post('/verify', (req, res) => authController.resetPasswordVerify(req, res));

export default router;
