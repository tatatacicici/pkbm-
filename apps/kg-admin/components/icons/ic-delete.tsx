import { FC, ReactElement } from 'react';

export const IconDelete: FC = (): ReactElement => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="shadow-xl rounded-full"
    >
      <rect width="44" height="44" rx="22" fill="#FAFAFA" />
      <path
        d="M16 29C16 30.1 16.9 31 18 31H26C27.1 31 28 30.1 28 29V17H16V29ZM29 14H25.5L24.5 13H19.5L18.5 14H15V16H29V14Z"
        fill="#CD261E"
      />
    </svg>
  );
};
