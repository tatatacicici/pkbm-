import { TMetaResponse } from '@kampus-gratis/utils';
import { StaticImageData } from 'next/image';

type TAssignmentUser = {
  assignment_id: string;
  assignment_session_id: string;
  assignment_title: string;
  assignment_desc: string;
  progress_status: string;
  progress_type: string;
  progress_timestamp_taken: string;
  progress_deadline: string;
  subject_name: string;
  subject_id: string;
};

export type TMyAssignmentResponse = TMetaResponse<TAssignmentUser>;
export interface AssigmentProps {
  titleAssigment?: string;
  category?: string;
  date?: string;
  time?: string;
  titleCourse?: string;
  courseId?: string;
  assignmentId?: string;
  bgLine?: string;
  classNameCategory?: string;
  imgAssigment?: StaticImageData;
  alt?: string;
  assignmentSessionId?: string;
}

export type CrumbItem = {
  link: string;
  name: string;
};

export type BreadCrumbProps = {
  items: CrumbItem[];
};
