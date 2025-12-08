import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  TFacultyResponse,
  TMajorEnrollResponse,
  TMajorResponse,
  TStudentSubjectContractResponse,
  TStudentSubjectPlanPayload,
  TStudentSubjectPlanResponse,
  TuseMajorContractData,
} from '../../types/study-plan';
import { useSession } from 'next-auth/react';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  facultyRequest,
  majorContractRequest,
  majorEnrollRequest,
  majorGetByIdRequest,
  studentSubjectDeletePlanRequest,
  studentSubjectPengajuanRequest,
  studentSubjectPlanRequest,
  studentSubjectSendDraftRequest,
} from './request';
import { useRecoilState } from 'recoil';
import {
  PopupModalAddStudy,
  PopupModalConfirmCard,
  PopupModalConfirmStatus,
  PopupModalSuccessConversi,
  dataMajorContractState,
} from '../../recoil/atoms/study-plan';

export const useFaculty = (): UseQueryResult<
  TFacultyResponse,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-faculty'],
    queryFn: async () => await facultyRequest(),
  });
};

export const useMajorById = (
  id: string | number
): UseQueryResult<TMajorResponse, TMetaErrorResponse> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-major-by-id', id],
    queryFn: async () => await majorGetByIdRequest(id as string),
  });
};

export const useMajorContract = (
  id: string
): UseQueryResult<TStudentSubjectContractResponse, TMetaErrorResponse> => {
  const { data: session } = useSession();
  return useQuery({
    enabled: !!session,
    queryKey: ['get-major-contract', id],
    queryFn: async () => await majorContractRequest(id),
  });
};

export const useStudentSubjectPlan = (): UseMutationResult<
  TStudentSubjectPlanResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-student-subject-plan'],
    mutationFn: async (id) => await studentSubjectPlanRequest(id),
  });
};

export const useStudentSubjectDeletePlan = (): UseMutationResult<
  TStudentSubjectPlanResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['delete-student-subject-plan'],
    mutationFn: async (id) => await studentSubjectDeletePlanRequest(id),
  });
};

export const useStudentSubjectSendDraft = (): UseMutationResult<
  TStudentSubjectPlanResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-student-send-draft'],
    mutationFn: async () => await studentSubjectSendDraftRequest(),
  });
};

export const useStudentSubjectPengajuan = (): UseQueryResult<
  TStudentSubjectPlanResponse,
  TMetaErrorResponse
> => {
  return useQuery({
    queryKey: ['get-subject-pengajuan'],
    queryFn: async () => await studentSubjectPengajuanRequest(),
  });
};

export const useDataMajorContract = (): TuseMajorContractData => {
  const [get, set] = useRecoilState(dataMajorContractState);

  return {
    getMajorContractData: get,
    setMajorContractData: (val) => set(val),
  };
};

export const useMajorEnroll = (): UseMutationResult<
  TMajorEnrollResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  // const { data: session } = useSession();
  return useMutation({
    mutationKey: ['post-major-enroll'],
    mutationFn: async (id) => await majorEnrollRequest(id),
  });
};

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupConfirmCardStudy = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalConfirmCard);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};

type ReturnType = {
  setPopupSuccess: (val: boolean) => void;
  getPopupSuccess: boolean;
};

export const usePopupSucces = (): ReturnType => {
  const [get, set] = useRecoilState(PopupModalSuccessConversi);
  return {
    setPopupSuccess: (val: boolean) => set(val),
    getPopupSuccess: get,
  };
};

type ReturnTypeAddStudy = {
  setPopupAdd: (val: boolean) => void;
  getPopupAdd: boolean;
};

export const usePopupAddStudy = (): ReturnTypeAddStudy => {
  const [get, set] = useRecoilState(PopupModalAddStudy);
  return {
    setPopupAdd: (val: boolean) => set(val),
    getPopupAdd: get,
  };
};

type ReturnTypesConfirm = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupConfirmStatus = (): ReturnTypesConfirm => {
  const [get, set] = useRecoilState(PopupModalConfirmStatus);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};
