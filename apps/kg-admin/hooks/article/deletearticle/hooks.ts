import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TArticleResponse } from '../../../types';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { DeleteArticle } from './request';

export const useDeleteArticle = (): UseMutationResult<
  TArticleResponse,
  TMetaErrorResponse,
  string
> => {
  return useMutation({
    mutationKey: ['delete-article'],
    mutationFn: async (id: string) => await DeleteArticle(id),
  });
};
