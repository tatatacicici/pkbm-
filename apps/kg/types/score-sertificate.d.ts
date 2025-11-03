import { TMetaResponse, TMetaResponseSingle } from '@kampus-gratis/utils';

export type ContentLayoutTypes = {
  children: ReactNode;
  className?: string;
  withFlex?: boolean;
  withGrid?: boolean;
  withGap?: boolean;
};

type TItemCertificate = {
  id: string;
  student_id: string;
  subject_id: string;
  event_id: string;
  type: SUBJECT | EVENT;
  id_certificate: string;
  file: string;
  link: string;
  thumbnail: string;
  thumbnail_link: string;
  subject_certificate: SubjectCertif;
};

type SubjectCertif = {
  name: string;
  subject_code: string;
  level: number;
};

export type TCertificateResponse = TMetaResponse<TItemCertificate>;

export type certificateTypes = {
  id: number;
  name: string;
  role: string;
  type: string;
  urlDownload: string;
};

export type TScoreResponse = TMetaResponseSingle<TScoreData>;

export type TScoreDetailResponse = TMetaResponseSingle<TScoreDetailData>;

export type TScoreDetailData = {
  student: TScoreStudent
  subject: TScoreSubject
  sessions: TScoreSession[]
}

export interface TScoreData {
  student: TScoreStudent
  subjects: TScoreSubject[]
}

export interface TScoreStudent {
  id: string
  full_name: string
  major: string
}

export interface TScoreSubject {
  id: string
  name: string
  credit: number
  type: string
  score: string
  score_letter: string
  score_gpa: string
  status: string
  semester: number
  taken_at: string
  finished_at: any
}

export interface TScoreSession {
  id: string
  title: string
  session_no: number
  type: string
  semester: number
  module_score: string
  quiz_score: string
  assignment_score: string
  average_score: string
  average_score_letter: string
}

export interface TScore {
  semestrial_average: SemestrialAverage;
  semestrial_report: SemestrialReports;
  transcript_report: TranscriptReport;
}

export interface SemestrialAverage {
  semester_grades: SemesterGrade[];
  average_gpa: string;
}

export interface SemesterGrade {
  semester: number;
  credit_count: number;
  passed_credit_count: number;
  gpa: string;
}

export interface SemestrialReports {
  semestrial_grades: SemestrialGrade[];
}

export interface SemestrialGrade {
  semester: number;
  subjects: Subject[];
}

export interface Subject {
  subject_code: string;
  subject_name: string;
  credit: number;
  score_letter: string;
  score_gpa: string;
  score: number;
  enroll_status: string;
}

export interface TranscriptReport {
  subjects: Subject2[];
  cumulative_gpa: string;
}

export interface Subject2 {
  subject_code: string;
  subject_name: string;
  credit: number;
  score_letter: string;
  score_gpa: string;
  score: number;
  enroll_status: string;
}
