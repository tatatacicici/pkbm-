import { FC, ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import { StatusCardProps } from '../../types';

export const StatusDokumenCard: FC<StatusCardProps> = ({
  titleCard,
  status,
  date,
  description,
  bgLine,
  classNameStatus,
  imgCard,
}): ReactElement => {
  return (
    <div className="lg:px-12 md:px-10 px-8 pb-4">
      <div className="flex flex-col md:flex-row bg-[#ffffff] dark:bg-gray-600 rounded-lg drop-shadow-md relative p-0 justify-between">
        <div
          data-testid={bgLine}
          className={`flex absolute -left-0 rounded-tl-lg rounded-bl-lg h-full w-3 ${bgLine}`}
        />
        <div className="lg:basis-3/4 flex items-center">
          <div className="banner px-8 py-9 flex flex-col md:justify-center md:w-full h-full">
            <h1 className="text-[20px] font-[700] dark:text-gray-600 ">
              {titleCard}
            </h1>
            {description && (
              <p className="text-[#A3A3A3] font-[400] text-[16px] mt-3">
                {description}
              </p>
            )}
          </div>
        </div>
        <div className="basis-1/4">
          <div className="flex flex-col items-center justify-center py-8 mx-auto h-full">
            <Image
              alt="Image"
              width={21}
              height={21}
              priority
              src={imgCard as StaticImageData}
            />
            <p
              className={`mt-2 text-[16px] font-[600] uppercase ${classNameStatus} mt-3`}
            >
              {status}
            </p>
            <div className="flex flex-row dark:text-gray-600 text-[16px] font-[400]">
              <p>{date}</p>
            </div>
          </div>
        </div>j
      </div>
    </div>
  );
};
