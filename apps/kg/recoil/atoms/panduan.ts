import { globalPanduanType } from '../../types/panduan';
import { atom } from 'recoil';

export const globalPanduanState = atom<Array<globalPanduanType>>({
  key: 'global-panduan-state',
  default: [
    {
      title: 'Buku Panduan pendaftaran',
      href: '/panduan/buku-panduan/panduan-pendaftaran',
    },
    {
      title: 'Buku Panduan masuk',
      href: '/panduan/buku-panduan/panduan-pendaftaran',
    },
    {
      title: 'Buku Bagaimana caranya jika mengalami kesulitan',
      href: '/panduan/buku-panduan/panduan-pendaftaran',
    },
    {
      title:
        'Buku Bagaimana caranya jika saya ingin melakukan diskusi pada dosen',
      href: '/panduan/buku-panduan/panduan-pendaftaran',
    },
    {
      title: 'Buku Panduan mendaftar studi',
      href: '/panduan/buku-panduan/panduan-pendaftaran',
    },
    {
      title: 'Buku Hal apa saja yang saya lakukan saat melakukan quiz',
      href: '/panduan/buku-panduan/panduan-pendaftaran',
    },
    {
      title: 'Buku Panduan diskusi global',
      href: '/panduan/buku-panduan/panduan-pendaftaran',
    },
    {
      title: 'Buku Panduan  perencanaan karir',
      href: '/panduan/buku-panduan/panduan-pendaftaran',
    },
    {
      title: 'Buku Panduan mendapatkan sertifikat',
      href: '/panduan/buku-panduan/panduan-pendaftaran',
    },
    {
      title: 'Cara daftar studi',
      href: '/panduan/video-panduan/lZnwl3tdz2I',
    },
    {
      title: 'Panduan kalender',
      href: '/panduan/video-panduan/mD6uSGSjgr4',
    },
    {
      title: 'tes',
      href: '/panduan/video-panduan/LKATs6MDeCw',
    },
    {
      title: 'Panduan lupa password',
      href: '/panduan/video-panduan/MCVkMmYL-aY',
    },
    {
      title: 'Cara melihat nilai',
      href: '/panduan/video-panduan/71a2zeC71gk',
    },
    {
      title: 'Cara melihat nilai',
      href: '/panduan/video-panduan/qzMPvbL3GRQ',
    },
    {
        title: "KRS",
        href: "/panduan/kamus-kampus-gratis/krs",
      },
      {
        title: "SKS",
        href: "/panduan/kamus-kampus-gratis/sks",
      },
      {
        title: "IPK",
        href: "/panduan/kamus-kampus-gratis/ipk",
      },
      {
        title: "Program Studi",
        href: "/panduan/kamus-kampus-gratis/program-studi",
      },
      {
        title: "IP",
        href: "/panduan/kamus-kampus-gratis/indeks-prestasi",
      },
      {
        title: "Dosen",
        href: "/panduan/kamus-kampus-gratis/dosen",
      },
  ],
});

export const queryGlobalPanduan= atom({
    key: "query-global-panduan",
    default: "",
  });

