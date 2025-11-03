import { atom } from 'recoil';

export const modalDetailOpen = atom({
  key: 'modal-detail',
  default: false,
});

export const modalAccOpen = atom({
  key: 'modal-acc',
  default: false,
});

export const modalRejectOpen = atom({
  key: 'modal-reject',
  default: false,
});
