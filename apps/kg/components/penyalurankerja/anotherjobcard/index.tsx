import { TimelockIcon } from '../../../modules/penyaluran-kerja/assets/icon/timelock';
import { BaggageIcon } from '../../../modules/penyaluran-kerja/assets/icon/baggage';
import { DollarIcon } from '../../../modules/penyaluran-kerja/assets/icon/dollar';
import { LocationIcon } from '../../../modules/penyaluran-kerja/assets/icon/location';
import Image, { StaticImageData } from 'next/image';
import { FC, ReactElement } from 'react';

type TAnotherJobItems = {
  position: string;
  company: string;
  company_logo: StaticImageData;
  location: string;
  min_salary: number;
  max_salary: number;
  className: string;
  imgStyle: string;
  imgwidth: number;
  imgheight: number;
  jobtype: string;
  openUntil: string;
};

export const AnotherJobCard: FC<TAnotherJobItems> = ({
  position,
  company,
  company_logo,
  location,
  min_salary,
  max_salary,
  className,
  imgStyle,
  imgwidth,
  imgheight,
  jobtype,
  openUntil,
}): ReactElement => {
  return (
    <>
      <div
        className={`${className} flex bg-white shadow-md  auto p-4 flex-row justify-end`}
      >
        <Image
          className={`object-cover ${imgStyle}`}
          src={company_logo}
          alt={company as string}
          width={imgwidth}
          height={imgheight}
        />

        <div className="flex flex-col">
          <h1 className="text-blue-900 font-bold">{position}</h1>
          <h1 className="text-blue-500 font-semibold">{company}</h1>
          <div className="flex">
            <LocationIcon />
            <h1>{location}</h1>
          </div>
          <div className="flex">
            <DollarIcon />
            <h1>
              Rp {min_salary}-{max_salary}
            </h1>
          </div>
          <div className="flex">
            <BaggageIcon />
            <h1>{jobtype}</h1>
          </div>
        </div>
      </div>
      <div className="w-[444px] gap-3 font-semibold rounded-b-md text-blue-600  bg-blue-200 px-5 py-2 flex place-items-center">
        <TimelockIcon />
        <h1>Terbuka Hingga {openUntil}</h1>
      </div>
    </>
  );
};
