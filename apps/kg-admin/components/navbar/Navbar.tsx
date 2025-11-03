'use client';

import { useProfile } from '../../hooks/profile/hook';
import Image from 'next/image';
import React from 'react';
import Avatar from 'react-avatar';

const Navbar = () => {
  const { data } = useProfile();
  const userData = data?.data?.user;
  return (
    <div className="fixed top-0 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] w-[calc(100%-270px)] h-[72px] flex items-center justify-end z-50">
      <div className="flex gap-3 mr-4">
        <div className="flex flex-col justify-start font-medium">
          <p>Welcome,</p>
          <p className="text-sm">{userData?.full_name}</p>
        </div>

        {userData?.avatar !== null ? (
          <Image
            src={userData?.avatar as string}
            width={50}
            height={50}
            alt="avatar"
            className="w-10 h-10 rounded-full object-cover bg-center"
          />
        ) : (
          <Avatar
            name={userData?.full_name || 'a'}
            color="#F26800"
            round
            size="45"
          />
        )}
      </div>
    </div>
  );
};

export default Navbar;
