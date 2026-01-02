import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { articleDataStateAtom, PopupDeleteOpenArticleAtom } from '../../store/article';
import { useAtom } from 'jotai';
import { articleRequest } from './request';
import { TArticleResponse } from '../../../kg-admin/types';

export const useArticle = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TArticleResponse> => {
  return useQuery({
    queryKey: ['get-article', page],
    queryFn: async () => await articleRequest(page, limit, search),
  });
};

export const useArticleData = () => {
  const [get, set] = useAtom(articleDataStateAtom);

  return {
    getArticleData: get as any,
    setArticleData: (val: any) => set(val),
  };
};

type TReturnTypes = {
  setDeleteStatus: (val: boolean) => void;
  getDeleteStatus: boolean;
};

export const usePopUpDeleteArticle = (): TReturnTypes => {
  const [get, set] = useAtom(PopupDeleteOpenArticleAtom);
  return {
    setDeleteStatus: (val) => set(val),
    getDeleteStatus: get,
  };
};
