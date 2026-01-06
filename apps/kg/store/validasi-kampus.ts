import { jurusanAsalType, perguruanAsalType, prodiAsalType } from '../types/konversi';
import { atom } from 'jotai';

export const perguruanAsalStateAtom = atom<Array<perguruanAsalType>>([
  {
    id: '1',
    title: 'Universitas Indonesia',
  },
  {
    id: '2',
    title: 'Institut Teknologi Bandung',
  },
  {
    id: '3',
    title: 'Universitas Gadjah Mada',
  },
  {
    id: '4',
    title: 'Universitas Airlangga',
  },
  {
    id: '5',
    title: 'Institut Pertanian Bogor',
  },
]);

export const queryPerguruanAsalAtom = atom('');

export const prodiAsalStateAtom = atom<Array<prodiAsalType>>([
  {
    id: '1',
    title: 'Ilmu Komputer',
  },
  {
    id: '2',
    title: 'Ekonomi',
  },
  {
    id: '3',
    title: 'Kedokteran Gigi',
  },
  {
    id: '4',
    title: 'Ilmu Hukum',
  },
  {
    id: '5',
    title: 'Teknik Elektro',
  },
]);

export const queryProdiAsalAtom = atom('');

export const jurusanAsalStateAtom = atom<Array<jurusanAsalType>>([
  {
    id: '1',
    title: 'Ilmu Komputer',
  },
  {
    id: '2',
    title: 'Ekonomi',
  },
  {
    id: '3',
    title: 'Kedokteran Gigi',
  },
  {
    id: '4',
    title: 'Ilmu Hukum',
  },
  {
    id: '5',
    title: 'Teknik Elektro',
  },
]);

export const queryJurusanAsalAtom = atom('');
