import { atom } from 'jotai';
import { videoGuideStateAtom } from '../video-panduan';

// selectorFamily converted to function returning derived atom
export const filterOptionAtom = (query: string) =>
  atom((get) => {
    const videoGuideData = get(videoGuideStateAtom).data;

    if (Array.isArray(videoGuideData)) {
      return videoGuideData.filter((item) => item.url.includes(query));
    } else {
      return [];
    }
  });
