import React from 'react';
import { CardMentoring } from './components/cardMentoring/index';
import { TLiveMentoringData } from '../../../types/livementoring';
import { usePathname } from 'next/navigation';

interface DataList {
  data: TLiveMentoringData[] | undefined;
  className?: string;
}
export const ListMentoring: React.FC<DataList> = ({ data, className }) => {
  const pathname = usePathname();
  return (
    <div className={className}>
      {data &&
        data.map((item, index) => {
          return (
            <CardMentoring
              key={index}
              title={item.title}
              content={item.content}
              session={item.session}
              link={`${pathname}/${item.id}`}
              teacher={item.teacher}
            />
          );
        })}
    </div>
  );
};
