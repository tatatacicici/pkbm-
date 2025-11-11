'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { useState } from 'react';
import { FaCircleInfo } from 'react-icons/fa6';
import { TesKepemimpinanBreadcrumb } from './constant';
import FeatureCard from './common/feature-card';
// import Image from 'next/image';
// import HeroBg2 from './image/hero2.png';

export default function TesKepemimpinanModule() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <BreadCrumb items={TesKepemimpinanBreadcrumb} bgColor="bg-grey-100" />
      <div className="bg-grey-100">
        <div className="w-full min-h-[80vh] mx-auto space-y-4 pt-4 pb-12 px-8 md:px-14 lg:px-16">
          <div className="w-full bg-sky-base flex flex-col lg:flex-row items-center lg:items-start justify-between p-8 text-white rounded-md shadow-sm ">
            <div className="lg:w-2/3">
              <h2 className="text-2xl font-bold">Tes Kepemimpinan</h2>
              <p className="text-md font-semibold mt-6">
                Pilih program yang ingin Anda lakukan!
              </p>
            </div>
            {/* <div className="lg:w-1/3 flex justify-end">
              <Image
                src={HeroBg2}
                alt="hero-background"
                priority
                quality={100}
                className="max-w-full h-auto object-contain"
              />
            </div> */}
          </div>
          <div className="bg-white rounded-md p-8 w-full shadow-sm space-y-4">
            <div className="bg-blue-50 rounded-md p-4 w-full text-sky-base relative">
              <h3 className="text-lg font-bold flex items-center gap-2">
                Tes Kepemimpinan
                <span>
                  <FaCircleInfo
                    className="inline-block text-sky-base cursor-pointer hover:opacity-80 transition-all"
                    onClick={() => setIsOpen(!isOpen)}
                  />
                </span>
              </h3>
              <p className="mt-1">Lihat detail tentang Tes Kepemimpinan</p>
            </div>
            <div className="flex gap-4 flex-col md:flex-row">
              <FeatureCard
                src={'/images/tes-kepemimpinan/osis.svg'}
                alt="OSIS"
                title="OSIS"
                text="Tes Kepemimpinan OSIS yang dirancang untuk menggali karakter, visi, dan kemampuan Anda dalam memimpin."
                buttonText="Mulai Tes"
                href="/tes-kepemimpinan/osis/session/sessionId/quiz/quizId/"
              />
              <FeatureCard
                src={'/images/tes-kepemimpinan/pramuka.svg'}
                alt="Pramuka"
                title="Pramuka"
                text="Tes Kepemimpinan Pramuka akan membantu Anda memahami bagaimana cara memimpin, bekerja sama, dan mengambil keputusan dalam kegiatan Pramuka."
                buttonText="Mulai Tes"
                href="/tes-kepemimpinan/pramuka/session/sessionId/quiz/quizId/"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
