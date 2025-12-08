import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

const PlayStoreSection: FC = () => {
  return (
    <section className="flex flex-col pb-4 md:pb-12 w-full px-8 justify-center -mt-16 lg:mt-0">
      <div className="max-w-[1200px] mx-auto rounded-lg overflow-hidden">
        <Link
          target="_blank"
          href="https://play.google.com/store/apps/details?id=id.kampusgratis.app"
        >
          <div className="relative w-full">
            <Image
              src="/images/v2-play-store-banner.png"
              width={1400}
              height={1400}
              alt="Paket-C Gratis di Play Store"
              className=" w-full h-auto transform transition-all duration-300 hover:brightness-110"
            />
          </div>
        </Link>

        <Link href="/donasi">
          <div className="relative w-full">
            <Image
              src="/images/donation-banner.png"
              width={1400}
              height={1400}
              alt="Donasi"
              className="w-full h-auto transform transition-all duration-300 hover:brightness-110"
            />
          </div>
        </Link>
      </div>
    </section>
  );
};

export default PlayStoreSection;
