import { TUserDataResponse } from '../../types';
import { api } from '../../config/apiConfig';

export const userRequest = async (
  page: number,
  limit: number,
  search: string,
  role: string
): Promise<TUserDataResponse> => {
  const { data } = await api.get(
    `v1/admin/users?page=${page}&limit=${limit}&search=${search}&role=${role}`
  );

  return data;
};

export const allUserRequest = async (): Promise<TUserDataResponse> => {
  const { data } = await api.get(`v1/admin/users?page=1&limit=1000`);

  return data;
};
