import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TJobConstanstResponse } from '../../../types/penyalurankerja';
import { jobConstantsSidebar } from './api';

export const useJobConstants = (): UseQueryResult<
  TJobConstanstResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['get-penyalurankerja'],
    queryFn: async () => await jobConstantsSidebar(),
  });
