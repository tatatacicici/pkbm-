import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { asigmentGetRequest } from '../../hooks/assigment/request';
import { TMyAssignmentResponse } from '../../types/assigment';

export const useGetAssignment = (): UseQueryResult<TMyAssignmentResponse> =>
  useQuery({
    queryKey: ['get-assignment-user'],
    queryFn: async () => await asigmentGetRequest(),
  });
