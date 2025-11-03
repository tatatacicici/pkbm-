import Image from 'next/image';
import Avatar from '../assets/avatar.svg';
import React, { FC, Fragment, ReactElement, useState } from 'react';
import {
  usePopupProfilLeaderboard,
  usePopupGetUser,
  useFilteredData,
  useGetLeaderboardScore,
} from '../../../hooks/leaderboard/hook';
import { Pagination } from '@kampus-gratis/components/molecules';

import PopupProfil from '../components/popup-profil';
import { useInfiniteQuery } from '@tanstack/react-query';
import { TLeaderboardItem } from '../type';
import { TRanking } from '@kampus-gratis/apps/kg/types';

interface RankingBottomProps {
  data: TRanking[];
}

export const RankingSection: FC<RankingBottomProps> = ({
  data,
}): ReactElement => {
  const { setPopupLeaderboardStatus, getPopupLeaderboardStatus } =
    usePopupProfilLeaderboard();

  const { setPopupUser, getPopupUser } = usePopupGetUser();

  return (
    <div className="relative ">
      {Array.isArray(data) &&
        [...data].map((item: any, index: any) => {
          return (
            index >= 3 && (
              <Fragment key={index}>
                <div>
                  <div className="flex flex-column md:flex-row lg:flex-row lg:px-[56px] px-3 mt-[15px] ">
                    <div className="w-full bg-white flex justify-between dark:border-b-[#222529] border-b-[#F5F5F5] border-b-2 px-[20px] rounded-[8px]">
                      <div className="flex items-center md:gap-[30px] gap-5 lg:gap-[30px] p-2">
                        {/* <h1 className="font-[600] lg:text-[16px] text-md text-primary-600"> */}
                        <h1 className="font-[600] lg:text-[16px] text-md text-sky-base">
                          {item.current_rank}
                        </h1>
                        <Image
                          src={
                            item.student?.avatar === null
                              ? '/images/profile-picture.png'
                              : item.student?.avatar
                          }
                          width={0}
                          height={0}
                          sizes={'100vw'}
                          alt="avatar"
                          className="w-[56px] h-[56px] rounded-full overflow-hidden cursor-pointer object-cover shrink-0"
                          onClick={() => {
                            // setPopupUser(item);
                            // setPopupLeaderboardStatus(true);
                          }}
                        />
                        <div className="flex flex-col">
                          <h1 className="font-[600] lg:text-[18px] text-md">
                            {item.student?.full_name}
                          </h1>
                        </div>
                      </div>
                      <div className="flex items-center">
                        {/* <h1 className="font-[600] lg:text-[16px] text-md text-primary-600"> */}
                        <h1 className="font-[600] lg:text-[16px] text-md text-sky-base">
                          {item.current_score === null
                            ? '0'
                            : item.current_score}{' '}
                          Poin
                        </h1>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <PopupProfil
                  onClose={() => {
                    setPopupLeaderboardStatus(false);
                  }}
                  lookup={getPopupLeaderboardStatus}
                  widthModal="!max-w-[748px]"
                  {...getPopupUser}
                /> */}
              </Fragment>
            )
          );
        })}
    </div>
  );
};
