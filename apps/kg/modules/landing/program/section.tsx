'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

const SwiperProgram = dynamic(() => import('./swiper-program'), {
  ssr: false,
});

const ProgramSection = () => {
  return (
    <section className="lg:flex flex-col pt-10 px-8 md:px-16 2xl:px-0 w-full max-w-[1440px] mx-auto pb-8 relative">
      <h1 className="text-black font-bold text-[36px] leading-none">
        Program Paket-C Gratis
      </h1>
      <SwiperProgram />
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-4">
        {/* <Link
          href="/auth/register"
          className="text-white flex justify-center items-center bg-green-600 py-3 px-8 text-lg rounded-lg font-semibold border border-green-200 text-green-50 hover:bg-green-600/80 transition"
        > */}
        {/* <Link
          href="/auth/register"
          className="flex justify-center items-center bg-transparent py-3 px-8 text-lg rounded-lg font-semibold ml-4 border border-neutral-800 hover:bg-neutral-100/10 transition"
        >
          Daftar Tes Minat & Bakat
        </Link>
        <Link
          href="/auth/register"
          className="flex justify-center items-center bg-transparent py-3 px-8 text-lg rounded-lg font-semibold ml-4 border border-neutral-800 hover:bg-neutral-100/10 transition"
        >
          Daftar Pelatihan
        </Link> */}
        <Link
          href="/administrasi/perkuliahan"
          className="w-full md:w-auto flex justify-center items-center text-white bg-green-500 py-3 px-8 text-lg rounded-lg font-semibold border border-green-200 text-green-50 hover:bg-green-500/80 transition"
        >
          Daftar Paket C
        </Link>
        <Link
          href="/tes-minat-bakat"
          className="w-full md:w-auto flex justify-center items-center bg-transparent py-3 px-8 text-lg rounded-lg font-semibold border border-[#43A7FF] hover:bg-green-500/80 hover:text-white hover:border-green-200 transition"
        >
          Daftar Tes Minat & Bakat
        </Link>
        <Link
          href="/bootcamp"
          className="w-full md:w-auto flex justify-center items-center bg-transparent py-3 px-8 text-lg rounded-lg font-semibold border border-[#43A7FF] hover:bg-green-500/80 hover:text-white hover:border-green-200 transition"
        >
          Daftar Pelatihan
        </Link>
      </div>
    </section>
  );
};

export default ProgramSection;
