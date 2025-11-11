import { AnotherJobCard } from '../../../../components/penyalurankerja/anotherjobcard';
import { FC, ReactElement } from 'react';
import Gojek from '../../assets/gojek.jpg';
export const AnotherJob: FC = (): ReactElement => {
  return (
    <>
      <div className="flex flex-col place-items-start w-full">
        <h1 className="text-lg font-bold pb-4">Lowongan Lain Untukmu</h1>
        <AnotherJobCard
          openUntil="24 Maret"
          className="shadow-sm rounded-t-md"
          company="M-Knows Consulting"
          company_logo={Gojek}
          imgStyle=""
          imgheight={200}
          imgwidth={200}
          jobtype="Intern"
          location="Jakarta Selatan, Indonesia"
          max_salary={120000}
          min_salary={300000}
          position="UI/UX Designer"
          key={1}
        />
      </div>
    </>
  );
};
