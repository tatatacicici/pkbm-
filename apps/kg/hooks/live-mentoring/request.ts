import {
  TLiveMentoringResponse,
  TDetailLiveResponse,
} from '../../types/livementoring';
import { api } from '../../config/api/apiConfig';

export const liveMentoringGetRequest = async (
  idSession: string
): Promise<TLiveMentoringResponse> => {
  const { data } = await api.get(
    `/v1/my-study/sessions/${idSession}/mentorings`
  );
  return data;
};

export const detailLiveMentoringGetRequest = async (
  idSession: string,
  idMentoring: string
): Promise<TDetailLiveResponse> => {
  const { data } = await api.get(
    `/v1/my-study/sessions/${idSession}/mentorings/${idMentoring}`
  );
  return data;
};
