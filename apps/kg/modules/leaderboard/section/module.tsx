'use client';
import React, { ReactElement, useState } from 'react';
import { Filter } from './filter';
import Link from 'next/link';
import {
  usePopupProfilLeaderboard,
  usePopupGetUser,
} from '../../../hooks/leaderboard/hook';
import PopupProfil from '../components/popup-profil';
import { RankingSection } from './ranking-bottom';
import { StepRanking } from './ranking-up';
import { SelfRankingSection } from './self-ranking';
import { useFilteredData } from '../../../hooks/leaderboard/hook';
import Pagination from '../../../components/general/pagination';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { GrBlockQuote } from 'react-icons/gr';

export const ContentSection = (): ReactElement => {
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);
  const { getFilteredData } = useFilteredData();
  const page: any = searchParams.get('page') || 1;
  const pathname = usePathname();
  const router = useRouter();
  const getRank = getFilteredData?.data;
  const totalItems: number = getRank.length;
  const itemsPerPage = 10;
  const totalPages: number = Math.ceil(totalItems / itemsPerPage);
  const handlePageChange = async (page: number) => {
    window.scrollTo(0, 0);
    setCurrentPage(page);
    router.push(`/papan-score?page=${page}`);
  };

  const { setPopupLeaderboardStatus, getPopupLeaderboardStatus } =
    usePopupProfilLeaderboard();
  const { getPopupUser } = usePopupGetUser();
  return (
    <div className="mt-[71px] w-full lg:px-[170px] md:px-[100px] px-3  mb-10 ">
      <h1 className="text-center lg:text-[50px] md:text-[50px] dark:text-white text-black text-[30px] font-[700] rounded-[8px]">
        Papan Skor
      </h1>
      <div className="card bg-white  mt-[39px] w-full rounded-[8px] py-10 ">
        <div className="flex justify-between md:px-10 px-5">
          <Link
            href="/aturan"
            className="md:w-[109px] md:h-[40px] w-20 h-8 rounded-[8px] flex justify-center items-center text-center border-[3px] border-[#106FA4] relative mt-[46px]"
          >
            <div className="my-auto flex justify-center md:gap-[10px] gap-[4px] items-center">
              <GrBlockQuote color="#106FA4" size={20} />
              <p className="text-[#106FA4] md:text-[14px] text-[10px] dark:text-white">
                Aturan
              </p>
            </div>
          </Link>
          <Filter />
        </div>
        <StepRanking />
        <SelfRankingSection />
        {/* <RankingSection  currentPage={currentPage} itemsPerPage={itemsPerPage} /> */}
        <Pagination
          onPageChange={handlePageChange}
          totalPages={totalPages}
          currentPage={page}
        />
      </div>
      <PopupProfil
        onClose={() => {
          setPopupLeaderboardStatus(false);
        }}
        lookup={getPopupLeaderboardStatus}
        widthModal="!max-w-[748px]"
        {...getPopupUser}
      />
    </div>
  );
};
