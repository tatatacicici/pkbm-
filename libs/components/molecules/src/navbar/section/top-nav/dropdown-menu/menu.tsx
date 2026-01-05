import { FC, Fragment, ReactElement } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { TBottomNavProps } from '../../bottom-nav';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { useRouter, usePathname } from 'next/navigation';
import Link from 'next/link';

export const NavMenuDropDown: FC<TBottomNavProps> = ({
  bottomNavItems,
  bottomNavItemStyle,
}): ReactElement => {
  const pathname = usePathname();

  const currentPage = bottomNavItems.filter((item) => {
    return pathname.includes(item.link);
  });

  return (
    <Listbox as="div" className="lg:hidden">
      <div className="relative mt-1">
        <Listbox.Button className="relative w-auto justify-between flex items-center  py-2 pl-2  text-left  text-sm gap-2">
          <span className="block text-neutral-600 font-bold">
            {currentPage.map((item) => {
              return item.name;
            })}
          </span>
          <MdOutlineNavigateNext className="rotate-90 text-neutral-600 text-xl " />
        </Listbox.Button>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Listbox.Options className="absolute mt-1  w-44 rounded-md py-2  text-sm bg-white shadow-md ">
            {bottomNavItems.map((item, index) => (
              <Listbox.Option key={index} value={item.name}>
                <Link href={item.link}>
                  <span
                    className={`block py-3 px-3  mx-2 text-neutral-600 ${
                      pathname === item.link
                        ? bottomNavItemStyle
                        : 'hover:text-version3-500'
                    }`}
                  >
                    {item.name}
                  </span>
                </Link>
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
