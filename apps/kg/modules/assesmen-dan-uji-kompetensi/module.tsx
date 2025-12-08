'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { useState } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import { BaseLayout } from '../../components';
import FeatureCard from '../simulasi-dan-roleplay/common/feature-card';
import RulesCardAssesmen from './common/rules-card';
import { AssesmenDanUjiKomptensiBreadCrumb } from './constant';

export default function AssesmentUjiKompetensiModule() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <BaseLayout>
      <BreadCrumb
        items={AssesmenDanUjiKomptensiBreadCrumb}
        bgColor="bg-grey-100"
      />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-4 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-bold">Assesmen & Uji Kompetensi</h2>
          </div>
          <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-4">
            <div className="bg-blue-50 rounded-md p-4 w-full text-primary-500 relative">
              <h3 className="text-lg font-bold flex items-center gap-2">
                Assesmen & Uji Kompetensi
                <span>
                  <FaCircleInfo
                    className="inline-block text-primary-500 cursor-pointer hover:text-blue-base/80"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </span>
              </h3>
              {isOpen && (
                <div className="absolute bg-white rounded-md shadow-md inset md:-top-12 md:left-72 border border-gray-300 text-black max-w-[500px]">
                  <RulesCardAssesmen setIsOpen={setIsOpen} />
                </div>
              )}
              <p className="mt-1">
                Lihat detail tentang Assesmen & Uji Kompetensi
              </p>
            </div>
            <div className="flex justify-between gap-4 flex-col md:flex-row">
              <FeatureCard
                src={'/images/assesmen-dan-uji-kompetensi/assesmen.png'}
                alt="Assesment"
                text="POB, BK, DD, VRG, BAID, ICS"
                href="/assesmen-dan-uji-kompetensi/assesmen"
                textColor="text-blue-base"
                title="Assesmen"
              />
              <FeatureCard
                src={'/images/assesmen-dan-uji-kompetensi/uji-kompetensi.png'}
                alt="Uji Kompetensi"
                text="BNSP"
                textColor="text-success-base"
                href="/assesmen-dan-uji-kompetensi/uji-kompetensi"
                title="Uji Kompetensi"
              />
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
