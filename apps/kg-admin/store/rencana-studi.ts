'use client';

import { atom } from 'jotai';
import { TFacultyResponse, TMajorResponse, TSubjectResponse } from '../types/rencatastudi';

// Modal states
export const modalOpenStateAtom = atom(false);
export const modalBerhasilAtom = atom(false);
export const modalConfirmationAtom = atom(false);
export const modalEditAtom = atom(false);
export const modalDeleteAtom = atom(false);
export const modalDeleteSuccessAtom = atom(false);
export const modalEditSuccessAtom = atom(false);

// ID states
export const idFacultyStateAtom = atom('');

// Data states
export const facultyDataStateAtom = atom<TFacultyResponse>({
  code: 0,
  status: '',
  message: '',
  data: [],
  meta: {
    page_size: 0,
    total_data: 0,
    current_page: 0,
    max_page: 0
  },
});

export const majorDataStateAtom = atom<TMajorResponse>({
  code: 0,
  status: '',
  message: '',
  data: [],
  meta: {
    page_size: 0,
    total_data: 0,
    current_page: 0,
    max_page: 0
  },
});

export const subjectDataStateAtom = atom<TSubjectResponse>({
  code: 0,
  status: '',
  message: '',
  data: [],
  meta: {
    page_size: 0,
    total_data: 0,
    current_page: 0,
    max_page: 0
  },
});
