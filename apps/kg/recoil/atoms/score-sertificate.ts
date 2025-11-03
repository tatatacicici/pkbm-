import { atom } from "recoil";
import { certificateTypes } from "../../types/score-sertificate";

export const PopupModalSuccessOpen = atom({
  key: "modal-popup-success-2",
  default: false,
});

export const ShowDetailStatus = atom({
  key: "show-detail-status-2",
  default: false,
});

export const CertificateStatus = atom<Array<certificateTypes>>({
  key: "certificate-status",
  default: [
    {
      id: 1,
      name: "tes",
      role: "Webinar",
      type: "webinar",
      urlDownload: "",
    },
  ],
});
