import { api } from '@kampus-gratis/apps/kg/config';
import {
  TQuizDescResponse,
  TQuizHistoryResponse,
  TQuizScoreResponse,
  TQuizSubmitPayload,
  TQuizSubmitResponse,
  TQuizTakeResponse,
} from '@kampus-gratis/apps/kg/types/quiz';
import { TMyStudyv2Response } from '@kampus-gratis/apps/kg/types/tryout';
import {
  STUDI_KU_QUIZ_HISTORY,
  STUDI_KU_QUIZ_RESULT,
  STUDI_KU_QUIZ_SUBMIT,
  STUDI_KU_QUIZ_TAKE,
  STUDI_KU_v2,
} from '@kampus-gratis/utils';

export const myStudyGetRequestV2 = async (): Promise<TMyStudyv2Response> => {
  const { data } = await api.get(STUDI_KU_v2); // sementara pakai ini biar jalan
  // const { data } = await api.get(TRY_OUT_v2);

  return data;
};

// UNTUK QUIZ
// UNTUK QUIZ
// UNTUK QUIZ
// ====================================
// UNTUK DATA DUMMY

export const quizScoreGetRequest = async (
  id: string | number
): Promise<TQuizScoreResponse> => {
  try {
    const { data } = await api.get(`${STUDI_KU_QUIZ_RESULT}/${id}`);
    return data;
  } catch (error) {
    console.warn('⚠️ Gagal mengambil data dari API, menggunakan data dummy.');
    return { data: 'Ini adalah data template' };
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
    `v2/try-out/subjects/${subject_id}/sessions/${session_id}/quizzes/${id}`
  );
  return data;
};

export const quizSubmitRequest = async (
  payload: TQuizSubmitPayload
): Promise<TQuizSubmitResponse> => {
  const { data } = await api.post(
    `${STUDI_KU_QUIZ_SUBMIT}/${payload.id}`, // sementara pakai ini dulu biar kebaca
    // `${TRYOUT_QUIZ_SUBMIT}/${payload.id}`,
    payload.req
  );
  return data;
};

export const quizTakeGetRequest = async (
  id: string | number
): Promise<TQuizTakeResponse> => {
  const { data } = await api.get(`${STUDI_KU_QUIZ_TAKE}/${id}`); // sementara pakai ini dulu biar kebaca
  // const { data } = await api.get(`${TRYOUT_QUIZ_TAKE}/${id}`);
  return data;
};

// export const quizScoreGetRequest = async (
//   id: string | number
// ): Promise<TQuizScoreResponse> => {
//   const { data } = await api.get(`${STUDI_KU_QUIZ_RESULT}/${id}`); // sementara pakai ini dulu biar kebaca
//   // const { data } = await api.get(`${TRYOUT_QUIZ_RESULT}/${id}`);
//   return data;
// };

export const quizHistoryGetRequest = async (
  id: string | number
): Promise<TQuizHistoryResponse> => {
  const { data } = await api.get(`${STUDI_KU_QUIZ_HISTORY}/${id}`); // sementara pakai ini dulu biar kebaca
  // const { data } = await api.get(`${TRYOUT_QUIZ_HISTORY}/${id}`);
  return data;
};
