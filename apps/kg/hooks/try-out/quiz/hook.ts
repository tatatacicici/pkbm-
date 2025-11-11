import { TMyStudyv2Response } from '@kampus-gratis/apps/kg/types/tryout';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  useMutation,
  UseMutationResult,
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import {
  myStudyGetRequestV2,
  quizHistoryGetRequest,
  quizSubmitRequest,
  quizTakeGetRequest,
} from './request';
import { quizTryoutInfoDummyData } from '@kampus-gratis/apps/kg/modules/try-out/constant';
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

export const useGetMyStudyv2 = (): UseQueryResult<
  TMyStudyv2Response,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['mystudy-get-v2'],
    queryFn: async () => await myStudyGetRequestV2(),
  });

// UNTUK QUIZ
// UNTUK QUIZ
// UNTUK QUIZ
// ====================================
// UNTUK DATA DUMMY

export const useGetQuizDescById = (displayId: string) => {
  const data = quizTryoutInfoDummyData.find(
    (item) => item.display_id === displayId
  );

  return {
    data,
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
      data: parsedQuizScore,
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
