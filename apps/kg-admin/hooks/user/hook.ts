import { TUserDataResponse } from '../../types';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TMetaErrorResponse } from '../../types/Meta';
import { allUserRequest, userRequest } from './request';

export const useUser = (
  page: number,
  limit: number,
  search: string,
  role: string
): UseQueryResult<TUserDataResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-userAdmin', page, role],
    queryFn: async () => await userRequest(page, limit, search, role),
    staleTime: Infinity,
  });
};

export const useAllUser = (): UseQueryResult<
  TUserDataResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['get-user-all'],
    queryFn: async () => await allUserRequest(),
    staleTime: Infinity,
  });
};
