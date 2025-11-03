'use client';

import React, { FC, ReactElement, useEffect, useMemo, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';

import { TabContentTryOutSection } from './tab-content/module';
import SkeletonLoader from './SkeletonLoader';
import { dummyDataListTryOut } from './constant';

export const TryOutModule: FC = (): ReactElement => {
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  // Langsung ambil semua data
  const allData = useMemo(() => dummyDataListTryOut, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsInitialLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="bg-gray-100 pb-7 px-6 md:px-14 lg:px-16">
      <div className="max-w-[1440px] bg-white mx-auto rounded-lg px-6">
        <h1 className="text-3xl font-bold text-sky-base text-center pt-5">
          Try Out
        </h1>
        <div className="flex flex-col gap-4 mt-5">
          {isInitialLoading ? (
            <SkeletonLoader />
          ) : (
            <TabContentTryOutSection data={allData} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TryOutModule;
