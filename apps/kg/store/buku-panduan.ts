import { TBookGuidesResponse } from '../types/panduan';
import { atom } from 'jotai';

export const bookGuideStateAtom = atom<TBookGuidesResponse>({
  code: 0,
  status: '',
  message: '',
  data: [],
});

export const queryPanduanBookAtom = atom('');
