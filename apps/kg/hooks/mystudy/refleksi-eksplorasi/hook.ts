import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { UseMutationResult, useMutation } from '@tanstack/react-query';
import {
  TRefleksiEksplorasiSingleResponse,
  TRefleksiEksplorasiSubmissionPayload,
} from '../../../types/refleksi-eksplorasi';
import { postRefleksiEksplorasi } from './request';

export const usePostRefleksiEksplorasi = (
  seccionId: string
): UseMutationResult<
  TRefleksiEksplorasiSingleResponse,
  TMetaErrorResponse,
  TRefleksiEksplorasiSubmissionPayload
> => {
  return useMutation({
    mutationKey: ['refleksi-ekplorasi', seccionId],
    mutationFn: async (payload: TRefleksiEksplorasiSubmissionPayload) =>
      await postRefleksiEksplorasi(seccionId, payload),
  });
};
