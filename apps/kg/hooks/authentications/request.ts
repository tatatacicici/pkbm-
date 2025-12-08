import {
  TForgotPasswordPayload,
  TLoginByGooglePayload,
  TLoginByGoogleResponse,
  TLoginPayload,
  TLoginResponse,
  TOTPPayload,
  TOTPRequestPayload,
  TRefreshTokenPayload,
  TRefreshTokenResponse,
  TRegisterPayload,
  TResetPasswordPayload,
  TResetPasswordVerifyResponse,
} from '../../types/authentications';
import {
  EMAIL_VERIFICATION_REQUEST,
  EMAIL_VERIFICATION_VERIFY,
  GOOGLE_LOGIN_CALLBACK,
  LOGIN,
  LOGOUT,
  REFRESH,
  REGISTER,
  RESET_PASSWORD,
  RESET_PASSWORD_REQUEST,
  RESET_PASSWORD_VERIFY,
  TMetaItem,
} from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import { signOut } from 'next-auth/react';

export const registerRequest = async (
  payload: TRegisterPayload
): Promise<TMetaItem> => await api.post(REGISTER, payload);

export const otpVerifyRequest = async (
  payload: TOTPPayload
): Promise<TMetaItem> => {
  const { data } = await api.post(EMAIL_VERIFICATION_VERIFY, payload);

  return data;
};

export const otpEmailRequest = async (
  payload: TOTPRequestPayload
): Promise<TMetaItem> => {
  const { data } = await api.post(EMAIL_VERIFICATION_REQUEST, payload);
  return data;
};

export const loginRequest = async (
  payload?: TLoginPayload & { user_agent?: string }
): Promise<TLoginResponse> => {
  const data = await api.post<TLoginResponse>(LOGIN, {
    email: payload?.email,
    password: payload?.password,
  }, {
    headers: {
      'User-Agent': payload?.user_agent || 'Unknown User Agent'
    }
  });
  return data.data;
};

export const loginByGoogleRequest = async (
  payload: TLoginByGooglePayload
): Promise<TLoginByGoogleResponse> => {
  const { data } = await api.post<TLoginByGoogleResponse>(
    GOOGLE_LOGIN_CALLBACK,
    payload
  );
  return data;
};

export const forgotPasswordRequest = async (
  payload: TForgotPasswordPayload
): Promise<TMetaItem> => {
  const { data } = await api.post<TMetaItem>(RESET_PASSWORD_REQUEST, payload);
  return data;
};

export const forgotPasswordVerifyRequest = async (
  payload: TOTPPayload
): Promise<TResetPasswordVerifyResponse> => {
  const { data } = await api.post(RESET_PASSWORD_VERIFY, payload);

  return data;
};

export const logoutRequest = async ({
  refresh_token,
}: {
  refresh_token: string;
}) => {
  await api.post(LOGOUT, { refresh_token });
  signOut();
};

export const refreshTokenRequest = async (
  payload?: TRefreshTokenPayload
): Promise<TRefreshTokenResponse> => {
  const { data } = await api.post<TRefreshTokenResponse>(REFRESH, payload);
  return data;
};

export const resetPasswordRequest = async (
  payload: TResetPasswordPayload
): Promise<TMetaItem> => {
  const { data } = await api.post(RESET_PASSWORD, payload);
  return data;
};
