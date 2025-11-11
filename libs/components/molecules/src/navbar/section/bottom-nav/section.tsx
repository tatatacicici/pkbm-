import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { TBottomNavProps } from './types';
import { usePathname } from 'next/navigation';

export const BottomNav: FC<TBottomNavProps> = ({
  bottomNavItemStyle,
  bottomNavItems,
}): ReactElement => {
  const pathname = usePathname();
  return (
    <nav className="bg-neutral-50 hidden sm:flex w-full px-6 md:px-14 lg:px-16 ">
      <div className="w-full max-w-[1440px] border-b-[1px] border-t-[1px] border-neutral-100 py-3 mx-auto  sm:flex gap-4">
        {bottomNavItems.map((item, index) => {
          return (
            <Link
              href={item.link}
              key={index}
              className={`${
                pathname.includes(item.link)
                  ? bottomNavItemStyle
                  : `hover:text-version3-500 ${index === 0 ? 'pl-0' : ''}`
              }  px-4 py-2.5 text-sm transition-all ease-in-out duration-300 font-semibold`}
            >
              <p>{item.name}</p>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
