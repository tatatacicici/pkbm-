import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TSubjectDetails = {
  conference: number;
  status: {
    [key: string]: 'Done' | 'In Progress';
  };
  progress: Array<'Done' | 'In Progress'>;
  isOpen: boolean;
};

// SERVICE API
export type TSubjectDetailsItem = {
  subject: TDataSubject
  overview: Overview
  sessions: TDataSession[]
  progress: TDataProgress
};

export type TDataSubject = {
  id: string
  name: string
  type: string
  description: string
  thumbnail: string
}

export interface TDataOverview {
  id: string
  title: string
  subject_id: string
  module_id: string
  video_id: string
  link: string
  duration_seconds: number
  duration_minutes: number
}

export interface TDataSession {
  id: string
  title: string
  no: number
  type: string
  start_at?: string
  is_locked: boolean
  progress: Progress[]
}

export interface TProgress {
  type: string
  status: string
}

export interface TDataProgress {
  total: number
  finished: number
  percentage: number
}

export type TSubjectDetailsResponse = TMetaResponseSingle<TSubjectDetailsItem>;

export type TSubjectSessionsResponse = TMetaResponseSingle<TSubjectSessions>;

export interface TSubjectSessions {
  subject: SubjectV2;
  overview: Overviewv2;
  sessions: SessionV2[];
}

export interface SubjectV2 {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
}

export interface Overviewv2 {
  subject_id: string;
  session_id: string;
  module_id: string;
  link: string;
  duration_seconds: number;
  duration_minutes: number;
}

export interface SessionV2 {
  id: string;
  title: string;
  session_no: number;
  session_type: string;
  is_locked: boolean;
  progress: ProgressV2[];
}

export interface ProgressV2 {
  status: string;
  type: string;
  updated_at: string;
}


