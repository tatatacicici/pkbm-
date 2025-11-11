import { CERTIFICATE, GRADE_REPORTS } from '@kampus-gratis/utils';
import { api } from '../../config/api/apiConfig';
import {
  TCertificateResponse,
  TScoreResponse,
} from '../../types/score-sertificate';

export const certificateGetRequest =
  async (): Promise<TCertificateResponse> => {
    const { data } = await api.get(CERTIFICATE);
    return data;
  };

export const scoreGetRequest = async (): Promise<TScoreResponse> => {
  const { data } = await api.get(GRADE_REPORTS);
  return data;
};

export const detailScoreGetRequest = async (id: string) => {
  const { data } = await api.get(`v1/scores/subjects/${id}/sessions`);
  return data;
}
