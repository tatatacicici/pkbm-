import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  TConversionListMatkul,
  TMatkulConversionPayload,
  TPostMatkulConversionResponse,
} from '../../../types/konversi';
import {
  conversionListMatkulRequest,
  postMatkulConversionRequest,
} from './request';

export const useGetListMatkulConvercions = (): UseQueryResult<
  TConversionListMatkul,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['list-matkul-conversion'],
    queryFn: async () => await conversionListMatkulRequest(),
  });

export const usePostMatkulConversion = (): UseMutationResult<
  TPostMatkulConversionResponse,
  TMetaErrorResponse,
  TMatkulConversionPayload
> =>
  useMutation({
    mutationKey: ['post-matkul-conversion'],
    mutationFn: async (payload) => await postMatkulConversionRequest(payload),
  });
