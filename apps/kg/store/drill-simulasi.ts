import DummyHistory from '../assets/drill-simulasi/dummy-drillHistory.svg';
import { atom } from 'jotai';
import { Tdummy, HistorySimulation } from '../types/drillSimulasi';

export const PopupModalSubmissionOpenAtom = atom(false);

export const historySimulationsStateAtom = atom<Array<HistorySimulation>>([
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
]);

// search
export const queryScheduleSimulationAtom = atom('');

// reschedule
export const categorySimulationStateAtom = atom('');

export const chooseScheduleStateAtom = atom(false);

export const chooseSimulasiStateAtom = atom('');

export const PopupModalScheduleOpenAtom = atom(false);

export const ChooseTimeSimulasiStateAtom = atom('');

// filter dummy
export const sceduleSimulationStateAtom = atom<Array<Tdummy>>([
  {
    topic: 'Sejarah Indonesia',
  },
  {
    topic: 'Bahasa Jawa',
  },
]);

// selectorFamily converted to function returning derived atom
export const filterSlugAtom = (query: string) =>
  atom((get) =>
    get(sceduleSimulationStateAtom).filter((item) =>
      (item.topic as string).includes(query)
    )
  );
