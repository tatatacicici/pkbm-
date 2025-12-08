import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { TCalendar, TUseCalendarState } from '../../types';
import { calendarGetRequest } from './request';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { calendarDataState } from '../../recoil/atoms/calendar';

export const RequestCalendarData = (): UseQueryResult<
  TCalendar,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['get-calendar-data'],
    queryFn: async () => await calendarGetRequest(),
  });

export const useCalendarDataState = (): TUseCalendarState => {
  const [get, set] = useRecoilState(calendarDataState);
  return {
    calendarData: get,
    setCalendarData: (val: TCalendar) => set(val),
  };
};
