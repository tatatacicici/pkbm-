import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TArticleResponse, TCreateArticlePayload } from './type';
import { CreateArticle } from './request';
import { useRecoilState } from 'recoil';
import { PopupSuccesAddArticle } from './atom';

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
  const [get, set] = useRecoilState(PopupSuccesAddArticle);
  return {
    setSuccesStatus: (val) => set(val),
    getSuccesStatus: get,
  };
};
