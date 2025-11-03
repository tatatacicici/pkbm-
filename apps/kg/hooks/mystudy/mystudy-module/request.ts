import { STUDI_KU_USER, STUDI_KU_v2 } from '@kampus-gratis/utils';
import { api } from '../../../config/api/apiConfig';
import {
  TMyStudyResponse,
  TMyStudyv2Response,
} from '../../../types/mystudy-module';

export const mystudyGetRequest = async (): Promise<TMyStudyResponse> => {
  const { data } = await api.get(STUDI_KU_USER);
  return data;
};

export const myStudyGetRequestV2 = async (): Promise<TMyStudyv2Response> => {
  const { data } = await api.get(STUDI_KU_v2);

  return data;
};
