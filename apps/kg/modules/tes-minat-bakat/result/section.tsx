'use client';

import Image from 'next/image';
import FeatureCard from '../common/feature-card';

const ResultSection = () => {
  return (
    <section className="bg-[#43A7FF] lg:flex flex-col pt-10 px-8 md:px-16 2xl:px-0 w-full mx-auto pb-8 relative">
      <div className="flex absolute z-0 bottom-0 lg:bottom-0 -left-5">
        <Image
          src="/images/tes-minat-bakat/result-wave.svg"
          alt={'tes'}
          width={0}
          height={0}
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <h1 className="text-white font-bold text-[28px] leading-none text-center mb-16">
        Lihat Hasil Tes Mu Di sini
      </h1>
      <div className="sm:flex justify-center items-center lg:w-full relative w-full">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 items-stretch">
          <FeatureCard
            src={'/images/tes-minat-bakat/hasil-tes.svg'}
            imageSize="w-40 h-40 md:w-44 md:h-44"
            alt="Hasil Tes"
            title="Hasil Tes"
            desc="Temukan karier yang cocok dengan minat dan bakat Anda! Tes ini membantu Anda mengenali potensi dan memilih profesi yang tepat"
            buttonText="Lihat Hasil Tes"
            buttonColor="bg-yellow-500 hover:bg-yellow-600 transition"
            href="/tes-minat-bakat/minat/session/sessionId/quiz/quizId/riwayat-quiz"
            lineBorder={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
