import { selectorFamily } from "recoil";
import { videoGuideState } from "../atoms/video-panduan";

export const filterOption = selectorFamily({
  key: "filter-option-subject",
  get:
    (query: string) =>
    ({ get }) => {
      const videoGuideData = get(videoGuideState).data; // Access the 'data' property

      if (Array.isArray(videoGuideData)) {
        return videoGuideData.filter((item) =>
          item.url.includes(query)
        );
      } else {
        // Handle the case where 'videoGuideData' is not an array
        return [];
      }
    },
});
