import { LEADERBOARD, LEADERBOARD_FACULTY } from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import { TLeaderboardResponse, TLeaderboardScoreResponse } from '../../types';
import { TFacultyResponse } from '../../types/study-plan';

export const leaderboardGetRequest =
  async (): Promise<TLeaderboardResponse> => {
    const { data } = await api.get(`${LEADERBOARD}`);
    return data;
  };

export const leaderboardGetFaculty = async (): Promise<TFacultyResponse> => {
  const { data } = await api.get(`${LEADERBOARD_FACULTY}}`);
  return data;
};

export const leaderboardGetRequestScore = async ({
  pageParam,
}: {
  pageParam?: number;
}): Promise<TLeaderboardScoreResponse> => {
  const { data } = await api.get(`/v2/leaderboard/fastest?page=${pageParam}`);
  return data;
};
