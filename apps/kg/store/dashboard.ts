'use client';

import { TDashboardItem, TProgress } from '../types';
import { atom } from 'jotai';

export const dashboardDataStateAtom = atom<TDashboardItem | null>(null);

export const selectedTasksAtom = atom(1);

export const selectedEventAtom = atom(1);

export const ProgressStateAtom = atom<Array<TProgress>>([
  {
    judul: 'Introduction to Japanese Culture',
    subjudul: 'Japanese Culture',
    semester: 1,
    totalPertemuan: 10,
    pertemuanDone: 8,
  },
  {
    judul: 'Introduction to Japanese Culture',
    subjudul: 'Japanese Culture',
    semester: 1,
    totalPertemuan: 5,
    pertemuanDone: 5,
  },
  {
    judul: 'Introduction to Japanese Culture',
    subjudul: 'Japanese Culture',
    semester: 1,
    totalPertemuan: 14,
    pertemuanDone: 5,
  },
  {
    judul: 'Introduction to Japanese Culture',
    subjudul: 'Japanese Culture',
    semester: 1,
    totalPertemuan: 10,
    pertemuanDone: 9,
  },
]);

export const selectedDateAtom = atom(new Date());
