import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TUserDataById } from '../../../types';
import { TMetaErrorResponse } from '../../../types/Meta';
import { getAdministrationId } from './request';

export const useAdministrationrById = (
  id: string | string[]
): UseQueryResult<TUserDataById, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-userAdmin-ById', id],
    queryFn: async () => await getAdministrationId(id),
    staleTime: Infinity,
  });
};
