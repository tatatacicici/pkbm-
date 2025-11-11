import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { eventHistoryGetRequest } from './api';
import { TEventResponse } from '../../../../kg/types/acarakampus';
import { TMetaErrorResponse } from '@kampus-gratis/utils';

export const useGetEventHistory = (): UseQueryResult<
  TEventResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['event-get-history'],
    queryFn: async () => await eventHistoryGetRequest(),
  });
