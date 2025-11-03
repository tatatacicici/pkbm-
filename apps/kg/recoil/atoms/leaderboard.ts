import { atom } from 'recoil';
import { TLeaderboardItem, Filtered } from '../../types';

export const PopupProfilLeaderborad = atom({
  key: 'modal-popup-profil-leaderboard',
  default: false,
});

export const popupGetUser = atom<TLeaderboardItem>({
  key: 'popup-get-user-2',
  default: {
    student_id: '',
    author: [],
  },
});

export const filteredData = atom<Filtered>({
  key: 'filtered-data',
  default: {
    code: 0,
    status: '',
    message: '',
    data: [],
  },
});
