import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { TUsersResponses } from '../../../types';
import { deleteUserRequest } from './request';

export const useDeleteUser = (): UseMutationResult<
  TUsersResponses,
  TMetaErrorResponse,
  string
> => {
  return useMutation({
    mutationKey: ['delete-user'],
    mutationFn: async (id: string) => await deleteUserRequest(id),
  });
};
