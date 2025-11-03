import { TGetRolesId } from './type';
import { api } from '../../../../config/apiConfig';

export const getAllRole = async (): Promise<TGetRolesId> => {
  const { data } = await api.get(`v1/admin/roles`);

  return data;
};
