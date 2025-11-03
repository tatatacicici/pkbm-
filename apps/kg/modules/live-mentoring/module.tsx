import { Tab } from '@headlessui/react';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from 'apps/kg/components/empty-state';
import { useParams } from 'next/navigation';
import { Fragment } from 'react';
import { useLiveMentoring } from '../../hooks/live-mentoring/hooks';
import { ListMentoring } from './list-mentoring';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import { useGetSubjectDetailsById } from 'apps/kg/hooks/mystudy/subject-detail/hook';

export const LiveMentoringModul = () => {
  const { subjectId, sessionId } = useParams();
  const { data: mentoring, isLoading } = useLiveMentoring(sessionId as string);
  const { data } = useGetSubjectDetailsById(subjectId as string);
  const DataMentoring = mentoring?.data;

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!DataMentoring?.length) {
    return <EmptyState text="Oops! Belum ada live mentoring" />;
  }

  const liveMentoringBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: data?.data?.subject.name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: 'Live Mentoring',
      link: `/studi-ku/${subjectId}/live-mentoring/${sessionId}`,
    },
  ];

  return (
    <>
      <BreadCrumb items={liveMentoringBreadcrumb} />
      <div className="w-full  py-5 md:px-8 lg:px-[60px] min-h-[calc(100vh-140px)] bg-white">
        <div className="max-w-[1440px] mx-auto p-10 rounded-md">
          <Tab.Group>
            <Tab.List
              as={'div'}
              className="flex gap-2 mb-5 text-sm font-medium border-b-2 text-neutral-400"
            >
              <Tab as={Fragment}>
                {({ selected }) => (
                  <div
                    //   className={`${
                    //     selected
                    //        ? 'border-b-2 outline-none   border-primary-500 text-primary-500'
                    //       : ''
                    //   } py-2 px-4 cursor-pointer  font-bold`}
                    // >
                    className={`${
                      selected
                        ? 'border-b-2 outline-none  border-sky-base text-sky-base'
                        : ''
                    } py-2 px-4 cursor-pointer  font-bold`}
                  >
                    Daftar Live
                  </div>
                )}
              </Tab>
              {/* <Tab as={Fragment}>
                {({ selected }) => (
                  <div
                    className={`${
                      selected
                        ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                        : ''
                    } py-2 px-4 cursor-pointer  font-bold`}
                  >
                    Riwayat Live
                  </div>
                )}
              </Tab> */}
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <ListMentoring
                  className="grid grid-cols-3 gap-5"
                  data={DataMentoring}
                />
              </Tab.Panel>
              {/* <Tab.Panel>aowdkoad</Tab.Panel> */}
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </>
  );
};
