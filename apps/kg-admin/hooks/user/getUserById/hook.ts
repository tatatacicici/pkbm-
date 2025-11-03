import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TUserByIdResponse } from './type';
import { UserByIdRequest } from './request';

export const useGetUserById = (
  id: string | string[]
): UseQueryResult<TUserByIdResponse> => {
  return useQuery({
    queryKey: ['get-user-by-Id'],
    queryFn: async () => await UserByIdRequest(id),
    staleTime: Infinity,
  });
};
