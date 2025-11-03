import {
  TLoginPayload,
  TLoginResponse,
  TRefreshTokenPayload,
  TRefreshTokenResponse,
} from '../../types';
import { api } from '../../config/apiConfig';
import { signOut } from 'next-auth/react';

export const loginRequest = async (
  payload?: TLoginPayload
): Promise<TLoginResponse> => {
  const { data } = await api.post<TLoginResponse>('v1/auth/login', payload);

  console.log('data', data);
  return data;
};

export const refreshTokenRequest = async (
  payload?: TRefreshTokenPayload
): Promise<TRefreshTokenResponse> => {
  const { data } = await api.post<TRefreshTokenResponse>(
    'v1/auth/refresh',
    payload
  );
  return data;
};

export const logoutRequest = async ({
  refresh_token,
}: {
  refresh_token: string;
}) => {
  await api.post('v1/auth/logout', { refresh_token });
  signOut();
};
