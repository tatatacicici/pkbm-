// # IMPORT UNTUK NANTI WAKTU DINAMIS #
// import {
//   LIBRARY,
//   LIBRARY_FAVORITE,
//   LIBRARY_FILTER,
//   LIBRARY_RELATED,
// } from '@kampus-gratis/utils';
import {
  ARTICLE,
  ARTICLE_FAVORITE,
  ARTICLE_FILTER,
  ARTICLE_RELATED,
} from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import {
  TAllLibraryResponse,
  TLibraryFavoritePayload,
  TLibraryFavoriteResponse,
  TLibraryResponse,
} from '../../types/library';

import { TDetailArticleResponse } from '../../types/articlesDetail';

export const libraryGetRequest = async (
  page: number,
  limit: number,
  search: string
): Promise<TLibraryResponse> => {
  const { data } = await api.get(
    `${ARTICLE_FILTER}?page=${page.toString()}&limit=${limit.toString()}&search=${search}&sort_by=TITLE&type=newest`
    // `${LIBRARY_FILTER}?page=${page.toString()}&limit=${limit.toString()}&search=${search}&sort_by=TITLE&type=newest`
  );
  return data;
};

export const libraryGetRequestInfinite = async ({
  pageParam,
  search = '',
}: {
  pageParam: number;
  search: string;
}): Promise<TLibraryResponse> => {
  const { data } = await api.get(
    `/v1/library/filter?page=${pageParam}&limit=8&type=newest&search=${search}`
  );

  return data;
};

export const libraryFavorieGetRequestInfinite = async ({
  pageParam,
  search = '',
}: {
  pageParam: number;
  search: string;
}): Promise<TLibraryResponse> => {
  const { data } = await api.get(
    `/v1/library/favorite?page=${pageParam}&limit=8&search=${search}`
  );

  return data;
};

export const allLibraryGetRequest = async (): Promise<TAllLibraryResponse> => {
  const { data } = await api.get(`/v1/library`);
  return data;
};

// TODO | BIARIN DULU BAGIAN INI start
export const libraryDetailGetRequest = async (
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

export const libraryRelatedGetRequest = async (
  id: string,
  limit: number
): Promise<TDetailArticleResponse> => {
  const response = await api.get(`${ARTICLE_RELATED}/${id}?limit=${limit}`);
  return response.data;
};
// TODO | BIARIN DULU BAGIAN INI end

export const libraryFavoriteRequest = async (
  payload: TLibraryFavoritePayload
): Promise<TLibraryFavoriteResponse> => {
  const { data } = await api.post(ARTICLE_FAVORITE, payload);
  // const { data } = await api.post(LIBRARY_FAVORITE, payload);
  return data;
};

export const libraryFavoriteDeleteRequest = async (
  id: string
): Promise<TLibraryFavoriteResponse> => {
  const response = await api.delete(`${ARTICLE_FAVORITE}/${id}`);
  // const response = await api.delete(`${LIBRARY_FAVORITE}/${id}`);
  return response.data; // Mengembalikan data dari respons API
};

export const libraryFavoriteGetRequest = async (
  page: number,
  limit: number,
  search: string
): Promise<TLibraryResponse> => {
  const { data } = await api.get(
    `${ARTICLE_FAVORITE}?page=${page}&limit=${limit}&search=${search}&sort_by=TITLE`
    // `${LIBRARY_FAVORITE}?page=${page}&limit=${limit}&search=${search}&sort_by=TITLE`
  );
  return data;
};
