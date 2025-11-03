import type { FC, MouseEventHandler, ReactElement, ReactNode } from 'react';
import Image from 'next/image';

export interface CardHistoryChildProps {
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
  imgStyle?: string;
  status?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  statusstyle?: string;
  descstyle?: string;
}

export const CardHistoryChild: FC<CardHistoryChildProps> = ({
  className,
  children,
  title,
  icon,
  src,
  imgwidth,
  imgheight,
  titleStyle,
  hasImage,
  imgStyle,
  onClick,
  status,
  statusstyle,
  descstyle,
}): ReactElement => {
  return (
    <>
      {
        <div
          className={`${className} flex bg-white shadow-md  auto p-4 flex-col`}
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
          <div className={`${descstyle}`}>
            <span className="grid">
              <h1 className={titleStyle}>{title}</h1>
              <h1 className={statusstyle}>{status}</h1>
            </span>
            <button type={'submit'}>
              <Image
                src={'/icons/ic-download.svg'}
                alt="Download"
                width={24}
                height={24}
              />
            </button>
            {icon}
          </div>
          {children}
        </div>
      }
    </>
  );
};
