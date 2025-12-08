/* eslint-disable @nx/enforce-module-boundaries */
import { useGetAllMajor } from '@kampus-gratis/apps/kg/hooks/rencana-studi/hooks';
import { TMajorItem } from '@kampus-gratis/apps/kg/types/rencana-studi';
import { useState } from 'react';
import { Tabs, TabsContent } from './tabs';

export default function SubjectTab({ data }: { data: any }) {
  const [activeTab, setActiveTab] = useState('Bisnis Keberlanjutan');

  const { data: majorData, isLoading } = useGetAllMajor();

  const sortedData = majorData?.data?.sort((a: TMajorItem, b: TMajorItem) =>
    b.name.localeCompare(a.name)
  );

  if (isLoading) return;

  return (
    <div className="md:flex md:w-3/4 mx-auto">
      <ul className="flex-column space-y space-y-4 text-sm font-medium text-gray-500 md:me-4 mb-4 md:mb-0">
        {sortedData ? (
          sortedData?.map((major: TMajorItem, index: number) => (
            <Tabs
              key={major.name}
              title={major.name}
              activeTab={activeTab}
              setActiveTab={setActiveTab}
            />
          ))
        ) : (
          <div>Tidak ada data</div>
        )}
      </ul>

      {sortedData ? (
        sortedData?.map((major: TMajorItem) => (
          <TabsContent
            key={major.name}
            title={major.name}
            activeTab={activeTab}
            data={data}
          />
        ))
      ) : (
        <div>Tidak ada data</div>
      )}
    </div>
  );
}
