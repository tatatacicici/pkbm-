import DummyHistory from '../../assets/drill-simulasi/dummy-drillHistory.svg';
import { atom, selectorFamily } from "recoil";
import { Tdummy } from "../../types/drillSimulasi";
import { HistorySimulation } from '../../types/drillSimulasi';

export const PopupModalSubmissionOpen = atom({
  key: 'modal-popup-submission',
  default: false,
});

export const historySimulationsState = atom<Array<HistorySimulation>>({
  key: 'history-simulations-state',
  default: [
    {
      src: DummyHistory,
      title: 'Sejarah Indonesia',
      dosen: 'Pak Rungkad',
      date: '27 April 2022',
      time: '15:00',
      status: 'selesai',
      slug: '/Penganatar-Sejarah',
    },
    {
      src: DummyHistory,
      title: 'Pengantar Indonesia',
      dosen: 'Irawan Irawati',
      date: '27 April 2022',
      time: '15:00',
      status: 'belum-selesai',
      slug: '/Penganatar-Indonesia',
    },
  ],
});

// seacrh //
export const queryScheduleSimulation = atom({
  key: 'query-schedule-simulation',
  default: '',
});

// reschedule


export const categorySimulationState = atom({
  key: "category-simulation-state",
  default: "",
});
export const chooseScheduleState = atom({
  key: "choose-schedule-state",
  default: false,
});
export const chooseSimulasiState = atom({
  key: "reschedule-simulasi-state",
  default: "",
});
export const PopupModalScheduleOpen = atom({
  key: "modal-popup-schedule",
  default: false,
});
export const ChooseTimeSimulasiState = atom({
  key: "reschedule-time-simulasi-state",
  default: "",
});

// filter dummy
export const sceduleSimulationState = atom<Array<Tdummy>>({
  key: "scedule-simulation-state",
  default: [
    {
      topic: "Sejarah Indonesia",
    },
    {
      topic: "Bahasa Jawa",
    },
  ],
});

export const filterSlug = selectorFamily({
  key: "filter-slug-subject",
  get:
    (query: string) =>
    ({ get }) =>
      get(sceduleSimulationState).filter((item) => (item.topic as string).includes(query)),
});
