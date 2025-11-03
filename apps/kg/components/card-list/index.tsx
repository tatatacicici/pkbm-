import { FC, ReactElement } from 'react';
import { Card } from '@kampus-gratis/components/molecules';
import { CardListProps } from '../../types/acarakampus';

export const CardList: FC<CardListProps> = ({
  title,
  slug,
  image,
  price,
  status,
  day,
  date,
}): ReactElement => {
  return (
    <Card
      className="w-full bg-white rounded-lg dark:bg-[#1b1e21] h-fit"
      title={title}
      titleStyle="text-[16px]"
      src={image as unknown as string}
      href={'/acara-kampus/detail/' + slug}
      hasImage={true}
      imgStyle={'w-full h-[200px] rounded'}
      imgheight={100}
      imgwidth={100}
    >
      <div className="flex flex-col ">
        {price && (
          <h1 className="text-[18px] text-[#ED3768]">
            {price && price} {status && status}
          </h1>
        )}
        {status && (
          <h1 className="text-[18px] text-[#3EB449]">{status && status}</h1>
        )}

        <p className="text-[14px] text-[#A3A3A3]">
          <>
            {day}, {date}
          </>
        </p>
      </div>
    </Card>
  );
};
