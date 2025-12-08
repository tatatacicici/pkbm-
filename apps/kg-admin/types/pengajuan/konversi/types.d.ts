import {
  TMetaResponseSingle,
  TMetaResponse,
} from '../../../../../libs/utils/src/types';

export type TAccRejectPayload = {
  student_id: string;
  subject_id: string;
};

export type TSubject = {
  id: string;
  name: string;
  subject_id: string;
  total_session: number;
};

export type TConversionDataItem = {
  uuid: string;
  student_id: string;
  status: string;
  action_at: Date;
  student_name: string;
  student_major: string;
  subjects: Subject[];
  created_at: string;
};

export type TConversionUpdateData = {
  pk: number;
  uuid: string;
  student_id: string;
  status: string;
  file_report: null;
  action_by: string;
  action_at: string;
  updated_at: string;
};

export type TAccRejectConversionParams = {
  request_id: string;
  action_type: string;
};

export type TAllConversionRequestResponse = TMetaResponse<TConversionDataItem> &
  TMeta;
export type TUpdateConversionResponse =
  TMetaResponseSingle<TConversionUpdateData>;
