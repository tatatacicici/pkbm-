'use client';

import { BreadCrumb, Button } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { BaseLayout } from '../../components';
import { KonversiBreadcrumb } from './constants';
import HeroBg from './image/hero.svg';
import HeroBg2 from './image/hero2.png';
import SyaratKonversi from './syarat-konversi';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';

const KonversiModule = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <BaseLayout>
      <BreadCrumb items={KonversiBreadcrumb} bgColor="bg-grey-100" />
      <div className="bg-grey-100">
        <div className="w-full h-full mb-12 max-w-[1440px] mx-auto">
          <div className="bg-white mt-5 mx-5 px-2 py-4 md:py-8 lg:py-2 flex flex-col lg:flex-row lg:gap-14">
            <section className="w-full">
              <div className="flex flex-col items-center lg:items-start lg:gap-2 lg:pt-8">
                <Image src={HeroBg} alt={'hero-background'} />
                <p className="px-5 pt-5 text-sm md:text-base lg:text-3xl text-justify lg:text-start font-semibold">
                  Konversi SKS :<br />
                  (Kuliah, Pelatihan, Magang, Kerja) Rekognisi Pembelajaran
                  Lampau
                  <span
                    className="text-primary-500 text-xs lg:text-lg md:block cursor-pointer"
                    onClick={() => setIsOpen(true)}
                  >
                    *Syarat Konversi
                  </span>
                </p>
              </div>
              <div className=" flex flex-col md:justify-center lg:justify-start md:flex-row space-y-5 md:space-y-0 w-full text-center lg:text-start pb-5 mt-5 lg:mt-8 lg:ms-5 gap-10">
                <Link
                  href="/konversi/program"
                  className="bg-primary-500 text-white py-2 lg:py-3 px-10 rounded-lg text-sm lg:text-base"
                >
                  Transfer Konversi SKS
                </Link>

                <Button
                  type="button"
                  href="/konversi/program"
                  className="bg-gray-300 text-white py-2 lg:py-3 px-10 lg:px-20 rounded-lg text-sm lg:text-base cursor-default"
                  disabled={true}
                >
                  Konversi Balik SKS
                </Button>
              </div>
            </section>
            <section className="w-full hidden lg:flex lg:justify-end">
              <Image
                src={HeroBg2}
                alt={'hero-background'}
                priority
                quality={100}
              />
            </section>
          </div>
        </div>
      </div>
      {<SyaratKonversi isOpen={isOpen} handleClose={handleClose} />}
      <FooterCredit />
    </BaseLayout>
  );
};

export default KonversiModule;
