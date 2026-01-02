import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import { TCalendar, TUseCalendarState } from '../../types';
import { calendarGetRequest } from './request';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { calendarDataStateAtom } from '../../store';

export const RequestCalendarData = (): UseQueryResult<
  TCalendar,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['get-calendar-data'],
    queryFn: async () => await calendarGetRequest(),
  });

export const useCalendarDataState = (): TUseCalendarState => {
  const [get, set] = useAtom(calendarDataStateAtom);
  return {
    calendarData: get,
    setCalendarData: (val: TCalendar) => set(val),
  };
};
