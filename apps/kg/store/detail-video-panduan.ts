import { videoDetailGuideTypesResponse } from '../types/panduan';
import { atom } from 'jotai';

export const detailVideoGuideStateAtom = atom<videoDetailGuideTypesResponse>({
  code: 0,
  status: '',
  message: '',
  data: {},
});

export const queryPanduanVideoDetailAtom = atom('');
