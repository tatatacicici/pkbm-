import { atom } from 'jotai';
import { dictionaryStateAtom, queryOptionDictionaryAtom } from '../kamus-kampus-gratis';

// Derived atom (converted from selector)
export const filterPanduanKamusAtom = atom((get) =>
  get(dictionaryStateAtom)?.data?.filter((item) =>
    item?.title?.toLowerCase().includes(get(queryOptionDictionaryAtom).toLowerCase())
  )
);
