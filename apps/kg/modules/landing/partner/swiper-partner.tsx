import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { _partner_logo } from './constant';

const SwiperPartner = () => {
  const [screenWidth, setScreenWidth] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth(2);
      } else if (width >= 640 && width < 1028) {
        setScreenWidth(4);
      } else {
        setScreenWidth(5);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <Swiper
      slidesPerView={screenWidth}
      rewind={true}
      spaceBetween={30}
      centeredSlides={screenWidth === 2 ? true : false}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="flex justify-center gap-3 mt-6 items-center min-h-fit"
    >
      {_partner_logo.map((logo, key) => (
        <SwiperSlide className="" key={key}>
          <Image
            key={key}
            src={logo}
            width={200}
            height={200}
            alt="Partner Logo"
            quality={90}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperPartner;
