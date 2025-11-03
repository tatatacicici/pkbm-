import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from '../../../components';
import { ProgramKonversiBreadcrumb } from '../constants';
import Image from 'next/image';
import HeroBg2 from '../image/hero2.png';
import KonversiKerjaImg from '../image/konversi-kerja.svg';
import KonversiMagangImg from '../image/konversi-magang.svg';
import KonversiPelatihanImg from '../image/konversi-pelatihan.svg';
import KonversiSksImg from '../image/konversi-sks.svg';
import { Card } from '@kampus-gratis/components/molecules';
import Link from 'next/link';
import FooterCredit from '../../../components/footer/footer-credit/footer-credit';

const ProgramKonversiModule = () => {
  return (
    <BaseLayout>
      <BreadCrumb items={ProgramKonversiBreadcrumb} bgColor="bg-grey-100" />
      <div className="w-full max-w-[1440px] mx-auto px-8 md:px-14 lg:px-16 py-7 md:py-9 lg:py-14 flex flex-col gap-10 lg:gap-16">
        <div className="w-full h-full flex justify-between">
          <div className="w-full flex rounded-l-md lg:rounded-l-lg bg-blue-base text-white">
            <div className="px-5 md:px-8 flex flex-col gap-3 justify-center">
              <h1 className="font-bold lg:font-semibold text-lg md:text-3xl lg:text-4xl">
                Konversi SKS
              </h1>
              <h4 className="text-sm font-normal md:text-lg lg:text-xl">
                Pilih Program yang ingin kamu konversi
              </h4>
            </div>
          </div>
          <div className=" max-sm:w-3/5 flex justify-end">
            <Image
              src={HeroBg2}
              alt={'hero-background'}
              width={431}
              height={431}
              className=" h-[108px] md:h-[178px] lg:h-[248px] md:object-cover overflow-hidden rounded-r-md lg:rounded-r-lg"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-16">
          <Link href={'/konversi/program/daftar-mata-kuliah'}>
            <Card
              imgStyle="mx-auto !w-[100px]"
              hasImage
              imgwidth={20}
              imgheight={20}
              src={KonversiSksImg}
              title="Konversi SKS Perkuliahan"
              className="lg:rounded-lg rounded-md text-center"
              titleStyle="font-bold text-md my-3 "
            >
              <p className="text-sm font-thin">
                Isi administrasi kamu sekarang untuk dapat mengikuti program
                Paket-C Gratis
              </p>
            </Card>
          </Link>
          <div className="relative">
            <Card
              imgStyle="!w-[100px] mx-auto"
              hasImage
              imgwidth={20}
              imgheight={20}
              src={KonversiPelatihanImg}
              title="Konversi Pelatihan"
              className="lg:rounded-lg rounded-md text-center cursor-default"
              titleStyle="font-bold text-md my-3"
            >
              <p className="text-sm font-thin">
                Isi administrasi kamu sekarang untuk dapat mengikuti program
                Paket-C Gratis
              </p>
            </Card>
            {/* Additional element for "Under Development" text */}
            <div className="rounded-lg absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 font-semibold">
              Dalam Pengembangan
            </div>
          </div>
          <div className="relative">
            <Card
              imgStyle="!w-[100px] mx-auto"
              hasImage
              imgwidth={20}
              imgheight={20}
              src={KonversiMagangImg}
              title="Konversi Magang"
              className="lg:rounded-lg rounded-md text-center"
              titleStyle="font-bold text-md my-3 "
            >
              <p className="text-sm font-thin">
                Isi administrasi kamu sekarang untuk dapat mengikuti program
                Paket-C Gratis
              </p>
            </Card>
            {/* Additional element for "Under Development" text */}
            <div className="rounded-lg absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 font-semibold">
              Dalam Pengembangan
            </div>
          </div>
          <div className="relative">
            <Card
              imgStyle="!w-[100px] mx-auto"
              hasImage
              imgwidth={20}
              imgheight={20}
              src={KonversiKerjaImg}
              title="Konversi Kerja"
              className="lg:rounded-lg rounded-md text-center"
              titleStyle="font-bold text-md my-3 "
            >
              <p className="text-sm font-thin">
                Isi administrasi kamu sekarang untuk dapat mengikuti program
                Paket-C Gratis
              </p>
            </Card>
            {/* Additional element for "Under Development" text */}
            <div className="rounded-lg absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 font-semibold">
              Dalam Pengembangan
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center md:justify-end mt-3">
          <p className="font-semibold text-xs md:text-sm">
            Untuk melihat riwayat permintaan Konversi
          </p>
          <Link href={'/konversi/program/riwayat-konversi'}>
            <p className="font-semibold text-xs md:text-sm text-blue-base pl-1">
              Klik Disini
            </p>
          </Link>
        </div>
      </div>
      <FooterCredit />
    </BaseLayout>
  );
};

export default ProgramKonversiModule;
