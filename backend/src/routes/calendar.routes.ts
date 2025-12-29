import { Router } from 'express';
import { CalendarController } from '../controllers/calendar.controller';
import { authMiddleware } from '../middlewares/authMiddleware';

const router = Router();
const calendarController = new CalendarController();

router.get('/schedule', authMiddleware, (req, res) => calendarController.getSchedule(req, res));

export default router;
