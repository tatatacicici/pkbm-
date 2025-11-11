import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { eventRegisteredGetRequest } from './api';
import { TEventResponse } from '../../../types/acarakampus';
import { TMetaErrorResponse } from '@kampus-gratis/utils';

export const useGetEventRegistered = (): UseQueryResult<
  TEventResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['event-get-registered'],
    queryFn: async () => await eventRegisteredGetRequest(),
  });
