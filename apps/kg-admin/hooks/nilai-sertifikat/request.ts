import {
  TMahasiswaResponse,
  TMatakuliahResponse,
  TScoreResponse,
} from '../../types/nilai-sertifikat/types';

import { api } from '../../config/apiConfig';

export const MahasiswaRequest = async (
  page: number,
  search: string,
  limit: number
): Promise<TMahasiswaResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      page,
      search,
      limit,
    },
    url: 'v1/admin/students/scores',
  });
  return data;
};

export const MatakuliahRequest = async (
  page: number,
  search: string,
  limit: number,
  student_id: string
): Promise<TMatakuliahResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      page,
      search,
      limit,
    },
    url: `v1/admin/students/${student_id}/subjects`,
  });

  return data;
};

export const ScoresRequest = async (
  page: number,
  limit: number,
  student_id: string,
  session_id: string
): Promise<TScoreResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      page,
      limit,
    },
    url: `v1/admin/students/${student_id}/subjects/${session_id}/sessions`,
  });
  return data;
};
