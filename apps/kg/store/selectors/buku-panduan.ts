import { atom } from 'jotai';
import { bookGuideStateAtom, queryPanduanBookAtom } from '../buku-panduan';

// Derived atom (converted from selector)
export const filterPanduanBookAtom = atom((get) =>
  get(bookGuideStateAtom)?.data?.filter((item) =>
    item?.title?.toLowerCase().includes(get(queryPanduanBookAtom).toLowerCase())
  )
);
