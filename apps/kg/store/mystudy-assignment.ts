import { atom } from 'jotai';
import { TMyStudyAssignmentItem } from '../types/mystudy-assignment';

export const mystudyAssignmentStateAtom = atom<TMyStudyAssignmentItem | null>(null);
