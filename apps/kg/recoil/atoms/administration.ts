'use client';

import { atom } from 'recoil';

export const AdministrationStudentRoleModalState = atom({
  key: 'administration-student-role-modal-state',
  default: true,
});

export const AdministrationStudentRoleState = atom<'REGULAR' | 'BOOTCAMP'>({
  key: 'administration-student-role-state',
  default: 'REGULAR',
});

export const AdministrationStatusState = atom({
  key: 'administration-status-state',
  default: 'none',
});

export const AdministrationStepState = atom({
  key: 'administration-step-state',
  default: 0,
});

// stepper

export const PrivateInformationState = atom({
  key: 'private-information-state-babi',
  default: false,
});
export const JobInformationState = atom({
  key: 'job-information-state',
  default: false,
});
export const FileInformationState = atom({
  key: 'file-information-state',
  default: false,
});

export const FacultyInformationState = atom<boolean>({
  key: 'faculty-information-state',
  default: false,
});

export const SocialMediaInformationState = atom<boolean>({
  key: 'social-media-information-state',
  default: false,
});
