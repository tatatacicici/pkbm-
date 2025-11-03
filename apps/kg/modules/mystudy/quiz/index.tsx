'use client';

import CardListSubject from '@kampus-gratis/apps/kg/components/my-study/card-list';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from 'apps/kg/components/empty-state';
import { TQuizData } from 'apps/kg/types/quiz';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { FaArrowLeft } from 'react-icons/fa';
import { useGetQuizList } from '../../../hooks/mystudy/quiz/hook';

export const QuizModule = () => {
  const { subjectId, sessionId } = useParams();
  const pathname = usePathname();

  const { data, isLoading } = useGetQuizList(
    subjectId as string,
    sessionId as string
  );

  const quizList: TQuizData = data?.data;

  const quizBreadCumbs = [
    ...StudiKuBreadCumbs,
    {
      name: quizList?.detail.subject_name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: `Pertemuan ${quizList?.detail.session_no}`,
      link: `/studi-ku/${subjectId}/session/${sessionId}/kuis/${sessionId}`,
    },
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (quizList?.quizzes.length === 0 || !data)
    return <EmptyState text="Oops! Belum ada kuis yang tersedia" />;

  return (
    <>
      <BreadCrumb
        bgColor="bg-white "
        className="px-5 mt-10 sm:mt-0"
        items={quizBreadCumbs}
      />
      <div className="max-w-[1440px] mx-auto w-full mt-8 px-8 ">
        <div className="w-full justify-start md:px-10 lg:px-32 p-2 mt-4">
          <div className="flex flex-col gap-y-[8px] text-center">
            <h1 className="text-4xl font-bold">
              Kuis Pertemuan {quizList?.detail?.session_no}
            </h1>
          </div>
          <div className="flex flex-wrap gap-4 mt-8 justify-center">
            {quizList?.quizzes &&
              quizList?.quizzes?.map((quiz, index) => (
                <Link key={index} href={`${pathname}/${quiz?.id}`}>
                  <CardListSubject
                    {...quiz}
                    id={index + 1}
                    duration={quiz?.duration + ' Menit'}
                    deadline={quiz?.progress?.deadline}
                    description={quizList?.detail?.subject_name}
                    submitted={quiz?.progress?.status === 'FINISHED'}
                  />
                </Link>
              ))}
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
