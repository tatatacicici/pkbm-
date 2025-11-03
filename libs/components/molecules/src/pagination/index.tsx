import Link from 'next/link';
import { FC, ReactElement } from 'react';

export const Pagination: FC = (): ReactElement => {
  return (
    <div className="flex justify-center p-4 lg:justify-end">
      <ul className="flex ">
        <li>
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent text-[#737373] dark:text-white"
            href={''}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center relative rounded-lg w-[36px] h-[36px] bg-[#106FA4] py-1.5 px-3 text-sm font-medium text-white dark:text-white"
            href={''}
          >
            1
            <span className="absolute -m-px h-px w-px overflow-hidden whitespace-nowrap border-0 p-0 [clip:rect(0,0,0,0)]">
              (current)
            </span>
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] dark:text-white"
            href={''}
          >
            2
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] dark:text-white"
            href={''}
          >
            3
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] dark:text-white"
            href={''}
          >
            4
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] dark:text-white"
            href={''}
          >
            5
          </Link>
        </li>
        <li aria-current="page">
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent py-1.5 px-3 text-sm text-[#737373] dark:text-white"
            href={''}
          >
            6
          </Link>
        </li>
        <li>
          <Link
            className="flex justify-center items-center rounded-lg w-[36px] h-[36px] bg-transparent text-[#737373] dark:text-white"
            href={''}
          >
            <svg
              aria-hidden="true"
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </Link>
        </li>
      </ul>
    </div>
  );
};
