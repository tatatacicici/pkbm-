import { FC } from 'react';
import { ArticleSection } from './article';
import { LeaderboardSection } from './leaderboard';
import { ResumeSection } from './resume/section';

export const SideBarSection: FC = () => {
  return (
    <div className="flex flex-col lg:col-span-3 xl:col-span-1 col-span-3">
      <div className="flex xl:flex-col gap-x-10 flex-col">
        <ResumeSection />
        <LeaderboardSection />
        <ArticleSection />
      </div>
    </div>
  );
};
