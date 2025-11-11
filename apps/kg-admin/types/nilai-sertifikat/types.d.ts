import { TMetaResponse, TMetaResponseSingle } from '@kampus-gratis/utils';

export type Mahasiswa = {
  id: string;
  fullname: string;
  major: string;
  gpa: number;
  gpas: number;
};

export type MahasiswaMatakuliah = {
  id: string;
  fullname: string;
  major: string;
};

export type SubjectMatkul = {
  id: string;
  name: string;
  credit: number;
  score: number;
  score_letter: string;
  score_gpa: number;
  status: string;
  semester: number;
};

export type Sessions = {
  id: string;
  session_number: number;
  semester: number;
  type: string;
  module_score: number;
  quize_score: number;
  assignment_score: number;
  avarage_score: number;
};

export type ScoreMatkul = {
  student: MahasiswaMatakuliah;
  sessions: Sessions[];
};

export type Matakuliah = {
  student: MahasiswaMatakuliah[];
  subjects: SubjectMatkul[];
};
export type TMeta = {
  meta: {
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};

export type Data<T> = {
  code: number;
  status: string;
  message: string;
  data: T;
};

export type TMatakuliahResponse = Data<Matakuliah> & TMeta;
export type TMahasiswaResponse = Data<Mahasiswa[]> & TMeta;
export type TScoreResponse = Data<ScoreMatkul> & TMeta;
