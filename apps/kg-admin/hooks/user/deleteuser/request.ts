import { TUsersResponses } from '../../../types';
import { api } from '../../../config/apiConfig';

export const deleteUserRequest = async (
  id: string | string[]
): Promise<TUsersResponses> => {
  const { data } = await api.delete(`v1/admin/users/${id}`);
  return data;
};
