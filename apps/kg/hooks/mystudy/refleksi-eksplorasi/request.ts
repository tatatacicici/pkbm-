import { api } from '../../../config';
import {
  TRefleksiEksplorasiSingleResponse,
  TRefleksiEksplorasiSubmissionPayload,
} from '../../../types/refleksi-eksplorasi';

export const postRefleksiEksplorasi = async (
  seccionId: string,
  payload: TRefleksiEksplorasiSubmissionPayload
): Promise<TRefleksiEksplorasiSingleResponse> => {
  const { data } = await api.post(
    `v1/my-study/sessions/${seccionId}/reflection`,
    payload
  );

  return data;
};
