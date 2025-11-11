import { JOB } from '@kampus-gratis/utils';
import { api } from '../../../config';
import { TPenyaluranKerjaResponse } from '../../..//types/penyalurankerja';

export const jobGetByIdRequest = async (
  id: string | string[]
): Promise<TPenyaluranKerjaResponse> => {
  const { data } = await api.get(`${JOB}/${id}`);
  return data;
};
