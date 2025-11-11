import { UseQueryResult, useMutation, useQuery } from '@tanstack/react-query';
import {
  accPengjuanAdm,
  pengajuanAdmDataDiriGetRequest,
  pengajuanAdmGetRequest,
  rejectPengjuanAdm,
} from './request';
import {
  TPengajuanAdmResponse,
  TPengajuanDataDiriAdmResponse,
} from '../../../types/pengajuan/administrasi/type';
import { TMetaErrorResponse } from '@kampus-gratis/utils';

export const useGetPengjuanAdm = (page: number,
  search: string,
  limit: number,
  sort_by: string): UseQueryResult<TPengajuanAdmResponse> =>
  useQuery({
    queryKey: ['get-pengajuan-adm-user', page, search, limit, sort_by],
    queryFn: async () => await pengajuanAdmGetRequest(page, search, limit, sort_by),
  });

export const useAccPengajuanAdm = (): any => {
  return useMutation({
    mutationKey: ['acc-pengajuan-adm'],
    mutationFn: async (id: string) => await accPengjuanAdm(id),
  });
};

export const useGetPengjuanAdmDataDiri = (
  id: string
): UseQueryResult<TPengajuanDataDiriAdmResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['get-pengajuan-adm-data-diri-user', id],
    queryFn: async () => await pengajuanAdmDataDiriGetRequest(id),
  });

  export const useRejectPengajuanAdm = (id : string, role : string): any => {
    return useMutation({
      mutationKey: ['acc-pengajuan-adm'],
      mutationFn: async (payload) => await rejectPengjuanAdm(id, role, payload),
    });
  };
