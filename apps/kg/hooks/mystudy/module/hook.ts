import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import {
  PopupModalConfirmModul,
  confirmModuleState,
} from '../../../recoil/atoms/module-content';
import {
  ConfirmModulTypes,
  TModuleContentResponse,
  TModuleResponse,
  TModuleResumePayload,
  TModuleResumeResponse,
  TWatchedVideoProgressReponse,
  TusePopupConfirmModul,
} from '../../../types/module-content';
import {
  moduleContentGetRequest,
  moduleGetRequest,
  moduleResumeSubmitRequest,
  watchedVideoProgressRequest,
} from './request';

export const useConfirmModul = (): ConfirmModulTypes => {
  const [getConfirm, setConfirm] = useRecoilState(confirmModuleState);
  return {
    setConfirmModul: (val: boolean) => setConfirm(val),
    getConfirmModul: getConfirm,
  };
};

export const useGetModuleById = (
  subject_id: string | number,
  session_id: string | number
): UseQueryResult<TModuleResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['module-get', subject_id, session_id],
    queryFn: async () => await moduleGetRequest(subject_id, session_id),
  });

export const usePopupConfirmModul = (): TusePopupConfirmModul => {
  const [get, set] = useRecoilState(PopupModalConfirmModul);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};

export const useGetModuleContentById = (
  subject_id: string | number,
  session_id: string | number,
  module_id: string | number
): UseQueryResult<TModuleContentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['module-content-get', subject_id, session_id, module_id],
    queryFn: async () => await moduleContentGetRequest(subject_id, session_id, module_id),
  });

export const useWatchedVideoSubmitById = (): UseMutationResult<
  TWatchedVideoProgressReponse,
  TMetaErrorResponse,
  string,
  unknown
> =>
  useMutation({
    mutationKey: ['module-watched-video-progress'],
    mutationFn: async (videoId) => await watchedVideoProgressRequest(videoId),
  });

export const useSubmitModuleResumeById = (): UseMutationResult<
  TModuleResumeResponse,
  TMetaErrorResponse,
  TModuleResumePayload,
  unknown
> =>
  useMutation({
    mutationKey: ['submit-module-resume'],
    mutationFn: async (payload) => await moduleResumeSubmitRequest(payload),
  });
