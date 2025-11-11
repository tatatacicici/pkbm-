import { atom } from "recoil";
import { TLeaderboardItem } from "./type";

export const PopupProfilLeaderborad = atom({
  key: "modal-popup-profil-leaderboard",
  default: false,
});

export const popupGetUser = atom<TLeaderboardItem>({
  key: "popup-get-user-2",
  default: {
    student_id: "",
    author: {
      avatar: "",
      poin: 0,
      user_name: "",
      discussion_likes: 0,
      discussion_posted: 0,
      full_name: "",
      semester: 0,
      ipk: "",
      major: "",
      role: "",
      total_certificates: 0,
      current_subjects: 0,
      finished_subjects: 0,
    },
  },
});
