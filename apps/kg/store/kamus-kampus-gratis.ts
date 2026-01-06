import { TDictionariesResponse } from '../types/panduan';
import { atom } from 'jotai';

export const dictionaryStateAtom = atom<TDictionariesResponse>({
  code: 0,
  status: '',
  message: '',
  data: [],
});

export const queryOptionDictionaryAtom = atom('');
