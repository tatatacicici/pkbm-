import { atom } from 'jotai';
import { queryPanduanVideoAtom, videoGuideStateAtom } from '../video-panduan';
import { videoGuideTypes } from '../../types/panduan';

// Derived atom (converted from selector)
export const filterPanduanVideoAtom = atom((get) =>
  get(videoGuideStateAtom)?.data?.filter((item: videoGuideTypes) =>
    item?.title.toLowerCase().includes(get(queryPanduanVideoAtom).toLowerCase())
  )
);
