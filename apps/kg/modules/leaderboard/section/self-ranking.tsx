import React, { FC, ReactElement } from 'react';
import {
  usePopupProfilLeaderboard,
  usePopupGetUser,
  useGetLeaderboard,
} from '../../../hooks/leaderboard/hook';
import { useProfile } from '../../../hooks/profile/hook';
import Image from 'next/image';

export const SelfRankingSection: FC = (): ReactElement => {
  const { setPopupLeaderboardStatus, getPopupLeaderboardStatus } =
    usePopupProfilLeaderboard();
  const { setPopupUser, getPopupUser } = usePopupGetUser();
  const { data: dataProfile } = useProfile();
  const myId = dataProfile?.data?.user?.id;

  const { data: dataLeaderboard } = useGetLeaderboard();
  const getRank = dataLeaderboard?.data;

  // Find the matching rank for the current user
  const matchingRank = getRank?.find((rank: any) => rank.student_id === myId);

  // Calculate the rank based on the index (add 1 to start from 1-based rank)
  const rank = getRank ? getRank.indexOf(matchingRank) + 1 : null;

  const openUserPopup = () => {
    setPopupUser(matchingRank);
    setPopupLeaderboardStatus(true);
  };

  return (
    <div className="relative lg:-top-[270px] md:-top-44 -top-36 mt-10">
      {matchingRank ? (
        <div className="flex lg:px-[56px] px-3 mt-[15px]">
          <div className="drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] w-full bg-white flex justify-between dark:border-b-[#222529] border-b-[#F5F5F5] border-b-2 px-[20px] rounded-[8px]">
            <div className="flex items-center gap-[30px] p-2">
              <h1 className="font-[400] lg:text-[24px] text-[20px]">{rank}</h1>
              <Image
                src={matchingRank.author.avatar || 'AvatarFallbackImageURL'}
                width={30}
                height={30}
                alt="avatar"
                className="w-[56px] h-[56px] rounded-full overflow-hidden cursor-pointer object-cover"
                onClick={openUserPopup}
              />
              <div className="flex flex-col">
                <h1 className="font-[600] sm: font-bold text-primary-600 lg:text-[18px] text-[12px]">
                  Peringkat Anda Saat Ini
                </h1>
                <h1 className="font-[600] sm: font-bold lg:text-[18px] text-[12px]">
                  {matchingRank.autor?.npm}
                </h1>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="font-[600] font-bold lg:text-[16px] text-[12px] text-primary-600">
                {matchingRank.author?.poin} Poin
              </h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex lg:px-[56px] px-3 mt-[15px]">
          <div className="drop-shadow-[0_0_15px_rgba(0,0,0,0.25)] w-full bg-white flex justify-between dark:border-b-[#222529] border-b-[#F5F5F5] border-b-2 px-[20px] rounded-[8px]">
            <div className="flex items-center gap-[30px] p-2">
              <h1 className="font-[400] lg:text-[24px] text-[20px]">?</h1>
              <Image
                src="/images/dashboard/emptyMatkul.svg"
                width={30}
                height={30}
                alt="avatar"
                className="w-[56px] h-[56px] rounded-full overflow-hidden cursor-pointer object-cover"
                onClick={openUserPopup}
              />
              <div className="flex flex-col">
                <h1 className="font-[600] sm: font-bold text-primary-600 lg:text-[18px] text-[12px]">
                  Belum Memiliki Peringkat
                </h1>
                <h1 className="font-[600] sm: font-bold lg:text-[18px] text-[12px]">
                  Harap Isi Administrasi
                </h1>
              </div>
            </div>
            <div className="flex items-center">
              <h1 className="font-[600] font-bold lg:text-[16px] text-[12px] text-primary-600">
                0 Poin
              </h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
