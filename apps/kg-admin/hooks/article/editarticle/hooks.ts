import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  EditArticleRequest,
  getArticleBySlug,
} from '../../article/editarticle/request';
import {
  TArticleResponse,
  TArticleSlugResponse,
  articleDataBySlug,
  articleSlugResponse,
} from '../../../../kg-admin/types';
import { useRecoilState } from 'recoil';
import { PopupDeleteEditArticle } from './atom';
import { TEditArticlePayload } from './type';
import { TMetaErrorResponse } from '@kampus-gratis/utils';

export const useEditArticle = (
  id: string
): UseMutationResult<
  TArticleSlugResponse,
  TMetaErrorResponse,
  TEditArticlePayload
> => {
  return useMutation({
    mutationKey: ['update-discussion', id],
    mutationFn: async (payload) => await EditArticleRequest(id, payload),
  });
};

export const useGetArticleBySlug = (
  slug: string | string[]
): UseQueryResult<TArticleSlugResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-article', slug],
    queryFn: async () => await getArticleBySlug(slug),
    staleTime: Infinity,
  });
};

type TReturnTypes = {
  setEditStatus: (val: boolean) => void;
  getEditStatus: boolean;
};
export const usePopUpEditArticle = (): TReturnTypes => {
  const [get, set] = useRecoilState(PopupDeleteEditArticle);
  return {
    setEditStatus: (val) => set(val),
    getEditStatus: get,
  };
};
