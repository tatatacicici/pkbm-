import { api } from '../../../config';
import { TRiwayatKonversiResponse } from '../../../types/riwayat-konversi';

export const riwayatKonversiGetRequest = async (): Promise<TRiwayatKonversiResponse> => {
  const { data } = await api.get('v1/conversions/requests');
  return data;
};