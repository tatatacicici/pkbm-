import { useRouter, useSearchParams } from 'next/navigation';
import { CardJobList } from '../../../components/penyalurankerja/cardlist';
import { useGetJob, useJob } from '../../../hooks/penyalurankerja/hook';
import { FC, Fragment, ReactElement, useEffect } from 'react';
import Pagination from '../../../components/general/pagination';
import { StaticImageData } from 'next/image';
import GojekIcon from '../assets/gojek.jpg';
import { CardMitra } from '../../../components/penyalurankerja/fixcardmitra';
import { CardMitraList } from '../../../components/penyalurankerja/fixcardmitra/final';
import { TimelockIcon } from '../assets/icon/timelock';
// import { CardJob } from '../../../components/penyalurankerja/cardlist';
export const MitraPenyaluranKerja: FC = (): ReactElement => {
  const { setPenyaluranKerja } = useJob();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const { data } = useGetJob(page);
  const jobListData = data?.data;

  const router = useRouter();
  useEffect(() => {
    setPenyaluranKerja(data);
  }, [data, setPenyaluranKerja]);

  const handlePageChange = async (page: number) => {
    if (typeof window !== 'undefined') {
      window.scrollTo(0, 0);
    }

    router.push(`/penyaluran-kerja?page=${page}`);
  };
  return (
    <Fragment>
      <div className="flex flex-col gap-4 px-6 md:flex-row md:gap-0 lg:flex-row max-w-[1440px]">
        <div className="w-full pt-6 gap-4 ">
          <div className="grid w-full grid-flow-row gap-4 lg:gap-16">
            <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-5 lg:gap-5 justify-evenly place-items-center">
              {jobListData &&
                jobListData?.map((item: any, index: number) => (
                  <CardMitraList
                    key={index}
                    title={item.position}
                    desc={item.company}
                    image={item.company_logo as StaticImageData}
                    location={item.location}
                    min_salary={item.min_salary}
                    max_salary={item.max_salary}
                    type={item.type}
                    time={item.time}
                    slug={item.id}
                    bottomIcon={<TimelockIcon />}
                    bottomText={`Terbuka Hingga ${item.closing_date.slice(
                      0,
                      10
                    )}`}
                  />
                ))}
            </div>
            <Pagination
              currentPage={Number(page)}
              totalPages={Number(data?.meta?.page_size)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
