'use client';

import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import {
  TArticleFavoritePayload,
  TArticleResponse,
  TuseArticleData,
  TuseArticleFavortieData,
} from '../../types/articles';
import {
  allArticleGetRequest,
  articleDetailGetRequest,
  articleFavoriteDeleteRequest,
  articleFavoriteGetRequest,
  articleFavoriteRequest,
  articleGetRequest,
  articleRelatedGetRequest,
} from './request';
import { useRecoilState } from 'recoil';
import {
  articleDataState,
  articleFavoriteDataState,
} from '../../recoil/atoms/article';
import { TDetailArticleResponse } from '../../types/articlesDetail';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

export const useGetArticle = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TArticleResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['article-get', page, limit],
    queryFn: async () => await articleGetRequest(page, limit, search),
  });

export const useGetAllArticle = (): UseQueryResult<
  TArticleResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['get-all-articles'],
    queryFn: async () => await allArticleGetRequest(),
  });

export const useArticleData = (): TuseArticleData => {
  const [get, set] = useRecoilState(articleDataState);
  return {
    getArticleData: get,
    setArticleData: (val) => set(val),
  };
};

export const useGetArticleDetail = (slug: string) => {
  const router = useRouter();

  return useQuery(['article-detail', slug], async () => {
    try {
      const response = await articleDetailGetRequest(slug);
      if (response) {
        return response; // Return the response data if it exists
      } else {
        router.push('/sekilas-ilmu');
      }
    } catch (error) {
      router.push('/sekilas-ilmu');
    }
  });
};

export const useGetArticleRelated = (
  id: string,
  limit: number
): UseQueryResult<TDetailArticleResponse, TMetaErrorResponse> => {
  return useQuery(['article-related', id, limit], async () => {
    if (!id) return null;
    try {
      const response = await articleRelatedGetRequest(id, limit);
      // console.log(response);
      return response.data;
    } catch (error) {
      return null; // Mengembalikan null jika terjadi kesalahan
    }
  });
};

export const useFavoriteArticle = (): UseMutationResult<
  TArticleResponse,
  TMetaErrorResponse,
  TArticleFavoritePayload
> => {
  return useMutation({
    mutationKey: ['article-favorite-post'],
    mutationFn: async (payload) => await articleFavoriteRequest(payload),
  });
};

export const useFavoriteArticleDelete = (): UseMutationResult<
  TArticleResponse,
  TMetaErrorResponse,
  { article_id: string }
> => {
  return useMutation({
    mutationKey: ['article-favorite-delete'],
    mutationFn: async ({ article_id }) =>
      await articleFavoriteDeleteRequest(String(article_id)),
  });
};

export const useGetArticleFavorite = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TArticleResponse, TMetaErrorResponse> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['article-get-favorite', page, limit],
    queryFn: async () => {
      const response = await articleFavoriteGetRequest(page, limit, search);
      return response;
    },
  });
};

export const useArticleFavoriteData = (): TuseArticleFavortieData => {
  const [get, set] = useRecoilState(articleFavoriteDataState);
  return {
    getArticleFavoriteData: get,
    setArticleFavoriteData: (val) => set(val),
  };
};
