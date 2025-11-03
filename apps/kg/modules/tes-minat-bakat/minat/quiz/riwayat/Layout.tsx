'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { QuizHistoryModule } from '.';
import { useParams } from 'next/navigation';
import { useGetQuizDescById } from '@kampus-gratis/apps/kg/hooks/tes-minat-bakat/bakat/quiz/hook';
import { TesMinatBakatBreadcrumb } from '../../../constant';

export const LayoutHistoryQuiz = () => {
  const { subjectId, sessionId, quizId } = useParams();

  //   const { data: quizDetail } = useGetQuizDescById(
  //     subjectId as string,
  //     sessionId as string,
  //     quizId as string
  //   );
  const { data: quizDetail } = useGetQuizDescById();

  const scoreQuizBreadCrumb = [
    ...TesMinatBakatBreadcrumb,
    {
      // name: quizDetail.quiz.categoryQuiz,
      name: 'Tes Minat (Holland RIASEC)',
      link: `/tes-minat-bakat/minat`,
    },
    {
      name: 'Riwayat Tes',
      link: `/tes-minat-bakat/minat/session/sessionId/quiz/quizId/riwayat-quiz`,
    },
  ];

  return (
    <>
      <BreadCrumb
        items={scoreQuizBreadCrumb}
        className="bg-gray-100 px-8 md:px-14 lg:px-16 py-4"
      />
      <div className="pb-8 px-8 md:px-14 lg:px-16">
        <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-190px)]">
          <QuizHistoryModule id={quizId as string} />
        </div>
      </div>
    </>
  );
};
