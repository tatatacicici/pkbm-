import { selector } from "recoil";
import { bookGuideState, queryPanduanBook } from "../atoms/buku-panduan";

export const filterPanduanBook = selector({
    key: "filter-panduan-book",
    get: ({ get }) =>
      get(bookGuideState)?.data?.filter((item) =>
        item?.title?.toLowerCase().includes(get(queryPanduanBook).toLowerCase()),
      ),
  });