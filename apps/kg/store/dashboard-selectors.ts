'use client';

import { TDashboardCalendar, TFilteredCalendar } from '../types';
import { atom } from 'jotai';
import { dashboardDataStateAtom } from './dashboard';

export const days: string[] = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
];

export const months: string[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const dashboardMatchedCalendarStateAtom = atom<Array<TDashboardCalendar>>([]);

// Derived atom (converted from selector)
export const limitedCalendarStateAtom = atom<Array<Date>>((get) => {
  const dateTimeArray: Date[] = [];

  const today = new Date();
  const startDate = new Date(today.getTime() - 7 * 24 * 60 * 60 * 1000);

  for (let i = 0; i < 21; i++) {
    const currentDate = new Date(
      startDate.getTime() + i * 24 * 60 * 60 * 1000
    );
    currentDate.setHours(0, 0, 0, 0);
    dateTimeArray.push(currentDate);
  }

  return dateTimeArray;
});

// Derived atom (converted from selector)
export const filteredCalendarStateAtom = atom<Array<TFilteredCalendar>>((get) => {
  const limitedCalendar = get(limitedCalendarStateAtom);
  const dashboardData = get(dashboardDataStateAtom);
  const newCalendarForm: Array<TFilteredCalendar> = [];

  limitedCalendar?.forEach((lim, i) => {
    const filteredCalendarByDate = dashboardData?.calendar?.filter((cal) => {
      const startAt = new Date(cal?.startAt);
      const endAt = new Date(cal?.endAt);

      return lim >= startAt && lim <= endAt;
    });

    const calendarObj: TFilteredCalendar = {
      date: lim,
      items: filteredCalendarByDate,
    };

    newCalendarForm.push(calendarObj);
  });

  return newCalendarForm;
});
