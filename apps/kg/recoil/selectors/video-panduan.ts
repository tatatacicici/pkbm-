import { selector } from "recoil";
import { queryPanduanVideo, videoGuideState } from "../atoms/video-panduan";
import { videoGuideTypes } from "../../types/panduan";

// export const filterOption = selectorFamily({
//     key: "filter-option-subject",
//     get:
//       (query: string) =>
//       ({ get }) =>
//         get(videoGuideState).filter((item) => (item.videoId as string).includes(query)),
//   });
  
export const filterPanduanVideo = selector({
  key: "filter-panduan-video",
  get: ({ get }) =>
    get(videoGuideState)?.data?.filter((item: videoGuideTypes) =>
      item?.title.toLowerCase().includes(get(queryPanduanVideo).toLowerCase())
    ),
});