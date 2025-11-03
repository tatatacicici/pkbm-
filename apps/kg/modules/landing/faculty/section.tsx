'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { ChoiceFacultyCard } from '../../../components/landing-page/card-faculty';
import { ContentCardFaculty } from './constant';

const FacultySection: FC = () => {
  const facultyCard = ContentCardFaculty;
  const router = useRouter();

  const [screenWidth, setScreenWidth] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth(1);
      } else if (width >= 640 && width < 1028) {
        setScreenWidth(2);
      } else {
        setScreenWidth(3);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <section className="lg:flex flex-col gap-y-[20px] px-8 2xl:px-0 py-5 relative">
      <Image
        src="/images/faculty-line.svg"
        alt={'card-landing'}
        width={131}
        height={131}
        priority
        className="hidden md:block absolute z-0 top-72 md:top-44 md:left-0 lg:top-0"
        style={{
          width: '100%',
          height: 'h-auto',
        }}
      />
      <div className="flex gap-12 items-center flex-col lg:flex-row mx-auto max-w-[1440px] w-full relative">
        <div className="rounded-lg overflow-hidden flex-shrink-0">
          <Image
            // src={'/images/Poster KG update 2025.png'}
            src={'/images/poster-pkbm-paket-c.png'}
            width={360}
            height={360}
            alt={'Banner Risma'}
            className="object-cover rounded-xl overflow-hidden"
          />
        </div>
        <div className="w-full">
          <h1 className="absolute z-40 text-black font-[700] text-[36px]">
            Pilihan Jurusan
          </h1>
          <div className="flex absolute z-0 mt-4">
            <Image
              src="/images/faculty-bg-text.svg"
              alt={'card-landing'}
              width={0}
              height={43}
              loading={'lazy'}
              priority={false}
              className="object-cover w-auto"
            />
          </div>
          <p className="mt-16 font-semibold tracking-normal text-xl mb-4">
            Tersedia 2 Jurusan Unggulan Paket-C Gratis{' '}
          </p>
          <div className="flex flex-col lg:flex-row gap-y-5 lg:gap-x-5 lg:gap-y-0 justify-between">
            {facultyCard ? (
              facultyCard.map((card, key) => (
                <ChoiceFacultyCard key={key} {...card} />
              ))
            ) : (
              <div className="flex justify-center items-center w-full h-[300px]">
                <p className="text-neutral-500 font-medium text-[14px]">
                  Tidak ada jurusan
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* <div className="justify-center flex md:justify-start">
        <Link
          href="/auth/register"
          className="text-white flex justify-center items-center bg-green-600 py-3 px-8 text-lg rounded-lg font-semibold border border-green-200 text-green-50 hover:bg-green-600/80 transition"
        >
          Daftar Kuliah <FaArrowRight className="ml-2" />
        </Link>
        <Link
          href="/auth/register"
          className="flex justify-center items-center bg-transparent py-3 px-8 text-lg rounded-lg font-semibold ml-4 border border-neutral-800 hover:bg-neutral-100/10 transition"
        >
          Daftar Bootcamp
        </Link>
      </div> */}
    </section>
  );
};

export default FacultySection;
