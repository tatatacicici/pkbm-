import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TSubjectSessionsResponse } from '../../../types/subjectDetails';
import { subjectDetailsGetRequest } from './request';

export const useGetSubjectDetailsById = (
  id: string | number
): UseQueryResult<TSubjectSessionsResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['subject-details-get', id],
    queryFn: async () => await subjectDetailsGetRequest(id),
  });
