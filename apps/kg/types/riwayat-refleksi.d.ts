import { TMetaResponseSingle } from '@kampus-gratis/utils';

export interface TRiwayatRefleksi {
  subject_id: string;
  subject_name: string;
  session_id: string;
  session_no: number;
  teacher: Teacher;
  reflection: string;
  reflection_at: any;
  is_eligible: boolean;
}

export interface Teacher {
  id: string;
  full_name: string;
  avatar: string;
}

export type TRiwayatRefleksiSingleResponse =
  TMetaResponseSingle<TRiwayatRefleksi>;
