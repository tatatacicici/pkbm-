import { Router } from 'express';
import { BaseController } from '../controllers/base.controller';

import userRoutes from './user.routes';
import articleRoutes from './article.routes';
import subjectRoutes from './subject.routes';
import eventRoutes from './event.routes';
import studentEventRoutes from './student-event.routes';
import facultyRoutes from './faculty.routes';
import majorRoutes from './major.routes';
import studentMajorRoutes from './student-major.routes';
import dashboardRoutes from './dashboard.routes';
import notificationRoutes from './notification.routes';
import certificateRoutes from './certificate.routes';
import leaderboardRoutes from './leaderboard.routes';
import gradeRoutes from './grade.routes';
import calendarRoutes from './calendar.routes';
import administrationRoutes from './administration.routes';
import jobRoutes from './job.routes';
import jobApplyRoutes from './job-apply.routes';
import discussionRoutes from './discussion.routes';
import discussionLikeRoutes from './discussion-like.routes';
import studyPlanRoutes from './study-plan.routes';
import emailVerificationRoutes from './email-verification.routes';
import resetPasswordRoutes from './reset-password.routes';

const router = Router();
const baseController = new BaseController();

router.get('/ping', baseController.ping);

router.use('/v1/user', userRoutes);
router.use('/v1/article', articleRoutes);
router.use('/v1/subject', subjectRoutes);
router.use('/v1/event', eventRoutes);
router.use('/v1/student-event', studentEventRoutes);
router.use('/v1/faculty', facultyRoutes);
router.use('/v1/major', majorRoutes);
router.use('/v1/student-major', studentMajorRoutes);
router.use('/v1/dashboard', dashboardRoutes);
router.use('/v1/notification', notificationRoutes);
router.use('/v1/certificate', certificateRoutes);
router.use('/v1/leaderboard', leaderboardRoutes);
router.use('/v1/scores', gradeRoutes);
router.use('/v1/calendar', calendarRoutes);
router.use('/v1/administration', administrationRoutes);
router.use('/v2/administration', administrationRoutes);
router.use('/v1/job', jobRoutes);
router.use('/v1/job-apply', jobApplyRoutes);
router.use('/v2/discussions', discussionRoutes);
router.use('/v1/discussion/like', discussionLikeRoutes);
router.use('/v1/student-subject', studyPlanRoutes);
router.use('/v1/email-verification', emailVerificationRoutes);
router.use('/v1/reset-password', resetPasswordRoutes);

export default router;
