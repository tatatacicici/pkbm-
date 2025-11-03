import { FC, ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import { AssigmentProps } from '../../types/assigment';
import Link from 'next/link';

export const Assigment: FC<AssigmentProps> = ({
  titleAssigment,
  category,
  date,
  time,
  titleCourse,
  courseId,
  assignmentId,
  bgLine,
  classNameCategory,
  imgAssigment,
  assignmentSessionId,
}): ReactElement => {
  return (
    <div className="lg:px-12 md:px-10 px-8 pb-4">
      <div className="flex flex-col md:flex-row bg-[#ffffff] dark:bg-gray-600 rounded-lg drop-shadow-md relative p-0 justify-between">
        <div
          data-testid={bgLine}
          className={`flex absolute -left-0 rounded-tl-lg rounded-bl-lg h-full w-3 ${bgLine}`}
        />
        <div className="basis-3/4">
          <div className="banner px-8 py-9">
            {/* belom fix */}
            <Link
              href={`/studi-ku/${courseId}/session/${assignmentSessionId}/tugas/${assignmentId}`}
              className="text-[20px] font-[700] dark:text-gray-600 cursor-pointer"
            >
              {titleAssigment}
            </Link>
            <p className="text-[#A3A3A3] font-[400] text-[16px] mt-3">
              {titleCourse}
            </p>
          </div>
        </div>
        <div className=" basis-1/4">
          <div className="flex flex-col md:items-center md:mr-0 mb-7 md:py-7 ms-8">
            <Image
              alt="Image"
              width={21}
              height={21}
              priority
              src={imgAssigment as StaticImageData}
            />
            <p
              className={`mt-2 text-[16px] font-[600] uppercase ${classNameCategory}`}
            >
              {category}
            </p>
            <div className="flex flex-row dark:text-gray-600 text-[16px] font-[400]">
              <p>{`${date?.slice(0, 10)}`}</p>
              <p className="px-1">|</p>
              <p>{`${time?.slice(11, 16)}`}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
