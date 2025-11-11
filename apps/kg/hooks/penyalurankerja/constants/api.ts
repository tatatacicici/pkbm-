import { JOB_CONSTANTS } from '@kampus-gratis/utils';
import { api } from '../../../config/api/apiConfig';
import { TJobConstanstResponse } from '../../../types/penyalurankerja';

export const jobConstantsSidebar = async (): Promise<TJobConstanstResponse> => {
  const { data } = await api.get(`${JOB_CONSTANTS}`);
  return data;
};
