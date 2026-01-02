import { atom } from 'jotai';
import { TLeaderboardItem, Filtered } from '../types';

export const PopupProfilLeaderboradAtom = atom(false);

export const popupGetUserAtom = atom<TLeaderboardItem>({
  student_id: '',
  author: [],
});

export const filteredDataAtom = atom<Filtered>({
  code: 0,
  status: '',
  message: '',
  data: [],
});
