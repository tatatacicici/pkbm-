import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TMetaErrorResponse } from '../../../../types/Meta';
import { TGetRolesId } from './type';
import { getAllRole } from './request';

export const useAllRole = (): UseQueryResult<
  TGetRolesId,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['role-user'],
    queryFn: async () => await getAllRole(),
    staleTime: Infinity,
  });
};
