'use client';
import { LeaderBoardModules } from '../../modules/leaderboard/module';
import { NextPage } from 'next';
import { ReactElement } from 'react';

const LeaderboardPage: NextPage = (): ReactElement => {
  return (
    <div>
      <LeaderBoardModules />
    </div>
  );
};

export default LeaderboardPage;
