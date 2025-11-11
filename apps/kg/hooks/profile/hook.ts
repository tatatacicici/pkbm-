'use client';

import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { signOut, useSession } from 'next-auth/react';
import {
  TAvatarPayload,
  TAvatarResponse,
  TPasswordPayload,
  TPasswordResponse,
  TProfilePayload,
  TUserCompletePayload,
  TUserDetailResponse,
} from '../../types/profile';
import {
  DeleteAccount,
  UpdateAvatarProfile,
  UpdatePassword,
  UpdateUserProfile,
  profileCompleteRequest,
  profileRequest,
} from './request';

export const useProfile = (): UseQueryResult<
  TUserDetailResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  // const session = async () => {
  //   const sessionTemp = await getSession();
  //   return sessionTemp;
  // };

  return useQuery({
    enabled: !!session,
    queryKey: ['get-user-me'],
    queryFn: async () => await profileRequest(),
  });
};

export const useProfileComplete = (): UseQueryResult<
  TUserCompletePayload,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  // const session = async () => {
  //   const sessionTemp = await getSession();
  //   return sessionTemp;
  // };
  return useQuery({
    enabled: !!session,
    queryKey: ['get-user-complete'],
    queryFn: async () => await profileCompleteRequest(),
  });
};

export const useUpdateUserProfile = (): UseMutationResult<
  TUserDetailResponse,
  TMetaErrorResponse,
  TProfilePayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['update-user-profile'],
    mutationFn: async (payload) => await UpdateUserProfile(payload),
  });
};

export const useUpdateAvatar = (): UseMutationResult<
  TAvatarResponse,
  TMetaErrorResponse,
  TAvatarPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['update-avatar-profile'],
    mutationFn: async (payload) => await UpdateAvatarProfile(payload),
  });
};

export const useUpdatePassword = (): UseMutationResult<
  TPasswordResponse,
  TMetaErrorResponse,
  TPasswordPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['update-password'],
    mutationFn: async (payload) => await UpdatePassword(payload),
  });
};

export const useDeleteAccount = (): UseMutationResult<
  { message: string },
  TMetaErrorResponse,
  void,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-account'],
    mutationFn: async () => await DeleteAccount(),
    onSuccess: async () => {
      await signOut({ callbackUrl: '/auth/farewell' });
    },
  });
};
