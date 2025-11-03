import { UseMutationResult, useMutation } from '@tanstack/react-query';
import { TQuizTeacherAssessmentResponse } from '../type';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import teacherAssesnentQuizRequest from './request';

export type TAnswer = {
  question_id: string;
  answer: string;
};

export type Result = {
  answers: TAnswer[];
};

const usePostAssessment = (): UseMutationResult<
  TQuizTeacherAssessmentResponse,
  TMetaErrorResponse,
  {
    subjectId: string;
    sessionId: string;
    payload: Result;
  }
> => {
  return useMutation({
    mutationKey: ['post-teacher-assessment'],
    mutationFn: async ({ subjectId, sessionId, payload }) =>
      await teacherAssesnentQuizRequest(subjectId, sessionId, payload),
  });
};
export default usePostAssessment;
