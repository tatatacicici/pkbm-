import { TMetaResponse } from '@kampus-gratis/utils';

export interface TRiwayatKonversi {
  id: string;
  status: string;
  total_subject: number;
  file_convertion: string;
  created_at: string;
}

export type TRiwayatKonversiResponse = TMetaResponse<TRiwayatKonversi>;
