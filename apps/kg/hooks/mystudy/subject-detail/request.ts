// import { STUDI_KU_SUBJECTS_v2 } from '@kampus-gratis/utils';
import { api } from '../../../config/api/apiConfig';
import { TSubjectSessionsResponse } from '../../../types/subjectDetails';

export const subjectDetailsGetRequest = async (
  subject_id: string | number
): Promise<TSubjectSessionsResponse> => {
  const { data } = await api.get(
    `/v3/my-study/subjects/${subject_id}/sessions`
  );
  return data;
};
