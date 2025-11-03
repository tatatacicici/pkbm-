'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { logoutRequest } from '../../hooks/auth/request';
import { useSession } from 'next-auth/react';
import {
  MdKeyboardArrowRight,
  MdKeyboardArrowDown,
  MdLogout,
} from 'react-icons/md';
interface SidebarItem {
  title: string;
  path: string;
  icon?: React.ReactNode;
  children?: SidebarItem[];
}
const SidebarItem: React.FC<{
  item: SidebarItem;
  pathname: string;
  isOpen: boolean;
  toggleMenu: (path: string) => void;
}> = ({ item, pathname, isOpen, toggleMenu }) => {
  const handleClick = () => {
    toggleMenu(item.path);
  };

  const isActive =
    pathname === item.path || pathname.startsWith(`${item.path}/`);

  const itemIsOpen = isActive || (item.children && isOpen);

  return (
    <div key={item.title} className="relative my-1" onClick={handleClick}>
      {item.children && item.children.length > 0 ? (
        <div
          className={`group flex gap-[6px] rounded-md cursor-pointer p-[8px] items-center text-sm ${
            isActive && 'bg-blue-base text-white'
          } hover:bg-blue-base hover:text-white text-neutral-600`}
        >
          <span className={`p-1 ${isActive ? '!text-white' : ''}`}>
            {item.icon}
          </span>
          <span className="text-md">{item.title}</span>
          <span className="ml-auto">
            {itemIsOpen ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />}
          </span>
        </div>
      ) : (
        <Link
          className={`group flex gap-[6px] rounded-md cursor-pointer p-[8px] items-center text-sm ${
            isActive
              ? 'bg-blue-base text-white'
              : 'hover:bg-blue-base hover:text-white text-neutral-600'
          }`}
          href={item.path}
        >
          <span className={`p-1 ${isActive ? '!text-white' : ''}`}>
            {item.icon}
          </span>
          <span className="text-md">{item.title}</span>
        </Link>
      )}
      {itemIsOpen && item.children && item.children.length > 0 && (
        <div className="ml-4">
          {item.children.map((child) => (
            <SidebarItem
              key={child.title}
              item={child}
              pathname={pathname}
              isOpen={isOpen}
              toggleMenu={toggleMenu}
            />
          ))}
        </div>
      )}
    </div>
  );
};

const Sidebar: React.FC<{
  children: React.ReactNode;
  dataSidebar: SidebarItem[];
}> = ({ children, dataSidebar }) => {
  const pathname = usePathname();
  const { data } = useSession();

  const [openMenus, setOpenMenus] = useState<Record<string, boolean>>({});

  const toggleMenu = (path: string) => {
    setOpenMenus((prevState) => ({
      ...prevState,
      [path]: !prevState[path],
    }));
  };

  return (
    <div className="flex justify-normal w-full ">
      <aside
        id="separator-sidebar"
        className="fixed top-0 left-0 z-50 lg:sm:translate-x-0 w-[250px] h-full transition-transform text-black shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
        aria-label="Sidebar"
        style={{ overflowY: 'auto' }}
      >
        <style>
          {`
      #separator-sidebar {
        /* Sembunyikan scrollbar vertikal */
        scrollbar-width: thin; /* Firefox */
        scrollbar-color: transparent transparent; /* Firefox */
      }

      #separator-sidebar::-webkit-scrollbar {
        width: 0px; /* Atur lebar scrollbar */
      }

      #separator-sidebar::-webkit-scrollbar-thumb {
        background-color: transparent; /* Warna thumb scrollbar */
      }
    `}
        </style>
        <div className="h-max px-3 pt-4 bg-white">
          <div className="flex justify-center items-center py-6">
            <Image
              src="/assets/ic-logo.svg"
              alt="logo"
              width={120}
              height={120}
            />
          </div>

          <div
            onClick={async () => {
              await logoutRequest({
                refresh_token: data?.user?.token?.refresh_token as string,
              });
            }}
            className={`group flex gap-[4px] mb-4 rounded-md cursor-pointer p-[8px] items-center hover:bg-blue-base hover:text-white text-neutral-600`}
          >
            <span className={`p-[8px] text-neutral-600 group-hover:text-white`}>
              <MdLogout size={20} />
            </span>
            <span className="text-md font-medium">Logout</span>
          </div>

          <div className="border-b border border-neutral-200"></div>

          <div className="py-4 font-medium w-full">
            {dataSidebar?.map((item) => (
              <SidebarItem
                key={item.title}
                item={item}
                pathname={pathname}
                isOpen={openMenus[item.path] || false}
                toggleMenu={toggleMenu}
              />
            ))}
          </div>
        </div>
      </aside>
      <div className="w-full bg-neutral-100">{children}</div>
    </div>
  );
};

export default Sidebar;
