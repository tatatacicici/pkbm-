import { TMetaErrorResponse } from "@kampus-gratis/utils";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { TBootcampSubjectResponse, TBootcampTopicResponse } from "../../types/bootcamp";
import { bootcampSubjectRequest, bootcampTopicRequest } from "./request";

export const useGetBootcampSubject = (): UseQueryResult<
  TBootcampSubjectResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['bootcamp-subject'],
    queryFn: async () => await bootcampSubjectRequest(),
    retry: false,
  });

export const useGetBootcampTopic = (): UseQueryResult<
  TBootcampTopicResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['bootcamp-topic'],
    queryFn: async () => await bootcampTopicRequest(),
    retry: false,
  });
