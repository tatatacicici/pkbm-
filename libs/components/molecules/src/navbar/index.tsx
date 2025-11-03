'use client';

import { useSession } from 'next-auth/react';
import { usePathname } from 'next/navigation';
import { FC, Fragment, ReactElement } from 'react';
import { lazily } from 'react-lazily';
import { TNavbarProps } from './types';

const { BottomNav, TopNav } = lazily(() => import('./section'));

export const Navbar: FC<TNavbarProps> = (props): ReactElement => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const includesPath = props?.bottomNavRules?.some((path) =>
    pathname.includes(path)
  );

  return (
    <Fragment>
      {/* <header className="bg-white sticky w-full top-0 z-50 py-[14px] md:py-[16px] lg:py-[18px] px-6 md:px-14 lg:px-16"> */}
      <header className="bg-sky-base sticky w-full top-0 z-50 py-[14px] md:py-[16px] lg:py-[18px] px-6 md:px-14 lg:px-16">
        <div className="max-w-[1440px] mx-auto flex justify-between  transition-all ease-in-out duration-300 flex-col">
          <TopNav {...props} />
        </div>
      </header>
      {session && includesPath && <BottomNav {...props} />}
    </Fragment>
  );
};
