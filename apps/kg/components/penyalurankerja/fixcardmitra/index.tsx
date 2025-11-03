import type { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';

import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';
import { TimelockIcon } from '../../../modules/penyaluran-kerja/assets/icon/timelock';

type TCardProps = {
  className?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  imgwidth?: number;
  imgheight?: number;
  src?: any;
  topText?: string;
  hasImage: boolean;
  href?: string;
  imgStyle?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  bottomIcon?: ReactNode;
  bottomText?: string;
};

export const CardMitra: FC<TCardProps> = ({
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
  bottomIcon,
  bottomText,
}): ReactElement => {
  return (
    <>
      {href ? (
        <Link href={`${href}`}>
          <div
            className={`${className} min-w-[100px] max-w-[500px]  flex auto p-4 bg-white border flex-col gap-2 rounded-t-lg rounded-none`}
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
          <div
            className={`${className} px-4 flex justify-center gap-2 text-white place-items-center bg-blue-400 rounded-b rounded-none py-2`}
          >
            {bottomIcon}
            <p>{bottomText}</p>
          </div>
        </Link>
      ) : (
        <div
          className={`${className} flex auto p-4 bg-white border flex-col gap-2 rounded-t-lg rounded-none`}
          onClick={onClick}
        >
          {hasImage && (
            <Image
              className={`w-full object-cover ${imgStyle}`}
              src={src}
              alt={title as string}
              width={imgwidth}
              height={imgheight}
            />
          )}
          {icon}
          <h1 className={titleStyle}>{title}</h1>
          {children}
        </div>
      )}
    </>
  );
};
