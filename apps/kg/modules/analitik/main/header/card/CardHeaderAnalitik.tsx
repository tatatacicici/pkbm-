import type { FC, ReactElement } from 'react';
import { TCardProps } from './types';
import Link from 'next/link';
import Image from 'next/image';

export const Card: FC<TCardProps> = ({
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
  desc,
  moreDesc,
  onClick,
}): ReactElement => {
  return (
    <>
      {href ? (
        <Link href={`${href}`}>
          <div
            className={`${className} flex auto p-4 bg-white border flex-col gap-2`}
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
          className={`${className} flex items-center gap-x-2 bg-white shadow-md  p-6 cursor-pointer`}
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
          <div>
          <h1 className={`${titleStyle} text-[#737373]`}>{title}</h1>
          <p className='text-[#A3A3A3]'><span className='text-2xl font-bold text-black'>{desc}</span>{moreDesc}</p>
          </div>
        </div>
      )}
    </>
  );
};
