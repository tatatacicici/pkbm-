import Image from 'next/image';
import { FC, ReactElement } from 'react';

export const LeaderboardNeverDone: FC = (): ReactElement => {
  return (
    <>
      <section className="mb-8  mt-20">
        <Image
          src={'/icons/emptyLeaderBoard.svg'}
          width={200}
          height={200}
          alt="leaderBoard"
          className="mx-auto"
          style={{
            width: '200px',
            height: '200px',
          }}
        />
        <p className="text-center text-neutral-900 text-sm my-3 px-10 lg:px-20">
          Opps.. Kamu <span className="font-bold underline">belum pernah</span>{' '}
          mengerjakan tugas
        </p>
      </section>
    </>
  );
};
