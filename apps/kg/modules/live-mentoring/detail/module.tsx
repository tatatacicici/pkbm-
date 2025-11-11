'use client';

import { BaseLayout } from '../../../components';
import { useDetailLiveMentoring } from '../../../hooks/live-mentoring/hooks';
import { useParams } from 'next/navigation';
import { DetailProps } from '../../../types/livementoring';
import { DetailLive } from './components/details';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import { useGetSubjectDetailsById } from 'apps/kg/hooks/mystudy/subject-detail/hook';

export const DetailLiveModule = () => {
  const { subjectId, sessionId, liveId } = useParams<{
    subjectId: string;
    sessionId: string;
    liveId: string;
  }>();
  const { data: Detail } = useDetailLiveMentoring(`${sessionId}`, `${liveId}`);
  const { data } = useGetSubjectDetailsById(subjectId as string);

  const DetailData = Detail?.data;
  const studyBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: data?.data?.subject.name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: 'Live Mentoring',
      link: `/studi-ku/${subjectId}/live-mentoring/${sessionId}`,
    },

    {
      name: 'Detail Live Mentoring',
      link: `/studi-ku/${subjectId}/live-mentoring/${sessionId}/detail/${liveId}`,
    },
  ];

  if (!DetailData) {
    return;
    <div>
      <BaseLayout title="Detail">
        <div className=" bg-neutral-100">
          <BreadCrumb items={studyBreadcrumb} />
          <div className="w-full  py-5 md:px-8 lg:px-[60px] min-h-[calc(100vh-140px)]">
            <div className="bg-white p-10 rounded-md">
              <div>Loading...</div>
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>;
  }

  const {
    id,
    session,
    title,
    content,
    teacher,
    duration,
    location,
    date,
    time,
    link,
  } = DetailData;

  const detailProps: DetailProps = {
    id: id || '',
    session: session || 0,
    title: title || '',
    content: content || '',
    teacher: teacher || { full_name: '' }, // Replace with appropriate default value
    duration: duration || 0,
    location: location || '',
    date: date || '',
    time: time || '',
    link: link || '',
  };
  return (
    <div>
      <BaseLayout title="Detail">
        <div className=" bg-neutral-100">
          <BreadCrumb items={studyBreadcrumb} />
          <div className="w-full  py-5 md:px-8 lg:px-[60px] min-h-[calc(100vh-140px)]">
            <div className="bg-white p-10 rounded-md max-w-[1440px] mx-auto">
              <DetailLive {...detailProps} />
            </div>
          </div>
        </div>
      </BaseLayout>
    </div>
  );
};
