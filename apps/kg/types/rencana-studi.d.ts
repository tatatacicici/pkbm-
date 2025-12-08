import {
  TMetaItemWithPagination,
  TMetaResponse,
  TMetaResponseSingle,
} from '@kampus-gratis/utils';

export type TStatusReturnStudyPlanCard = {
  setStudyPlanLoading: (val: boolean) => void;
  getStudyPlanLoading: any;
};

export type TStatusReturnEmptyStudyPlan = {
  setEmptyStudyPlan: (val: boolean) => void;
  getEmptyStudyPlan: any;
};

export type TSubject = {
  id: string;
  name: string;
  code: string;
  credit: number;
  level: number;
  thumbnail: string;
  semester: number;
  total_session: number;
  is_taken: boolean;
  is_available: boolean;
  start_at: string;
  major_id: string;
  major_name: string;
  description: string;
  brochure: string;
  slug: string;
};

export type Major = {
  id: string;
  name: string;
  faculty_id: string;
};

export type TFaculty = {
  id: string;
  name: string;
};

export type TFilterData = {
  faculties: TFaculty[];
  majors: Major[];
  semesters: number[];
  credits: number[];
  levels: number[];
};

export type TRencanaStudiResponse = TMetaItemWithPagination<TSubject>;
export type TStudyPlanFilter = TMetaResponseSingle<TFilterData>;

export interface TDetailStudyPlan {
  id: string;
  name: string;
  description: string;
  detail: SubjectDetail;
  goals: string;
  outputs: string;
  criterias: string;
}

export interface SubjectDetail {
  major_id: string;
  major_name: string;
  thumbnail: string;
  semester: number;
  credit: number;
  type: string;
  indicator: string;
  is_taken: boolean;
}

export type TDetailStudyPlanResponse = TMetaResponseSingle<TDetailStudyPlan>;

export interface TDetailStudyPlanSessions {
  id: string;
  number: number;
  title: any;
  description: string;
}

export type TDetailStudyPlanSessionsResponse =
  TMetaResponse<TDetailStudyPlanSessions>;

export interface TDataTakeStudyPlan {
  pending: Pending;
  ongoing: Ongoing;
  draft: Draft;
  rejected: Rejected;
  total_plan_credit: number;
}

export interface Pending {
  subjects: any[];
  total_credit: number;
}

export interface Ongoing {
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
  date_finished: string;
  proof: any;
}

export interface Draft {
  subjects: any[];
  total_credit: number;
}

export interface Rejected {
  subjects: any[];
  total_credit: number;
}

export type TDataTakeStudyPlanResponse = TMetaResponse<TDataTakeStudyPlan>;

export interface TSemesterItem {
  id: string;
  semester: number;
  batchyear: number;
  plan_date_start: string;
  plan_date_end: string;
  program_date_start: string;
  program_date_end: string;
}

export type TSemesterResponse = TMetaResponse<TSemesterItem>;

export type TMajorItem = {
  id: string;
  major_head_id: string;
  faculty_id: string;
  name: string;
  degree: string;
  major_head_id: string;
  description: string;
  thumbnail?: File | null;
  slug: string;
  subject_count: number;
  total_credit: number;
};

// export type TMajorResponse = TMetaResponse<TMajorItem>;
export type TMajorResponse = TMetaResponseWithPagination<TMajorItem>;
