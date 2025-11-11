import { StudentSubjectContract } from '../../types/study-plan';
import { atom, selectorFamily } from 'recoil';

export const dataMajorContractState = atom<StudentSubjectContract>({
  key: 'data-major-contract-state',
  default: {
    studentTakenMajor: false,
    dataMajor: {
      id: 'string',
      name: 'string',
      current_semester: 0,
      credit_count: 0,
      head_of_major: 'string',
    },
    dataSubjects: [],
  },
});

export const PopupModalConfirmCard = atom({
  key: 'modal-popup-confirm-card-2',
  default: false,
});

export const PopupModalAddStudy = atom({
  key: 'modalPopup-addStudy-studyContract',
  default: false,
});

export const PopupModalSuccessConversi = atom({
  key: 'modalPopup-successConversi-studyContract',
  default: false,
});

export const PopupModalConfirmStatus = atom({
  key: 'modalPopup-confirmStatus-studyContract',
  default: false,
});
