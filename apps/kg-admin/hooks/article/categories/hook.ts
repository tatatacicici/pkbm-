import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { categoriesRequest } from './request';
import { TCategoriesResponse } from '../../../types';

export const useCategories = (): UseQueryResult<TCategoriesResponse> => {
  return useQuery({
    queryKey: ['get-categories'],
    queryFn: async () => await categoriesRequest(),
    staleTime: Infinity,
  });
};
