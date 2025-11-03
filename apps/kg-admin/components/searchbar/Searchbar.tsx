import { TSearchbar } from '../../types';
import Image from 'next/image';
import React from 'react';

const Searchbar = ({ placeholder, onChange, value }: TSearchbar) => {
  return (
    <>
      {/* <form> */}
        <label
          htmlFor="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only"
        >
          Search
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-7 pointer-events-none">
            <Image
              src={'/assets/ic-search-mhs.svg'}
              alt="search-icon"
              width={20}
              height={20}
            />
          </div>
          <input
            type="search"
            id="default-search"
            className="ml-4 w-[300px] h-[40px] p-4 pl-10 text-sm text-gray-900 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required
          />
        </div>
      {/* </form> */}
    </>
  );
};

export default Searchbar;