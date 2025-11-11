import { UseQueryResult, useQuery } from '@tanstack/react-query';

import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { teacherAssesnentQuizRequest } from './request';
import { TQuizTeacherAssessmentResponse } from './type';

export const useGetQuizTeacherAssessment = (
  subjectId: string | string[],
  sessionId: string | string[]
): UseQueryResult<TQuizTeacherAssessmentResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['subject-details-get'],
    queryFn: async () =>
      await teacherAssesnentQuizRequest(subjectId, sessionId),
  });
