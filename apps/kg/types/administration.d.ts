import { TMetaResponseSingle } from '@mknows-frontend-services/utils';

export type T = {
  title: string;
  course: string;
  date: string;
  time: string;
  id: number;
  category: string;
};

export type TStatusReturnAdministration = {
  setAdministrationStatus: (val: string) => void;
  getAdministrationStatus: string;
};

export type TStatusReturnAdministrationStudentRole = {
  setAdministrationStudentRole: (val: 'REGULAR' | 'BOOTCAMP') => void;
  getAdministrationStudentRole: 'REGULAR' | 'BOOTCAMP';
};

export type TReturnFacultyInformation = {
  setFacultyStatus: (val: boolean) => void;
  getFacultyStatus: boolean;
};

export type TReturnSocialMediaInformation = {
  setSocialMediaStatus: (val: boolean) => void;
  getSocialMediaStatus: boolean;
};

export type TAdministrationItem = {
  details: TDetailAdm;
  biodatas: TBiodataAdm;
  familials: TFamilyAdm;
  files: TFileAdm;
  studies: TMajorAdm;
};

export interface TMajorAdm {
  id: string;
  name: string;
  slug: string;
  code: any;
  degree: string;
  thumbnail: string;
  status: string;
  taken_at: string;
}

export type TDetailAdm = {
  id: string;
  user_id: string;
  status: string;
  type: string;
  reason: string;
  action_by: string;
  created_at: string;
  updated_at: string;
};

export type TBiodataAdm = {
  full_name?: string;
  gender?: string;
  phone_number?: string;
  birthdate?: string | null;
  birthplace?: string;
  address?: string;
  last_education?: string;
  nim?: string;
  university?: string;
  major?: string;
  semester?: number | null;
  identity_number?: string;
  province_id?: string;
  regency_id?: string;
  district_id?: string;
  village_id?: string;
  postal_code?: string;

  // tambahan
  school_name_sd?: string;
  entry_year_sd?: string;
  graduation_year_sd?: string;
  diploma_sd?: string;
  school_name_smp?: string;
  entry_year_smp?: string;
  graduation_year_smp?: string;
  diploma_smp?: string;
  school_name_sma?: string;
  entry_year_sma?: string;
  report_card_sma?: string;
};

export type TFamilyAdm = {
  father_name: string;
  father_occupation: string;
  father_salary: string;
  mother_name: string;
  mother_occupation: string;
  mother_salary: string;
  self_salary: string;
  live_with: string;
  tuition_payer: string;
};

export type TFileAdm = {
  id_card?: File;
  diploma_certificate?: File;
  family_card?: File;
  photo?: File;
  transcript?: File;
  letter_of_recommendation?: File;
  student_card?: File;

  // tambahan
  id_card_question?: string;
};

export type TFacultyAdm = {
  program_id: string;
  // faculty_id: string;
  // major_id: string;
};

export type TConstantsAdm = {
  gender: Gender;
  last_education: LastEducation;
  occupation: Occupation;
  salary: Salary;
  live_with: LiveWith;
  tuition_payer: TuitionPayer;
};
export type Gender = {
  keys: string[];
  values: string[];
};

export type LastEducation = {
  keys: string[];
  values: string[];
};

export type Occupation = {
  keys: string[];
  values: string[];
};

export type Salary = {
  keys: string[];
  values: string[];
};

export type LiveWith = {
  keys: string[];
  values: string[];
};

export type TuitionPayer = {
  keys: string[];
  values: string[];
};

export type TBiodataResponse = TMetaResponseSingle<TBiodataAdm>;
export type TFamilyResponse = TMetaResponseSingle<TFamilyAdm>;
export type TFileResponse = TMetaResponseSingle<TFileAdm>;
export type TConstantsResponse = TMetaResponseSingle<TConstantsAdm>;
export type TGetAdmResponse = TMetaResponseSingle<TAdministrationItem>;

export type TReturnPrivateInformation = {
  setPrivateStatus: (val: boolean) => void;
  getPrivateStatus: boolean;
};

export type TReturnJobInformation = {
  setJobStatus: (val: boolean) => void;
  getJobStatus: boolean;
};

export type TReturnFileInformation = {
  setFileStatus: (val: boolean) => void;
  getFileStatus: boolean;
};

export type TStatusReturnAdministration = {
  setAdministrationStatus: (val: string) => void;
  getAdministrationStatus: string;
};

export type TAdministrationItem = {
  id: string;
  user_id: string;
  status: string;
  type: string;
  action_by: string;
  biodata: TBiodataAdm;
  familial: TFamilyAdm;
  file: string;
};

export type TTeacherRegistrationPayload = {
  full_name: string;
  email: string;
  phone_number: string;
  address: string;
  organization: string;
  department: string;
  position: string;
  last_education: string;
  birth_date: string;
  interest_field: string;
  feedback: string;
  contributions: string[];
  linkedin_url: string;
};

export type TSocialMediaPayload = {
  instagram: string | null;
  tiktok: string | null;
  youtube: string | null;
};
