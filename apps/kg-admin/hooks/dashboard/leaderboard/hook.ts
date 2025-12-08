import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TLeaderboardResponse } from "../../../types/leaderboard";
import { leaderboardGetRequest } from "./request";

export const useGetLeaderboard = (): UseQueryResult<TLeaderboardResponse> =>
  useQuery({
    queryKey: ['get-leaderboard-user'],
    queryFn: async () => await leaderboardGetRequest(),
  });
