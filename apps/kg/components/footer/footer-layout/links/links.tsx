import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from 'react-icons/fa';

export const FooterLinks: FC = (): ReactElement => {
  return (
    <section className="flex lg:gap-20 gap-8 w-full">
      <div className=" text-neutral-900">
        <h1 className=" mb-3 lg:mb-6 font-bold text-base">Halaman</h1>
        <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            {/* <Link href={'/rencana-studi'}>Rencana Belajar</Link> */}
            <Link href={'/penugasan'}>PR & Tugas</Link>
          </li>
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            <Link href={'/studi-ku'}>Pelajaran-Ku</Link>
          </li>
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            <Link href={'/panduan'}>Panduan</Link>
          </li>
          <li className="hover:underline hover:text-version3-500 hover:underline-offset-2 transition-colors ease-in-out duration-300 cursor-pointer">
            <Link href={'/sekilas-ilmu'}>Tahukah Kamu</Link>
          </li>
        </ul>
      </div>
      <div className=" text-neutral-900">
        <h1 className="mb-3 lg:mb-6 font-bold text-base">Kontak</h1>
        <ul className="flex text-xs md:text-sm flex-col gap-1 lg:gap-3 xl:gap-4">
          <li>
            <FaWhatsapp className="inline-block text-neutral-700 mr-1" />
            085183004001
          </li>
          <li>
            <FaPhoneAlt className="inline-block text-neutral-700 mr-1" />
            +62 21 38890052
          </li>
          <li>
            <FaEnvelope className="inline-block text-neutral-700 mr-1" />
            paketcgratis@gmail.com
          </li>
        </ul>
      </div>
    </section>
  );
};
