import { TBaseLayout } from '../../types';
import Sidebar from '../../components/sidebar/Sidebar';
import React from 'react';
import { IconDashboard } from '../../components/icons/ic-dashboard';
import { IconUserMenu } from '../../components/icons/ic-user-menu';
import { IconSekilasIlmu } from '../../components/icons/ic-sekilas-ilmu';
import Navbar from '../../components/navbar/Navbar';
import { IconPengajuan } from '../../components/icons/ic-pengajuan';
import { IconRencanaStudi } from '../../components/icons/ic-rencana-studi';
import { IconNilaiSertifikat } from '../../components/icons/ic-nilai-sertifikat';
import { IconKonsulLayanan } from '../../components/icons/ic-konsul-layanan';
import { IconAcaraKampus } from '../../components/icons/ic-acara-kampus';
import { IconSalurKerja } from '../../components/icons/ic-salur-kerja';
import { IconRuangDiskusi } from '../../components/icons/ic-ruang-diskusi';

const BaseLayout = ({ children }: TBaseLayout) => {
  const DataSidebar = [
    {
      title: 'Dashboard',
      path: '/dashboard',
      icon: <IconDashboard />,
    },
    {
      title: 'Pengajuan',
      path: '/pengajuan',
      icon: <IconPengajuan />,
      children: [
        {
          title: 'Administrasi',
          path: '/pengajuan/administrasi',
        },
        {
          title: 'KRS',
          path: '/pengajuan/krs',
        },
        {
          title: 'Konversi',
          path: '/pengajuan/konversi',
        },
      ],
    },
    {
      title: 'User',
      path: '/user',
      icon: <IconUserMenu />,
      children: [
        {
          title: 'Mahasiswa',
          path: '/user/mahasiswa',
        },
        {
          title: 'Admin',
          path: '/user/admin',
        },
        {
          title: 'Dosen',
          path: '/user/dosen',
        },
      ],
    },
    {
      title: 'Rencana Studi (KRS)',
      path: '/rencana-studi',
      icon: <IconRencanaStudi />,
      children: [
        {
          title: 'Fakultas',
          path: '/rencana-studi/fakultas',
        },
        {
          title: 'Program Studi',
          path: '/rencana-studi/program-studi',
        },
        {
          title: 'Mata Kuliah',
          path: '/rencana-studi/matakuliah',
        },
      ],
    },
    {
      title: 'Nilai',
      path: '/nilai',
      icon: <IconNilaiSertifikat />,
    },
    // {
    //   title: 'Konsultasi & Layanan',
    //   path: '/konsultasi-layanan',
    //   icon: <IconKonsulLayanan />,
    //   children: [
    //     {
    //       title: 'Konsultasi',
    //       path: '/konsultasi-layanan/konsultasi',
    //     },
    //     {
    //       title: 'Layanan',
    //       path: '/konsultasi-layanan/layanan',
    //     },
    //   ],
    // },
    {
      title: 'Tahukah Kamu',
      path: '/sekilas-ilmu',
      icon: <IconSekilasIlmu />,
    },
    // {
    //   title: 'Acara Kampus',
    //   path: '/acara-kampus',
    //   icon: <IconAcaraKampus />,
    // },
    // {
    //   title: 'Penyaluran Kerja',
    //   path: '/penyaluran-kerja',
    //   icon: <IconSalurKerja />,
    // },
    // {
    //   title: 'Forum Diskusi',
    //   path: '/ruang-diskusi',
    //   icon: <IconRuangDiskusi />,
    // },
    // {
    //   title: 'Perencanaan Karir',
    //   path: '/perencanaan-karir',
    //   icon: <IconSalurKerja />,
    // },
  ];
  return (
    <Sidebar dataSidebar={DataSidebar}>
      <div className="flex justify-end bg-neutral-100">
        <Navbar />
      </div>
      <section className="bg-neutral-100">
        <div className="absolute right-0 w-[calc(100%-250px)] pl-10  pt-[7%] bg-neutral-100">
          <div className="max-w-full min-h-screen mt-5 mb-16 pr-10 pl-5 bg-neutral-100">
            {children}
          </div>
        </div>
      </section>
    </Sidebar>
  );
};

export default BaseLayout;
