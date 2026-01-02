'use client';

import { atom } from 'jotai';

export const userAdminDataStateAtom = atom<any[]>([]);

export const selectedUserByIdAtom = atom('');
