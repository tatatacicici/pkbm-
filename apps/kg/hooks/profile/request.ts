import {
  CHANGE_PASSWORD,
  USER_PROFILE_COMPLETE,
  USER_PROFILE_ME,
  USER_PROFILE_ME_AVATAR,
} from '@kampus-gratis/utils';
import { serialize } from 'object-to-formdata';
import { api } from '../../config/api/apiConfig';
import {
  TAvatarPayload,
  TAvatarResponse,
  TPasswordPayload,
  TPasswordResponse,
  TProfilePayload,
  TUserCompletePayload,
  TUserDetailResponse,
} from '../../types/profile';

export const profileRequest = async (): Promise<TUserDetailResponse> => {
  const { data } = await api.get(USER_PROFILE_ME);
  return data;
};

export const profileCompleteRequest =
  async (): Promise<TUserCompletePayload> => {
    const { data } = await api.get(USER_PROFILE_COMPLETE);
    return data;
  };

export const UpdateUserProfile = async (
  payload: TProfilePayload
): Promise<TUserDetailResponse> => {
  const { data } = await api.put(USER_PROFILE_ME, payload);
  return data;
};

export const UpdateAvatarProfile = async (
  payload: TAvatarPayload
): Promise<TAvatarResponse> => {
  const { data } = await api({
    method: 'put',
    url: USER_PROFILE_ME_AVATAR,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: serialize(payload),
  });
  return data;
};

export const UpdatePassword = async (
  payload: TPasswordPayload
): Promise<TPasswordResponse> => {
  const { data } = await api.put(CHANGE_PASSWORD, payload);
  return data;
};

export const DeleteAccount = async (): Promise<{ message: string }> => {
  const { data } = await api.delete('/v5/account/delete');
  return data;
};
