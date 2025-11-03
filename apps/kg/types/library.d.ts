import { TMetaResponse } from '@kampus-gratis/utils';
import { StaticImageData } from 'next/image';

export type TChoiceLibraryCardProps = {
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
  data: T[]; // This is where your array of TLibraryItem objects will go
};

export type TLibraryItem = {
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

export type TLibraryResponse = {
  code: number;
  status: string;
  message: string;
  data: {
    data: TLibraryItem[];
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};

export type TAllLibraryResponse = {
  code: number;
  status: string;
  message: string;
  data: TLibraryItem[];
};
export type TuseLibraryData = {
  getLibraryData: TLibraryResponse;
  setLibraryData: (val: TLibraryResponse) => void;
};

export type TuseLibraryFavoriteData = {
  getLibraryFavoriteData: TLibraryResponse;
  setLibraryFavoriteData: (val: TLibraryResponse) => void;
};

export type TLibraryFavoritePayload = {
  Library_id: string;
};

export type TLibraryFavoriteResponse = {
  code: number;
  status: string;
  message: string;
  data: any;
};
