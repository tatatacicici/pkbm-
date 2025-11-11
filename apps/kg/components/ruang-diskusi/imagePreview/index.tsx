import Image from 'next/image';
import React, { FC, useState } from 'react';
import { TImagePreview } from './types';
import { Modal } from '@kampus-gratis/components/molecules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

export const ImagePreview: FC<TImagePreview> = ({ imgSource, alt, type }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsOpen(true);
  };

  return (
    <div className="cursor-pointer">
      {type === 'comment' || type === 'reply' ? (
        <div className="relative w-1/3 h-40 overflow-hidden rounded-md shadow-md">
          <Image
            src={imgSource as string}
            alt={alt}
            fill={true}
            style={{ objectFit: 'cover' }}
            onClick={() => handleImageClick(imgSource as string)}
          />
        </div>
      ) : (
        Array.isArray(imgSource) && (
          <div className="flex flex-wrap my-3">
            {imgSource?.map((image: string, index: number) => (
              <div
                key={index}
                className="relative w-[45%] md:w-[30%] m-2 h-40 overflow-hidden rounded-md shadow-md"
                onClick={() => handleImageClick(image)}
              >
                <Image
                  src={image}
                  alt={alt}
                  fill={true}
                  style={{ objectFit: 'cover' }}
                />
              </div>
            ))}
          </div>
        )
      )}
      <Modal
        withClose={true}
        hasImage={false}
        lookup={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <div className="w-[100vw] md:w-[50vw] h-[75vh]"></div>
        <Swiper
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
          centeredSlides={true}
          slidesPerView={1}
          modules={[Navigation]}
          initialSlide={selectedImage ? imgSource.indexOf(selectedImage) : 0}
          style={{
            objectFit: 'contain',
            position: 'absolute',
          }}
          className="flex justify-center items-center w-[85vw] md:w-[50vw] h-[75vh]]"
        >
          {type === 'post' ? (
            imgSource.map((image: string, index: number) => (
              <SwiperSlide key={index} className="w-full">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={image}
                    alt={alt}
                    style={{
                      objectFit: 'contain',
                      width: '80vw',
                      height: 'auto',
                      maxHeight: '75vh',
                      content: 'center',
                    }}
                    width={0}
                    height={0}
                    sizes="100vh"
                  />
                </div>
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide key={1} className="w-full ">
              <div className="flex flex-col justify-center items-center">
                <Image
                  src={imgSource as string}
                  alt={alt}
                  style={{
                    objectFit: 'contain',
                    width: '80vw',
                    height: 'auto',
                    maxHeight: '75vh',
                  }}
                  width={0}
                  height={0}
                  sizes="100vh"
                />
              </div>
            </SwiperSlide>
          )}
        </Swiper>
        <div className="swiper-button-prev text-black"></div>
        <div className="swiper-button-next text-black"></div>
      </Modal>
    </div>
  );
};
