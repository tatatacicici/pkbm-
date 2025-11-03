import { JOB } from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import { TPenyaluranKerjaResponse } from '../../types/penyalurankerja';

export const jobGetRequest = async (
  page: string
): Promise<TPenyaluranKerjaResponse> => {
  const { data } = await api.get(`${JOB}?page=${page}&limit=3`);
  return data;
};
