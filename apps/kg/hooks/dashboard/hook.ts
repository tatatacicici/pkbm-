'use client';

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import {
  dashboardMatchedCalendarStateAtom,
  filteredCalendarStateAtom,
  limitedCalendarStateAtom,
} from '../../store';
import {
  TDashboardCalendar,
  TDashboardResponse,
  TuseDashboardData,
} from '../../types/dashboard';
import { useAtom, useAtomValue } from 'jotai';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { dashboardGetRequest } from './request';
import { dashboardDataStateAtom } from '../../store';

export const useDashboardData = (): TuseDashboardData => {
  const [get, set] = useAtom(dashboardDataStateAtom);
  return {
    getDashboardData: get,
    setDashboardData: (val) => set(val),
  };
};

export const useGetDashboard = (): UseQueryResult<
  TDashboardResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['dashboard-get-all'],
    queryFn: async () => await dashboardGetRequest(),
  });

export const useMatchCalendarByDate = () => {
  const filteredCalendar = useAtomValue(filteredCalendarStateAtom);
  const [getMatch, setMatch] = useAtom(dashboardMatchedCalendarStateAtom);

  function matchHandler(val: Date) {
    const foundCalendarByDate = filteredCalendar.find(
      (fil) => val === fil.date
    );
    return foundCalendarByDate?.items;
  }

  return {
    getMatchedCalendar: getMatch,
    setMatchedCalendar: (val: Date) =>
      setMatch(matchHandler(val) as Array<TDashboardCalendar>),
  };
};

export const useLimitedCalendar = () => {
  const limitCalendarData = useAtomValue(limitedCalendarStateAtom);
  return {
    getLimitedCalendar: limitCalendarData,
  };
};

export const useFilteredCalendar = () => {
  const filteredCalendarData = useAtomValue(filteredCalendarStateAtom);
  return {
    getFilteredCalendar: filteredCalendarData,
  };
};
