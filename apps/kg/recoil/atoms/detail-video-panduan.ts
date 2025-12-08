import {
  videoDetailGuideTypesResponse,
  videoGuideTypesResponse,
} from '../../types/panduan';
import { atom } from 'recoil';

// export const videoGuideState = atom<Array<videoGuideTypes>>({
//   key: "video-guide-state-2",
//   default: [
//     {
//       videoId: "lZnwl3tdz2I",
//       titleVideo: "Cara daftar studi",
//       descVideo:
//         "Video ini menjelaskan tentang cara melakukan Pendaftaran Paket-C Gratis. Formulir Pendaftaran di sini bisa berupa formulir pendaftaran seminar, workshop, sekolah, kursus, bimbel, dan segala bentuk formulir pendaftaran yang melibatkan pengisian data secara online. Kelebihan dari Formulir Pendaftaran dengan Google Form ini adalah sangat fleksibel dalam penggunaannya, sehingga kita bisa mengaplikasikan pembuatan formulir pendaftaran untuk semua jenis kegiatan. Dan yang paling utama adalah kemampuan server google drive yang tentunya sudah tidak diragukan lagi kehandalannya.",
//       imgVideo: "",
//     },
//     {
//       videoId: "mD6uSGSjgr4",
//       titleVideo: "Panduan kalender",
//       descVideo:
//         "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
//       imgVideo: "",
//     },
//     {
//       videoId: "LKATs6MDeCw",
//       titleVideo: "tes",
//       descVideo:
//         "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
//       imgVideo: "",
//     },
//     {
//       videoId: "MCVkMmYL-aY",
//       titleVideo: "Panduan lupa password",
//       descVideo:
//         "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
//       imgVideo: "",
//     },
//     {
//       videoId: "71a2zeC71gk",
//       titleVideo: "Cara melihat nilai",
//       descVideo:
//         "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
//       imgVideo: "",
//     },
//     {
//       videoId: "qzMPvbL3GRQ",
//       titleVideo: "Cara melihat nilai",
//       descVideo:
//         "Saat ingin melakukan studi pengguna wajib   memilih studi yang akan diambil dengan cara sebagai berikut  ",
//       imgVideo: "",
//     },
//   ],
// });

export const detailVideoGuideState = atom<videoDetailGuideTypesResponse>({
  key: 'detail-video-panduan',
  default: {
    code: 0,
    status: '',
    message: '',
    data: {},
  },
});

export const queryPanduanVideoDetail = atom({
  key: 'query-panduan-video-detail',
  default: '',
});
