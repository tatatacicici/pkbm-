import { UseQueryResult, useQuery } from '@tanstack/react-query';
import {
  TMyStudyResponse,
  TMyStudyv2Response,
} from '../../../types/mystudy-module';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { myStudyGetRequestV2, mystudyGetRequest } from './request';

export const useGetMyStudy = (): UseQueryResult<
  TMyStudyResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['mystudy-get'],
    queryFn: async () => await mystudyGetRequest(),
  });

export const useGetMyStudyv2 = (): UseQueryResult<
  TMyStudyv2Response,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['mystudy-get-v2'],
    queryFn: async () => await myStudyGetRequestV2(),
  });
