import { ReactElement } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { queryPanduanBook } from '../../../../recoil/atoms/buku-panduan';
import { useRecoilState } from 'recoil';

export const HeroSection = (): ReactElement => {
  const [query, setQuery] = useRecoilState(queryPanduanBook);
  return (
    <div className="md:grid md:grid-cols-2 md:gap-10 md:px-14 2xl:px-0 px-6 bg-white max-w-[1440px] mx-auto">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className="text-[50px] leading-none my-6 font-[700]">
            Buku panduan{' '}
          </h1>
          <p className="text-[14px] font-[400] text-neutral-500 dark:text-white">
            Berupa buku petunjuk penggunaan dan pengertian fitur- fitur yang ada
            di Website Paket-C Gratis secara terperinci (isinya lebih detail
            jika dibandingkan video tutorial). Menjelaskan juga keunggulan dan
            manfaat fitur tersebut.
          </p>
        </div>
        <div className="seacrh lg:w-[700px] h-[56px] w-full bg-neutral-100  rounded-[8px] mt-[48px] flex items-center gap-4  ">
          <AiOutlineSearch className="text-2xl  text-neutral-400 ml-4" />
          <input
            type="text"
            name=""
            id=""
            placeholder="Cari informasi"
            className=" bg-neutral-100 w-full focus:outline-none"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <div className="col-span-1 grid lg:place-content-end md:place-content-center mb-4 mt-2">
        <Image
          src="/images/panduan/HeroGuideBook.svg"
          width={450}
          height={300}
          alt={'buku-panduan'}
          className={'w-0 md:w-full h-full'}
        />
      </div>
    </div>
  );
};
