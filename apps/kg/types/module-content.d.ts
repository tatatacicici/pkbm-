import { TMetaResponse, TMetaResponseSingle } from '@kampus-gratis/utils';

export type ConfirmModulTypes = {
  setConfirmModul: (val: boolean) => void;
  getConfirmModul: boolean;
};

export type TModuleSessionData = {
  detail: TModuleContentDetail
  modules: TModuleItem[]
};

export type TModuleItem = {
  id: string
  total_videos: string
  total_documents: string
  total_journals: string
  total_articles: string
  is_all_video_seen: boolean
  title: string
  description: string
  submitted: boolean
};

export type TModuleResponse = TMetaResponseSingle<TModuleSessionData>;

export type TusePopupConfirmModul = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

type TModuleModuleVideo = {
  id: string;
  module_id: string;
  url: string;
  title: string;
  description: string;
};

type TModuleDocument = {
  id: string;
  document_file: string;
  module_id: string;
  title: string;
};

export interface TModuleContentDetail {
  subject_id: string
  subject_name: string
  session_id: string
  session_no: number
  session_type: string
}

export interface TModuleContentItem {
  id: string
  title: string
  description: string
  is_all_video_seen: boolean
  videos: TModuleVideo[]
  documents: TModuleDocument[]
  journals: any[]
  articles: any[]
  status: string
}

export interface TModuleVideo {
  id: string
  module_id: string
  url: string
  title: string
  description: string
  duration_in_seconds: number
  is_video_seen: boolean
}

export type TModuleContentData = {
  detail: TModuleContentDetail
  module: TModuleContentItem
};

type TWatchedVideoProgressItem = {
  id: string;
  student_id: string;
  video_id: string;
  updated_at: string;
  created_at: string;
  deleted_at: string;
};

export type TModuleContentResponse = TMetaResponseSingle<TModuleContentData>;
export type TWatchedVideoProgressReponse =
  TMetaResponseSingle<TWatchedVideoProgressItem>;

type TModuleResumeItem = {
  student_id: string;
  subject_id: string;
  status: string;
  type: string;
  score: string;
  is_late: string;
  timestamp_taken: string;
  timestamp_submitted: string;
};

type TModuleResumePayloadReq = {
  module_answer: string;
};

export type TModuleResumePayload = {
  id: number | string;
  req: TModuleResumePayloadReq;
};

export type TModuleResumeResponse = TMetaResponseSingle<TModuleResumeItem>;
