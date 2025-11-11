import { TLeaderboardResponse } from '../../../types/leaderboard';
import { api } from '../../../config/apiConfig';

export const leaderboardGetRequest =
  async (): Promise<TLeaderboardResponse> => {
    const { data } = await api.get('v1/leaderboard');
    return data;
  };
