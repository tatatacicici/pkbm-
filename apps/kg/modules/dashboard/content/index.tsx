import { useDashboardData } from 'apps/kg/hooks/dashboard/hook';
import { FC, ReactElement } from 'react';
import { RequestCalendarData } from '../../../hooks/kalenderku/hook';
import BannerSection from './banner';
import { CalendarSection } from './calendar';
import { ProgressSection } from './progress';
import { EventSection } from './task-event/event';
import { TaskSection } from './task-event/task';

export const ContentSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const { data: DataCalendar } = RequestCalendarData();
  const Calendar: any = DataCalendar?.data;
  const assignments = getDashboardData?.assignments;

  return (
    <div className="flex flex-col w-full col-span-3 lg:col-span-3  xl:col-span-2">
      <div className="gap-y-6 gap-x-3 w-full flex-wrap lg:flex-nowrap mb-6 hidden md:flex">
        {/* {assignments !== null && assignments && assignments?.length > 0 ? (
          <>
            <TaskSection />
            <EventSection />
          </>
        ) : (
          <BannerSection />
        )} */}
        <BannerSection />
      </div>
      <ProgressSection />
      <CalendarSection events={Calendar} />
    </div>
  );
};
