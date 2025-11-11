import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { mystudyAssignmentState } from '../../../recoil/atoms/mystudy-assignment';
import {
  TListAssignmentResponse,
  TMyStudyAssignmentResponse,
  TMyStudyAssignmentSubmissionPayload,
  TuseMyStudyAssignmentItem,
} from '../../../types/mystudy-assignment';
import {
  assignmentFileDeleteRequest,
  assignmentGetListRequest,
  assignmentGetRequest,
  assignmentSubmissionRequest,
} from './request';

export const useMyStudyAssignmentItem = (): TuseMyStudyAssignmentItem => {
  const [get, set] = useRecoilState(mystudyAssignmentState);
  return {
    getMyStudyAssignmentItem: get,
    setMyStudyAssignmentItem: (val) => set(val),
  };
};

export const useGetMyStudyAssignmentById = (
  subject_id: string | number,
  session_id: string | number,
  id: string | number
): UseQueryResult<TMyStudyAssignmentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['mystudy-assignment-get', id],
    queryFn: async () => await assignmentGetRequest(subject_id, session_id, id),
  });

export const useDeleteFileMyStudyAssigment = (
  subject_id: string | number,
  session_id: string | number,
  assignment_id: string | number
): UseMutationResult<
  TMyStudyAssignmentResponse,
  TMetaErrorResponse,
  string | number,
  unknown
> =>
  useMutation({
    mutationKey: ['delete-file-assignment'],
    mutationFn: async (file_id) =>
      await assignmentFileDeleteRequest(
        subject_id,
        session_id,
        assignment_id,
        file_id
      ),
  });

export const useUpdateSubmissionMyStudyAssigment = (
  subject_id: string | number,
  session_id: string | number,
  assignment_id: string | number
): UseMutationResult<
  TMyStudyAssignmentResponse,
  TMetaErrorResponse,
  TMyStudyAssignmentSubmissionPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['update-submission-assignment'],
    mutationFn: async (payload) =>
      await assignmentSubmissionRequest(
        subject_id,
        session_id,
        assignment_id,
        payload
      ),
  });

export const useGetMyStudyListAssignment = (
  subject_id: string | number,
  session_id: string | number
): UseQueryResult<TListAssignmentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['mystudy-assignment-list', subject_id, session_id],
    queryFn: async () => await assignmentGetListRequest(subject_id, session_id),
  });
