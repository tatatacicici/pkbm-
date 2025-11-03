import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonyCard } from '../../../components/landing-page/card-testimony';
import { ContentCardTestimony } from './constant';

import { useEffect, useState } from 'react';
import { Autoplay, Mousewheel } from 'swiper/modules';

const SwiperTestimony = () => {
  const [screenWidth, setScreenWidth] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth(1);
      } else if (width >= 640 && width < 1028) {
        setScreenWidth(1);
      } else {
        setScreenWidth(2);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex flex-col lg:w-1/2 cursor-default z-10">
      <Swiper
        direction={'vertical'}
        slidesPerView={screenWidth}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        centeredSlides={false}
        modules={[Mousewheel, Autoplay]}
        loop={true}
        className="flex h-screen pb-20 px-4"
      >
        {ContentCardTestimony.map((card, key) => (
          <SwiperSlide key={key}>
            <TestimonyCard {...card} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperTestimony;
