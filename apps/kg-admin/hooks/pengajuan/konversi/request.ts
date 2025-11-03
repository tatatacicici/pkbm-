import { api } from '../../../config/apiConfig';
import {
  TAccRejectConversionParams,
  TAllConversionRequestResponse,
  TUpdateConversionResponse,
} from '../../../types/pengajuan/konversi/types';

export const GetConversionRequest = async (
  page: number,
  search: string,
  limit: number
): Promise<TAllConversionRequestResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      page,
      search,
      limit,
    },
    url: 'v1/admin/conversions/requests',
  });
  return data;
};

export const AccRejectConversionRequest = async (
  params: TAccRejectConversionParams
): Promise<TUpdateConversionResponse> => {
  const { data } = await api({
    method: 'post',
    url: `v1/admin/conversions/requests/${params.request_id}/${params.action_type}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
