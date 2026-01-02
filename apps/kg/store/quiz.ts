import { TQuizQuitPopup } from '../types/quiz';
import { atom } from 'jotai';

export const remainingTimeAtom = atom(100);

export const quizQuitPopupStateAtom = atom<TQuizQuitPopup>({
  quizTakeId: '',
  prevPath: '',
  link: '',
  status: false,
});
