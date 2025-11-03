import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TMetaErrorResponse } from '../../../types/Meta';
import { TAddUserPaylod } from './type';
import { addUserRequest } from './request';

export const useAddUser = (): UseMutationResult<
  TAddUserPaylod,
  TMetaErrorResponse,
  unknown
> => {
  return useMutation({
    mutationKey: ['add-user'],
    mutationFn: async (payload) => await addUserRequest(payload),
  });
};
