'use client';
import React from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import Matakuliah from '../../../components/mk/Matakuliah';
import { useGetSubject } from '../../../hooks/rencana-studi/hook';
import { TSubjectItem } from '../../../types/rencatastudi';

const MatakuliahDashboard = () => {
  const { data: subject } = useGetSubject();
  const subjectData = subject?.data;
  const mkPageBC = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Mata Kuliah',
      link: '/dashboard/matakuliah',
    },
  ];

  return (
    <div>
      <Breadcrumb items={mkPageBC} />
      <div className="grid grid-cols-3 gap-10 mt-12">
        {subjectData &&
          subjectData?.map((mk: TSubjectItem, i: number) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
            >
              <Matakuliah
                image={mk.thumbnail as File}
                total_student={mk.credit}
                title={mk.name}
                desc={mk.description}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default MatakuliahDashboard;
