import ImageEventList from '../../../assets/icons/ic-img-eventlist.svg';
import { Card } from '@kampus-gratis/components/molecules';
import { FC, ReactElement } from 'react';

const RelatedEvent: FC = (): ReactElement => {
  return (
    <section className=" w-full col-span-3 xl:col-span-1">
      <div className="flex justify-between mb-4 w-full">
        <h1 className="text-lg">Acara Serupa</h1>
        <p className="text-sm font-bold text-primary-500">Lihat Semua</p>
      </div>
      <Card
        className="bg-white  rounded-lg w-full mb-7"
        titleStyle="text-[16px]"
        src={ImageEventList}
        hasImage={true}
        imgwidth={10}
        imgheight={10}
      >
        <div className="flex flex-col pt-4 text-neutral-800 ">
          <p className="mb-2 text-lg">Webinar Cyber Security</p>
          <h1 className="text-[18px] text-red-500 mb-2 font-bold">GRATIS</h1>
          <p className="text-[14px] text-neutral-500">
            Tuesday, 28 February 2023 19:00 WIB
          </p>
        </div>
      </Card>
    </section>
  );
};

export default RelatedEvent;
