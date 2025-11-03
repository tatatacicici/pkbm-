import { FC, ReactElement } from 'react';
import { AiFillInfoCircle } from 'react-icons/ai';
import { BsCheckCircleFill } from 'react-icons/bs';
import { FaTimesCircle } from 'react-icons/fa';
import { MdAccessTimeFilled } from 'react-icons/md';
import { DetailCardProps } from '../../../../types/quiz';

export const DetailCard: FC<DetailCardProps> = ({
  type,
  value,
  link = '',
}): ReactElement => {
  return (
    <div
      className={`${
        type === 'trueAnswer'
          ? 'bg-success-100 hover:bg-success-200'
          : type === 'falseAnswer'
          ? 'bg-[#FEDBD7] hover:bg-warning-100/80'
          : type === 'timeFinished'
          ? 'bg-[#FEF6D0] hover:bg-yellow-200'
          : type === 'totalQuestions' && 'bg-neutral-200 hover:bg-neutral-300'
      } grid grid-cols-3 md:flex gap-5 lg:gap-4 min-h-[80px] md:min-h-[100px] lg:min-h-[80px] items-center w-62 lg:w-62 xl:w-full px-4 rounded-md shadow-sm transition-colors ease-in duration-300`}
    >
      {type === 'trueAnswer' && (
        <BsCheckCircleFill className="text-[#3EB449] mt-1 text-4xl" />
      )}
      {type === 'falseAnswer' && (
        <FaTimesCircle className="text-[#ED3768] mt-1 text-4xl" />
      )}
      {type === 'timeFinished' && (
        <MdAccessTimeFilled className="text-yellow-500 mt-1 text-4xl" />
      )}
      {type === 'totalQuestions' && (
        <AiFillInfoCircle className="text-neutral-500 mt-1 text-4xl" />
      )}
      <div className="text-neutral-900 text-center md:text-left">
        <h1 className="font-bold text-sm lg:text-base">{value ? value : 0}</h1>
        <h1 className="text-sm">
          {type === 'trueAnswer' && 'Jawaban Benar'}
          {type === 'falseAnswer' && 'Jawaban Salah'}
          {type === 'timeFinished' && 'Waktu selesai'}
          {type === 'totalQuestions' && 'Total Soal'}
        </h1>
      </div>
    </div>
  );
};
