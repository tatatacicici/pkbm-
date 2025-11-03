import { Router } from 'express';
import { BaseController } from '../controllers/base.controller';

const router = Router();
const baseController = new BaseController();

router.get('/ping', baseController.ping);

export default router;
