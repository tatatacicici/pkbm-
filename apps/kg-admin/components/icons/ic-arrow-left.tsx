import { FC, ReactElement } from 'react';

export const IconArrowLeft: FC = (): ReactElement => {
  return (
    <svg
      width="25"
      height="24"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.5 7.41L10.92 12L15.5 16.59L14.09 18L8.09 12L14.09 6L15.5 7.41Z"
        fill="currentColor"
        className="fill-current text-neutral-500 group-hover:text-white group-disabled:text-neutral-300"
      />
    </svg>
  );
};
