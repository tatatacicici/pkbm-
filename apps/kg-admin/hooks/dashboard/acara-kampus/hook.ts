import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TEventResponse } from "../../../types/leaderboard";
import { eventGetRequest } from "./request";
import { TMetaErrorResponse } from "@kampus-gratis/utils";

export const useGetEvent = (): UseQueryResult<TEventResponse, TMetaErrorResponse> =>
    useQuery({
      queryKey: ['get-acarakampus'],
      queryFn: async () => await eventGetRequest(),
    });