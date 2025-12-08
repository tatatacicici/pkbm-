import type { FC, ReactElement } from 'react';

import Link from 'next/link';
import Image from 'next/image';
import { TCardHistory } from '../../../../types/acarakampus';

export const CardHistory: FC<TCardHistory> = ({
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
  status,
}): ReactElement => {
  return (
    <>
      {href ? (
        <Link target="_blank" href={`${href}`}>
          <div
            className={`${className} flex auto p-4 bg-white shadow-md flex-col gap-2`}
            onClick={onClick}
          >
            {hasImage && (
              <Image
                className={`object-cover ${imgStyle}`}
                src={src}
                alt="Picture of the author"
                width={imgwidth}
                height={imgheight}
              />
            )}
            {icon}
            <h1 className={titleStyle}>{title}</h1>
            <section className="flex">{children}</section>
          </div>
        </Link>
      ) : (
        <div
          className={`${className} flex bg-white shadow-md space-x-2  auto p-4  cursor-pointer`}
          onClick={onClick}
        >
          {hasImage && (
            <Image
              className={`object-cover ${imgStyle}`}
              src={src}
              alt={title as string}
              width={imgwidth}
              height={imgheight}
            />
          )}
          {icon}
          <div className="grid grid-cols-2 w-full sm:grid-cols-2 ">
            <div className="flex flex-col pl-[50px] justify-center">
              <h1 className={titleStyle}>{title}</h1>
              {status && (
                <h1 className="text-[18px] text-[#3EB449]">
                  {status && status}
                </h1>
              )}
            </div>
            <button className="flex justify-center place-items-center">
              {/* <DownloadIcon /> */}
              <Image
                src="/icons/acara-kampus/ic-download.svg"
                width={24}
                height={16}
                alt="acara kampus"
              />
            </button>
          </div>
          {children}
        </div>
      )}
    </>
  );
};
