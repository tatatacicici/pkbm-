import { CALENDAR_SCHEDULE } from '@kampus-gratis/utils';
import { TCalendar } from '../../types';
import { api } from '../../config/api/apiConfig';

export const calendarGetRequest = async (): Promise<TCalendar> => {
  const { data } = await api.get(`${CALENDAR_SCHEDULE}`);
  return data;
};
