import {
  FACULTY,
  MAJOR,
  STUDENT_MAJOR_ENROLL,
  STUDENT_SUBJECT_DRAFT,
  STUDENT_SUBJECT_MAJOR_CONTRACTS,
  STUDENT_SUBJECT_SEND_DRAFT,
  STUDENT_SUBJECT_STUDYPLAN,
} from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import {
  TFacultyResponse,
  TMajorEnrollResponse,
  TMajorResponse,
  TStudentSubjectContractResponse,
  TStudentSubjectPlanResponse,
} from '../../types/study-plan';

export const facultyRequest = async (): Promise<TFacultyResponse> => {
  const { data } = await api.get(FACULTY);
  return data;
};

export const majorGetByIdRequest = async (
  id: string | number
): Promise<TMajorResponse> => {
  const { data } = await api.get(`${MAJOR}/${id}`);
  return data;
};

export const majorContractRequest = async (
  id: string
): Promise<TStudentSubjectContractResponse> => {
  const { data } = await api.get(
    `${STUDENT_SUBJECT_MAJOR_CONTRACTS}/${id}/contracts`
  );

  return data;
};

export const majorEnrollRequest = async (
  id: string
): Promise<TMajorEnrollResponse> => {
  const { data } = await api.post(`${STUDENT_MAJOR_ENROLL}/${id}/enroll`);

  return data;
};

export const studentSubjectPlanRequest = async (
  id: string
): Promise<TStudentSubjectPlanResponse> => {
  const { data } = await api.post(`${STUDENT_SUBJECT_DRAFT}/${id}`);

  return data;
};

export const studentSubjectDeletePlanRequest = async (
  id: string
): Promise<TStudentSubjectPlanResponse> => {
  const { data } = await api.delete(`${STUDENT_SUBJECT_DRAFT}/${id}`);

  return data;
};

export const studentSubjectPengajuanRequest =
  async (): Promise<TStudentSubjectPlanResponse> => {
    const { data } = await api.get(`${STUDENT_SUBJECT_STUDYPLAN}`);

    return data;
  };

export const studentSubjectSendDraftRequest =
  async (): Promise<TStudentSubjectPlanResponse> => {
    const { data } = await api.put(`${STUDENT_SUBJECT_SEND_DRAFT}`);

    return data;
  };


