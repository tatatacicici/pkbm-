import { serialize } from 'object-to-formdata';
import { api } from '../../../config/api/apiConfig';
import {
  TListAssignmentResponse,
  TMyStudyAssignmentResponse,
  TMyStudyAssignmentSubmissionPayload,
} from '../../../types/mystudy-assignment';

export const assignmentGetListRequest = async (
  subject_id: string | number,
  session_id: string | number
): Promise<TListAssignmentResponse> => {
  const { data } = await api.get(
    `v2/my-study/subjects/${subject_id}/sessions/${session_id}/assignments`
  );
  return data;
};

export const assignmentGetRequest = async (
  subject_id: string | number,
  session_id: string | number,
  id: string | number
): Promise<TMyStudyAssignmentResponse> => {
  const { data } = await api.get(
    `v2/my-study/subjects/${subject_id}/sessions/${session_id}/assignments/${id}`
  );
  return data;
};

export const assignmentSubmissionRequest = async (
  subject_id: string | number,
  session_id: string | number,
  assignment_id: string | number,
  payload: TMyStudyAssignmentSubmissionPayload
): Promise<TMyStudyAssignmentResponse> => {
  const { data } = await api.post(
    `v2/my-study/subjects/${subject_id}/sessions/${session_id}/assignments/${assignment_id}/submission`,
    serialize(payload, { noFilesWithArrayNotation: true })
  );
  return data;
};

export const assignmentFileDeleteRequest = async (
  subject_id: string | number,
  session_id: string | number,
  assignment_id: string | number,
  file_id: string | number
): Promise<TMyStudyAssignmentResponse> => {
  const { data } = await api.delete(
    `v2/my-study/subjects/${subject_id}/sessions/${session_id}/assignments/${assignment_id}/files/${file_id}`
  );
  return data;
};
