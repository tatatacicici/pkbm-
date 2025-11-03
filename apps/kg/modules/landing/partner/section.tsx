import Image from 'next/image';
import Marquee from 'react-fast-marquee';
import { _partner_logo } from './constant';

const PartnerSection = () => {
  return (
    <section className="lg:flex flex-col px-8 d:px-16 text-center max-w-[1440px] mx-auto w-full my-12">
      <h1 className="font-bold text-[36px] leading-none mb-8">
        Mitra <span className="text-red-base">Kampus Kami</span>
      </h1>

      <div className="flex justify-center gap-4 mb-4">
        {[...Array(4)].map((_, key) => (
          <div className="w-full" key={key}>
            <Image
              src={`/images/surat-mitra-${key + 1}.png`}
              width={200}
              height={200}
              alt={`Mitra ${key + 1}`}
              className="object-contain w-full"
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center lg:w-full relative w-full">
        <Marquee>
          <div className="gap-12 flex pr-12">
            {_partner_logo.map((logo, key) => (
              <Image
                key={key}
                src={logo}
                width={120}
                height={120}
                alt="Partner Logo"
                quality={90}
                className="w-20 md:w-24 lg:w-32"
              />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default PartnerSection;
