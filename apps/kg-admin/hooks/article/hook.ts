import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { articleDataState } from '../../recoil/atoms/article';
import { useRecoilState } from 'recoil';
import { articleRequest } from './request';
import { TArticleResponse } from '../../../kg-admin/types';
import { PopupDeleteOpenArticle } from './atom';

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
  const [get, set] = useRecoilState(articleDataState);

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
  const [get, set] = useRecoilState(PopupDeleteOpenArticle);
  return {
    setDeleteStatus: (val) => set(val),
    getDeleteStatus: get,
  };
};
