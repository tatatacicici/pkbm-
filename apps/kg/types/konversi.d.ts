import { TMetaResponse, TMetaResponseSingle } from '@kampus-gratis/utils';

export type perguruanAsalType = {
  id?: string;
  title?: string;
};

export type prodiAsalType = {
  id?: string;
  title?: string;
};

export type jurusanAsalType = {
  id?: string;
  title?: string;
};

export type TSyaratKonversi = {
  isOpen: boolean;
  handleClose: () => void;
};

export interface TTableEvaluasi {
  id: number;
  kode: string;
  nama_matkul: string;
  sks: number;
  nama_matkul_asal: string;
  sks_asal: number;
  nilai_akhir: string;
  form_evaluasi_diri: string;
  status_evaluasi_diri: string;
  action: string;
}

//dafar matkul conversion
export type TConversionListMatkul = TMetaResponse<ConversionListMatkul>;

export interface ConversionListMatkul {
  id: string;
  subject_id: string;
  subject_name: string;
  total_session: number;
  semester: number;
  total_credit: number;
  gpa: string;
  status: string;
  score_final: number;
  score_letter: string;
}

//post matkul conversion
export interface TMatkulConversionPayload {
  subject_ids: string | string[];
}

export interface PostMatkulConversionResponse {
  uuid: string;
  pk: number;
  request_id: number;
  subject_id: string;
  student_id: string;
  total_session: number;
  created_at: string;
  updated_at: string;
  deleted_at: unknown;
}

export type TPostMatkulConversionResponse =
  TMetaResponseSingle<PostMatkulConversionResponse>;

//detail matkul conversion
export interface ConversionDetailMatkul {
  subject: Subject;
  subject_outcomes: SubjectOutcome[];
  sessions_details: SessionsDetail[];
  sessions_scores: SessionsScore[];
}

export interface Subject {
  name: string;
  duration_hours: number;
  credit: number;
}

export interface SubjectOutcome {
  criteria: string;
  score: number;
}

export interface SessionsDetail {
  session_no: number;
  type: string;
  total_videos: number;
  total_documents: number;
  total_assignments: number;
}

export interface SessionsScore {
  session_no: number;
  type: string;
  module_score: string;
  quiz_score: string;
  assignment_score: string;
  average_score: string;
}

export type TConversionDetailMatkul =
  TMetaResponseSingle<ConversionDetailMatkul>;

export type TUseStateDetailMatkulConversion = {
  getDetailMatkulConversion: ConversionDetailMatkul;
  setDetailMatkulConversion: (val: ConversionDetailMatkul) => void;
};
