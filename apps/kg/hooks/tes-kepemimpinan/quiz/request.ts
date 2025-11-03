import {
  STUDI_KU_QUIZ_HISTORY,
  STUDI_KU_QUIZ_RESULT,
  STUDI_KU_QUIZ_SUBMIT,
  STUDI_KU_QUIZ_TAKE,
} from '@kampus-gratis/utils';
import { api } from '../../../config';
import {
  TQuizDescResponse,
  TQuizHistoryResponse,
  TQuizScoreResponse,
  TQuizSubmitPayload,
  TQuizSubmitResponse,
  TQuizTakeResponse,
} from '@kampus-gratis/apps/kg/types/quiz';

// ====================================
// UNTUK DATA DUMMY

export const quizScoreGetRequest = async (
  id: string | number
): Promise<TQuizScoreResponse> => {
  try {
    const { data } = await api.get(`${STUDI_KU_QUIZ_RESULT}/${id}`);
    return data;
  } catch (error) {
    console.error('❌ Gagal mengambil data quiz:', error);
    throw error; // biarkan caller menangani error ini
  }
};

// ====================================
// UNTUK DATA DINAMIS (API)

export const quizDescGetRequest = async (
  subject_id: string,
  session_id: string,
  id: string | number
): Promise<TQuizDescResponse> => {
  const { data } = await api.get(
    `v2/tes-kepemimpinan/subjects/${subject_id}/sessions/${session_id}/quizzes/${id}`
  );
  return data;
};

export const quizSubmitRequest = async (
  payload: TQuizSubmitPayload
): Promise<TQuizSubmitResponse> => {
  const { data } = await api.post(
    `${STUDI_KU_QUIZ_SUBMIT}/${payload.id}`, // sementara pakai ini dulu biar kebaca
    // `${TES_KEPEMIMPINAN_QUIZ_SUBMIT}/${payload.id}`,
    payload.req
  );
  return data;
};

export const quizTakeGetRequest = async (
  id: string | number
): Promise<TQuizTakeResponse> => {
  const { data } = await api.get(`${STUDI_KU_QUIZ_TAKE}/${id}`); // sementara pakai ini dulu biar kebaca
  // const { data } = await api.get(`${TES_KEPEMIMPINAN_QUIZ_TAKE}/${id}`);
  return data;
};

// export const quizScoreGetRequest = async (
//   id: string | number
// ): Promise<TQuizScoreResponse> => {
//   const { data } = await api.get(`${STUDI_KU_QUIZ_RESULT}/${id}`); // sementara pakai ini dulu biar kebaca
//   // const { data } = await api.get(`${TES_KEPEMIMPINAN_QUIZ_RESULT}/${id}`);
//   return data;
// };

export const quizHistoryGetRequest = async (
  id: string | number
): Promise<TQuizHistoryResponse> => {
  const { data } = await api.get(`${STUDI_KU_QUIZ_HISTORY}/${id}`); // sementara pakai ini dulu biar kebaca
  // const { data } = await api.get(`${TES_KEPEMIMPINAN_QUIZ_HISTORY}/${id}`);
  return data;
};
