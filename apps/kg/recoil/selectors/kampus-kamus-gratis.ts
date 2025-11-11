import { selector, selectorFamily } from "recoil";
import { dictionaryState, queryOptionDictionary } from "../atoms/kamus-kampus-gratis";

// export const filterOptionDictionary = selectorFamily({
//     key: "filter-option-dictionary",
//     get:
//       (query: string) =>
//       ({ get }) =>
//         get(GuideDictionaryState).filter((item) => (item.slug as unknown as string).includes(query)),
//   });

  export const filterPanduanKamus = selector({
    key: "filter-panduan-kamus",
    get: ({ get }) =>
      get(dictionaryState)?.data?.filter((item) =>
        item?.title?.toLowerCase().includes(get(queryOptionDictionary).toLowerCase()),
      ),
  });