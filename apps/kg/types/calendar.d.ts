export type TCalendarItems = {
  subject_id: string;
  startAt: string;
  endAt: string;
  summary: string;
  allDay: boolean;
  type: string;
  ref_id: string;
  place: string;
  speaker: string;
};

export type TCalendar = {
  code: number;
  status: string;
  message: string;
  data: TCalendarItems[];
};

export type TUseCalendarState = {
  calendarData: TCalendar;
  setCalendarData: (val: TCalendar) => void;
};
