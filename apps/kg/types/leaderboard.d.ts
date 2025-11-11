import { TMetaResponse } from '@mknows-frontend-services/utils';

export type ReturnTypesPopupProfil = {
  getPopupLeaderboardStatus: boolean;
  setPopupLeaderboardStatus: (val: boolean) => void;
};

export type ReturnTypesPopupGetUser = {
  setPopupUser: (val: TLeaderboard) => void;
  getPopupUser: TLeaderboard;
};

export type ReturnTypesFilteredData = {
  setFilteredData: (val: Filtered) => void;
  getFilteredData: Filtered;
};

type Filtered = {
  code: number;
  status: string;
  message: string;
  data: TLeaderboardItem[];
};

type TLeaderboardItem = {
  student_id: string;
  author: AuthorLeaderboard[];
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
  faculty: string;
};

export type TLeaderboardResponse = TMetaResponse<TLeaderboardItem>;


export interface TLeaderboardDataScore {
  my_rank_details: TMyRankDetails
  rankings: TRanking[]
}

export interface TMyRankDetails {
  id: string
  code: string
  student_id: string
  type: string
  current_score: number
  current_rank: number
  previous_score: number
  previous_rank: number
}

export interface TRanking {
  id: string
  code: string
  student_id: string
  type: string
  current_score: number
  current_rank: number
  previous_score: number
  previous_rank: number
  student: TStudent
}

export interface TStudent {
  id: string
  full_name: string
  avatar?: string
}

export type TLeaderboardScoreResponse = TMetaResponse<TLeaderboardDataScore>;