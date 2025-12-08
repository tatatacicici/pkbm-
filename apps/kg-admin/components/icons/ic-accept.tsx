import { FC, ReactElement } from 'react';

export const IconAccept: FC = (): ReactElement => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className='w-100 h-100'
    >
      <rect width="44" height="44" rx="22" fill="#FAFAFA" />
      <path
        d="M22 12C16.48 12 12 16.48 12 22C12 27.52 16.48 32 22 32C27.52 32 32 27.52 32 22C32 16.48 27.52 12 22 12ZM20 27L15 22L16.41 20.59L20 24.17L27.59 16.58L29 18L20 27Z"
        fill="#3EB449"
      />
    </svg>
  );
};
