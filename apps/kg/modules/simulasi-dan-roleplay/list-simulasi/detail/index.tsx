'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import DetailSimulasiContent from '@kampus-gratis/apps/kg/components/simulasi-dan-roleplay/detail-simulasi';
import TakeSimulasi from '@kampus-gratis/apps/kg/components/simulasi-dan-roleplay/take-simulasi';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { useParams } from 'next/navigation';
import { useState } from 'react';
import PopupModal from '../../common/popup-modal';
import { SimulasiDetailBreadcrumb } from '../../constant';

export default function DetailSimulasiModules() {
  const [isTake, setIsTake] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { id } = useParams();

  const BreadCrumbData = {
    name: 'Detail Simulasi',
    link: '/simulasi-dan-roleplay/simulasi/' + id,
  };

  return (
    <BaseLayout>
      <BreadCrumb
        items={[...SimulasiDetailBreadcrumb, BreadCrumbData]}
        bgColor="bg-grey-100"
      />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mx-auto mt-4 mb-12 space-y-4 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          {!isTake ? (
            <DetailSimulasiContent setIsTake={setIsTake} />
          ) : (
            <TakeSimulasi
              setIsTake={setIsTake}
              setIsModalOpen={setIsModalOpen}
            />
          )}
        </div>
      </div>
      <PopupModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
    </BaseLayout>
  );
}
