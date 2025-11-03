'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { useState } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import { BaseLayout } from '../../components';
import FeatureCard from './common/feature-card';
import { RoleplayAssesmenBreadcrumb } from './constant';

export default function RoleplayAssesmenModule() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BaseLayout>
      <BreadCrumb items={RoleplayAssesmenBreadcrumb} bgColor="bg-grey-100" />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-4 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-bold">Laboratorium</h2>
          </div>
          <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-4">
            <div className="bg-blue-50 rounded-md p-4 w-full text-primary-500 relative">
              <h3 className="text-lg font-bold flex items-center gap-2">
                Roleplay dan Praktik
                <span>
                  <FaCircleInfo
                    className="inline-block text-primary-500 cursor-pointer hover:text-blue-base/80"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </span>
              </h3>
              <p className="mt-1">Lihat detail tentang Roleplay dan Praktik</p>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <FeatureCard
                src={'/images/simulasi-dan-roleplay/simulasi.png'}
                alt="Roleplay"
                text="Tes dengan anggota tim yang membantu anda memahami diri sendiri lebih baik."
                buttonText="Test Roleplay"
                href="/roleplay-dan-assesmen/roleplay"
              />
              <FeatureCard
                src={'/images/simulasi-dan-roleplay/roleplay.png'}
                alt="Assesmen"
                text="Tes berbasis praktik untuk memahami materi secara langsung."
                buttonText="Test Praktik"
                href="/roleplay-dan-assesmen/assesmen"
              />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
