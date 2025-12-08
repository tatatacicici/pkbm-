import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const InvitationSection: FC = () => {
  return (
    <section className="flex flex-col h-full w-full px-2 md:px-8 justify-center mb-16">
      {/* <main
        className={`md:flex max-w-5xl mx-auto w-full justify-center items-center rounded-md md:rounded-lg bg-white mt-10 h-[350px]  relative overflow-hidden p-4`}
      > */}
      <main
        className={`md:flex max-w-5xl mx-auto w-full justify-center items-center rounded-md md:rounded-lg mt-10 h-[350px] relative overflow-hidden md:overflow-visible p-4`}
      >
        <div className="px-4 pt-2 pb-2 lg:px-8 md:w-1/2 w-full">
          <div className="hidden md:flex absolute z-0 md:top-10 md:left-10 lg:top-3 lg:left-0">
            <Image
              src="/images/invitation-starburst.svg"
              alt={'card-landing'}
              width={0}
              height={43}
              loading={'lazy'}
              priority={false}
              className="object-cover w-full md:h-[200px] lg:h-[350px]"
            />
          </div>
          <h1 className="font-bold lg:font-bold text-3xl lg:text-4xl md:py-10 pb-4 relative z-10">
            Segera daftarkan dirimu!
          </h1>
          <div className="flex gap-2 text-center font-semibold w-full flex-col lg:flex-row relative z-10">
            {/* <Link href="/auth/register" className="w-full">
              <button className="w-full bg-blue-base rounded-md p-2 text-white border-2 border-blue-base hover:bg-blue-base/90 hover:border-blue-base/90 transition-all">
                Daftar Pelatihan
              </button>
            </Link>
            <Link href="/semua-fitur" className="w-full">
              <button className="w-full border-2 border-blue-base rounded-md p-2 text-blue-base hover:bg-blue-base hover:text-white transition-all">
                Daftar Paket C
              </button>
            </Link> */}
            <Link href="/bootcamp" className="w-full">
              <button className="w-full bg-sky-base rounded-md p-2 text-white border-2 border-sky-base hover:bg-sky-base/90 hover:border-sky-base/90 transition-all">
                Daftar Pelatihan
              </button>
            </Link>
            <Link href="/administrasi/perkuliahan" className="w-full">
              <button className="w-full border-2 border-sky-base rounded-md p-2 text-black hover:bg-sky-base hover:text-white transition-all">
                Daftar Paket C
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-end">
          <Image
            // src="/images/invitation-2.png"
            src="/images/invitation-new.png"
            width={515}
            height={515}
            alt="Partner Logo"
            loading="eager"
            priority={true}
            className="w-[300px] h-[200px] md:w-1/2 md:h-full mx-auto z-10 md:absolute -right-28 md:right-0 xl:-right-28 md:top-0 object-cover"
          />
        </div>
      </main>
    </section>
  );
};

export default InvitationSection;
