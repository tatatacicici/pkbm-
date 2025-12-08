import {
  STUDI_KU_QUIZ_HISTORY,
  STUDI_KU_QUIZ_RESULT,
  STUDI_KU_QUIZ_SUBMIT,
  STUDI_KU_QUIZ_TAKE
} from '@kampus-gratis/utils';
import { api } from '../../../config';
import {
  TQuizDescResponse,
  TQuizHistoryResponse,
  TQuizResponse,
  TQuizScoreResponse,
  TQuizSubmitPayload,
  TQuizSubmitResponse,
  TQuizTakeResponse,
} from '../../../types/quiz';

export const quizListRequest = async (
  subject_id: string,
  session_id: string
): Promise<TQuizResponse> => {
  const { data } = await api.get(`v2/my-study/subjects/${subject_id}/sessions/${session_id}/quizzes`);
  return data;
}

export const quizDescGetRequest = async (
  subject_id: string,
  session_id: string,
  id: string | number
): Promise<TQuizDescResponse> => {
  const { data } = await api.get(`v2/my-study/subjects/${subject_id}/sessions/${session_id}/quizzes/${id}`);
  return data;
};

export const quizTakeGetRequest = async (
  id: string | number
): Promise<TQuizTakeResponse> => {
  const { data } = await api.get(`${STUDI_KU_QUIZ_TAKE}/${id}`);
  return data;
};

export const quizSubmitRequest = async (
  payload: TQuizSubmitPayload
): Promise<TQuizSubmitResponse> => {
  const { data } = await api.post(
    `${STUDI_KU_QUIZ_SUBMIT}/${payload.id}`,
    payload.req
  );
  return data;
};

export const quizScoreGetRequest = async (
  id: string | number
): Promise<TQuizScoreResponse> => {
  const { data } = await api.get(`${STUDI_KU_QUIZ_RESULT}/${id}`);
  return data;
};

export const quizHistoryGetRequest = async (
  id: string | number
): Promise<TQuizHistoryResponse> => {
  const { data } = await api.get(`${STUDI_KU_QUIZ_HISTORY}/${id}`);
  return data;
};
