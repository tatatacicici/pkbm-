import { Check } from 'lucide-react';
import { Inter } from 'next/font/google';
import { FC, ReactElement } from 'react';
import {
  useFacultyInformationStatus,
  useFileInformationStatus,
  useJobInformationStatus,
  usePrivateInformationStatus,
  useSocialMediaInformationStatus,
} from '../../../hooks/administration/hook';

const inter = Inter({
  subsets: ['latin', 'cyrillic-ext', 'greek'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const Stepper: FC = (): ReactElement => {
  const { getFacultyStatus } = useFacultyInformationStatus();
  const { getPrivateStatus } = usePrivateInformationStatus();
  const { getJobStatus } = useJobInformationStatus();
  const { getFileStatus } = useFileInformationStatus();
  const { getSocialMediaStatus } = useSocialMediaInformationStatus();

  const renderStep = (
    step: number,
    title: string,
    isComplete: boolean,
    isPrevComplete: boolean,
    percentage: number,
    isLast?: boolean
  ): ReactElement => (
    <div className="relative ">
      <section
        key={step}
        className="flex flex-col justify-center items-center gap-y-2 relative sm:mr-2 md:mr-7 lg:mr-14"
      >
        <span
          className={`
          ${isPrevComplete ? 'border-green-500' : 'border-gray-400'}
          ${isComplete ? 'bg-green-500' : 'bg-white'}
          h-7 w-7 flex justify-center border-2 items-center rounded-full relative
        `}
        >
          {isComplete ? (
            <Check className="w-4 h-4 text-white" />
          ) : (
            <span
              className={`
              ${isPrevComplete ? 'bg-green-500' : 'bg-gray-400'}
              h-2 w-2 block rounded-full
            `}
            />
          )}
          {!isLast && (
            <section
              className={`
              ${isComplete ? 'bg-green-500' : 'bg-gray-400/50'}
              h-[2px] w-20 sm:w-24 md:w-24 lg:w-36 absolute left-[25px]
            `}
            >
              {isComplete && (
                <span
                  className={`text-xs sm:text-sm font-semibold text-green-500 absolute left-4 lg:left-14 bottom-2 ${inter.className}`}
                >
                  {percentage}%
                </span>
              )}
            </section>
          )}
        </span>
        <h1 className="lg:text-sm md:px-0 px-4 text-xs text-center font-medium">
          {title}
        </h1>
      </section>
      {isLast && isComplete && (
        <section className="absolute h-[2px] w-36 top-1/2  left-2">
          <span
            className={`text-sm text-green-500 absolute font-semibold left-14 bottom-2 ${inter.className}`}
          >
            100%
          </span>
        </section>
      )}
    </div>
  );

  return (
    <div className="my-4">
      <div className="flex justify-center overflow-x-auto py-4">
        {/* {renderStep(1, 'Fakultas', getFacultyStatus, true, 20)} */}
        {renderStep(1, 'Program', getFacultyStatus, true, 20)}
        {renderStep(
          2,
          'Informasi Pribadi',
          getPrivateStatus,
          getFacultyStatus,
          40
        )}
        {renderStep(
          3,
          'Informasi Pekerjaan',
          getJobStatus,
          getPrivateStatus,
          60
        )}
        {renderStep(4, 'Informasi Berkas', getFileStatus, getJobStatus, 80)}
        {renderStep(
          5,
          'Media Sosial',
          getSocialMediaStatus,
          getFileStatus,
          100,
          true
        )}
      </div>
    </div>
  );
};

export default Stepper;
