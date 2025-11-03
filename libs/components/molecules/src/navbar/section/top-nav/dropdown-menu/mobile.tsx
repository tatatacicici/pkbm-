'use client';

import { Disclosure } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, ReactElement } from 'react';
import Avatar from 'react-avatar';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { HiMiniSquaresPlus } from 'react-icons/hi2';
import { RiArrowUpSLine } from 'react-icons/ri';
import { useRecoilState } from 'recoil';
import { MobileNavbarState } from './store';
import { TMobileMenuProps } from './typed';

export const HamburgerIcon: FC = (): ReactElement => {
  const [getMobileNavbar, setMobileNavbar] = useRecoilState(MobileNavbarState);

  return (
    <div className="xl:hidden">
      <button
        name="mobile-menu"
        id="mobile-menu"
        aria-label="mobile-menu"
        className="flex flex-col bg-neutral-100  h-9 w-9  p-2 rounded-md justify-center items-center group xl:hidden"
        onClick={() => setMobileNavbar(!getMobileNavbar)}
      >
        <AiOutlineMenu className="text-xl " />
      </button>
    </div>
  );
};

export const NavbarMobileMenu: FC<TMobileMenuProps> = ({
  items,
  mobileitems,
  userData,
  button,
  logo,
}): ReactElement => {
  const [getMobileNavbar, setMobileNavbar] = useRecoilState(MobileNavbarState);

  const { data: session } = useSession();

  return (
    <div
      className={`${
        getMobileNavbar ? 'visible' : 'invisible'
      } px-4 py-4 absolute top-0 left-0 xl:hidden right-0 bg-white shadow-md border-b-2 border-neutral-300 z-50`}
      style={{ maxHeight: '100vh', overflowY: 'auto' }}
    >
      <section className="w-full flex justify-between pr-4 py-1.5 mb-4 pl-1">
        <Image
          src={logo as string}
          alt="platform-logo"
          loading="eager"
          width={90}
          height={100}
          // className="w-auto h-6 md:h-8 lg:h-9"
          quality={100}
          priority
        />
        <AiOutlineClose
          className="text-neutral-base font-bold text-xl cursor-pointer"
          onClick={() => setMobileNavbar(!getMobileNavbar)}
        />
      </section>
      {session ? (
        <section className="w-full pb-4 mb-4 px-1  flex items-center gap-3 border-b-[1px] border-neutral-200">
          {userData?.avatar ? (
            <Image
              src={userData.avatar || '/profile-avatar-example.svg'}
              alt={'user avatar'}
              width={36}
              height={36}
              className="bg-white  flex text-neutral-600 items-center justify-center font-[700] w-9 h-9 object-cover bg-center rounded-md"
            />
          ) : (
            <Avatar
              name={userData?.full_name}
              color="#F26800"
              className=" w-[36px] rounded-md h-[36px]"
              size="36"
            />
          )}

          <section>
            <h1 className="text-sm font-semibold text-neutral-900 ">
              {userData?.full_name}
            </h1>
            <p className="text-xs text-neutral-500 ">{userData?.email}</p>
          </section>
        </section>
      ) : null}
      <section className="border-neutral-200 pb-2 flex flex-col gap-y-2">
        {mobileitems.map((item, index) => {
          return (
            <div key={index} className="my-2">
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between bg-transparent p-2 text-left text-sm md:text-base text-black border-b-2 font-bold">
                      <span>{item.name}</span>
                      <RiArrowUpSLine
                        className={`${
                          !open ? 'rotate-180 transform' : ''
                        } h-5 w-5 text-black`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pb-2 pt-4 text-base text-gray-500">
                      {item.submenus.map((submenu, idx) => (
                        <div
                          key={idx}
                          // className="flex flex-col gap-2 border-s-4 border-primary-500 p-2 mb-1 hover:bg-gray-100 rounded-r-md"
                          className="flex flex-col gap-2 border-s-4 border-sky-base p-2 mb-1 hover:bg-gray-100 rounded-r-md"
                        >
                          <Link
                            href={submenu.link}
                            key={idx}
                            onClick={() => setMobileNavbar(false)}
                          >
                            {submenu.name}
                          </Link>
                        </div>
                      ))}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            </div>
          );
        })}
        {/* <Link
          href="/donasi"
          className="text-base font-bold px-2 py-2 cursor-pointer hover:bg-neutral-50 border-b-2 border-neutral-200"
        >
          Donasi
        </Link> */}
      </section>

      {session ? (
        <section className=" px-1 py-2">
          <Link
            href="/semua-fitur"
            onClick={() => {
              setMobileNavbar(!getMobileNavbar);
            }}
            className=" h-[38px] px-4 flex items-center justify-center rounded-md shadow-sm font-semibold gap-1 text-base bg-red-base text-white hover:bg-red-base/80 transition-colors ease-in-out duration-300 mb-4"
          >
            Semua Fitur
            <HiMiniSquaresPlus className="text-[20px] transition-colors ease-in-out duration-300" />
          </Link>
          {items.map(({ icon, name, onClick }, index) => (
            <div key={index} className={'flex gap-3 items-center  py-3 '}>
              {icon}
              <button
                type="submit"
                onClick={() => {
                  onClick();
                  setMobileNavbar(!getMobileNavbar);
                }}
              >
                <h1 className="text-[#171717]  group:hover:text-neutral-100 text-sm text-center">
                  {name}
                </h1>
              </button>
            </div>
          ))}
        </section>
      ) : (
        <section className="flex gap-x-2 py-4 px-1 justify-between flex-wrap">
          <Link
            href="/semua-fitur"
            className="h-[38px] px-4 flex items-center justify-center rounded-md shadow-sm font-semibold gap-1 text-base bg-red-base text-white hover:bg-red-base/80 transition-colors ease-in-out duration-300 mb-4"
          >
            <span className="w-max">Semua Fitur</span>
            <HiMiniSquaresPlus className="text-[20px] transition-colors ease-in-out duration-300" />
          </Link>
          <div className="font-semibold">{button}</div>
        </section>
      )}
    </div>
  );
};
