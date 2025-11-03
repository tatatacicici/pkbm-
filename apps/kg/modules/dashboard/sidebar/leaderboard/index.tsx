import Image from 'next/image';
import { FC, ReactElement } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { useGetLeaderboardScore } from '../../../../hooks/leaderboard/hook';
import { LeaderboardEverDone } from './ever-done';

export const LeaderboardSection: FC = (): ReactElement => {
  const { data: scoreLeaderboard } = useGetLeaderboardScore(0);

  const getRank = scoreLeaderboard?.data;
  const myRank = scoreLeaderboard?.data.my_rank_details;

  return (
    <section className="w-full bg-white mb-10 px-8 py-7 rounded-md shadow-md shadow-neutral-100">
      <section className="flex justify-between items-start mb-4">
        <div className="flex flex-col items-center">
          <Image
            width={80}
            height={80}
            src={'/icons/bigTrophyIcon.svg'}
            alt="papan skor"
          />
          <h1 className="text-xl text-neutral-900 font-bold ">Papan Skor</h1>
          {/* <p className="text-sm font-semibold text-blue-base">Batch 1</p> */}
          <p className="text-sm font-semibold text-sky-base">Batch 1</p>
        </div>
        <div className="justify-start items-start text-center">
          <span className="text-yellow-500 text-4xl font-bold">
            {myRank?.current_score}
          </span>
          <p className="text-sm text-yellow-500">Poin Kamu</p>
        </div>
      </section>
      <LeaderboardEverDone leaderboard={getRank} />
      {/* lihat semua */}
      <div className="flex justify-end">
        {/* <a href="/papan-skor" className="text-blue-base font-semibold text-sm"> */}
        <a href="/papan-skor" className="text-sky-base font-semibold text-sm">
          Lihat Papan Skor
          {/* right arrow */}
          <FaArrowRight className="inline-block ml-2" />
        </a>
      </div>
    </section>
  );
};
