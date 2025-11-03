import { TLibraryResponse } from '../../types/library';
import { atom } from 'recoil';

export const libraryDataState = atom<TLibraryResponse>({
  key: 'library',
  default: {
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
  },
});

export const libraryFavoriteDataState = atom<TLibraryResponse>({
  key: 'library-favorite',
  default: {
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
  },
});

export const librarySlugState = atom<string[]>({
  key: 'library-slug-state',
  default: [], // Inisialisasi sebagai array kosong
});
