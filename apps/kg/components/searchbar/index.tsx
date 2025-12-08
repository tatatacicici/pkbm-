import { ChangeEvent, FC, ReactElement } from 'react';

export type SearchType = {
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
};

export const SearchBar: FC = ({
  onChange,
  value,
}: SearchType): ReactElement => {
  return (
    <>
      <div className=" flex justify-center w-full rounded-[8px] mb-4 text-[#A3A3A3] bg-neutral-200 ">
        <button
          className="flex items-center rounded-l px-6 py-2.5 leading-tight"
          type="button"
          id="button-addon1"
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fill-rule="evenodd"
              d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <input
          type="search"
          className="flex-auto rounded-r px-3 py-1.5 bg-transparent text-[16px] font-[500] outline-none"
          placeholder="Cari mata pelajaran"
          aria-label="Cari mata pelajaran"
          onChange={onChange}
          value={value}
        />
      </div>
    </>
  );
};
