import { FC, MouseEventHandler, ReactElement } from 'react';
import { StaticImageData } from 'next/image';
import { CardHistoryChild } from './cardchild-history';

export interface CardHistory {
  title?: string;
  key?: number;
  onClick?: MouseEventHandler<HTMLDivElement>;
  image?: StaticImageData;
  status?: string;
  // slug?: string;
  // onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  // price?: Gratis | number;
}

export const CardHistory: FC<CardHistory> = ({
  // slug,
  onClick,
  title,
  image,
  status,
}): ReactElement => {
  return (
    <CardHistoryChild
      className="grid grid-cols-2 w-full space-x-5 bg-white rounded-lg dark:bg-[#1b1e21]"
      title={title}
      src={image as unknown as string}
      hasImage={true}
      imgStyle={'w-full h-full bg-cover rounded'}
      imgheight={100}
      imgwidth={100}
      status={status}
      titleStyle="flex place-items-end text-[16px]"
      statusstyle="text-[18px] text-[#3EB449]"
      descstyle=" flex justify-around"
      onClick={onClick}
    ></CardHistoryChild>
  );
};
