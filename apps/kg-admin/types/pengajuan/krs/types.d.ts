import {
  TMetaResponseSingle,
  TMetaResponse,
} from '../../../../../libs/utils/src/types';

export type TAccRejectPayload = {
  student_id: string;
  subject_id: string;
};

export type TSubject = {
  name: string;
  credit: number;
  subject_id: string;
  student_subject_id: string;
  proof?: string;
};

export type TKrsDataItem = {
  subjects: Subject[];
  total_credit: number;
};

export type TPengajuanKrsData = {
  pending: TKrsDataItem;
  ongoing: TKrsDataItem;
  draft: TKrsDataItem;
  rejected: TKrsDataItem;
  total_plan_credit: number;
};

export type TKRSRequest = {
  id: string;
  student_id: string;
  student_name: string;
  subject_id: string;
  subject_name: string;
  subject_semester: number;
  status: string;
  national_student_number: string;
  teacher_name: string;
  created_at: string;
  updated_at: string;
};

export type TMeta = {
  meta: {
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};

export type TAllStudyplanRequestResponse = TMetaResponse<TKRSRequest> & TMeta;
export type TPengajuanKrsResponse = TMetaResponseSingle<TPengajuanKrsData>;
