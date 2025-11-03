import { api } from '../../../config/apiConfig';
import { TUserDataById } from '../../../types';

export const getAdministrationId = async (
  id: string | string[]
): Promise<TUserDataById> => {
  const { data } = await api.get(`v1/admin/users/${id}/administration`);

  return data;
};
