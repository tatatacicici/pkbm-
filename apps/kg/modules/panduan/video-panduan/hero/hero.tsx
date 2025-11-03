import { ReactElement } from 'react';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { queryPanduanVideo } from '../../../../recoil/atoms/video-panduan';
import { useRecoilState } from 'recoil';

export const HeroSection = (): ReactElement => {
  const [query, setQuery] = useRecoilState(queryPanduanVideo);

  return (
    <div className="lg:grid lg:grid-cols-2 px-6 md:px-8 w-full lg:px-16 mt-[10px] mb-[50px] max-w-[1440px] mx-auto 2xl:px-0">
      <div className="col-span-1 ">
        <div className="title">
          <h1 className=" md:text-[50px] text-[40px] font-[700]">
            Video panduan{' '}
          </h1>
          <p className="text-[14px] font-[400] text-neutral-500 dark:text-white">
            Berupa video tutorial penggunaan dan fungsi fitur yang ada di
            Website Paket-C Gratis
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
      <div className="col-span-1 grid place-content-end ">
        <Image
          src="/images/panduan/video-guide.svg"
          width={450}
          height={300}
          alt={'panduan'}
          className={' w-0 lg:w-full h-full'}
        />
      </div>
    </div>
  );
};
