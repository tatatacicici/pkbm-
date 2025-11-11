import { TChoiceProgramCardProps } from '../../../components/landing-page/card-program/types';
// import Card1 from './assets/program-card-1.jpg';
// import Card2 from './assets/program-card-2.png';
// import Card3 from './assets/program-card-3.png';
// import Card4 from './assets/program-card-4.jpg';

import Card1 from './assets/program-paket-c.jpeg';
import Card2 from './assets/program-tes-minat-bakat.jpeg';
import Card3 from './assets/program-tes-kepemimpinan.jpeg';
import Card4 from './assets/program-bimbel.jpeg';
import Card5 from './assets/program-try-out.jpeg';
import Card6 from './assets/program-pelatihan.jpeg';

// export const ContentCardProgram: Array<TChoiceProgramCardProps> = [
export const ContentCardProgram: Array<Omit<TChoiceProgramCardProps, 'index'>> =
  [
    {
      title: 'Paket C (Setara SMA)',
      tag: 'Program Belajar',
      src: Card1,
      // link: '/rencana-studi',
      link: '/administrasi/perkuliahan',
    },
    {
      title: 'Bimbel UTBK-SNBT', // belum ada fiturnya
      tag: 'Informasi',
      src: Card4,
      link: '/bimbel',
    },
    {
      title: 'Pelatihan Berbasis Kompetensi',
      tag: 'Keterampilan',
      src: Card6,
      link: '/bootcamp',
    },
    // {
    //   title: 'Modul Pembelajaran',
    //   tag: 'Ijazah Setara SMA',
    //   src: Card2,
    //   link: '/magang',
    // },
    {
      title: 'Tes Minat & Bakat',
      tag: 'Psikotes & Intelegensi',
      src: Card2,
      link: '/tes-minat-bakat',
    },
    {
      title: 'Tes Kepemimpinan & Psikologis',
      tag: 'Pengembangan Diri',
      src: Card3,
      link: '/tes-kepemimpinan',
    },
    {
      title:
        'Try Out, \nTes Kemampuan Akademik (TKA), \nUjian Masuk Perguruan Tinggi',
      tag: 'Latihan Soal',
      src: Card5,
      link: '/try-out',
    },
  ];

export const ITProgram = [
  'UI/UX',
  'Web programming',
  'Data science',
  'Back End',
  'Flutter Apps Programming',
  'Data Analyst',
  'Artificial Intelligence',
  'Quality Assurance',
];

export const ManagementProgram = [
  'Digital Marketing, E-Commerce & Social Media Selling',
  'Event Management & sponsorship',
  'Project Management Officer',
];

export const ContentProgram = [
  'Script writing & Story Boarding for Video Learning',
  'Penyutradaraan dan Online Broadcasting',
  'Video Editing dan Animation',
  '3D Desainer',
];

export const VirtualProgram = ['Virtual reality', 'Game Development'];
