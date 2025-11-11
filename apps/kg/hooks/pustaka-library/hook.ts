'use client';

import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import {
  TLibraryFavoritePayload,
  TLibraryResponse,
  TuseLibraryData,
  TuseLibraryFavoriteData,
} from '../../types/library';
import {
  allLibraryGetRequest,
  libraryDetailGetRequest,
  libraryFavoriteDeleteRequest,
  libraryFavoriteGetRequest,
  libraryFavoriteRequest,
  libraryGetRequest,
  libraryRelatedGetRequest,
} from './request';
import { useRecoilState } from 'recoil';
import {
  libraryDataState,
  libraryFavoriteDataState,
} from '../../recoil/atoms/library';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';

import { TDetailArticleResponse } from '../../types/articlesDetail';

export const useGetLibrary = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TLibraryResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['library-get', page, limit],
    queryFn: async () => await libraryGetRequest(page, limit, search),
  });

export const useGetAllLibrary = (): UseQueryResult<
  TLibraryResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['get-all-library'],
    queryFn: async () => await allLibraryGetRequest(),
  });

export const useLibraryData = (): TuseLibraryData => {
  const [get, set] = useRecoilState(libraryDataState);
  return {
    getLibraryData: get,
    setLibraryData: (val) => set(val),
  };
};

export const useGetLibraryDetail = (slug: string) => {
  const router = useRouter();

  return useQuery(['library-detail', slug], async () => {
    try {
      const response = await libraryDetailGetRequest(slug);
      if (response) {
        return response; // Return the response data if it exists
      } else {
        router.push('/pustaka-library');
      }
    } catch (error) {
      router.push('/pustaka-library');
    }
  });
};

export const useGetLibraryRelated = (
  id: string,
  limit: number
): UseQueryResult<TDetailArticleResponse, TMetaErrorResponse> => {
  return useQuery(['library-related', id, limit], async () => {
    if (!id) return null;
    try {
      const response = await libraryRelatedGetRequest(id, limit);
      // console.log(response);
      return response.data;
    } catch (error) {
      return null; // Mengembalikan null jika terjadi kesalahan
    }
  });
};

export const useFavoriteLibrary = (): UseMutationResult<
  TLibraryResponse,
  TMetaErrorResponse,
  TLibraryFavoritePayload
> => {
  return useMutation({
    mutationKey: ['library-favorite-post'],
    mutationFn: async (payload) => await libraryFavoriteRequest(payload),
  });
};

export const useFavoriteLibraryDelete = (): UseMutationResult<
  TLibraryResponse,
  TMetaErrorResponse,
  { library_id: string }
> => {
  return useMutation({
    mutationKey: ['library-favorite-delete'],
    mutationFn: async ({ library_id }) =>
      await libraryFavoriteDeleteRequest(String(library_id)),
  });
};

export const useGetLibraryFavorite = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TLibraryResponse, TMetaErrorResponse> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['library-get-favorite', page, limit],
    queryFn: async () => {
      const response = await libraryFavoriteGetRequest(page, limit, search);
      return response;
    },
  });
};

export const useLibraryFavoriteData = (): TuseLibraryFavoriteData => {
  const [get, set] = useRecoilState(libraryFavoriteDataState);
  return {
    getLibraryFavoriteData: get,
    setLibraryFavoriteData: (val) => set(val),
  };
};
