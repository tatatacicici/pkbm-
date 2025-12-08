import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  TAccRejectConversionParams,
  TAllConversionRequestResponse,
  TUpdateConversionResponse,
} from '../../../types/pengajuan/konversi/types';
import { AccRejectConversionRequest, GetConversionRequest } from './request';
import { TMetaErrorResponse } from '@kampus-gratis/utils';

export const useGetConversionRequest = (
  page: number,
  search: string,
  limit: number
): UseQueryResult<TAllConversionRequestResponse> =>
  useQuery({
    queryKey: ['get-conversion-request', page, search, limit],
    queryFn: async () => await GetConversionRequest(page, search, limit),
  });

export const useAccRejectConversion = (): UseMutationResult<
  TUpdateConversionResponse,
  TMetaErrorResponse,
  TAccRejectConversionParams
> => {
  return useMutation({
    mutationKey: ['acc-reject-conversion'],
    mutationFn: async (params) => await AccRejectConversionRequest(params),
  });
};
