import { api } from '../../../config';
import { TQuizTeacherAssessmentResponse } from './type';

export const teacherAssesnentQuizRequest = async (
  subjectId: string | string[],
  sessionId: string | string[]
): Promise<TQuizTeacherAssessmentResponse> => {
  const { data } = await api.get(
    `v1/my-study/subjects/${subjectId}/sessions/${sessionId}/teacher-assessment`
  );
  return data;
};
