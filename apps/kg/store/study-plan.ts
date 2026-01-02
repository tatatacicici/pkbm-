import { StudentSubjectContract } from '../types/study-plan';
import { atom } from 'jotai';

export const dataMajorContractStateAtom = atom<StudentSubjectContract>({
  studentTakenMajor: false,
  dataMajor: {
    id: 'string',
    name: 'string',
    current_semester: 0,
    credit_count: 0,
    head_of_major: 'string',
  },
  dataSubjects: [],
});

export const PopupModalConfirmCardAtom = atom(false);

export const PopupModalAddStudyAtom = atom(false);

export const PopupModalSuccessConversiAtom = atom(false);

export const PopupModalConfirmStatusAtom = atom(false);
