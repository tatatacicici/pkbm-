import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TEditUserPayload } from './type';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { editUserRequest } from './request';

export const useEditUser = (
  id: string | string[]
): UseMutationResult<TEditUserPayload, TMetaErrorResponse, unknown> => {
  return useMutation({
    mutationKey: ['edit-user', id],
    mutationFn: async (payload) => await editUserRequest(payload, id),
  });
};
