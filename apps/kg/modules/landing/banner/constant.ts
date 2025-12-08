import { TChoiceBannerCardProps } from '../../../components/landing-page/card-banner/types';
import Card1 from '../../../public/images/banner-1.png';
import Card2 from '../../../public/images/banner-2.png';
import Card3 from '../../../public/images/Banner-sks.png';

export const ContentCardBanner: Array<TChoiceBannerCardProps> = [
  {
    title: 'Program Utama Paket-C Gratis',
    desc: 'Kuliah, Pelatihan, Magang & Kerja Part-Time',
    bg: 'bg-white',
    hidden: 'hidden',
    color: 'text-black',
    src: Card1,
  },
  {
    title: 'Dapatkan Sertifikat Gratis!',
    desc: 'Dapatkan Sertifikat Gratis dan Raih Karir Impianmu',
    color: 'text-white',
    bg: 'bg-primary-500',
    hidden: 'hidden',
    src: Card2,
  },
  {
    title: 'Raih Konversi SKS!',
    desc: 'Tabung dan Percepat Kuliahmu, Dengan Konversi Hingga 100 SKS',
    color: 'text-white',
    bg: 'bg-primary-500',
    hidden: 'hidden',
    src: Card3,
  },
];
