'use client';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { useGetAllAdministration } from 'apps/kg/hooks/administration/hook';
import { redirect } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import 'react-loading-skeleton/dist/skeleton.css';
import { useDashboardData, useGetDashboard } from '../../hooks/dashboard/hook';
import { TDashboardItem } from '../../types/dashboard';
import PopupAdministration from './administration-popup';
import { ContentSection } from './content';
import { SideBarSection } from './sidebar';

export const DashboardModule: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { data: getDashboard, isLoading: isLoadingDashboard } =
    useGetDashboard();

  const { data: getAdministration, isLoading: isLoadingAdministration } =
    useGetAllAdministration();

  const administrationStatus = getAdministration?.data?.details?.status;

  const { setDashboardData } = useDashboardData();

  useEffect(() => {
    if (getDashboard) {
      setDashboardData(getDashboard?.data as TDashboardItem);
    }
  }, [getDashboard, setDashboardData]);

  useEffect(() => {
    if (administrationStatus === 'NOT_SUBMITTED') {
      redirect('/administrasi/perkuliahan');
    }
  }, [getAdministration]);

  if (isLoadingDashboard || isLoadingAdministration) {
    return <LoadingSpinner />;
  }

  return (
    <main className="py-2 px-6 md:px-14 lg:px-16 bg-neutral-50 w-full overflow-hidden pb-8">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-3 gap-x-10">
          <SideBarSection />
          <ContentSection />
          <PopupAdministration
            lookup={isOpen}
            onClose={() => setIsOpen(false)}
          />
        </div>
      </div>
    </main>
  );
};
