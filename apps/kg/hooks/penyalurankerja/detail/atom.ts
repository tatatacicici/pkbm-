import { atom } from 'recoil';

export const PopupAjukanLamaran = atom({
  key: 'ajukan-lamaran',
  default: false,
});

export const PopupAjukanLamaranLetter = atom({
  key: 'ajukan-lamaran-letter',
  default: false,
});
