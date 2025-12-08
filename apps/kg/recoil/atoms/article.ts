import { TArticleResponse } from '../../types/articles';
import { atom } from 'recoil';

export const articleDataState = atom<TArticleResponse>({
  key: 'article',
  default: {
    code: 0,
    status: '',
    message: '',
    data: {
        data: [  
        ],
        page_size: 0,
        total_data: 0,
        current_page: 1,
        max_page: 1,
    }
  },
});

export const articleFavoriteDataState = atom<TArticleResponse>({
  key: 'article-favorite',
  default: {
    code: 0,
    status: '',
    message: '',
    data: {
        data: [  
        ],
        page_size: 0,
        total_data: 0,
        current_page: 1,
        max_page: 1,
    }
  },
});

export const articleSlugState = atom<string[]>({
  key: 'article-slug-state',
  default: [], // Inisialisasi sebagai array kosong
});