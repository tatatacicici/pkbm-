import { LeaderboardHistories } from '../models/LeaderboardHistories';
import { Users } from '../models/Users';

interface LeaderboardParams {
  page: number;
  limit: number;
}

export class LeaderboardService {
  async getGlobalLeaderboard(params: LeaderboardParams) {
    const { page, limit } = params;
    const offset = (page - 1) * limit;

    const { rows: leaderboard, count: total } = await LeaderboardHistories.findAndCountAll({
      include: [{
        model: Users,
        attributes: ['id', 'fullName', 'avatar', 'userName'],
      }],
      limit,
      offset,
      order: [['points', 'DESC']],
    });

    return {
      leaderboard,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getFacultyLeaderboard(facultyId: string, params: LeaderboardParams) {
    const { page, limit } = params;
    const offset = (page - 1) * limit;

    const { rows: leaderboard, count: total } = await LeaderboardHistories.findAndCountAll({
      where: { facultyId },
      include: [{
        model: Users,
        attributes: ['id', 'fullName', 'avatar', 'userName'],
      }],
      limit,
      offset,
      order: [['points', 'DESC']],
    });

    return {
      leaderboard,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getMajorLeaderboard(majorId: string, params: LeaderboardParams) {
    const { page, limit } = params;
    const offset = (page - 1) * limit;

    const { rows: leaderboard, count: total } = await LeaderboardHistories.findAndCountAll({
      where: { majorId },
      include: [{
        model: Users,
        attributes: ['id', 'fullName', 'avatar', 'userName'],
      }],
      limit,
      offset,
      order: [['points', 'DESC']],
    });

    return {
      leaderboard,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }

  async getSemesterLeaderboard(semesterId: string, params: LeaderboardParams) {
    const { page, limit } = params;
    const offset = (page - 1) * limit;

    const { rows: leaderboard, count: total } = await LeaderboardHistories.findAndCountAll({
      where: { semesterId },
      include: [{
        model: Users,
        attributes: ['id', 'fullName', 'avatar', 'userName'],
      }],
      limit,
      offset,
      order: [['points', 'DESC']],
    });

    return {
      leaderboard,
      meta: {
        total,
        page,
        limit,
        totalPages: Math.ceil(total / limit),
      },
    };
  }
}
