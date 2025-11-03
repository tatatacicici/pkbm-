import { FC, ReactElement } from 'react';
import { CardJobListProps } from '../../../types/penyalurankerja';
import { DollarIcon } from '../../../modules/penyaluran-kerja/assets/icon/dollar';
import { LocationIcon } from '../../../modules/penyaluran-kerja/assets/icon/location';
import { BaggageIcon } from '../../../modules/penyaluran-kerja/assets/icon/baggage';
import { TimelockIcon } from '../../../modules/penyaluran-kerja/assets/icon/timelock';
import { CardMitra } from '.';

export const CardMitraList: FC<CardJobListProps> = ({
  title,
  desc,
  image,
  location,
  min_salary,
  max_salary,
  type,
  bottomIcon,
  bottomText,
  slug,
}): ReactElement => {
  return (
    <CardMitra
      className="w-full bg-white rounded-lg dark:bg-[#1b1e21] h-fit"
      title={title}
      titleStyle="text-[16px] font-bold text-blue-800"
      src={image as unknown as string}
      href={`/penyaluran-kerja/detail/${slug}`}
      hasImage={true}
      imgStyle={'flex justify-center w-full'}
      imgheight={200}
      imgwidth={200}
      bottomIcon={bottomIcon}
      bottomText={bottomText}
    >
      <>
        <div className="flex flex-row">
          <div className="space-y-2">
            <h1 className="font-semibold text-blue-600">{desc && desc}</h1>
            <div className="flex place-items-center">
              <LocationIcon />
              <p>{location && location}</p>
            </div>
            <div className="flex place-items-center">
              <DollarIcon />
              <p>
                {min_salary && min_salary} - {max_salary && max_salary}
              </p>
            </div>
            <div className="flex place-items-center">
              <BaggageIcon />
              <p> {type && type}</p>
            </div>
          </div>
        </div>
      </>
    </CardMitra>
  );
};
