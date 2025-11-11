import { TMetaResponse, TMetaResponseSingle } from '@kampus-gratis/utils';

export type TFaculty = {
  id: string;
  name: string;
  major_count: number;
  thumbnail: string;
  slug: string;
};

export type TFacultyResponse = TMetaResponse<TFaculty>;

export type TMajor = {
  id: string;
  faculty_id: string;
  name: string;
  major_head_id: string;
  description: string;
  thumbnail: string;
  slug: string;
  subject_count: number;
  total_credit: number;
  faculty: {
    id: string;
    name: string;
    thumbnail: string;
    slug: string;
  };
};

export type TMajorResponse = TMetaResponse<TMajor>;

export interface DataMajor {
  id: string;
  name: string;
  current_semester: number;
  credit_count: number;
  head_of_major: string;
}

export interface DataSubject {
  id: string;
  name: string;
  thumbnail: string;
  enrolled_count: number;
  subject_code: string;
  status: string;
  credit: number;
  current_semester: number;
  session_count: number;
}

export type StudentSubjectContract = {
  studentTakenMajor: boolean;
  dataMajor: DataMajor;
  dataSubjects: DataSubject[];
};

export type TStudentSubjectContractResponse =
  TMetaResponseSingle<StudentSubjectContract>;

export type TuseMajorContractData = {
  getMajorContractData: StudentSubjectContract;
  setMajorContractData: (val: StudentSubjectContract) => void;
};

export interface MajorResponse {
  id: string;
  student_id: string;
  major_id: string;
  semester_id: string;
  status: string;
  updated_at: string;
  created_at: string;
  deleted_at: any;
}

export type TMajorEnrollResponse = TMetaResponseSingle<TMajorResponse>;

export type TMajorEnrollParams = {
  id: string;
};

export interface Pending {
  subjects: Subject[];
  total_credit: number;
}

export interface Ongoing {
  subjects: Subject[];
  total_credit: number;
}

export interface Draft {
  subjects: Subject[];
  total_credit: number;
}

export interface Subject {
  id: string;
  name: string;
  thumbnail: string;
  subject_code: string;
  credit: number;
  current_semester: number;
  date_taken: any;
  date_finished: any;
  proof: any;
}

export interface Rejected {
  subjects: any[];
  total_credit: number;
}

export type TStudentSubjectPlanPayload = {
  id: string;
};

export interface StudentSubjectPlanResponse {
  pending: Pending;
  ongoing: Ongoing;
  draft: Draft;
  rejected: Rejected;
  total_plan_credit: number;
}

export type TStudentSubjectPlanResponse =
  TMetaResponseSingle<StudentSubjectPlanResponse>;

export interface SubjectPenugasan {
  id: string;
  name: string;
  thumbnail: string;
  subject_code: string;
  credit: number;
  current_semester: number;
  date_taken: any;
  date_finished: any;
  proof: any;
  status: string; // Add a status property
}

export type DataPenugasan = {
  pending: Pending;
  ongoing: Ongoing;
  draft: Draft;
  rejected: Rejected;
  total_plan_credit: number;
};


