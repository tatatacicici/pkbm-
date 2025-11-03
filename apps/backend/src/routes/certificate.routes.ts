import { Router } from 'express';
import { CertificateController } from '../controllers/certificate.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const certificateController = new CertificateController();

router.get('/', authMiddleware, (req, res) => certificateController.getAll(req, res));
router.get('/subject', authMiddleware, (req, res) => certificateController.getSubjectCertificates(req, res));
router.get('/event', authMiddleware, (req, res) => certificateController.getEventCertificates(req, res));

export default router;
