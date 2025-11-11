import { api } from '../../../config/apiConfig';
import { TEditUserPayload } from './type';

export const editUserRequest = async (
  payload: TEditUserPayload | unknown,
  id: string | string[]
): Promise<TEditUserPayload> => {
  const { data } = await api.put(`v1/admin/users/${id}`, payload);
  return data;
};
