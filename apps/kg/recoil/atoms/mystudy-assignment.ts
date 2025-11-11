import { atom } from 'recoil';
import { TMyStudyAssignmentItem } from '../../types/mystudy-assignment';

export const mystudyAssignmentState = atom<TMyStudyAssignmentItem | null>({
  key: 'mystudy-assignment-state',
  default: null,
});
