import { atom } from 'jotai';
import { globalPanduanStateAtom, queryGlobalPanduanAtom } from '../panduan';

// Derived atom (converted from selector)
export const filterGlobalPanduanAtom = atom((get) =>
  get(globalPanduanStateAtom).filter((item) =>
    item?.title?.toLowerCase().includes(get(queryGlobalPanduanAtom).toLowerCase())
  )
);
