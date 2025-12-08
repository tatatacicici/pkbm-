import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { FaArrowRight, FaTelegram, FaWhatsapp } from 'react-icons/fa';
import HeroBg from '../../../public/images/hero-background-new.svg';
import VideoPanduanModal from './video-modal';

const HeroSection: FC = () => {
  return (
    <>
      <section className="relative">
        {/* <Image
          src="/images/hero-wave.svg"
          alt={'card-landing'}
          width={131}
          height={131}
          priority
          className="absolute z-20 top-72 md:top-44 lg:top-0"
          style={{
            width: '100%',
            height: 'h-auto',
          }}
        /> */}
        <Image
          src={HeroBg}
          alt={'hero-background'}
          className="absolute z-10 left-0 top-0 w-full h-full object-cover object-center"
          priority={true}
        />
        <div className="max-w-[1440px] mx-auto relative z-30">
          <div className="pt-0 md:pt-4 md:px-8 pb-28 xl:pb-12 2xl:px-0">
            <div className="flex flex-col-reverse lg:flex-row justify-between">
              <div className="w-full lg:w-full px-6 self-center 2xl:px-0">
                <h1 className="w-full xl:min-w-[720px] text-xl md:text-[36px] leading-[34px] md:leading-[54px] text-center md:text-start text-white font-bold">
                  Selamat Datang di{' '}
                  <span className="text-yellowPrimary-base">
                    Paket-C Gratis
                  </span>
                </h1>
                <h1 className="w-full xl:min-w-[720px] text-xl md:text-[40px] leading-[34px] md:leading-[54px] text-center md:text-start text-yellowPrimary-base font-bold">
                  Solusi Paket C & Pelatihan Online!
                </h1>
                <h2 className="w-full md:text-[23px] md:leading-[38px] text-center md:text-start text-white text-xl font-bold leading-[27px]">
                  Sekolah Online, Bimbel, Try Out, Tes Psikologi dan Gratis!
                </h2>
                <div className="w-full text-center md:text-start text-neutral-50 text-sm md:text-lg lg:text-xl font-medium leading-relaxed pt-2 lg:pt-6">
                  Ingin ijazah SMA gratis?
                </div>
                <div className="w-full text-center md:text-start text-neutral-50 text-sm md:text-lg lg:text-xl font-medium leading-relaxed">
                  Paket-C Gratis adalah solusi Paket C yang:
                  <ul className="list-disc list-inside inline-block text-left ml-3">
                    <li>Bisa belajar kapan saja & di mana saja</li>
                    <li>Bebas atur waktu sendiri</li>
                    <li>Mudah diikuti & berkualitas</li>
                    <li>Gratis</li>
                  </ul>
                </div>
                <div className="justify-center flex mt-2 lg:mt-6 md:justify-start gap-4">
                  <Link
                    href="/administrasi/perkuliahan"
                    className="flex justify-center items-center bg-yellowPrimary-base py-2 px-4 md:py-3 md:px-6 lg:py-3 lg:px-8 text-sm md:text-lg lg:text-lg rounded-lg font-semibold text-[#252525] border border-yellowPrimary-base hover:bg-yellowPrimary-base/80 transition"
                  >
                    Daftar Paket C <FaArrowRight className="ml-2" />
                  </Link>
                  <Link
                    href="/bootcamp"
                    className="text-white flex justify-center items-center bg-transparent py-2 px-4 md:py-3 md:px-6 lg:py-3 lg:px-8 text-sm md:text-lg lg:text-lg rounded-lg font-semibold text-neutral-800 border border-white hover:bg-neutral-100/10 transition"
                  >
                    Daftar Pelatihan
                  </Link>
                  <VideoPanduanModal />
                </div>
                {/* <div className="space-y-2 mt-6 bg-[#a9d6e5] rounded-xl py-4 px-6 text-[#000814] w-max border shadow-sm mx-auto md:mx-0">
                  <div className="w-full text-center font-semibold text-sm lg:text-xl leading-relaxed">
                    Gabung Grup WhatsApp & Telegram
                  </div>
                  <div className="justify-center items-center flex mt-2 lg:mt-6 md:justify-start gap-x-4 gap-y-2 flex-col md:flex-row">
                    <Link
                      href="https://chat.whatsapp.com/EkFyI1IU7diJXqbLKPnroE"
                      target="_blank"
                      className="flex justify-center items-center bg-[#2a9d8f] py-2 px-4 lg:py-3 lg:px-8 text-xs w-max lg:text-lg rounded-lg font-semibold text-white  text-green-50 hover:bg-[#2a9d8f]/80 transition"
                    >
                      Whatsapp <FaWhatsapp className="ml-2" />
                    </Link>
                    <Link
                      href="https://t.me/+GY8KkO-tDyo3OWI1"
                      target="_blank"
                      className="flex justify-center items-center py-2 px-4 lg:py-3 lg:px-8 text-xs w-max lg:text-lg rounded-lg font-semibold transition bg-[#118ab2] text-white"
                    >
                      Telegram <FaTelegram className="ml-2" />
                    </Link>
                    <Link
                      href="https://chat.whatsapp.com/ClcAOufMRidAdfHbolZced"
                      target="_blank"
                      className="flex justify-center items-center bg-[#023e8a] py-2 px-4 lg:py-3 lg:px-8 text-xs w-max lg:text-lg rounded-lg font-semibold text-white  text-green-50 hover:bg-[#023e8a]/80 transition"
                    >
                      WA Grup Keterampilan <FaWhatsapp className="ml-2" />
                    </Link>
                  </div>
                </div> */}
              </div>
              <div className="w-full flex justify-center self-center">
                <Image
                  width={500}
                  height={500}
                  // src="/images/hero-image-landing-page.png"
                  src="/images/hero-image-landing-page-new.png"
                  alt="hero-image"
                  className="w-3/5 h-3/5 md:w-4/5 md:h-4/5 lg:w-full lg:h-full"
                  // style={{ width: '700px', height: 'auto' }}
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
