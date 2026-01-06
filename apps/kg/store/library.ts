import { TLibraryResponse } from '../types/library';
import { atom } from 'jotai';

export const libraryDataStateAtom = atom<TLibraryResponse>({
  code: 0,
  status: '',
  message: '',
  data: {
    data: [],
    page_size: 0,
    total_data: 0,
    current_page: 1,
    max_page: 1,
  },
});

export const libraryFavoriteDataStateAtom = atom<TLibraryResponse>({
  code: 0,
  status: '',
  message: '',
  data: {
    data: [],
    page_size: 0,
    total_data: 0,
    current_page: 1,
    max_page: 1,
  },
});

export const librarySlugStateAtom = atom<string[]>([]);
