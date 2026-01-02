import { atom } from 'jotai';
import { certificateTypes } from '../types/score-sertificate';

export const PopupModalSuccessOpenAtom = atom(false);

export const ShowDetailStatusAtom = atom(false);

export const CertificateStatusAtom = atom<Array<certificateTypes>>([
  {
    id: 1,
    name: 'tes',
    role: 'Webinar',
    type: 'webinar',
    urlDownload: '',
  },
]);
