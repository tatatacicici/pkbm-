import { selector, selectorFamily } from "recoil";
import { globalPanduanState, queryGlobalPanduan} from "../atoms/panduan";

// export const filterGlobalPanduanOption = selectorFamily({
//     key: "filter-global-panduan-option",
//     get:
//       (query: string) =>
//       ({ get }) =>
//         get(GlobalPanduanState).filter((item) => (item.slug as unknown as string).includes(query)),
//   });

  export const filterGlobalPanduan = selector({
    key: "filter-global-panduan",
    get: ({ get }) =>
      get(globalPanduanState).filter((item) =>
        item?.title?.toLowerCase().includes(get(queryGlobalPanduan).toLowerCase()),
      ),
  });