import Image from 'next/image';
import { FC } from 'react';

const HeroSection: FC = () => {
  return (
    <>
      <section className="relative bg-[#43a7ff] lg:bg-[#1E61B8]">
        <div className="flex absolute z-0 top-0 md:top-0 -right-10">
          <Image
            src="/images/tes-minat-bakat/hero-wave.svg"
            alt={'hero-wave'}
            width={0}
            height={0}
            style={{ width: '100%', height: 'auto' }}
          />
        </div>
        <div className="max-w-[1440px] mx-auto relative">
          <div className="pt-0 md:pt-4 md:px-8 pb-14 xl:pb-12 2xl:px-0">
            <div className="flex flex-col-reverse lg:flex-row justify-between relative z-10">
              <div className="w-full lg:w-full px-6 self-center 2xl:px-0">
                <h1 className="w-full xl:min-w-[720px] md:text-[44px] md:leading-[54px] text-center lg:text-start text-white text-2xl font-bold leading-[34px]">
                  Tes Minat & Bakat
                </h1>
                <div className="w-full text-center lg:text-start text-neutral-50 text-md lg:text-xl font-medium leading-relaxed pt-2 lg:pt-6">
                  Tes ini dirancang untuk membantu seseorang memahami
                  aspek-aspek tertentu yang mungkin sesuai dengan minat atau
                  bakat mereka, seperti seni, ilmu pengetahuan, olahraga, atau
                  karier tertentu
                </div>
              </div>
              <div className="w-full flex justify-center self-center">
                <Image
                  width={600}
                  height={600}
                  src="/images/tes-minat-bakat/hero-image-tes-minat-bakat.svg"
                  alt="hero-image"
                  className="w-4/5 h-4/5 md:w-4/5 md:h-4/5 lg:w-full lg:h-full mt-10 mb-10 md:mt-20"
                  quality={100}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
