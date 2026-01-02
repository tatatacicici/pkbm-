'use client';

import { atom } from 'jotai';

export const PopupOtpAtom = atom<boolean>(false);

export const PopupModalForgotPassAtom = atom(false);

export const forgotPasswordStateAtom = atom('');
