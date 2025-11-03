import { TMetaResponse } from "@mknows-frontend-services/utils";

export type ReturnTypesPopupProfil = {
  getPopupLeaderboardStatus: boolean;
  setPopupLeaderboardStatus: (val: boolean) => void;
};

export type ReturnTypesPopupGetUser = {
  setPopupUser: (val: TLeaderboard) => void;
  getPopupUser: TLeaderboard;
};

type TLeaderboardItem = {
  student_id: string;
  author: AuthorLeaderboard;
};

type AuthorLeaderboard = {
  avatar: string;
  poin: number;
  user_name: string;
  discussion_likes: number;
  discussion_posted: number;
  full_name: string;
  semester: number;
  ipk: string;
  major: string;
  role: string;
  total_certificates: number;
  current_subjects: number;
  finished_subjects: number;
};

export type TLeaderboardResponse = TMetaResponse<TLeaderboardItem>;
