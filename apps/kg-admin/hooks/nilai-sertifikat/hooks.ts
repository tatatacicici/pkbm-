import { MatakuliahRequest, MahasiswaRequest, ScoresRequest } from './request';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import {
  TMahasiswaResponse,
  TMatakuliahResponse,
  TScoreResponse,
} from '../../types/nilai-sertifikat/types';

export const UseMatakuliahRequest = (
  page: number,
  search: string,
  limit: number,
  student_id: string
): UseQueryResult<TMatakuliahResponse> => {
  return useQuery({
    queryKey: ['get-matakuliah', page, search, limit, student_id],
    queryFn: async () =>
      await MatakuliahRequest(page, search, limit, student_id),
  });
};

export const UseMahasiswaRequest = (
  page: number,
  search: string,
  limit: number
): UseQueryResult<TMahasiswaResponse> => {
  return useQuery({
    queryKey: ['get-mahasiswa', page, search, limit],
    queryFn: async () => await MahasiswaRequest(page, search, limit),
  });
};

export const UseScoresRequest = (
  page: number,
  limit: number,
  student_id: string,
  session_id: string
): UseQueryResult<TScoreResponse> => {
  return useQuery({
    queryKey: ['get-scores', page, limit, student_id, session_id],
    queryFn: async () =>
      await ScoresRequest(page, limit, student_id, session_id),
  });
};
