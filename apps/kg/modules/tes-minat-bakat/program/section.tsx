'use client';

import Image from 'next/image';
import FeatureCard from '../common/feature-card';

const ProgramSection = () => {
  return (
    <section className="bg-[#f5f5f5] lg:flex flex-col pt-10 px-8 md:px-16 2xl:px-0 w-full mx-auto pb-8 relative">
      <div className="flex absolute z-0 bottom-10 left-0 w-full h-full">
        <Image
          src="/images/tes-minat-bakat/program-journey.svg"
          alt="tes"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <h1 className="text-sky-base font-bold text-[28px] leading-none text-center mb-16">
        Pilih Tes untuk Menemukan Potensimu!
      </h1>
      <div className="sm:flex justify-center items-center lg:w-full relative w-full">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 items-stretch">
          <FeatureCard
            src={'/images/tes-minat-bakat/tes-minat.svg'}
            cardColor="#E19E05"
            cardPadding="p-3"
            imageSize="w-24 h-24 md:w-28 md:h-28"
            alt="Tes Minat"
            title="Tes Minat"
            desc="Kenali bidang yang paling sesuai dengan minat Anda! Tes ini membantu menemukan jalur karier yang tepat berdasarkan ketertarikan dan preferensi pribadi"
            buttonText="Mulai Tes"
            buttonColor="bg-yellow-500 hover:bg-yellow-600 transition"
            href="/tes-minat-bakat/minat"
            lineBorder={true}
          />
          <FeatureCard
            src={'/images/tes-minat-bakat/tes-bakat.svg'}
            cardColor="#E19E05"
            cardPadding="p-3"
            imageSize="w-24 h-24 md:w-28 md:h-28"
            alt="Tes Bakat"
            title="Tes Bakat"
            desc="Ungkap potensi terbaik Anda! Tes ini membantu mengidentifikasi dan memahami bakat alami yang dapat dikembangkan secara optimal untuk meraih kesuksesan di berbagai bidang"
            buttonText="Mulai Tes"
            buttonColor="bg-yellow-500 hover:bg-yellow-600 transition"
            href="/tes-minat-bakat/bakat"
            lineBorder={true}
          />
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;
