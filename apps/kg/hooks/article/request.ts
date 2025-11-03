import {
  ARTICLE,
  ARTICLE_FAVORITE,
  ARTICLE_FILTER,
  ARTICLE_RELATED,
} from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import {
  TAllArticleResponse,
  TArticleFavoritePayload,
  TArticleFavoriteResponse,
  TArticleResponse,
} from '../../types/articles';
import { TDetailArticleResponse } from '../../types/articlesDetail';

export const articleGetRequest = async (
  page: number,
  limit: number,
  search: string
): Promise<TArticleResponse> => {
  const { data } = await api.get(
    `${ARTICLE_FILTER}?page=${page.toString()}&limit=${limit.toString()}&search=${search}&sort_by=TITLE&type=newest`
  );
  return data;
};

export const articlesGetRequestInfinite = async ({
  pageParam,
  search = '',
}: {
  pageParam: number;
  search: string;
}): Promise<TArticleResponse> => {
  const { data } = await api.get(
    `/v1/article/filter?page=${pageParam}&limit=8&type=newest&search=${search}`
  );

  return data;
};

export const articlesFavorieGetRequestInfinite = async ({
  pageParam,
  search = '',
}: {
  pageParam: number;
  search: string;
}): Promise<TArticleResponse> => {
  const { data } = await api.get(
    `/v1/article/favorite?page=${pageParam}&limit=8&search=${search}`
  );

  return data;
};

export const allArticleGetRequest = async (): Promise<TAllArticleResponse> => {
  const { data } = await api.get(`/v1/article`);
  return data;
};

export const articleDetailGetRequest = async (
  slug: string
): Promise<TDetailArticleResponse | null> => {
  try {
    const { data } = await api.get(`${ARTICLE}/${slug}`);
    if (data) {
      return data;
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};

export const articleRelatedGetRequest = async (
  id: string,
  limit: number
): Promise<TDetailArticleResponse> => {
  const response = await api.get(`${ARTICLE_RELATED}/${id}?limit=${limit}`);
  return response.data;
};

export const articleFavoriteRequest = async (
  payload: TArticleFavoritePayload
): Promise<TArticleFavoriteResponse> => {
  const { data } = await api.post(ARTICLE_FAVORITE, payload);
  return data;
};

export const articleFavoriteDeleteRequest = async (
  id: string
): Promise<TArticleFavoriteResponse> => {
  const response = await api.delete(`${ARTICLE_FAVORITE}/${id}`);
  return response.data; // Mengembalikan data dari respons API
};

export const articleFavoriteGetRequest = async (
  page: number,
  limit: number,
  search: string
): Promise<TArticleResponse> => {
  const { data } = await api.get(
    `${ARTICLE_FAVORITE}?page=${page}&limit=${limit}&search=${search}&sort_by=TITLE`
  );
  return data;
};
