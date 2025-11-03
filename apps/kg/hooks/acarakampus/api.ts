import { EVENT } from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import { TEventResponse } from '../../types/acarakampus';

export const eventGetRequest = async (
  page: string
): Promise<TEventResponse> => {
  const { data } = await api.get(`${EVENT}?page=${page}&limit=4`);
  return data;
};
