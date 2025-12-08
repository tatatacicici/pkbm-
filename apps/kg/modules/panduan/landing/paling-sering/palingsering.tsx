import { FC, ReactElement } from 'react';
import { Disclosure } from '@headlessui/react';
import { RiArrowUpSLine } from 'react-icons/ri';
import { useGetFaq } from '../../../../hooks/panduan/hooks';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

export const PalingSeringSection: FC = (): ReactElement => {
  const { data, isLoading } = useGetFaq();

  const faqData = data?.data;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <section className="flex flex-col items-center bg-white w-full pb-8">
      <div className=" py-8 flex flex-col items-center">
        <h1 className="text-[24px] text-slate-800 text-center dark:text-white font-bold">
          Paling Sering Ditanyakan
        </h1>
      </div>

      <div className="lg:px-16 px-4 md:px-8 w-full bg-white">
        {faqData && faqData?.length > 0 ? (
          faqData.map((item, index) => (
            <div key={index} className="my-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between bg-transparent p-4 text-left text-sm md:text-base font-medium text-black border-b-2">
                      <span>{item.title}</span>
                      <RiArrowUpSLine
                        className={`${
                          open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-sm md:text-base text-gray-500">
                      <p dangerouslySetInnerHTML={{ __html: item.content }}></p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          ))
        ) : (
          <p>Tidak Ada Data</p>
        )}
      </div>
    </section>
  );
};
