import { atom } from "recoil";
import { TLiveMentoringResponse } from "../../types/livementoring";

export const liveMentoringDataState = atom<TLiveMentoringResponse>({
  key: "live-mentoring",
  default: {
    code: 0,
    status: "",
    message: "",
    data: [],
  },
});

export const detailLiveMentoringDataState = atom<TLiveMentoringResponse>({
    key: "detail-live-mentoring",
    default: {
        code: 0,
        status: "",
        message: "",
        data: [],
    },
    });