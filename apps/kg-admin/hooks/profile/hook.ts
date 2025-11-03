'use client';

import {
  UseQueryResult,
  useQuery,
} from '@tanstack/react-query';
import { useSession } from 'next-auth/react';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { TUserDetailResponse } from '../../types/profile';
import { profileRequest } from './request';

export const useProfile = (): UseQueryResult<
  TUserDetailResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-user-me'],
    queryFn: async () => await profileRequest(),
  });
};
