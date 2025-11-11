import React from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import { Card } from '../../../components/card/Card';
import { IconAcaraKampus2 } from '../../../components/icons/ic-acara-kampus-2';
import { IconBoard } from '../../../components/icons/ic-board';
import { IconBuilding } from '../../../components/icons/ic-building';
import { IconDosen } from '../../../components/icons/ic-dosen';
import { IconMultiUser } from '../../../components/icons/ic-multiuser';
import { IconProdi } from '../../../components/icons/ic-prodi';
import { IconSekilasIlmu2 } from '../../../components/icons/ic-sekilas-ilmu-2';
import { IconUser } from '../../../components/icons/ic-user';

const AnalitikDashboard = () => {
  const analitikPageBC = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Analitik',
      link: '/dashboard/analitik',
    },
  ];

  const cardItems = [
    {
      amount: 2500,
      title: 'Pendaftar',
      icon: <IconUser />,
    },
    {
      amount: 1000,
      title: 'Mahasiswa',
      icon: <IconMultiUser />,
    },
    {
      amount: 50,
      title: 'Matakuliah',
      icon: <IconBoard />,
    },
    {
      amount: 3,
      title: 'Fakultas',
      icon: <IconBuilding />,
    },
    {
      amount: 2500,
      title: 'Program Studi',
      icon: <IconProdi />,
    },
    {
      amount: 1000,
      title: 'Acara Kampus',
      icon: <IconAcaraKampus2 />,
    },
    {
      amount: 50,
      title: 'Tahukah Kamu',
      icon: <IconSekilasIlmu2 />,
    },
    {
      amount: 3,
      title: 'Dosen',
      icon: <IconDosen />,
    },
  ];
  return (
    <div>
      <Breadcrumb items={analitikPageBC} />
      <div className="grid grid-cols-4 gap-10 mt-10">
        {cardItems.map((card, i) => (
          <Card
            amount={card.amount}
            title={card.title}
            logo={card.icon}
            key={i}
          />
        ))}
      </div>
    </div>
  );
};

export default AnalitikDashboard;
