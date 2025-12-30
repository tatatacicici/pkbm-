'use client';

import { useSession } from 'next-auth/react';
import NextImage from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';
import { useRecoilState } from 'recoil';
import { TNavbarProps } from '../../types';
import {
  HamburgerIcon,
  NavbarFeatureMenu,
  NavbarMobileMenu,
  NavbarNotification,
  NavbarUserMenu,
} from './dropdown-menu';
import { NavbarMegaMenu } from './dropdown-menu/megamenu';
import { navSearchKeyword } from './store';

export const TopNav: FC<TNavbarProps> = ({
  logo,
  logoStyle,
  button,
  userData,
  withSearch,
  topNavLinks,
  mobileMenuItems,
  ...props
}): ReactElement => {
  const pathname = usePathname();
  const { data: session } = useSession();

  const [getSearchingKeyword, setSearchingKeyword] =
    useRecoilState(navSearchKeyword);

  return (
    // <header className="flex w-full justify-between bg-white">
    <header className="flex w-full justify-between bg-sky-base">
      <div className="flex gap-2 md:gap-4 items-center">
        <div className="relative">
          <Link href={'/'} className="flex items-center">
            <NextImage
              src={logo}
              alt="platform-logo"
              loading="eager"
              width={95}
              height={100}
              // className={`${logoStyle} w-auto h-2 md:h-8 lg:h-10`}
              quality={100}
              priority
            />
          </Link>
          <div className="absolute top-0 right-0 font-bold text-[7px] text-white px-2 pt-[1px] rounded-full bg-warning-base -translate-y-2 translate-x-0.5 select-none">
            <span>BETA</span>
          </div>
        </div>
        {/* {session && props?.bottomNavRules?.includes(pathname) && (
          <NavMenuDropDown
            bottomNavItems={props.bottomNavItems}
            bottomNavItemStyle={props.bottomNavItemStyle}
          />
        )} */}
      </div>
      <NavbarMegaMenu megaMenuItems={props.megaMenuItems} />
      <div className="flex gap-2 md:gap-3 lg:gap-4 items-center ">
        {topNavLinks?.length !== 0 ? (
          <div className="gap-4 hidden lg:flex mr-2  w-full">
            {topNavLinks?.map((item) => {
              return (
                <Link href={item.href} key={item.href}>
                  <p className="text-sm text-neutral-900  hover:text-version3-500 ease-in-out duration-300 cursor-pointer hover:underline hover:underline-offset-4">
                    {item.name}
                  </p>
                </Link>
              );
            })}
          </div>
        ) : null}
        <NavbarFeatureMenu features={props.features} />
        {session ? (
          <>
            <NavbarNotification />
            <NavbarUserMenu
              userData={{
                full_name: userData?.full_name,
                email: userData?.email,
                avatar: userData?.avatar,
              }}
              {...props}
            />
          </>
        ) : (
          <section className="xl:inline-block hidden font-semibold">
            {button}
          </section>
        )}

        <HamburgerIcon />
      </div>
      <NavbarMobileMenu
        mobileitems={mobileMenuItems}
        userData={{
          full_name: userData?.full_name,
          email: userData?.email,
          avatar: userData?.avatar,
        }}
        button={button}
        logo={logo}
        {...props}
      />
    </header>
  );
};
