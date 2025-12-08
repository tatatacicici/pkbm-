import {
  CONVERSIONS_REQUESTS,
  CONVERSIONS_SUBJECTS,
} from '@kampus-gratis/utils';
import { api } from '../../../config';
import {
  TConversionListMatkul,
  TMatkulConversionPayload,
  TPostMatkulConversionResponse,
} from '../../../types/konversi';

export const conversionListMatkulRequest =
  async (): Promise<TConversionListMatkul> => {
    const { data } = await api.get(`${CONVERSIONS_SUBJECTS}`);
    return data;
  };

export const postMatkulConversionRequest = async (
  payload: TMatkulConversionPayload
): Promise<TPostMatkulConversionResponse> => {
  const { data } = await api.post(`${CONVERSIONS_REQUESTS}`, payload);
  return data;
};
