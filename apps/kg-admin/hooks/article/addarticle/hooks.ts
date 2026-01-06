import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TArticleResponse, TCreateArticlePayload } from './type';
import { CreateArticle } from './request';
import { useAtom } from 'jotai';
import { PopupSuccesAddArticleAtom } from '../../../store/article';

export const useCreateArticle = (): UseMutationResult<
  TCreateArticlePayload,
  TArticleResponse,
  //   TMetaErrorResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['create-article'],
    mutationFn: async (payload) => await CreateArticle(payload),
  });
};

type TReturnTypes = {
  setSuccesStatus: (val: boolean) => void;
  getSuccesStatus: boolean;
};
export const usePopUpSuccesAddArticle = (): TReturnTypes => {
  const [get, set] = useAtom(PopupSuccesAddArticleAtom);
  return {
    setSuccesStatus: (val) => set(val),
    getSuccesStatus: get,
  };
};
