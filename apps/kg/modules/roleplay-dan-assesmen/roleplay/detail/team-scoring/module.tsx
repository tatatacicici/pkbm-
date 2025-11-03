'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { usePathname } from 'next/navigation';
import { RoleplayListBreadcrumb } from '../../../constant';
import SelectMember from '../../team/common/select-member';
import CardScoring from './common/card-scoring';

export default function TeamScoringModule() {
  const pathname = usePathname();
  const breadcrumbData = [
    {
      name: 'Detail Roleplay',
      link: pathname,
    },
    {
      name: 'Team Scoring',
      link: `${pathname}/team-scoring`,
    },
  ];
  return (
    <BaseLayout>
      <BreadCrumb
        items={[...RoleplayListBreadcrumb, ...breadcrumbData]}
        bgColor="bg-grey-100"
      />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-6 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-semibold">Penilaian Teman</h2>
          </div>
          <div className="px-8 py-4 bg-white rounded-lg shadow-lg space-y-6">
            <div className="space-y-2">
              <p className="text-xl font-medium">Berikan Nilai Teman Anda</p>
              <div className="max-w-sm">
                <SelectMember text="Rekan" placeholder="Pilih Rekan" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-xl font-medium">Kerjasama Tim</p>
              <div className="space-y-2">
                <CardScoring
                  text="Seluruh anggota tim berkontribusi secara merata. Kerjasama dan komunikasi dalam tim sangat baik."
                  id="1"
                />
                <CardScoring
                  text="Sebagian besar anggota tim berkontribusi dengan baik. Kerjasama dan komunikasi dalam tim cukup baik."
                  id="2"
                />
                <CardScoring
                  text="Beberapa anggota tim berkontribusi lebih banyak daripada yang lain. Kerjasama dan komunikasi dalam tim kurang efektif."
                  id="3"
                />
                <CardScoring
                  text="Hanya sedikit anggota tim yang berkontribusi. Kerjasama dan komunikasi dalam tim sangat buruk."
                  id="4"
                />
              </div>
              <button className="px-6 py-2 bg-blue-600 text-white rounded-md">
                Kirim
              </button>
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
