'use client';

import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { quizQuitPopupState, remainingTime } from '../../../recoil/atoms/quiz';
import {
  TQuizDescResponse,
  TQuizHistoryResponse,
  TQuizQuitPopup,
  TQuizResponse,
  TQuizScoreResponse,
  TQuizSubmitPayload,
  TQuizSubmitResponse,
  TQuizTakeResponse,
  TUseRemaingTimeQuiz,
} from '../../../types/quiz';
import {
  quizDescGetRequest,
  quizHistoryGetRequest,
  quizListRequest,
  quizScoreGetRequest,
  quizSubmitRequest,
  quizTakeGetRequest,
} from './request';

export const useGetQuizList = (
  subject_id: string,
  session_id: string
): UseQueryResult<TQuizResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['quiz-list', subject_id, session_id],
    queryFn: async () => await quizListRequest(subject_id, session_id),
  });

export const useGetQuizDescById = (
  subject_id: string,
  session_id: string,
  id: string | number
): UseQueryResult<TQuizDescResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['quiz-description-get', id],
    queryFn: async () => await quizDescGetRequest(subject_id, session_id, id),
  });

// SERVICE API HOOKS

export const useGetQuizTakeById = (
  id: string | number
): UseQueryResult<TQuizTakeResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['quiz-take-get', id],
    queryFn: async () => await quizTakeGetRequest(id),
    refetchOnReconnect: false,
    retry: false,
    refetchOnWindowFocus: false,
  });
};
export const useSubmitQuiz = (): UseMutationResult<
  TQuizSubmitResponse,
  TMetaErrorResponse,
  TQuizSubmitPayload,
  unknown
> =>
  useMutation({
    mutationKey: ['submit-quiz'],
    mutationFn: async (payload) => await quizSubmitRequest(payload),
  });

export const useRemainingTimeQuiz = (): TUseRemaingTimeQuiz => {
  const [get, set] = useRecoilState(remainingTime);

  return {
    setRemainingTime: (val: number) => set(val),
    getRemainingTime: get,
  };
};

export const useGetQuizScoreById = (
  id: string | number
): UseQueryResult<TQuizScoreResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['quiz-score-get', id],
    queryFn: async () => await quizScoreGetRequest(id),
  });

export const useGetQuizHistoryById = (
  id: string | number
): UseQueryResult<TQuizHistoryResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['quiz-history-get', id],
    queryFn: async () => await quizHistoryGetRequest(id),
  });

export const useQuizQuitPopup = () => {
  const [get, set] = useRecoilState(quizQuitPopupState);
  return {
    getQuizQuitPopup: get,
    setQuizQuitPopup: (val: TQuizQuitPopup) => set(val),
  };
};
