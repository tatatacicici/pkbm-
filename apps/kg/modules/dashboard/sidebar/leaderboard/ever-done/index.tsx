import { TLeaderboardDataScore } from 'apps/kg/types';
import Image from 'next/image';
import Link from 'next/link';
import { ReactElement } from 'react';
export const LeaderboardEverDone = ({
  leaderboard,
}: {
  leaderboard: TLeaderboardDataScore;
}): ReactElement => {
  return (
    <>
      <section className="mb-6 ">
        {leaderboard ? (
          leaderboard?.rankings.map((leaderBoard, index) => (
            <div
              key={index}
              className="flex bg-white hover:bg-neutral-100 transition-colors ease-in-out duration-300 gap-2 items-center border-t-2 border-neutral-200 border-dashed pt-4 pb-3"
            >
              {index === 0 ? (
                <Image
                  height={36}
                  width={36}
                  src={'/icons/medal1Icon.svg'}
                  alt="firstplace"
                />
              ) : index === 1 ? (
                <Image
                  height={36}
                  width={36}
                  src={'/icons/medal2Icon.svg'}
                  alt="secondPlace"
                />
              ) : index === 2 ? (
                <Image
                  height={36}
                  width={36}
                  src={'/icons/medal3Icon.svg'}
                  alt="thirdPlace"
                />
              ) : (
                <p className="w-9 text-center text-md font-semibold">
                  {index + 1}
                </p>
              )}
              <div className="flex rounded-full object-fit w-10 h-10">
                <Image
                  src={
                    leaderBoard.student.avatar === null
                      ? '/images/profile-picture.png'
                      : (leaderBoard.student.avatar as string)
                  }
                  alt="avatar"
                  width={40}
                  height={40}
                  className="rounded-full object-cover"
                />
              </div>
              <div>
                <h1 className="text-neutral-900 font-bold capitalize text-sm">
                  {leaderBoard.student.full_name}
                </h1>
                <p className="text-yellow-500 font-semibold text-xs">
                  {leaderBoard.current_score} Poin
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-neutral-900 text-center">Belum ada data</p>
        )}
      </section>
      {/* <Link
        href="/papan-skor"
        className="w-full flex items-center justify-center bg-blue-base text-white font-semibold rounded-md py-2 hover:bg-blue-base/95 text-sm"
      >
        Lihat Papan Skor
      </Link> */}
    </>
  );
};
