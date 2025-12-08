import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { HiMiniSquaresPlus } from 'react-icons/hi2';
import { TNavbarFeaturesProps } from './typed';

export const NavbarFeatureMenu: FC<TNavbarFeaturesProps> = ({
  features,
}): ReactElement => {
  return (
    <Menu
      as="div"
      className="relative hidden xl:inline-block text-left z-50 left-0"
    >
      <Menu.Button
        as="button"
        aria-label="feature-menu"
        name="feature-menu"
        id="feature-menu"
      >
        {/* <div className="h-[38px] w-[160px] px-4 flex items-center justify-center rounded-md shadow-sm font-semibold gap-1 text-base bg-sky-700 hover:bg-sky-600 text-white transition-colors ease-in-out duration-300"> */}
        <div className="h-[38px] w-[160px] px-4 flex items-center justify-center rounded-md shadow-sm font-semibold gap-1 text-base bg-red-base hover:bg-red-base/80 text-white transition-colors ease-in-out duration-300">
          Semua Fitur
          <HiMiniSquaresPlus className="text-[20px] transition-colors ease-in-out duration-300" />
        </div>
      </Menu.Button>

      <Transition
        as="div"
        enter="transition ease duration-500 transform"
        enterFrom="opacity-0 -translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 -translate-y-12"
      >
        <Menu.Items className="absolute right-0 top-2 origin-top-right bg-white shadow-md rounded-md overflow-hidden">
          <div className="bg-sky-200 h-[108px] w-[240px] md:w-[270px] flex gap-1 flex-col items-center justify-center">
            <h1 className="text-gray-800 font-bold text-xl">Fitur</h1>
            <Link href="/semua-fitur">
              {/* <p className="text-white font-semibold bg-sky-700 text-sm px-2.5 py-1.5 rounded-lg shadow-sm"> */}
              <p className="text-white font-semibold bg-sky-base text-sm px-2.5 py-1.5 rounded-lg shadow-sm">
                Total 20 Fitur
              </p>
            </Link>
          </div>
          <div className="grid grid-cols-3">
            {features.map((feature, index) => {
              return (
                <Link
                  href={feature.link as string}
                  className="bg-gray-100"
                  key={index}
                >
                  <Menu.Item
                    as="div"
                    aria-label="User"
                    className="flex flex-col gap-2 hover:bg-gray-200 items-center p-4 cursor-pointer bg-gray-100 h-full transition-all duration-300 ease-in-out"
                  >
                    {feature.icon}
                    <h1 className="text-gray-800 font-semibold text-xs text-center">
                      {feature.name}
                    </h1>
                  </Menu.Item>
                </Link>
              );
            })}
          </div>
          <Link href={'/semua-fitur'} passHref>
            <div className="bg-sky-300 hover:bg-sky-200 cursor-pointer transition-colors ease-in-out duration-300 w-full flex items-center group justify-center py-4">
              <h1 className="text-sm font-semibold text-gray-800">
                Lihat Semua
              </h1>
            </div>
          </Link>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};
