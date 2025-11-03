import { TMetaResponseSingle } from '@kampus-gratis/utils';
import { StaticImageData } from '../../../types/acarakampus';

export type TCreateArticlePayload = {
  title?: string;
  content?: string;
  category_id?: string;
  thumbnail?: string | StaticImageData;
  tags?: string;
  thumbnail?: string;
};

export interface TArticle {
  id?: string;
  title?: string;
  content?: string;
  thumbnail?: string;
  slug?: string;
  views?: number;
  author?: string;
  category_id?: string;
  updated_at?: string;
  created_at?: string;
  tags: Array<{ tag: string }>;
}

export type TArticleResponse = TMetaResponseSingle<TArticle>;
