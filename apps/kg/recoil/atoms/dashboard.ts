'use client';

import { TDashboardItem, TProgress } from '../../types';
import { atom } from 'recoil';

export const dashboardDataState = atom<TDashboardItem | null>({
  key: 'dashboard-data-state',
  default: null,
});

export const selectedTasks = atom({
  key: 'selectedTasks',
  default: 1,
});

export const selectedEvent = atom({
  key: 'selectedEvent',
  default: 1,
});

export const ProgressState = atom<Array<TProgress>>({
  key: 'progress-state',
  default: [
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
  ],
});

export const selectedDate = atom({
  key: 'selectedDate',
  default: new Date(),
});
