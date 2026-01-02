import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { useAtom } from 'jotai';
import {
  AdministrationStatusStateAtom,
  AdministrationStudentRoleModalStateAtom,
  AdministrationStudentRoleStateAtom,
  FacultyInformationStateAtom,
  SocialMediaInformationStateAtom,
  FileInformationStateAtom,
  JobInformationStateAtom,
  PrivateInformationStateAtom,
} from '../../store/administration';
import {
  TBiodataAdm,
  TBiodataResponse,
  TConstantsResponse,
  TFacultyAdm,
  TFamilyAdm,
  TFamilyResponse,
  TFileAdm,
  TFileResponse,
  TGetAdmResponse,
  TReturnFacultyInformation,
  TReturnSocialMediaInformation,
  TStatusReturnAdministration,
  TStatusReturnAdministrationStudentRole,
  TTeacherRegistrationPayload,
  TReturnFileInformation,
  TReturnJobInformation,
  TReturnPrivateInformation,
  TSocialMediaPayload,
} from '../../types/administration';
import {
  constantsRequest,
  facultyInformationRequest,
  familyInformationRequest,
  fileInformationRequest,
  getAdmRequest,
  privateInformationRequest,
  socialMediaRequest,
  teacherRegistrationRequest
} from './request';

export const useAdministrationStudentRoleModal = () => {
  const [get, set] = useAtom(AdministrationStudentRoleModalStateAtom);
  return {
    setAdministrationStudentRoleModal: (val: boolean) => set(val),
    getAdministrationStudentRoleModal: get,
  };
};

export const useAdministrationStudentRole =
  (): TStatusReturnAdministrationStudentRole => {
    const [get, set] = useAtom(AdministrationStudentRoleStateAtom);
    return {
      setAdministrationStudentRole: (val: 'REGULAR' | 'BOOTCAMP') => set(val),
      getAdministrationStudentRole: get,
    };
  };

export const useAdministrationStatus = (): TStatusReturnAdministration => {
  const [getStatus, setStatus] = useAtom(AdministrationStatusStateAtom);
  return {
    setAdministrationStatus: (val: string) => setStatus(val),
    getAdministrationStatus: getStatus,
  };
};

export const useFacultyInformationStatus = (): TReturnFacultyInformation => {
  const [get, set] = useAtom(FacultyInformationStateAtom);
  return {
    setFacultyStatus: (val: boolean) => set(val),
    getFacultyStatus: get,
  };
};

export const useSocialMediaInformationStatus = (): TReturnSocialMediaInformation => {
  const [get, set] = useAtom(SocialMediaInformationStateAtom);
  return {
    setSocialMediaStatus: (val: boolean) => set(val),
    getSocialMediaStatus: get,
  };
};

export const useGetAllAdministration = (): UseQueryResult<
  TGetAdmResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['get-all-administration'],
    queryFn: async () => await getAdmRequest(),
  });

export const usePrivateInformation = (): UseMutationResult<
  TBiodataResponse,
  TMetaErrorResponse,
  TBiodataAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ['private-information-post'],
    mutationFn: async (payload) => await privateInformationRequest(payload),
  });
};

export const useFamilyInformation = (): UseMutationResult<
  TFamilyResponse,
  TMetaErrorResponse,
  TFamilyAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ['family-information-post'],
    mutationFn: async (payload) => await familyInformationRequest(payload),
  });
};

export const useFacultyInformation = (): UseMutationResult<
  TFamilyResponse,
  TMetaErrorResponse,
  TFacultyAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ['faculty-information-post'],
    mutationFn: async (payload) => await facultyInformationRequest(payload),
  });
};

export const useFileInformation = (): UseMutationResult<
  TFileResponse,
  TMetaErrorResponse,
  TFileAdm,
  unknown
> => {
  return useMutation({
    mutationKey: ['file-information-post'],
    mutationFn: async (payload) => await fileInformationRequest(payload),
  });
};

export const useConstants = (): UseQueryResult<TConstantsResponse> =>
  useQuery({
    queryKey: ['get-constants-adm'],
    queryFn: async () => await constantsRequest(),
  });

export const usePrivateInformationStatus = (): TReturnPrivateInformation => {
  const [get, set] = useAtom(PrivateInformationStateAtom);
  return {
    setPrivateStatus: (val: boolean) => set(val),
    getPrivateStatus: get,
  };
};

export const useJobInformationStatus = (): TReturnJobInformation => {
  const [get, set] = useAtom(JobInformationStateAtom);
  return {
    setJobStatus: (val: boolean) => set(val),
    getJobStatus: get,
  };
};

export const useFileInformationStatus = (): TReturnFileInformation => {
  const [getStatus, setStatus] = useAtom(FileInformationStateAtom);
  return {
    setFileStatus: (val: boolean) => setStatus(val),
    getFileStatus: getStatus,
  };
};

export const useTeacherRegistration = (): UseMutationResult<
  TFileResponse,
  TMetaErrorResponse,
  TTeacherRegistrationPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['teacher-registration-post'],
    mutationFn: async (payload) => await teacherRegistrationRequest(payload),
  });
}

export const useSocialMediaInformation = (): UseMutationResult<
  TSocialMediaPayload,
  TMetaErrorResponse,
  TSocialMediaPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['social-media-put'],
    mutationFn: async (payload: TSocialMediaPayload) =>
      await socialMediaRequest(payload),
  });
};
