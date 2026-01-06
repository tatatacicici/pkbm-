import { atom } from 'jotai';
import { videoGuideTypesResponse } from '../types/panduan';

export const videoGuideStateAtom = atom<videoGuideTypesResponse>({
  code: 0,
  status: '',
  message: '',
  data: [],
});

export const videoIdStateAtom = atom<string[]>([]);

export const queryPanduanVideoAtom = atom('');
