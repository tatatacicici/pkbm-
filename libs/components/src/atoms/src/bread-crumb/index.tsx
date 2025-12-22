import { FC, ReactElement, Fragment } from 'react';
import Link from 'next/link';
import { TBreadCrumbProps } from './types';
import { MdChevronRight } from 'react-icons/md';

export const BreadCrumb: FC<TBreadCrumbProps> = ({
  items,
  // textColor = 'text-[#106FA4]',
  textColor = 'text-sky-base',
  bgColor = 'bg-light',
  style,
  className = 'px-8 md:px-14 lg:px-16 ',
}): ReactElement => {
  return (
    <div
      className={` ${className} place-content-start w-full text-xs md:text-sm py-4 !font-extrabold  ${bgColor}`}
      aria-label="Breadcrumb"
      style={style}
    >
      <div className="max-w-[1440px] mx-auto grid">
        <ol className="flex w-full items-center gap-x-2 flex-wrap">
          {items &&
            items.map((crumb, index) => {
              const isLastItem = index === items.length - 1;
              if (!isLastItem) {
                return (
                  <Fragment key={index}>
                    <Link
                      href={crumb.link}
                      key={index}
                      className={`inline-flex  font-[600] items-center ${textColor}`}
                      scroll={true}
                    >
                      {crumb.name}
                    </Link>
                    <MdChevronRight className={`text-xl ${textColor}`} />
                  </Fragment>
                );
              } else {
                return (
                  <Link key={index} href={crumb.link}>
                    <span className="text-neutral-500 font-[600] cursor-pointer">
                      {crumb.name}
                    </span>
                  </Link>
                );
              }
            })}
        </ol>
      </div>
    </div>
  );
};
