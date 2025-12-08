import { TUserDetailResponse } from '../../types/profile';
import { api } from '../../config/apiConfig';

export const profileRequest = async (): Promise<TUserDetailResponse> => {
  const { data } = await api.get('/v1/user/profile/me');
  return data;
};
