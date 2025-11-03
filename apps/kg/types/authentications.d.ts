import { TMetaItem, TMetaResponseSingle } from '@kampus-gratis/utils';
import { User } from 'next-auth';

export type TRegisterPayload = {
  email: string;
  full_name: string;
  password: string;
  password_confirmation: string;
};

export type TOTPPayload = {
  otp: string;
  email: string;
};

export type TOTPRequestPayload = {
  email: string;
};

export type TOTPProps = {
  email: string;
  type: 'REGISTER' | 'FORGOT_PASSWORD'
};

export type TOtpPopup = {
  setPopupOtp: (val: boolean) => void;
  getPopupOtp: boolean;
};

export type TForgotPasswordPopup = {
  setPopupForgotPassword: (val: string) => void;
  getPopupForgotPassword: string;
};

export type TLoginPayload = {
  email?: string;
  password?: string;
};

export type TLoginByGooglePayload = {
  credential: string;
};

export type TLoginData = {
  data: {
    user_id: string;
    access_token: string;
    refresh_token: string;
  };
} & User;

export type TLoginResponse = TLoginData;

export type TLoginByGoogleData = {
  user_id: string;
  token: {
    access_token: string;
    refresh_token: string;
  };
};

export type TLoginByGoogleResponse = TMetaResponseSingle<TLoginByGoogleData>;

export type TForgotPasswordPayload = {
  email: string;
};

export type TusePopupForgotPass = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export type TRefreshTokenPayload = {
  refresh_token: string;
};

export interface DataRefreshToken {
  access_token: string;
  refresh_token: string;
}

export type TRefreshTokenResponse = TMetaResponseSingle<DataRefreshToken>;

export type TResetPasswordVerifyResponse = {
  data: {
    email: string;
    token: string;
  } & TMetaItem;
};

export type TResetPasswordPayload = {
  password: string;
  token: string;
};
