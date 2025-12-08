'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';
import {
  FC,
  Fragment,
  ReactElement,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { FaClipboardList, FaRegUserCircle } from 'react-icons/fa';
import { FcDocument } from 'react-icons/fc';
import {
  MdDashboard,
  MdLogout,
  MdOutlineDashboardCustomize,
  MdSchool,
} from 'react-icons/md';
import { logoutRequest } from '../../../hooks/authentications/request';

import { socketService } from '@kampus-gratis/apps/kg/config/socket.service';
import { TBaseLayoutProps } from './types';

import useScreenTimeTracker from '@kampus-gratis/apps/kg/config/screen-time.hook';
import { Button, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { Navbar } from '@kampus-gratis/components/molecules';
import { MobileNavbarState } from 'libs/components/molecules/src/navbar/section/top-nav/dropdown-menu/store';
import {
  IoDocumentTextOutline,
  IoHomeOutline,
  IoLogInOutline,
} from 'react-icons/io5';
import { useRecoilState } from 'recoil';
import { useProfile } from '../../../hooks/profile/hook';
import { BootcampIcon } from './assets/icons/ic-bootcamp';
import { ConvertionIcon } from './assets/icons/ic-convertion';
import { GradingIcon } from './assets/icons/ic-grading';
import { HomeIcon } from './assets/icons/ic-home';
import { MystudyIcon } from './assets/icons/ic-mystudy';
import { StudyplanIcon } from './assets/icons/ic-studyplan';
import BlogIcon from './assets/icons/kepustakaan/ic-blog';
import KGpediaIcon from './assets/icons/kepustakaan/ic-kgpedia';
import PodcastIcon from './assets/icons/kepustakaan/ic-podcast';
import YoutubeIcon from './assets/icons/kepustakaan/ic-youtube';
import EvaluasiIcon from './assets/icons/menjadi-pengajar/ic-evaluasi';
import MateriIcon from './assets/icons/menjadi-pengajar/ic-materi';
import OrientasiIcon from './assets/icons/menjadi-pengajar/ic-orientasi';
import PenugasanIcon from './assets/icons/menjadi-pengajar/ic-penugasan';
import SeleksiIcon from './assets/icons/menjadi-pengajar/ic-seleksi';
import StandarisasiIcon from './assets/icons/menjadi-pengajar/ic-standarisasi';
import TopikIcon from './assets/icons/menjadi-pengajar/ic-topik';
import CSRIcon from './assets/icons/mitra/ic-csr';
import DonorIcon from './assets/icons/mitra/ic-donor';
import IklanIcon from './assets/icons/mitra/ic-iklan';
import KerjasamaIcon from './assets/icons/mitra/ic-kerjasama';
import BootcampProgramIcon from './assets/icons/program/ic-bootcamp';
import KuliahIcon from './assets/icons/program/ic-kuliah';
import MagangIcon from './assets/icons/program/ic-magang';
import PartTimeIcon from './assets/icons/program/ic-partTime';
import KomunitasIcon from './assets/icons/proses/ic-komunitas';
import KonversiIcon from './assets/icons/proses/ic-konversi';
import KurikulumIcon from './assets/icons/proses/ic-kurikulum';
import MetodeBelajarIcon from './assets/icons/proses/ic-metode';
import PendaftaranIcon from './assets/icons/proses/ic-pendaftaran';
import PenyaluranKerjaIcon from './assets/icons/proses/ic-penyaluran';
import PerbandinganIcon from './assets/icons/proses/ic-perbandingan';

type ExtendedNavItem = {
  name: string;
  link: string;
  icon: ReactElement;
  onClick?: () => void;
};

const AuthButton: FC = (): ReactElement => (
  <div className="flex gap-4">
    <Button
      href="/auth/login"
      type="button"
      className="border-2 border-sky-base text-sky-base xl:border-white xl:text-white hover:opacity-80 px-4 py-1.5 rounded-lg w-auto h-auto transition-all"
    >
      Masuk
    </Button>
    <Button
      href="/auth/register"
      type="button"
      className="text-[#252525] px-4 py-2 rounded-lg w-auto h-auto bg-yellowPrimary-base hover:bg-yellowPrimary-base/90 transition-all"
    >
      Daftar
    </Button>
  </div>
);

export const BaseLayout: FC<TBaseLayoutProps> = ({
  children,
  title,
  addSearch,
}): ReactElement => {
  const router = useRouter();
  const pathname = usePathname();

  const { data: session, status } = useSession();
  const { data: profileData } = useProfile();

  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [isSocketConnected, setIsSocketConnected] = useState<boolean>(false);
  const [retryCount, setRetryCount] = useState<number>(0);
  const [getMobileNavbar, setMobileNavbar] = useRecoilState(MobileNavbarState);
  const lastPathRef = useRef<string | null>(null);
  const isConnectingRef = useRef<boolean>(false);
  const [isLoading, setIsLoading] = useState(true);

  const { activeTime, totalTime } = useScreenTimeTracker(
    session?.user?.id as string,
    accessToken
  );

  const connectSocket = useCallback(() => {
    if (accessToken && !isSocketConnected && !isConnectingRef.current) {
      isConnectingRef.current = true;
      socketService.connect(accessToken, 'inbox');
      setTimeout(() => {
        const isConnected = socketService.isConnected('inbox');
        setIsSocketConnected(isConnected);
        isConnectingRef.current = false;
        if (!isConnected) {
          setRetryCount((prevCount) => prevCount + 1);
        } else {
          setRetryCount(0);
        }
      }, 1000);
    }
  }, [accessToken, isSocketConnected]);

  const retryConnection = useCallback(() => {
    if (retryCount < 5) {
      setTimeout(() => {
        connectSocket();
      }, 3000);
    }
  }, [retryCount, connectSocket]);

  useEffect(() => {
    if (status !== 'loading') {
      setIsLoading(false);
    }

    if (status === 'authenticated' && session?.user?.token?.access_token) {
      setAccessToken(session.user.token.access_token as string);
    }
  }, [status, session]);

  useEffect(() => {
    if (accessToken && !isSocketConnected) {
      connectSocket();
    } else if (!isSocketConnected && !isConnectingRef.current) {
      retryConnection();
    }
  }, [accessToken, isSocketConnected, connectSocket, retryConnection]);

  useEffect(() => {
    if (pathname !== lastPathRef.current) {
      if (accessToken && isSocketConnected) {
        socketService.reconnect(accessToken, 'inbox');
        setIsSocketConnected(false);
      }

      lastPathRef.current = pathname;
    }
  }, [pathname, accessToken, isSocketConnected]);

  useEffect(() => {
    const handleDisconnect = () => {
      setIsSocketConnected(false);
    };

    socketService.onDisconnect(handleDisconnect, 'inbox');

    return () => {
      socketService.off('disconnect', handleDisconnect, 'inbox');
    };
  }, []);

  const _pop_up_menu = useMemo(
    () => [
      {
        name: 'Beranda',
        onClick: () => router.push('/beranda'),
        icon: <MdDashboard size={20} className="text-primary-base" />,
      },
      {
        name: 'Profil',
        onClick: () => {
          return router.push('/profile');
        },
        icon: <FaRegUserCircle size={20} className="text-warning-base" />,
      },
      // {
      //   name: 'Administrasi',
      //   icon: <FcDocument size={20} className="text-success-base" />,
      //   onClick: () => {
      //     return router.push('/administrasi');
      //   },
      // },
      {
        name: 'Administrasi',
        icon: <FcDocument size={20} className="text-success-base" />,
        onClick: () => {
          return router.push('/administrasi/perkuliahan');
        },
      },
      {
        name: 'Logout',
        icon: <MdLogout size={20} className="text-error-base" />,
        onClick: async () => {
          await logoutRequest({
            refresh_token: session?.user?.token?.refresh_token as string,
          });
        },
      },
    ],
    [router, session]
  );

  const _bottom_nav_items = useMemo(
    () => [
      {
        name: 'Beranda',
        link: '/beranda',
      },
      {
        name: 'Pelajaran-Ku',
        link: '/studi-ku',
      },
      {
        name: 'PR & Tugas',
        link: '/penugasan',
      },
      {
        name: 'Nilai & Rapor',
        link: '/nilai-dan-sertifikat',
      },
      {
        name: 'Pelatihan Berbasis Kompetensi',
        link: '/bootcamp',
      },
    ],
    []
  );

  const _features = useMemo(
    () => [
      {
        name: 'Beranda',
        link: '/beranda',
        icon: <HomeIcon />,
      },
      {
        name: 'Pelatihan',
        link: '/bootcamp',
        icon: <BootcampIcon />,
      },
      {
        name: 'PR & Tugas',
        link: '/penugasan',
        icon: <StudyplanIcon />,
      },
      {
        name: 'Tes Minat & Bakat',
        link: '/tes-minat-bakat',
        icon: <ConvertionIcon />,
      },
      {
        name: 'Pelajaran-Ku',
        link: '/studi-ku',
        icon: <MystudyIcon />,
      },
      {
        name: 'Nilai & Rapor',
        link: '/nilai-dan-sertifikat',
        icon: <GradingIcon />,
      },
    ],
    []
  );

  const _megaMenuItems = useMemo(
    () => [
      // {
      //   name: 'Program',
      //   submenus: [
      //     {
      //       name: 'Kuliah',
      //       link: '/program/kuliah',
      //       icon: <KuliahIcon />,
      //     },
      //     {
      //       name: 'Magang',
      //       link: '/program/magang',
      //       icon: <MagangIcon />,
      //     },
      //     {
      //       name: 'Bootcamp',
      //       link: '/bootcamp',
      //       icon: <BootcampProgramIcon />,
      //     },
      //     {
      //       name: 'Part-Time',
      //       link: '/program/part-time',
      //       icon: <PartTimeIcon />,
      //     },
      //     {
      //       name: 'CHEDLI',
      //       link: '/program/chedli',
      //       icon: <KerjasamaIcon />,
      //     },
      //   ],
      // },
      // {
      //   name: 'Proses',
      //   submenus: [
      //     {
      //       name: 'Proses Pendaftaran',
      //       link: '/proses/proses-pendaftaran',
      //       icon: <PendaftaranIcon />,
      //     },
      //     {
      //       name: 'Konversi SKS',
      //       link: '/konversi',
      //       icon: <KonversiIcon />,
      //     },
      //     {
      //       name: 'Kurikulum dan Silabus',
      //       link: '/proses/kurikulum-dan-silabus',
      //       icon: <KurikulumIcon />,
      //     },
      //     {
      //       name: 'Metode Belajar',
      //       link: '/studi-ku',
      //       icon: <MetodeBelajarIcon />,
      //     },
      //     {
      //       name: 'Magang',
      //       link: '/proses/magang',
      //       icon: <KuliahIcon />,
      //     },
      //     {
      //       name: 'Penyaluran Kerja dan Magang',
      //       link: '/proses/penyaluran-kerja-dan-magang',
      //       icon: <PenyaluranKerjaIcon />,
      //     },
      //     {
      //       name: 'Komunitas Alumni',
      //       link: '/proses/komunitas',
      //       icon: <KomunitasIcon />,
      //     },
      //     {
      //       name: 'Perbandingan Bootcamp',
      //       link: '/proses/perbandingan-bootcamp',
      //       icon: <PerbandinganIcon />,
      //     },
      //   ],
      // },
      // {
      //   name: 'Mitra',
      //   submenus: [
      //     {
      //       name: 'CSR (Corporate Social Responsibility)',
      //       link: '/mitra/csr',
      //       icon: <CSRIcon />,
      //     },
      //     {
      //       name: 'Donor dan Hibah',
      //       link: '/mitra/donor-dan-hibah',
      //       icon: <DonorIcon />,
      //     },
      //     {
      //       name: 'Iklan dan Sponsorship',
      //       link: '/mitra/iklan-dan-sponsorship',
      //       icon: <IklanIcon />,
      //     },
      //     {
      //       name: 'Kerjasama Antar Lembaga',
      //       link: '/mitra/kerjasama-antar-lembaga',
      //       icon: <KerjasamaIcon />,
      //     },
      //     {
      //       name: 'Penyaluran Kerja',
      //       link: '/proses/penyaluran-kerja-dan-magang',
      //       icon: <PenyaluranKerjaIcon />,
      //     },
      //   ],
      // },
      // {
      //   name: 'Menjadi Pengajar',
      //   submenus: [
      //     {
      //       name: 'Pendaftaran',
      //       link: '/menjadi-pengajar/pendaftaran',
      //       icon: <PendaftaranIcon />,
      //     },
      //     {
      //       name: 'Seleksi dan Verifikasi',
      //       link: '/menjadi-pengajar/seleksi-dan-verifikasi',
      //       icon: <SeleksiIcon />,
      //     },
      //     {
      //       name: 'Penentuan Topik Ajar',
      //       link: '/menjadi-pengajar/penentuan-topik-ajar',
      //       icon: <TopikIcon />,
      //     },
      //     {
      //       name: 'Standarisasi Materi Ajar',
      //       link: '/menjadi-pengajar/standarisasi-materi',
      //       icon: <StandarisasiIcon />,
      //     },
      //     {
      //       name: 'Pembuatan Materi Ajar',
      //       link: '/menjadi-pengajar/pembuatan-materi-ajar',
      //       icon: <MateriIcon />,
      //     },
      //     {
      //       name: 'Orientasi dan Persiapan',
      //       link: '/menjadi-pengajar/orientasi-dan-persiapan',
      //       icon: <OrientasiIcon />,
      //     },
      //     {
      //       name: 'Penjadwalan dan Penugasan',
      //       link: '/menjadi-pengajar/penjadwalan-dan-penugasan',
      //       icon: <PenugasanIcon />,
      //     },
      //     {
      //       name: 'Evaluasi dan Umpan Balik',
      //       link: '/menjadi-pengajar/evaluasi-dan-umpan-balik',
      //       icon: <EvaluasiIcon />,
      //     },
      //   ],
      // },
      // {
      //   name: 'Kepustakaan',
      //   submenus: [
      //     {
      //       name: 'Blog',
      //       link: '/sekilas-ilmu',
      //       icon: <BlogIcon />,
      //     },
      //     {
      //       name: 'Youtube',
      //       link: 'https://www.youtube.com/@KampusGratis1',
      //       icon: <YoutubeIcon />,
      //     },
      //     {
      //       name: 'Podcast',
      //       link: '/kepustakaan/podcast',
      //       icon: <PodcastIcon />,
      //     },
      //     {
      //       name: 'KG-Pedia',
      //       link: '/kepustakaan/kg-pedia',
      //       icon: <KGpediaIcon />,
      //     },
      //   ],
      // },
      {
        name: 'Program',
        submenus: [
          {
            name: 'Paket C (Setara SMA)',
            link: '/administrasi/perkuliahan',
            icon: <KuliahIcon />,
          },
          {
            name: 'Tes Minat & Bakat',
            link: '/tes-minat-bakat',
            icon: <MetodeBelajarIcon />,
          },
          {
            name: 'Bimbel UTBK-SNBT',
            link: '',
            icon: <OrientasiIcon />,
          },
          {
            name: 'Tes Kepemimpinan',
            link: '/tes-kepemimpinan',
            icon: <IklanIcon />,
          },
          {
            name: 'Pelatihan',
            link: '/bootcamp',
            icon: <BootcampProgramIcon />,
          },
          {
            name: 'Try Out',
            link: '/try-out',
            icon: <PenugasanIcon />,
          },
        ],
      },
      {
        name: 'Proses',
        submenus: [
          {
            name: 'Proses Pendaftaran',
            link: '/proses/proses-pendaftaran',
            icon: <PendaftaranIcon />,
          },
          // {
          //   name: 'Konversi SKS',
          //   link: '/konversi',
          //   icon: <KonversiIcon />,
          // },
          // {
          //   name: 'Kurikulum dan Silabus',
          //   link: '/proses/kurikulum-dan-silabus',
          //   icon: <KurikulumIcon />,
          // },
          // {
          //   name: 'Metode Belajar',
          //   link: '/studi-ku',
          //   icon: <MetodeBelajarIcon />,
          // },
          // {
          //   name: 'Magang',
          //   link: '/proses/magang',
          //   icon: <KuliahIcon />,
          // },
          // {
          //   name: 'Penyaluran Kerja dan Magang',
          //   link: '/proses/penyaluran-kerja-dan-magang',
          //   icon: <PenyaluranKerjaIcon />,
          // },
          // {
          //   name: 'Komunitas Alumni',
          //   link: '/proses/komunitas',
          //   icon: <KomunitasIcon />,
          // },
          {
            name: 'Perbandingan Bootcamp',
            link: '/proses/perbandingan-bootcamp',
            icon: <PerbandinganIcon />,
          },
        ],
      },

      // {
      //   name: 'Mitra',
      //   submenus: [
      //     {
      //       name: 'CSR (Corporate Social Responsibility)',
      //       link: '/mitra/csr',
      //       icon: <CSRIcon />,
      //     },
      //     {
      //       name: 'Donor dan Hibah',
      //       link: '/mitra/donor-dan-hibah',
      //       icon: <DonorIcon />,
      //     },
      //     {
      //       name: 'Iklan dan Sponsorship',
      //       link: '/mitra/iklan-dan-sponsorship',
      //       icon: <IklanIcon />,
      //     },
      //     {
      //       name: 'Kerjasama Antar Lembaga',
      //       link: '/mitra/kerjasama-antar-lembaga',
      //       icon: <KerjasamaIcon />,
      //     },
      //     {
      //       name: 'Penyaluran Kerja',
      //       link: '/proses/penyaluran-kerja-dan-magang',
      //       icon: <PenyaluranKerjaIcon />,
      //     },
      //   ],
      // },

      // {
      //   name: 'Menjadi Pengajar',
      //   submenus: [
      //     {
      //       name: 'Pendaftaran',
      //       link: '/menjadi-pengajar/pendaftaran',
      //       icon: <PendaftaranIcon />,
      //     },
      //     {
      //       name: 'Seleksi dan Verifikasi',
      //       link: '/menjadi-pengajar/seleksi-dan-verifikasi',
      //       icon: <SeleksiIcon />,
      //     },
      //     {
      //       name: 'Penentuan Topik Ajar',
      //       link: '/menjadi-pengajar/penentuan-topik-ajar',
      //       icon: <TopikIcon />,
      //     },
      //     {
      //       name: 'Standarisasi Materi Ajar',
      //       link: '/menjadi-pengajar/standarisasi-materi',
      //       icon: <StandarisasiIcon />,
      //     },
      //     {
      //       name: 'Pembuatan Materi Ajar',
      //       link: '/menjadi-pengajar/pembuatan-materi-ajar',
      //       icon: <MateriIcon />,
      //     },
      //     {
      //       name: 'Orientasi dan Persiapan',
      //       link: '/menjadi-pengajar/orientasi-dan-persiapan',
      //       icon: <OrientasiIcon />,
      //     },
      //     {
      //       name: 'Penjadwalan dan Penugasan',
      //       link: '/menjadi-pengajar/penjadwalan-dan-penugasan',
      //       icon: <PenugasanIcon />,
      //     },
      //     {
      //       name: 'Evaluasi dan Umpan Balik',
      //       link: '/menjadi-pengajar/evaluasi-dan-umpan-balik',
      //       icon: <EvaluasiIcon />,
      //     },
      //   ],
      // },

      {
        name: 'Kepustakaan',
        submenus: [
          {
            name: 'Buku',
            link: '/pustaka-library',
            icon: <TopikIcon />,
          },
          {
            name: 'Artikel',
            link: '/sekilas-ilmu',
            icon: <BlogIcon />,
          },

          // {
          //   name: 'Youtube',
          //   link: 'https://www.youtube.com/@KampusGratis1',
          //   icon: <YoutubeIcon />,
          // },
          // {
          //   name: 'Podcast',
          //   link: '/kepustakaan/podcast',
          //   icon: <PodcastIcon />,
          // },
          {
            name: 'Forum Diskusi',
            link: '/ruang-diskusi',
            icon: <KomunitasIcon />,
          },
          {
            name: 'Bacaan Lainnya',
            link: '',
            icon: <KGpediaIcon />,
          },
        ],
      },
      // {
      //   name: 'Lainnya',
      //   submenus: [
      //     {
      //       name: 'Sejarah KG',
      //       link: '',
      //       icon: <SejarahIcon />,
      //     },
      //     {
      //       name: 'Berkarir di KG',
      //       link: '',
      //       icon: <KarirIcon />,
      //     },
      //     {
      //       name: 'Magang di KG',
      //       link: '',
      //       icon: <MagangIcon />,
      //     },
      //     {
      //       name: 'FaQ',
      //       link: '',
      //       icon: <FAQIcon />,
      //     },
      //     {
      //       name: 'Menjadi Kontributor dan Relawan',
      //       link: '',
      //       icon: <KontributorIcon />,
      //     },
      //   ],
      // },
    ],
    []
  );

  const _nav_rules = useMemo(
    () => [
      '/beranda',
      '/studi-ku',
      '/penugasan',
      '/rencana-studi',
      '/nilai-dan-sertifikat',
      '/bootcamp',
    ],
    []
  );

  const _bottom_nav_items_logged_in = useMemo<ExtendedNavItem[]>(
    () => [
      {
        name: 'Beranda',
        link: '/beranda',
        icon: <IoHomeOutline size={20} />,
      },
      {
        name: 'Administrasi',
        link: '/administrasi',
        icon: <IoDocumentTextOutline size={20} />,
      },
      // {
      //   name: 'Rencana Studi',
      //   link: '/rencana-studi',
      //   icon: <FaClipboardList size={20} />,
      // },
      // {
      //   name: 'Studi-Ku',
      //   link: '/studi-ku',
      //   icon: <MdSchool size={20} />,
      // },
      // {
      //   name: 'Rencana Belajar',
      //   link: '/rencana-studi',
      //   icon: <FaClipboardList size={20} />,
      // },
      {
        name: 'PR & Tugas',
        link: '/penugasan',
        icon: <FaClipboardList size={20} />,
      },
      {
        name: 'Pelajaran-Ku',
        link: '/studi-ku',
        icon: <MdSchool size={20} />,
      },
      {
        name: 'Profil',
        link: '/profile',
        icon: <FaRegUserCircle size={20} />,
      },
    ],
    []
  );

  const _bottom_nav_items_not_logged_in = useMemo<ExtendedNavItem[]>(
    () => [
      {
        name: 'Beranda',
        link: '/',
        icon: <IoHomeOutline size={20} />,
      },
      {
        name: 'Daftar',
        link: '/auth/register',
        icon: <FaRegUserCircle size={20} />,
      },
      {
        name: 'Masuk',
        link: '/auth/login',
        icon: <IoLogInOutline size={20} />,
      },
      {
        name: 'Menu',
        link: '#',
        icon: <MdOutlineDashboardCustomize size={20} />,
        onClick: () => {
          setMobileNavbar(!getMobileNavbar);
        },
      },
    ],
    [getMobileNavbar, setMobileNavbar]
  );

  const handleNavigation = useCallback(
    (item: ExtendedNavItem) => {
      if (item.onClick) {
        item.onClick();
      } else {
        router.push(item.link);
      }
    },
    [router]
  );

  if (isLoading) {
    return <LoadingSpinner />;
  }

  const _profile_user = {
    email: profileData?.data?.user?.email ?? '',
    full_name: profileData?.data?.user?.full_name ?? '',
    avatar: profileData?.data?.user?.avatar ?? '',
  };

  return (
    <Fragment>
      <Navbar
        mobileMenuItems={_megaMenuItems}
        megaMenuItems={_megaMenuItems}
        items={_pop_up_menu}
        features={_features}
        // logo={'/images/logo-kg-new.svg'}
        logo={'/images/logo-pkbm-paket-c.png'}
        logoStyle="w-auto h-auto"
        userData={_profile_user}
        bottomNavItems={_bottom_nav_items}
        bottomNavRules={_nav_rules}
        // bottomNavItemStyle={`w-auto h-auto p-3 text-[14px] rounded-lg bg-primary-500 text-white font-regular`}
        bottomNavItemStyle={`w-auto h-auto p-3 text-[14px] rounded-lg bg-sky-base text-white font-regular`}
        button={status === 'authenticated' ? null : <AuthButton />}
        withSearch={addSearch}
      />

      <section className="flex flex-col h-full pb-16 sm:pb-0">
        {children}
      </section>

      {/* {status === 'authenticated' && (
        <div className="fixed bottom-16 right-4 bg-white p-2 rounded-lg shadow-md">
          <p>User ID: {session?.user?.id}</p>
          <p>Total Waktu Aktif Layar: {activeTime}</p>
          <p>Total Waktu: {totalTime}</p>
        </div>
      )} */}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 sm:hidden z-40">
        <div className="flex justify-around">
          {(status === 'authenticated'
            ? _bottom_nav_items_logged_in
            : _bottom_nav_items_not_logged_in
          ).map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigation(item)}
              className={`flex flex-col items-center justify-center p-2 w-full ${
                pathname === item.link
                  ? 'text-sky-base font-semibold'
                  : 'text-gray-500'
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1 truncate w-full text-center">
                {item.name}
              </span>
            </button>
          ))}
        </div>
      </div>
    </Fragment>
  );
};
