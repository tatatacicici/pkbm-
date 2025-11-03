import { FC, ReactElement } from 'react';
import { TDashedTextProps } from './types';

export const DashedText: FC<TDashedTextProps> = ({
  text = 'Atau',
}): ReactElement => {
  return (
    <div className="inline-flex items-center justify-center w-full">
      <hr className="w-full h-px my-6 bg-[#D9D9D9] border-0 dark:bg-gray-700" />
      <span className="px-8 font-medium text-neutral-500 text-sm">{text}</span>
      <hr className="w-full h-px my-6 bg-[#D9D9D9] border-0 dark:bg-gray-700" />
    </div>
  );
};
