import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FC, ReactElement, useState } from 'react';
import { RiArrowDownSLine } from 'react-icons/ri';
import { TNavbarMegaMenuProps } from './typed';

export const NavbarMegaMenu: FC<TNavbarMegaMenuProps> = ({
  megaMenuItems,
}): ReactElement => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <div>
      {megaMenuItems.map((item, index) => (
        <Menu
          as="div"
          key={index}
          className={'relative hidden xl:inline-block text-left z-50 left-0 '}
        >
          <div className="flex flex-row gap-3 items-center">
            <Menu.Button
              key={index}
              as="button"
              aria-label="feature-menu"
              name="feature-menu"
              onClick={() => setActiveIndex(index)}
              id="feature-menu"
              // className="text-base font-semibold text-primary-500 pl-4 pr-2.5 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-neutral-100"
              className="text-base font-semibold text-white pl-4 pr-2.5 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-aqua-base"
            >
              {item.name}
              <RiArrowDownSLine className="inline-block ms-1" />
            </Menu.Button>
          </div>
          <Transition
            as="div"
            enter="transition ease duration-500 transform"
            enterFrom="opacity-0 -translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-12"
          >
            {activeIndex !== null && (
              // <Menu.Items className="absolute -left-16 top-2 origin-top-right bg-white shadow-md rounded-md overflow-hidden h-auto w-[240px] md:w-[500px] border-s-8 border-primary-500">
              <Menu.Items className="absolute -left-16 top-2 origin-top-right bg-white shadow-md rounded-md overflow-hidden h-auto w-[240px] md:w-[500px] border-s-8 border-sky-base">
                <div className="grid grid-cols-2 text-start justify-start items-center">
                  {megaMenuItems[activeIndex].submenus.map((submenu, idx) => (
                    <Link href={submenu.link && submenu.link} key={idx}>
                      <Menu.Item
                        as="a"
                        className={`
                        flex flex-col gap-2 rounded-md p-2 mx-4 my-2 transition-all duration-300 ease-in-out
                        ${
                          submenu.link
                            ? 'hover:bg-neutral-200 cursor-pointer '
                            : 'cursor-default'
                        }
                        `}
                      >
                        <div className="flex flex-row gap-2 items-center">
                          <div>{submenu.icon}</div>
                          <h1
                            className={`
                          text-sm font-bold
                          ${
                            submenu.link
                              ? 'text-neutral-900'
                              : 'text-neutral-300'
                          }
                          `}
                          >
                            {submenu.name}
                          </h1>
                        </div>
                      </Menu.Item>
                    </Link>
                  ))}
                </div>
              </Menu.Items>
            )}
          </Transition>
        </Menu>
      ))}
      {/* <Link
        href="/donasi"
        className="text-base font-semibold text-primary-500 px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-neutral-100 hidden xl:inline-block"
        className="text-base font-semibold text-white px-4 py-2 rounded-lg transition-all duration-300 ease-in-out cursor-pointer hover:bg-aqua-base hidden xl:inline-block"
      >
        Donasi
      </Link> */}
    </div>
  );
};
