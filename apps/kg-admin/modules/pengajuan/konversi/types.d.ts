import { TSubject } from '../../../types/pengajuan/konversi/types';

export type TMyModal = {
  isOpen: boolean;
  closeModal: () => void;
  //   handleClickSubmit: () => void;
  data: TSubject[];
  student_id?: string;
  subject_id?: string;
};

export type TAccRejectModal = {
  isOpen: boolean;
  request_id: string;
};

export type TDetailModal = {
  isOpen: boolean;

  //   handleClickSubmit: () => void;
  data: TSubject[];
  student_major: string;
  student_name: string;
  request_id: string;
};
