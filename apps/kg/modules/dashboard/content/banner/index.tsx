import Image from 'next/image';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DashboardBanner } from './constant';

export default function BannerSection() {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      loop={true}
      modules={[Autoplay]}
      className="relative rounded-md shadow-sm w-full overflow-hidden col-span-2"
    >
      {DashboardBanner.map((banner, index) => (
        <SwiperSlide key={index} className="relative !h-[250px]">
          <Image
            src={banner}
            layout="fill"
            objectFit="cover"
            alt={`Banner ${index}`}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
