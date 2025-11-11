'use client';

import { selector } from "recoil";
import { querySemuaFitur, semuaFiturState } from "../atoms/semuafitur";

export const filterSemuaFitur = selector({
    key: "filter-semua-fitur",
    get: ({ get }) =>
      get(semuaFiturState).filter((item) =>
        item.namaFitur.toLowerCase().includes(get(querySemuaFitur).toLowerCase()),
      ),
  });