import { api } from '../../../config/apiConfig';
import { TUserByIdResponse } from './type';

export const UserByIdRequest = async (
  id: string | string[]
): Promise<TUserByIdResponse> => {
  const { data } = await api.get(`v1/admin/users/${id}`);

  return data;
};
