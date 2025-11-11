import Image from 'next/image';
import { FC } from 'react';
import {
  ContentProgram,
  ITProgram,
  ManagementProgram,
  VirtualProgram,
} from '../program/constant';
import SubPoint from '../program/sub-point';

const AdvantageSection: FC = () => {
  return (
    <section className="w-full lg:flex px-12 2xl:px-0 py-16 max-w-[1440px] mx-auto items-start gap-2">
      <div className="w-full lg:w-2/3 py-5 flex justify-center lg:justify-between">
        <Image
          width={500}
          height={500}
          src="/images/advantage-image.png"
          alt="advantages images"
        />
      </div>
      <div className="w-full lg:block lg:my-auto mx-auto flex flex-col justify-center">
        <div className="w-full md:flex md:items-center md:justify-center lg:justify-start mt-8">
          <h1 className="text-2xl block font-bold text-blue-base">
            Pelatihan
            <span className="lg:text-5xl text-4xl  block font-bold text-orange-base">
              Paket-C Gratis
            </span>
          </h1>
        </div>
        <div className="mt-4 text-md w-full">
          <p className="text-md text-neutral-600 my-2 text-center lg:text-start">
            Ada banyak kategori pelatihan terlaris yang ada di Paket-C Gratis
          </p>
          <div className="flex flex-col gap-1">
            <div className="">
              <p className="font-bold text-blue-base">IT</p>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {ITProgram.map((item, index) => (
                  <SubPoint key={index} title={item} />
                ))}
              </div>
            </div>
            <div className="">
              <p className="font-bold text-blue-base">Management</p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {ManagementProgram.map((item, index) => (
                  <SubPoint key={index} title={item} />
                ))}
              </div>
            </div>
            <div className="">
              <p className="font-bold text-blue-base">Content</p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {ContentProgram.map((item, index) => (
                  <SubPoint key={index} title={item} />
                ))}
              </div>
            </div>
            <div className="">
              <p className="font-bold text-blue-base">Virtual Reality & Game</p>
              <div className="grid grid-cols-1 md:grid-cols-2">
                {VirtualProgram.map((item, index) => (
                  <SubPoint key={index} title={item} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
