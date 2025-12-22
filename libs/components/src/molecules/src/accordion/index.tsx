'use client';
import Image from 'next/image';
import { FC, ReactElement, useEffect, useState } from 'react';
import { FaChevronDown } from 'react-icons/fa6';
import { TAccordionProps } from './types';

export const Accordion: FC<TAccordionProps> = ({
  title,
  idAccordion,
  children,
  disabled,
  className,
  classNameChildren,
  hasImage,
  src,
  imgheight,
  imgwidth,
  styleImg,
  defaultOpen = false,
}): ReactElement => {
  const [isOpen, setIsOpen] = useState('');

  useEffect(() => {
    defaultOpen && setIsOpen(`${idAccordion}`);
  }, [defaultOpen]);

  return (
    <div data-accordion="collapse" data-testid="accordion" className="mb-8">
      <h2>
        <button
          onClick={() =>
            isOpen === '' ? setIsOpen(`${idAccordion}`) : setIsOpen('')
          }
          type="button"
          // className={`flex items-center justify-between w-full p-4 font-semibold text-left rounded-xl text-white bg-blue-base disabled:bg-neutral-400 ${className} `}
          className={`flex items-center justify-between w-full p-4 font-semibold text-left rounded-xl text-white bg-sky-base disabled:bg-neutral-400 ${className} `}
          disabled={disabled}
        >
          {hasImage && (
            <Image
              alt="Picture of the author"
              src={src}
              className={styleImg}
              width={imgwidth}
              height={imgheight}
            />
          )}
          <div className="text-[16px] font-[500]">{title}</div>
          <FaChevronDown
            className={`
              ${isOpen === `${idAccordion}` ? 'transform rotate-180' : ''}
            `}
            size={18}
          />
        </button>
      </h2>
      {isOpen === `${idAccordion}` ? (
        <div>
          <div
            className={`p-6 pb-0 text-[14px] font-[400] text-[#262626] dark:text-[#fff] ${classNameChildren}`}
          >
            {children}
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};
