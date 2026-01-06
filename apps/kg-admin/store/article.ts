'use client';

import { atom } from 'jotai';

// Article data state
export const articleDataStateAtom = atom<any>(null);

// Popup states
export const PopupDeleteOpenArticleAtom = atom(false);
export const PopupDeleteEditArticleAtom = atom(false);
export const PopupSuccesAddArticleAtom = atom(false);

// Selected article
export const selectedArticleIdAtom = atom('');
