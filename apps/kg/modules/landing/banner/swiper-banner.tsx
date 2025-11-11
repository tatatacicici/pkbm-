import { Swiper, SwiperSlide } from 'swiper/react';
import { ChoiceBannerCard } from '../../../components/landing-page/card-banner';
import { ContentCardBanner } from './constant';

import { Autoplay } from 'swiper/modules';

const SwiperBanner = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={0}
      centeredSlides={false}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      rewind={true}
      modules={[Autoplay]}
      className="flex justify-center gap-3 mt-6 items-center min-h-fit"
    >
      {ContentCardBanner.map((card, key) => (
        <SwiperSlide className="" key={key}>
          <ChoiceBannerCard {...card} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperBanner;
