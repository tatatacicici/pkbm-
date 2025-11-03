'use client';

import CardListSubject from '@kampus-gratis/apps/kg/components/my-study/card-list';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from 'apps/kg/components/empty-state';
import { useGetMyStudyListAssignment } from 'apps/kg/hooks/mystudy/assignment/hook';
import { TListAssignment } from 'apps/kg/types/mystudy-assignment';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import { FaArrowLeft } from 'react-icons/fa6';

export const StudyPlanAssigmentModule = (): ReactElement => {
  const pathname = usePathname();
  const { subjectId, sessionId } = useParams();
  const { data, isLoading } = useGetMyStudyListAssignment(
    subjectId as string,
    sessionId as string
  );

  const getDaysLeft = (deadline: Date | string): string => {
    const deadlineDate = new Date(deadline);
    const currentDate = new Date();
    const diffTime = deadlineDate.getTime() - currentDate.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    if (diffDays === 0) {
      return 'Hari ini';
    } else if (diffDays < 0) {
      return 'Melewati deadline';
    } else {
      return `${diffDays} hari lagi`;
    }
  };

  const dataAssignment: TListAssignment[] = data?.data?.assignments;

  const studyAssigmentBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: data?.data?.detail?.subject_name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: 'Pertemuan ' + data?.data?.detail?.session_no,
      link: `/studi-ku/${subjectId}/penugasan`,
    },
  ];

  if (isLoading) return <LoadingSpinner />;

  if (!data?.data || dataAssignment?.length === 0) {
    return <EmptyState text="Oops! Penugasan ini belum tersedia." />;
  }

  return (
    <>
      <BreadCrumb
        items={studyAssigmentBreadcrumb}
        bgColor="bg-white"
        className="!px-5"
      />
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="w-full justify-start md:px-10 lg:px-32 p-2 lg:p-10 mt-4">
          <div className="w-full">
            <h3 className="text-center text-lg md:text-xl lg:text-[28px] font-extrabold text-neutral-900">
              Penugasan Pertemuan {data?.data?.detail?.session_no}
            </h3>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            {dataAssignment ? (
              dataAssignment?.map((assignment, index) => (
                <Link key={index} href={`${pathname}/${assignment?.id}`}>
                  <CardListSubject
                    {...assignment}
                    id={index + 1}
                    description={assignment?.desc}
                    submitted={assignment?.progress?.status === 'FINISHED'}
                    grading={assignment?.progress?.status === 'GRADING'}
                    duration={assignment?.duration_days + ' Hari'}
                    total_documents={assignment?.documents?.length}
                    deadline={assignment?.progress?.deadline}
                  />
                </Link>
              ))
            ) : (
              <EmptyState text="Oops! Penugasan ini belum tersedia." />
            )}
          </div>
          <div className="mt-8">
            <Link
              href={`/studi-ku/${subjectId}`}
              className="text-blue-500 hover:text-blue-500/80 cursor-pointer flex items-center gap-x-2 underline"
            >
              <FaArrowLeft />
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudyPlanAssigmentModule;
