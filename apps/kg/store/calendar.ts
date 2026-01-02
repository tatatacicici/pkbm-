import { atom } from 'jotai';
import { TCalendar } from '../types';

export const calendarDataStateAtom = atom<TCalendar>({
  code: 0,
  status: '',
  message: '',
  data: [{
    subject_id: '',
    ref_id: '',
    startAt: '',
    endAt: '',
    summary: '',
    allDay: false,
    type: '',
    place: '',
    speaker: '',
  }],
});
