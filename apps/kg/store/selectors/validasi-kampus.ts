import { atom } from 'jotai';
import {
  jurusanAsalStateAtom,
  perguruanAsalStateAtom,
  prodiAsalStateAtom,
  queryJurusanAsalAtom,
  queryPerguruanAsalAtom,
  queryProdiAsalAtom,
} from '../validasi-kampus';

// Derived atom (converted from selector)
export const filterPerguruanAsalAtom = atom((get) =>
  get(perguruanAsalStateAtom).filter((item) =>
    item?.title?.toLowerCase().includes(get(queryPerguruanAsalAtom).toLowerCase())
  )
);

// Derived atom (converted from selector)
export const filterProdiAsalAtom = atom((get) =>
  get(prodiAsalStateAtom).filter((item) =>
    item?.title?.toLowerCase().includes(get(queryProdiAsalAtom).toLowerCase())
  )
);

// Derived atom (converted from selector)
export const filterJurusanAsalAtom = atom((get) =>
  get(jurusanAsalStateAtom).filter((item) =>
    item?.title?.toLowerCase().includes(get(queryJurusanAsalAtom).toLowerCase())
  )
);
