import { Fragment } from 'react';
import Link from 'next/link';
import { MdChevronRight } from 'react-icons/md';
import { TBreadCrumbProps } from '../../types';

const Breadcrumb = ({
  items,
  textColor = 'text-[#106FA4]',
  bgColor = 'bg-neutral-100',
}: TBreadCrumbProps) => {
  return (
    <div
      className={`flex justify-start items-center w-full !font-extrabold text-xs md:text-sm ${bgColor}`}
      aria-label="Breadcrumb"
    >
      <ol className="flex w-full items-center gap-x-2">
        {items.map((crumb, index) => {
          const isLastItem = index === items.length - 1;
          if (!isLastItem) {
            return (
              <Fragment key={index}>
                {crumb.link === 'not-routing' ? (
                  <span className="text-neutral-500 font-[600]">
                    {crumb.name}
                  </span>
                ) : (
                  <Link
                    href={crumb.link}
                    key={index}
                    className={`inline-flex  font-[600] items-center ${textColor}`}
                  >
                    {crumb.name}
                  </Link>
                )}
                <MdChevronRight className={`text-xl ${textColor}`} />
              </Fragment>
            );
          } else {
            return (
              <Fragment key={index}>
                <span className="text-neutral-500 font-[600]">
                  {crumb.name}
                </span>
              </Fragment>
            );
          }
        })}
      </ol>
    </div>
  );
};

export default Breadcrumb;
