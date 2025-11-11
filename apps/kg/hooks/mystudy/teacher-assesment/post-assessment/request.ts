import { api } from '../../../../config';
import { TQuizTeacherAssessmentResponse } from '../type';
import { Result } from './hook';
export type TAnswer = {
  question_id: string;
  answer: string;
};

const teacherAssesnentQuizRequest = async (
  subjectId: string | string[],
  sessionId: string | string[],
  payload: Result
): Promise<TQuizTeacherAssessmentResponse> => {
  const { data } = await api.post(
    `/v1/my-study/subjects/${subjectId}/sessions/${sessionId}/teacher-assessment/submit`,

    payload
  );
  return data;
};

export default teacherAssesnentQuizRequest;
