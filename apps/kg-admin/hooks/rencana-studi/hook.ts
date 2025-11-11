import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  TAddFacultyPayload,
  TAddMajorPayload,
  TAddSubjectPayload,
  TFacultyDetailResponse,
  TFacultyResponse,
  TMajorDetailResponse,
  TMajorResponse,
  TSubjectDetailResponse,
  TSubjectResponse,
  TUpdateFacultyPayload,
  TUpdateMajorPayload,
  TUpdateSubjectPayload,
  TuseFacultyData,
  TuseMajorData,
  TuseSubjectData,
} from '../../types/rencatastudi';
import {
  deleteFacultyRequest,
  deleteMajorRequest,
  deleteSubjectRequest,
  getAllMajorRequest,
  getFacultyPaginationRequest,
  getFacultyRequest,
  getMajorPaginationRequest,
  getMajorRequest,
  getSubjectRequest,
  getSubjectWithPaginationRequest,
  postFacultyRequest,
  postMajorRequest,
  postSubjectRequest,
  putFacultyRequest,
  putMajorRequest,
  putSubjectRequest,
} from './request';
import { useRecoilState } from 'recoil';
import {
  facultyDataState,
  majorDataState,
  subjectDataState,
} from '../../recoil/atoms/rencana-studi';
import { TMetaErrorResponse } from '../../types/Meta';

export const useGetFacultyWithPagination = (
  page:number,
  limit: number,
  search: string
): UseQueryResult<TFacultyResponse> => {
  return useQuery({
    queryKey: ['get-faculty-pagination', page, limit, search],
    queryFn: async () => await getFacultyPaginationRequest(page, limit, search),
  });
};

export const useGetFaculty = (
): UseQueryResult<TFacultyResponse> => {
  return useQuery({
    queryKey: ['get-faculty'],
    queryFn: async () => await getFacultyRequest(),
  });
};

export const useFacultyData = (): TuseFacultyData => {
  const [get, set] = useRecoilState(facultyDataState);
  return {
    getFacultyData: get,
    setFacultyData: (val) => set(val),
  };
};

export const usePostFaculty = (): UseMutationResult<
  TFacultyDetailResponse,
  TMetaErrorResponse,
  TAddFacultyPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-faculty'],
    mutationFn: async (payload) => await postFacultyRequest(payload),
  });
};

export const usePutFaculty = (
  id: string
): UseMutationResult<
  TFacultyDetailResponse,
  TMetaErrorResponse,
  TUpdateFacultyPayload,
  unknown
> => {
  console.log(id);

  return useMutation({
    mutationKey: ['put-faculty', id],
    mutationFn: async (payload) => await putFacultyRequest(id, payload),
  });
};

// export const usePostFaculty = (): any => {
//   return useMutation({
//     mutationKey: ['post-faculty'],
//     mutationFn: async (payload: TAddFacultyPayload) => await postFacultyRequest(payload),
//   });
// }

export const useDeleteFaculty = (): any => {
  return useMutation({
    mutationKey: ['delete-faculty'],
    mutationFn: async (faculty_id: string) =>
      await deleteFacultyRequest(faculty_id),
  });
};

export const useGetMajor = (id: string): UseQueryResult<TMajorResponse> => {
  return useQuery({
    queryKey: ['get-major-id', id],
    queryFn: async () => await getMajorRequest(id),
  });
};

export const useGetAllMajor = (): UseQueryResult<TMajorResponse> => {
  return useQuery({
    queryKey: ['get-major'],
    queryFn: async () => await getAllMajorRequest(),
  });
};

export const useGetAllMajorPagination = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TMajorResponse> => {
  return useQuery({
    queryKey: ['get-all-major', page, limit, search],
    queryFn: async () => await getMajorPaginationRequest(page, limit, search),
  });
}



export const usePostMajor = (): UseMutationResult<
  TMajorDetailResponse,
  TMetaErrorResponse,
  TAddMajorPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-major'],
    mutationFn: async (payload) => await postMajorRequest(payload),
  });
};

export const usePutMajor = (
  major_id: string
): UseMutationResult<
  TMajorDetailResponse,
  TMetaErrorResponse,
  TUpdateMajorPayload,
  unknown
> => {
  console.log(major_id);
  return useMutation({
    mutationKey: ['put-major', major_id],
    mutationFn: async (payload) => await putMajorRequest(major_id, payload),
  });
};

export const useDeleteMajor = (): any => {
  return useMutation({
    mutationKey: ['delete-major'],
    mutationFn: async (major_id: string) =>
      await deleteMajorRequest(major_id),
  });
};

export const useMajorData = (): TuseMajorData => {
  const [get, set] = useRecoilState(majorDataState);
  return {
    getMajorData: get,
    setMajorData: (val) => set(val),
  };
};

export const useGetSubject = (): UseQueryResult<TSubjectResponse> => {
  return useQuery({
    queryKey: ['get-subject'],
    queryFn: async () => await getSubjectRequest(),
  });
};

export const useGetSubjectWithPagination = (
  page: number,
  limit: number,
  search: string
): UseQueryResult<TSubjectResponse> => {
  return useQuery({
    queryKey: ['get-subject-pagination', page, limit, search],
    queryFn: async () => await getSubjectWithPaginationRequest(page, limit, search),
  });
};

export const useSubjectData = (): TuseSubjectData => {
  const [get, set] = useRecoilState(subjectDataState);
  return {
    getSubjectData: get,
    setSubjectData: (val) => set(val),
  };
};

export const usePostSubject = (): UseMutationResult<
  TSubjectDetailResponse,
  TMetaErrorResponse,
  TAddSubjectPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-subject'],
    mutationFn: async (payload) => await postSubjectRequest(payload),
  });
};

export const usePutSubject = (
  major_id: string
): UseMutationResult<
  TSubjectDetailResponse,
  TMetaErrorResponse,
  TUpdateSubjectPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['put-subject', major_id],
    mutationFn: async (payload) => await putSubjectRequest(major_id,payload),
  });
};

export const useDeleteSubject = (): any => {
  return useMutation({
    mutationKey: ['delete-subject'],
    mutationFn: async (subject_id: string) =>
      await deleteSubjectRequest(subject_id),
  });
};