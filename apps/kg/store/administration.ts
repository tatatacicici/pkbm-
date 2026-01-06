'use client';

import { atom } from 'jotai';

export const AdministrationStudentRoleModalStateAtom = atom(true);

export const AdministrationStudentRoleStateAtom = atom<'REGULAR' | 'BOOTCAMP'>('REGULAR');

export const AdministrationStatusStateAtom = atom('none');

export const AdministrationStepStateAtom = atom(0);

// stepper

export const PrivateInformationStateAtom = atom(false);

export const JobInformationStateAtom = atom(false);

export const FileInformationStateAtom = atom(false);

export const FacultyInformationStateAtom = atom<boolean>(false);

export const SocialMediaInformationStateAtom = atom<boolean>(false);
