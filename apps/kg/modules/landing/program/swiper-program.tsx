import { useEffect, useRef, useState } from 'react';
import { Swiper as SwiperType } from 'swiper';
import { ChoiceProgramCard } from '../../../components/landing-page/card-program';
import { ContentCardProgram } from './constant';

const SwiperProgram = () => {
  const [screenWidth, setScreenWidth] = useState(1);
  const swiperRef = useRef<SwiperType>();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;

      if (width < 640) {
        setScreenWidth(1);
      } else if (width >= 640 && width < 1028) {
        setScreenWidth(2);
      } else if (width >= 1028 && width < 1279) {
        setScreenWidth(3);
      } else {
        setScreenWidth(4);
      }
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <>
      <div className="sm:flex justify-center items-center lg:w-full relative w-full lg:px-14">
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-3 gap-y-3 justify-center gap-5 mt-6 items-stretch">
          {ContentCardProgram.map((card, key) => (
            <ChoiceProgramCard key={key} {...card} index={key} />
          ))}
        </div>
      </div>
    </>
  );
};

export default SwiperProgram;
