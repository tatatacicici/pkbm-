import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import {
  quizHistoryGetRequest,
  quizSubmitRequest,
  quizTakeGetRequest,
} from './request';
import {
  quizTesBakatInfoDummyData,
  quizTesBakatScoreDummyData,
} from '@kampus-gratis/apps/kg/modules/tes-minat-bakat/constant';
import {
  TQuizHistoryResponse,
  TQuizQuitPopup,
  TQuizSubmitPayload,
  TQuizSubmitResponse,
  TQuizTakeResponse,
  TUseRemaingTimeQuiz,
} from '@kampus-gratis/apps/kg/types/quiz';
import { useRecoilState } from 'recoil';
import {
  quizQuitPopupState,
  remainingTime,
} from '@kampus-gratis/apps/kg/recoil/atoms/quiz';

// UNTUK MENGAMBIL POTO PROFILE DAN NAMA
// UNTUK MENGAMBIL POTO PROFILE DAN NAMA

import { TUserCompletePayload } from '@kampus-gratis/apps/kg/types/profile';
import { useSession } from 'next-auth/react';
import { profileCompleteRequest } from '../../../profile/request';

export const useProfileComplete = (): UseQueryResult<
  TUserCompletePayload,
  TMetaErrorResponse
> => {
  const { data: session } = useSession();

  return useQuery({
    enabled: !!session,
    queryKey: ['get-user-complete'],
    queryFn: async () => await profileCompleteRequest(),
  });
};

// ====================================

// UNTUK QUIZ
// UNTUK QUIZ
// UNTUK QUIZ
// ====================================
// UNTUK DATA DUMMY

export const useGetQuizDescById = () => {
  return {
    data: quizTesBakatInfoDummyData,
    isLoading: false,
  };
};

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

export const useGetQuizScoreById = () => {
  // Ambil skor sebelumnya dari localStorage
  const storedQuizScore = localStorage.getItem('quizScoreHistory');
  const parsedQuizScore = storedQuizScore ? JSON.parse(storedQuizScore) : [];

  return {
    data: {
      data:
        parsedQuizScore.length > 0
          ? parsedQuizScore
          : [quizTesBakatScoreDummyData],
    },
    isLoading: false,
  };
};

// ====================================
// UNTUK DATA DINAMIS (API)

// export const useGetQuizDescById = (
//   subject_id: string,
//   session_id: string,
//   id: string | number
// ): UseQueryResult<TQuizDescResponse, TMetaErrorResponse> =>
//   useQuery({
//     queryKey: ['quiz-description-get', id],
//     queryFn: async () => await quizDescGetRequest(subject_id, session_id, id),
//   });

// SERVICE API HOOKS

// export const useGetQuizTakeById = (
//   id: string | number
// ): UseQueryResult<TQuizTakeResponse, TMetaErrorResponse> => {
//   return useQuery({
//     queryKey: ['quiz-take-get', id],
//     queryFn: async () => await quizTakeGetRequest(id),
//     refetchOnReconnect: false,
//     retry: false,
//     refetchOnWindowFocus: false,
//   });
// };

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

export const useQuizQuitPopup = () => {
  const [get, set] = useRecoilState(quizQuitPopupState);
  return {
    getQuizQuitPopup: get,
    setQuizQuitPopup: (val: TQuizQuitPopup) => set(val),
  };
};

export const useRemainingTimeQuiz = (): TUseRemaingTimeQuiz => {
  const [get, set] = useRecoilState(remainingTime);

  return {
    setRemainingTime: (val: number) => set(val),
    getRemainingTime: get,
  };
};

// export const useGetQuizScoreById = (
//   id: string | number
// ): UseQueryResult<TQuizScoreResponse, TMetaErrorResponse> =>
//   useQuery({
//     queryKey: ['quiz-score-get', id],
//     queryFn: async () => await quizScoreGetRequest(id),
//   });

export const useGetQuizHistoryById = (
  id: string | number
): UseQueryResult<TQuizHistoryResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['quiz-history-get', id],
    queryFn: async () => await quizHistoryGetRequest(id),
  });
