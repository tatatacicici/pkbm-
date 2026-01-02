import { atom } from 'jotai';
import { TLiveMentoringResponse } from '../types/livementoring';

export const liveMentoringDataStateAtom = atom<TLiveMentoringResponse>({
  code: 0,
  status: '',
  message: '',
  data: [],
});

export const detailLiveMentoringDataStateAtom = atom<TLiveMentoringResponse>({
  code: 0,
  status: '',
  message: '',
  data: [],
});
