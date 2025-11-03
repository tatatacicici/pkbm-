export interface TMyStudyV2Item {
  id: string;
  subject_code: string;
  name: string;
  slug: string;
  category: string;
  thumbnail: string;
  teacher_name: string;
  credit: number;
  subject_semester: number;
  current_session: number;
  student_count: number;
  session_count: number;
  progress_percentage: number;
}

export type TMyStudyv2Response = TMetaResponse<TMyStudyV2Item>;
