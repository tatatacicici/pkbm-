import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import {
  PopupProfilLeaderboradAtom,
  filteredDataAtom,
  popupGetUserAtom,
} from '../../store';
import {
  ReturnTypesFilteredData,
  ReturnTypesPopupGetUser,
  ReturnTypesPopupProfil,
  TLeaderboardItem,
  TLeaderboardResponse,
  TLeaderboardScoreResponse,
} from '../../types';
import { TFacultyResponse } from '../../types/study-plan';
import { leaderboardGetRequest, leaderboardGetRequestScore } from './request';

export const usePopupProfilLeaderboard = (): ReturnTypesPopupProfil => {
  const [get, set] = useAtom(PopupProfilLeaderboradAtom);
  return {
    getPopupLeaderboardStatus: get,
    setPopupLeaderboardStatus: (val: boolean) => set(val),
  };
};

export const usePopupGetUser = (): ReturnTypesPopupGetUser => {
  const [get, set] = useAtom(popupGetUserAtom);
  return {
    setPopupUser: (val: TLeaderboardItem) => set(val),
    getPopupUser: get,
  };
};

export const useGetLeaderboard = (): UseQueryResult<TLeaderboardResponse> =>
  useQuery({
    queryKey: ['get-leaderboard-user'],
    queryFn: async () => await leaderboardGetRequest(),
  });

export const useFilteredData = (): ReturnTypesFilteredData => {
  const [get, set] = useAtom(filteredDataAtom);
  return {
    setFilteredData: (val) => set(val),
    getFilteredData: get,
  };
};

export const useGetFacultyLeaderboard = (): UseQueryResult<TFacultyResponse> =>
  useQuery({
    queryKey: ['get-leaderboard-faculty'],
    queryFn: async () => await leaderboardGetRequest(),
  });

export const useGetLeaderboardScore = (
  pageParam: number
): UseQueryResult<TLeaderboardScoreResponse> =>
  useQuery({
    queryKey: ['get-leaderboard-score'],
    queryFn: async () => await leaderboardGetRequestScore({ pageParam }),
  });
