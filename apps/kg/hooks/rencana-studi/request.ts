import { api } from '../../config/api';
import {
  TDataTakeStudyPlanResponse,
  TDetailStudyPlanResponse,
  TDetailStudyPlanSessionsResponse,
  TMajorResponse,
  TRencanaStudiResponse,
  TSemesterResponse,
  TStudyPlanFilter,
} from '../../types/rencana-studi';

export const getSubject = async (
  faculty_id?: string,
  major_id?: string,
  semester?: number | string,
  credit?: string,
  level?: string,
  search?: string,
  type?: string,
  limit?: number | string
): Promise<TRencanaStudiResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      faculty_id,
      major_id,
      semester,
      credit,
      level,
      search,
      type,
      limit,
    },
    url: '/v1/study-plan/subjects',
  });
  return data;
};

export const getStudyPlanFilter = async (): Promise<TStudyPlanFilter> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

    url: '/v1/study-plan/filter',
  });
  return data;
};

export const detailStudyPlanRequest = async (
  id: string
): Promise<TDetailStudyPlanResponse> => {
  const { data } = await api.get(`/v1/study-plan/subjects/${id}/details`);
  return data;
};

export const sessionsStudyPlanRequest = async (
  id: number | string
): Promise<TDetailStudyPlanSessionsResponse> => {
  const { data } = await api.get(`/v1/study-plan/subjects/${id}/sessions`);

  return data;
};

export const studentSubjectPlanTake = async (
  id: string
): Promise<TDataTakeStudyPlanResponse> => {
  const { data } = await api.post(`/v2/study-plan/subjects/${id}/take`);

  return data;
};

export const getSemester = async (): Promise<TSemesterResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },

    url: '/v1/studi-ku/semesters',
  });
  return data;
};

export const getAllMajorRequest = async (): Promise<TMajorResponse> => {
  const { data } = await api.get(`v1/major`);
  return data;
};
