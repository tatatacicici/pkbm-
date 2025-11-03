import { atom } from 'recoil';
import { TCalendar } from '../../types';

export const calendarDataState = atom<TCalendar>({
  key: 'calendar-data-state',
  default: {
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
  },
});
