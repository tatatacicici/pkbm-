import { api } from '../../../config/apiConfig';
import {
  TAccRejectPayload,
  TAllStudyplanRequestResponse,
  TPengajuanKrsResponse,
} from '../../../types/pengajuan/krs/types';

export const GetStudyPlanRequest = async (
  page: number,
  search: string,
  limit: number,
  sort_by: string
): Promise<TAllStudyplanRequestResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      page,
      search,
      limit,
      sort_by,
    },
    url: 'v1/admin/study-plans/requests',
  });
  return data;
};

export const AcceptKrsRequest = async (
  payload: TAccRejectPayload
): Promise<TPengajuanKrsResponse> => {
  const { data } = await api({
    method: 'put',
    url: `v1/admin/acc-krs-subject`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
  });
  return data;
};

export const RejectKrsRequest = async (
  payload: TAccRejectPayload
): Promise<TPengajuanKrsResponse> => {
  const { data } = await api({
    method: 'put',
    url: `v1/admin/reject-krs-subject`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
  });
  return data;
};
