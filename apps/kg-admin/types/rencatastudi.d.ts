// Faculty

import { TMetaResponse, TMetaResponseSingle, TMetaResponseWithPagination } from './Meta';

export type TFaculty = {
  id: string;
  name: string;
  thumbnail: File;
  slug: string;
  updated_at: string;
  created_at: string;
  deleted_at: any;
};

export type TAddFacultyPayload = {
  name: string;
  thumbnail: File;
};

export type TUpdateFacultyPayload = {
  name: string;
  thumbnail?: File;
};

export type TDeleteFacultyPayload = {
  faculty_id: string;
};

export type TFacultyItem = {
  id: string;
  name: string;
  thumbnail: File | null;
  slug: string;
  major_count: string;
};

export type TuseFacultyData = {
  getFacultyData: TFacultyResponse;
  setFacultyData: (val: TFacultyResponse) => void;
};

export type TFacultyResponse = TMetaResponseWithPagination<TFacultyItem>;
export type TFacultyDetailResponse = TMetaResponseSingle<TFaculty>;

//   End Faculty

// Major

export type TMajor = {
  id: string;
  name: string;
  degree: string;
  description: string;
  major_head_id: string;
  faculty_id: string;
  slug: string;
  thumbnail: File | null;
  updated_at: string;
  created_at: string;
  deleted_at: any;
};

export type TAddMajorPayload = {
  faculty_id: string;
  name: string;
  degree: string;
  major_head_id: string;
  description: string;
  thumbnail: File;
};

export type TUpdateMajorPayload = {
  faculty_id?: string;
  name?: string;
  degree?: string;
  major_head_id?: string;
  description?: string;
  thumbnail?: File;
};

export type TDeleteMajorPayload = {
  major_id: string;
};


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

export type TuseMajorData = {
  getMajorData: TMajorResponse;
  setMajorData: (val: TMajorResponse) => void;
};

// export type TMajorResponse = TMetaResponse<TMajorItem>;
export type TMajorResponse = TMetaResponseWithPagination<TMajorItem>;
// export type TMajorResponsePagination = TMetaResponseWithPagination<TMajorItem>;
export type TMajorDetailResponse = TMetaResponseSingle<TMajor>;

// End Major

// Subject



export type TSubject = {
  id: string
  major_id: string
  name: string
  subject_code: string
  duration_hours: number
  level: number
  teacher_id: string
  indicator: string
  study_experience: string
  teaching_materials: string
  basic_competencies: string
  tools_needed: string
  description: string
  scoring: string
  credit: number
  slug: string
  thumbnail: File | null
  updated_at: string
  created_at: string
  deleted_at: any
}


export type TSubjectItem = {
  id: string;
  major_name: string;
  major_id: string
  name: string;
  subject_code: string;
  duration_hours: number;
  level: number;
  teacher_id: string;
  indicator: string;
  study_experience: string;
  teaching_materials: string;
  basic_competencies: string;
  tools_needed: string;
  scoring: string;
  description: string;
  thumbnail: File | null
  credit: number;
  slug: string;
};

export type TAddSubjectPayload = {
  name: string
  subject_code: string
  duration_hours: number
  level: number
  teacher_id: string
  indicator: string
  study_experience: string
  teaching_materials: string
  basic_competencies: string
  tools_needed: string
  description: string
  scoring: string
  credit: number
  major_id: string;
  thumbnail: File | null
}

export type TUpdateSubjectPayload = {
  name: string
  subject_code: string
  duration_hours: number
  level: number
  teacher_id: string
  indicator: string
  study_experience: string
  teaching_materials: string
  basic_competencies: string
  tools_needed: string
  description: string
  scoring: string
  credit: number
  major_id: string;
  thumbnail?: File | null
}

export type TDeleteSubjectPayload = {
  subject_id: string;
};

export type TSubjectResponse = TMetaResponseWithPagination<TSubjectItem>;
export type TSubjectDetailResponse = TMetaResponseSingle<TSubject>

export type TuseSubjectData = {
  getSubjectData: TSubjectResponse;
  setSubjectData: (val: TSubjectResponse) => void;
};

//  End Major
