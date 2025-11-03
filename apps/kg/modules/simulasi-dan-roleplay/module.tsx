'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { useState } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import { BaseLayout } from '../../components';
import FeatureCard from './common/feature-card';
import RulesCard from './common/rules-card';
import { SimulasiRoleplayBreadcrumb } from './constant';

export default function SimulasiRoleplayModules() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BaseLayout>
      <BreadCrumb items={SimulasiRoleplayBreadcrumb} bgColor="bg-grey-100" />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-4 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-bold">Simulasi, Drill & Roleplay</h2>
          </div>
          <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-4">
            <div className="bg-blue-50 rounded-md p-4 w-full text-primary-500 relative">
              <h3 className="text-lg font-bold flex items-center gap-2">
                Simulasi, Drill & Roleplay
                <span>
                  <FaCircleInfo
                    className="inline-block text-primary-500 cursor-pointer hover:text-blue-base/80"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </span>
              </h3>
              {isOpen && (
                <div className="absolute bg-white rounded-md shadow-md inset md:-top-12 md:left-56 border border-gray-300 text-black">
                  <RulesCard setIsOpen={setIsOpen} />
                </div>
              )}
              <p className="mt-1">
                Lihat detail tentang simulasi, Drill & roleplay
              </p>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <FeatureCard
                src={'/images/simulasi-dan-roleplay/simulasi.png'}
                alt="Simulasi"
                text="Tes dengan anggota tim yang membantu anda memahami diri sendiri lebih baik."
                buttonText="Test Simulasi"
                href="/simulasi-dan-roleplay/simulasi"
              />
              <FeatureCard
                src={'/images/simulasi-dan-roleplay/roleplay.png'}
                alt="Drill"
                text="Tes dengan mentor yang membantu anda memahami diri sendiri lebih baik."
                buttonText="Test Drill"
                href="/simulasi-dan-roleplay/drill"
              />
              <FeatureCard
                src={'/images/simulasi-dan-roleplay/roleplay.png'}
                alt="Roleplay"
                text="Tes dengan rekan roleplay yang membantu anda memahami diri sendiri lebih baik."
                buttonText="Test Roleplay"
                href="/simulasi-dan-roleplay/roleplay"
              />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
