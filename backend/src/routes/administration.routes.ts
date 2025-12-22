import { Router } from 'express';
import { AdministrationController } from '../controllers/administration.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const administrationController = new AdministrationController();

router.get('/college', authMiddleware, (req, res) => administrationController.getAdministration(req, res));
router.get('/constants', authMiddleware, (req, res) => administrationController.getConstants(req, res));
router.get('/biodatas', authMiddleware, (req, res) => administrationController.getBiodata(req, res));
router.put('/biodatas', authMiddleware, (req, res) => administrationController.updateBiodata(req, res));
router.get('/file', authMiddleware, (req, res) => administrationController.getFile(req, res));
router.post('/file', authMiddleware, (req, res) => administrationController.uploadFile(req, res));
router.get('/major', authMiddleware, (req, res) => administrationController.getAdministration(req, res));

export default router;
