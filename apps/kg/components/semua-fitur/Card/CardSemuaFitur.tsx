'use client';

import type { FC, ReactElement } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { TCardPropsSemuaFitur } from '../../../types/semuafitur';

const CardSemuaFitur: FC<TCardPropsSemuaFitur> = ({
  className,
  children,
  title,
  icon,
  src,
  href,
  imgwidth,
  imgheight,
  titleStyle,
  hasImage,
  imgStyle,
  onClick,
}): ReactElement => {
  return (
    <>
      {href ? (
        <Link href={`${href}`}>
          <div className=" lg:py-[8px] md:py-[25px] py-[15px] ">
            <div
              className={`${className} flex auto p-2 flex-col`}
              onClick={onClick}
            >
              {hasImage && (
                <Image
                  className={`object-cover ${imgStyle}`}
                  src={src}
                  alt="Picture of the author"
                  width={60}
                  height={60}
                  style={{
                    width: '60px',
                    height: '60px',
                  }}
                />
              )}
              {icon}
              <h1 className={titleStyle}>{title}</h1>
              <section className="flex">{children}</section>
            </div>
          </div>
        </Link>
      ) : (
        <div
          className={`${className} flex auto p-4 flex-col`}
          onClick={onClick}
        >
          {hasImage && (
            <Image
              className={`object-cover ${imgStyle}`}
              src={src}
              alt={title as string}
              width={60}
              height={60}
            />
          )}
          {icon}
          <h1 className={titleStyle}>{title}</h1>
          {children}
          {/* Additional element for "Under Development" text */}
          <div className="rounded-lg absolute w-full h-full top-0 left-0 flex items-center justify-center bg-black bg-opacity-60 text-white text-sm opacity-0 hover:opacity-100 transition-opacity duration-300 font-semibold">
            Dalam Pengembangan
          </div>
        </div>
      )}
    </>
  );
};

export default CardSemuaFitur;
