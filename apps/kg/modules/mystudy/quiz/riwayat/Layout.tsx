'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { QuizHistoryModule } from '.';
import { useParams } from 'next/navigation';
import { useGetQuizDescById } from 'apps/kg/hooks/mystudy/quiz/hook';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';

export const LayoutHistoryQuiz = () => {
  const { subjectId, sessionId, quizId } = useParams();

  const { data: quizDetail } = useGetQuizDescById(
    subjectId as string,
    sessionId as string,
    quizId as string
  );

  const scoreQuizBreadCrumb = [
    ...StudiKuBreadCumbs,
    {
      name: quizDetail?.data.subject.name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: quizDetail?.data.quiz.title,
      link: `/studi-ku/${subjectId}/session/${sessionId}/kuis/${quizId}`,
    },
    {
      name: 'Riwayat Kuis',
      link: `/studi-ku/${subjectId}/session/${sessionId}/kuis/${quizId}/riwayat-quiz`,
    },
  ];

  return (
    <>
      <BreadCrumb items={scoreQuizBreadCrumb} />
      <div className="pb-8 px-8 md:px-14  lg:px-16 ">
        <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-190px)]">
          <QuizHistoryModule id={quizId as string} />
        </div>
      </div>
    </>
  );
};
