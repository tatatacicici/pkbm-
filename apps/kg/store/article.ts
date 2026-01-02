import { TArticleResponse } from '../types/articles';
import { atom } from 'jotai';

export const articleDataStateAtom = atom<TArticleResponse>({
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

export const articleFavoriteDataStateAtom = atom<TArticleResponse>({
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

export const articleSlugStateAtom = atom<string[]>([]);
