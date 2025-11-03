import { useRecoilState } from 'recoil';
import { PopupModalSuccessOpen } from './atom';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { eventGetByIdRequest, registerEventRequest } from './api';
import {
  TEventResponse,
  TRegisterEventPayload,
  TRegisterEventResponse,
} from '../../../types/acarakampus';

type TReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};
export const usePopupEvent = (): TReturnTypes => {
  const [get, set] = useRecoilState(PopupModalSuccessOpen);
  return {
    setPopupStatus: (val) => set(val),
    getPopupStatus: get,
  };
};

export const useGetEventById = (
  id: string | string[]
): UseQueryResult<TEventResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['event-get-by-id', id],
    queryFn: async () => await eventGetByIdRequest(id),
    staleTime: Infinity,
  });

export const useRegisterEvent = (): UseMutationResult<
  TRegisterEventResponse,
  TMetaErrorResponse,
  TRegisterEventPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['event-register'],
    mutationFn: async (payload) => await registerEventRequest(payload),
  });
};
