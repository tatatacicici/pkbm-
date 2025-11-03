import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { TMetaErrorResponse } from '../../../../../libs/utils/src/types';
import {
  TAccRejectPayload,
  TAllStudyplanRequestResponse,
  TPengajuanKrsResponse,
} from '../../../types/pengajuan/krs/types';
import {
  AcceptKrsRequest,
  GetStudyPlanRequest,
  RejectKrsRequest,
} from './request';

export const useGetStudyPlanRequest = (
  page: number,
  search: string,
  limit: number,
  sort_by: string
): UseQueryResult<TAllStudyplanRequestResponse> =>
  useQuery({
    queryKey: ['get-study-plan-request', page, search, limit, sort_by],
    queryFn: async () =>
      await GetStudyPlanRequest(page, search, limit, sort_by),
  });

export const useAccKrs = (): UseMutationResult<
  TPengajuanKrsResponse,
  TMetaErrorResponse,
  TAccRejectPayload
> => {
  return useMutation({
    mutationKey: ['acc-krs'],
    mutationFn: async (payload) => await AcceptKrsRequest(payload),
  });
};

export const useRejectKrs = (): UseMutationResult<
  TPengajuanKrsResponse,
  TMetaErrorResponse,
  TAccRejectPayload
> => {
  return useMutation({
    mutationKey: ['reject-krs'],
    mutationFn: async (payload) => await RejectKrsRequest(payload),
  });
};
