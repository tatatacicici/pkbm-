import { TQuizQuitPopup } from '../../types/quiz';
import { atom } from 'recoil';

export const remainingTime = atom({
  key: 'remaining-time-quiz',
  default: 100,
});

export const quizQuitPopupState = atom<TQuizQuitPopup>({
  key: 'quiz-quit-popup',
  default: {
    quizTakeId: '',
    prevPath: '',
    link: '',
    status: false,
  },
});
