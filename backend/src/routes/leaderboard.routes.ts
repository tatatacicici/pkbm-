import { Router } from 'express';
import { LeaderboardController } from '../controllers/leaderboard.controller';

const router = Router();
const leaderboardController = new LeaderboardController();

router.get('/', (req, res) => leaderboardController.getGlobal(req, res));
router.get('/faculty/:facultyId', (req, res) => leaderboardController.getByFaculty(req, res));
router.get('/major/:majorId', (req, res) => leaderboardController.getByMajor(req, res));
router.get('/semester/:semesterId', (req, res) => leaderboardController.getBySemester(req, res));

export default router;
