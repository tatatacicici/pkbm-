import { TPopover } from '../../types';
import Link from 'next/link';
import React from 'react';

const Popover = ({ title, menus }: TPopover) => {
  return (
    <div className="w-max flex flex-col absolute bg-white left-64 shadow-[0_8px_30px_rgb(0,0,0,0.12)] p-3 rounded-md z-50">
      <svg
        className="absolute left-0 -ml-3 top-3"
        width="15px"
        height="16px"
        viewBox="0 0 9 16"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            id="Tooltips-"
            transform="translate(-874.000000, -1029.000000)"
            fill="#FFFFFF"
          >
            <g
              id="Group-3-Copy-16"
              transform="translate(850.000000, 975.000000)"
            >
              <g id="Group-2" transform="translate(24.000000, 0.000000)">
                <polygon
                  id="Triangle"
                  transform="translate(4.500000, 62.000000) rotate(-90.000000) translate(-4.500000, -62.000000) "
                  points="4.5 57.5 12.5 66.5 -3.5 66.5"
                ></polygon>
              </g>
            </g>
          </g>
        </g>
      </svg>
      <h1 className="text-md font-bold">{title}</h1>
      <div className="border border-neutral-300 w-full mt-2 mb-3"></div>
      <div className="flex flex-col gap-1">
        {menus?.map((menu, i) => (
          <Link
            href={`/${title
              .toLowerCase()
              .replace('&', '')
              .replace(/\s+/g, '-')}/${menu
              .toLowerCase()
              .replace(/\s+/g, '-')}`}
            key={i}
          >
            <p className="text-sm text-neutral-600 hover:text-primary-base">
              {menu}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Popover;
