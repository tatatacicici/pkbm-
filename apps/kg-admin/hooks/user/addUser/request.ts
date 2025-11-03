import { api } from '../../../config/apiConfig';
import { TAddUserPaylod } from './type';

export const addUserRequest = async (
  payload: TAddUserPaylod | any
): Promise<TAddUserPaylod> => {
  const { data } = await api.post('v1/admin/users/create', payload);
  return data;
};
