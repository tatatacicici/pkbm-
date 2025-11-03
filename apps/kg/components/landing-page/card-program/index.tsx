import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { TChoiceProgramCardProps } from './types';

export const ChoiceProgramCard: FC<TChoiceProgramCardProps> = (
  props
): ReactElement => {
  return (
    <div className="flex flex-col shadow-lg w-auto rounded-lg h-auto bg-white my-5 overflow-hidden border border-neutral-200 relative justify-between">
      {/* <p className="w-fit text-xs px-2 py-1 text-center rounded-md bg-orange-base text-white absolute top-2 right-2 font-semibold"> */}
      <p className="w-fit text-xs px-2 py-1 text-center rounded-md bg-sky-base text-white absolute bottom-40 left-2 font-semibold">
        {props.index + 1}
      </p>
      <p className="w-fit text-xs px-2 py-1 text-center rounded-md bg-sky-base text-white absolute top-2 right-2 font-semibold">
        {props.tag}
      </p>
      <div className="flex flex-col">
        <Image
          src={props.src}
          alt={'card-landing'}
          width={328}
          height={217}
          priority={false}
          className="w-full h-[300px] object-cover"
        />
        <div className="flex flex-1 justify-center items-center text-center min-h-[92px] px-4 py-3">
          <h1 className="text-black font-semibold text-[18px] md:text-[18px] leading-snug whitespace-pre-line">
            {props.title}
          </h1>
        </div>
      </div>
      {/* <Link
        href={props.link}
        className="bg-blue-base py-4 px-4 text-white text-base font-semibold flex justify-between items-center hover:bg-blue-base/90 text-[12px]"
      > */}
      <Link
        href={props.link}
        className="bg-sky-base py-4 px-4 text-white text-base font-semibold flex justify-between items-center hover:bg-sky-base/90 text-[12px]"
      >
        <div className="text-[15px] md:text-[18px]">
          <p>Pelajari Program</p>
        </div>
        <FaArrowRight className="text-white ml-2 text-[12px] md:text-[20px]" />
      </Link>
    </div>
  );
};
