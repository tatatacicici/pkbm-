import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type TuseMyStudyAssignmentItem = {
  getMyStudyAssignmentItem: TMyStudyAssignmentItem | null;
  setMyStudyAssignmentItem: (val: TMyStudyAssignmentItem) => void;
};

// Service API

export type TMyStudyAssignmentItem = {
  detail: TAssignmentDetail
  assignment: TAssignmentDetail;
};

export type TAssignmentDetail = {
  id: string
  session_id: string
  session_no: number
  title: string
  desc: string
  duration_days: number
  documents: TAssignmentDocument[]
  progress: TStudentProgress
};

type TAssignmentDocument = {
  id: string
  assignment_id: string
  document_id: any
  document_url: string
  document_filename: string
};

type TSessionAssignment = {
  session_no: number;
  subject_session: TSubjectSession;
};

type TSubjectSession = {
  id: string;
  name: string;
  teacher_subject: TTeacherSubject;
};

type TTeacherSubject = {
  full_name: string;
};

export type TStudentProgress = {
  id: string
  student_id: string
  quiz_id: any
  assignment_id: string
  session_id: string
  subject_id: string
  status: string
  type: string
  score: any
  is_late: boolean
  timestamp_taken: string
  timestamp_scored: any
  timestamp_submitted: any
  deadline: string
  text: any
  files: any[]
  total_files: number
};

type TAssignmentAnswer = {
  document_url: string;
  document_filename: string;
};

export type TMyStudyAssignmentResponse =
  TMetaResponseSingle<TMyStudyAssignmentItem>;

export type TPayloadRequest = {
  files: File[] | null;
  filesToDelete?: string[] | string | null;
};

export type TMyStudyAssignmentSubmissionPayload = {
  files?: File;
  text?: string;
};


// v2

export type TListAssignmentResponse = TMetaResponseSingle<TListAssignmentItem>;

export interface TListAssignmentItem {
  detail: TAssignmentDetail
  assignments: TListAssignment[]
}

export interface TAssignmentDetail {
  subject_id: string
  subject_name: string
  session_id: string
  session_no: number
  session_type: string
}

export interface TListAssignment {
  id: string
  session_id: string
  module_id: any
  title: string
  desc: string
  duration_days: number
  documents: TAssignmentDocumentItem[]
  progress: TProgressAssignmentItem
}

export interface TAssignmentDocumentItem {
  id: string
  assignment_id: string
  document_id: any
  document_url: string
  document_filename: string
}

export interface TProgressAssignmentItem {
  id: string
  is_late: boolean
  student_id: string
  session_id: string
  subject_id: string
  assignment_id: string
  type: string
  status: string
  deadline: string
  timestamp_taken: string
  updated_at: string
  created_at: string
  module_id: any
  score: any
  timestamp_scored: any
  timestamp_submitted: any
  deleted_at: any
}
