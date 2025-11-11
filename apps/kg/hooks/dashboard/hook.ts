'use client';

import { UseQueryResult, useQuery } from '@tanstack/react-query';
import {
  dashboardMatchedCalendarState,
  filteredCalendarState,
  limitedCalendarState,
} from '../../recoil/selectors/dashboard';
import {
  TDashboardCalendar,
  TDashboardResponse,
  TuseDashboardData,
} from '../../types/dashboard';
import { useRecoilState, useRecoilValue } from 'recoil';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { dashboardGetRequest } from './request';
import { dashboardDataState } from '../../recoil/atoms/dashboard';

export const useDashboardData = (): TuseDashboardData => {
  const [get, set] = useRecoilState(dashboardDataState);
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
  const filteredCalendar = useRecoilValue(filteredCalendarState);
  const [getMatch, setMatch] = useRecoilState(dashboardMatchedCalendarState);

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
  const limitCalendarData = useRecoilValue(limitedCalendarState);
  return {
    getLimitedCalendar: limitCalendarData,
  };
};

export const useFilteredCalendar = () => {
  const filteredCalendarData = useRecoilValue(filteredCalendarState);
  return {
    getFilteredCalendar: filteredCalendarData,
  };
};
