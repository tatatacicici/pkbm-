'use client';

import { atom } from 'recoil';

export const PopupOtp = atom<boolean>({
  key: 'modal-popup-otp',
  default: false,
});

export const PopupModalForgotPass = atom({
  key: 'modal-popup-forgot-password',
  default: false,
});

export const forgotPasswordState = atom({
  key: 'email-forgot-password',
  default: '',
});
