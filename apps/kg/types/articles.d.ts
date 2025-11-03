import { TMetaResponse } from '@kampus-gratis/utils';
import { StaticImageData } from 'next/image';

export type TChoiceArticleCardProps = {
  title: string;
  date?: string;
  tag: string;
  bg: string;
  views?: string;
  desc?: string;
  src: string | StaticImageData;
};

export type TMetaResponse<T> = {
  meta: {
    // Define your metadata properties here
    // For example: totalItems, currentPage, totalPages, etc.
  };
  data: T[]; // This is where your array of TArticleItem objects will go
};

export type TArticleItem = {
  id: string | string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  is_favorite: boolean;
  category_id: string;
  author_id: string;
  created_at: string;
  tags: Array<{ tag: string }>;
};

export type TArticleResponse = {
  code: number;
  status: string;
  message: string;
  data: {
    data: TArticleItem[];
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};

export type TAllArticleResponse = {
  code: number;
  status: string;
  message: string;
  data: TArticleItem[];
};
export type TuseArticleData = {
  getArticleData: TArticleResponse;
  setArticleData: (val: TArticleResponse) => void;
};

export type TuseArticleFavortieData = {
  getArticleFavoriteData: TArticleResponse;
  setArticleFavoriteData: (val: TArticleResponse) => void;
};

export type TArticleFavoritePayload = {
  article_id: string;
};

export type TArticleFavoriteResponse = {
  code: number;
  status: string;
  message: string;
  data: any;
};
