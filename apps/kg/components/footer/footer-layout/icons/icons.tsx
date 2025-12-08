import { FC, ReactElement } from 'react';

import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa6';
import gplay from '../../assets/footerGPlay.svg';

export const FooterIcons: FC = (): ReactElement => {
  return (
    <div className="flex justify-between flex-wrap lg:flex-col gap-y-4 items-center text-center lg:items-start">
      <div className="text-lg text-neutral-800 flex gap-x-7">
        <FaFacebookF className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        <FaTwitter className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        <Link href="https://www.linkedin.com/company/kampus-gratis/?trk=ppro_cprof&originalSubdomain=id">
          <FaLinkedinIn className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        </Link>
        <Link href="https://www.instagram.com/kampus.gratis/">
          <FaInstagram className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        </Link>
        <Link href="https://www.youtube.com/@KampusGratis1">
          <FaYoutube className="hover:text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        </Link>
      </div>
      <Link
        target="_blank"
        href="https://play.google.com/store/apps/details?id=id.kampusgratis.app"
      >
        <Image
          src={gplay}
          alt="goolePlay-view"
          className=" w-[160px] -m-2"
          height={100}
          width={100}
          loading="eager"
        />
      </Link>
    </div>
  );
};
