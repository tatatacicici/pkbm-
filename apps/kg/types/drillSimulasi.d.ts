import { TMetaResponse } from '@/services/types';
import { TMetaResponseSingle } from '@kampus-gratis/utils';

export type T = {
  schedule: number;
  src: StaticImageData;
  dosen: string;
  category: string;
  title: string;
  slug?: string;
  location?: string;
};

export type ReturnTypesPopupSubmissionStatus = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export type TSimulationItem = {
  id: string;
  meeting_type: string;
  place: string;
  topic: string;
  status: string;
  grade: any;
  reschedulable: boolean;
  student_name: string;
  assessor_name: string;
  picked_schedule: any;
  dates: Date[];
};

interface Date {
  date: string;
  times: Time[];
}

interface Time {
  desc: string;
  time: string[];
}

export type TSimulationResponse = TMetaResponse<TSimulationItem>;

export type THistoryItem = {
  id: string;
  meeting_type: string;
  place: string;
  topic: string;
  status: string;
  grade: any;
  reschedulable: boolean;
  student_name: string;
  assessor_name: string;
  picked_schedule: any;
  dates: Date[];
};

export type TSimulationHistoryResponse = TMetaResponse<THistoryItem>;

export type HistorySimulation = {
  src: StaticImageData;
  title: string;
  dosen: string;
  date: string;
  time: string;
  status: string;
  slug: string;
};

// reschedule

export type CategorySimulationTypes = {
  setCategorySimulation: (val: string) => void;
  getCategorySimulation: string;
};

export type ScheduleTypes = {
  setScheduleSimulation: (val: boolean) => void;
  getScheduleSimulation: boolean;
};

export type ChooseSimulationTypes = {
  setChooseSimulation: (val: string) => void;
  getChooseSimulation: string;
};

export type ReturnTypesPopupScheduleStatus = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export type ChooseTimeSimulasiTypes = {
  setChooseTimeSimulation: (val: string) => void;
  getChooseTimeSimulation: string;
};

export type RescheduleSimulation = {
  date: string;
  time: Array<Time>;
};

export type Time = {
  time: string;
};

// dummy

export type Tdummy = {
  topic: string;
};
