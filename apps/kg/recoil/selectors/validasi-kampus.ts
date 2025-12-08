import { selector } from "recoil";
import { jurusanAsalState, perguruanAsalState, prodiAsalState, queryJurusanAsal, queryPerguruanAsal, queryProdiAsal } from "../atoms/validasi-kampus";

export const filterPerguruanAsal = selector({
    key: "filter-perguruan-asal",
    get: ({ get }) =>
      get(perguruanAsalState).filter((item) =>
        item?.title?.toLowerCase().includes(get(queryPerguruanAsal).toLowerCase()),
      ),
  });

export const filterProdiAsal = selector({
    key: "filter-prodi-asal",
    get: ({ get }) =>
      get(prodiAsalState).filter((item) =>
        item?.title?.toLowerCase().includes(get(queryProdiAsal).toLowerCase()),
      ),
  });

  export const filterJurusanAsal = selector({
    key: "filter-jurusan-asal",
    get: ({ get }) =>
      get(jurusanAsalState).filter((item) =>
        item?.title?.toLowerCase().includes(get(queryJurusanAsal).toLowerCase()),
      ),
  });