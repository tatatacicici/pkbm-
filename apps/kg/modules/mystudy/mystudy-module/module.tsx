'use client';

import React, { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import { Tab } from '@headlessui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { useGetMyStudyv2 } from '../../../hooks/mystudy/mystudy-module/hook';
import SkeletonLoader from './SkeletonLoader';
import { TabContentMyStudySection } from './tab-content/module';

const TabButton: FC<{
  isActive: boolean;
  onClick: () => void;
  children: React.ReactNode;
  isLast?: boolean;
}> = ({ isActive, onClick, children, isLast }) => (
  <Tab
    // className={`${
    //   isActive ? 'bg-primary-500 text-white' : 'text-primary-500'
    // } py-2 w-full cursor-pointer font-semibold outline-none ${
    //   isActive ? 'border-b-2 border-primary-500' : ''
    // } ${!isLast ? 'border-r border-primary-500' : ''}
    // text-xs sm:text-sm`} // Updated font size here
    className={`${
      isActive ? 'bg-sky-base text-white' : 'text-sky-base'
    } py-2 w-full cursor-pointer font-semibold outline-none ${
      isActive ? 'border-b-2 border-sky-base' : ''
    } ${!isLast ? 'border-r border-sky-base' : ''} 
    text-xs sm:text-sm`} // Updated font size here
    onClick={onClick}
  >
    {children}
  </Tab>
);

export const MyStudyModule: FC = (): ReactElement => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [selectedTab, setSelectedTab] = useState('semua');
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const { data: dataMyStudy, isLoading } = useGetMyStudyv2();

  const { allSubjects, collegeSubjects, bootcampSubjects, completedSubjects } =
    useMemo(() => {
      if (!dataMyStudy?.data)
        return {
          allSubjects: [],
          collegeSubjects: [],
          bootcampSubjects: [],
          completedSubjects: [],
        };
      return {
        allSubjects: dataMyStudy.data.filter(
          (item: any) => item.progress_percentage !== 100
        ),
        collegeSubjects: dataMyStudy.data.filter(
          (item: any) =>
            item.progress_percentage !== 100 && item.type === 'INDIVIDUAL'
        ),
        bootcampSubjects: dataMyStudy.data.filter(
          (item: any) =>
            item.progress_percentage !== 100 && item.type === 'GROUP'
        ),
        completedSubjects: dataMyStudy.data.filter(
          (item: any) => item.progress_percentage === 100
        ),
      };
    }, [dataMyStudy]);

  useEffect(() => {
    const tab = searchParams.get('tab');
    if (tab && ['semua', 'mata-kuliah', 'bootcamp', 'selesai'].includes(tab)) {
      setSelectedTab(tab);
    } else {
      router.replace(`${pathname}?tab=semua`);
      setSelectedTab('semua');
    }
  }, [pathname, router, searchParams]);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => setIsInitialLoading(false), 500);
    }
  }, [isLoading]);

  const handleTabChange = (newTab: string) => {
    router.push(`${pathname}?tab=${newTab}`);
    setSelectedTab(newTab);
  };

  const getTabIndex = (tab: string) => {
    const tabOrder = ['semua', 'mata-kuliah', 'bootcamp', 'selesai'];
    return tabOrder.indexOf(tab);
  };

  const renderTabContent = (data: any[]) => {
    if (isInitialLoading) {
      return <SkeletonLoader />;
    }
    return <TabContentMyStudySection data={data} />;
  };

  return (
    <div className="min-h-[calc(100vh-192px)] bg-white px-6 pt-2 md:px-14 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="mt-5">
          {/* <h1 className="text-3xl font-bold text-primary-500">Pelajaran-Ku</h1> */}
          <h1 className="text-3xl font-bold text-sky-base">Pelajaran-Ku</h1>
          <p className="text-sm text-neutral-base">
            Lihat progress pembelajaran dan pelatihan kamu di sini
          </p>
        </div>
        <div className="flex flex-col gap-4 mt-5">
          <Tab.Group
            as="div"
            className="w-full"
            selectedIndex={getTabIndex(selectedTab)}
          >
            {/* <Tab.List className="flex font-medium border border-primary-500 rounded-lg overflow-hidden"> */}
            <Tab.List className="flex font-medium border border-sky-base rounded-lg overflow-hidden">
              <TabButton
                isActive={selectedTab === 'semua'}
                onClick={() => handleTabChange('semua')}
              >
                Semua Pembelajaran
              </TabButton>
              <TabButton
                isActive={selectedTab === 'mata-kuliah'}
                onClick={() => handleTabChange('mata-kuliah')}
              >
                Mata Pelajaran
              </TabButton>
              <TabButton
                isActive={selectedTab === 'bootcamp'}
                onClick={() => handleTabChange('bootcamp')}
              >
                Pelatihan
              </TabButton>
              <TabButton
                isActive={selectedTab === 'selesai'}
                onClick={() => handleTabChange('selesai')}
                isLast
              >
                Selesai
              </TabButton>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>{renderTabContent(allSubjects)}</Tab.Panel>
              <Tab.Panel>{renderTabContent(collegeSubjects)}</Tab.Panel>
              <Tab.Panel>{renderTabContent(bootcampSubjects)}</Tab.Panel>
              <Tab.Panel>{renderTabContent(completedSubjects)}</Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};

export default MyStudyModule;
