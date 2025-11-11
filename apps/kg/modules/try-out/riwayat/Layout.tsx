'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { QuizHistoryModule } from '.';
import { useParams } from 'next/navigation';
import { useGetQuizDescById } from '@kampus-gratis/apps/kg/hooks/try-out/quiz/hook';
import { TryOutBreadcrumb } from '../constant';

export const LayoutHistoryQuiz = () => {
  const { subjectId, sessionId, quizId } = useParams();

  //   const { data: quizDetail } = useGetQuizDescById(
  //     subjectId as string,
  //     sessionId as string,
  //     quizId as string
  //   );
  const { data: quizDetail } = useGetQuizDescById(quizId as string);

  //   const scoreQuizBreadCrumb = [
  //     ...TryOutBreadcrumb,
  //     {
  //       name: quizDetail?.data.subject.name,
  //       link: `/studi-ku/${subjectId}`,
  //     },
  //     {
  //       name: quizDetail?.data.quiz.title,
  //       link: `/studi-ku/${subjectId}/session/${sessionId}/kuis/${quizId}`,
  //     },
  //     {
  //       name: 'Riwayat Kuis',
  //       link: `/studi-ku/${subjectId}/session/${sessionId}/kuis/${quizId}/riwayat-quiz`,
  //     },
  //   ];

  const scoreQuizBreadCrumb = [
    ...TryOutBreadcrumb,
    {
      // name: quizDetail.quiz.categoryQuiz,
      name: quizDetail?.quiz.categoryQuiz,
      // link: `/try-out/session/sessionId/quiz/quizId/`,
      link: `/try-out/session/${quizDetail?.display_session_no}/quiz/${quizDetail?.display_id}`,
    },
    {
      name: 'Riwayat Kuis',
      link: `/try-out/session/${quizDetail?.display_session_no}/quiz/${quizDetail?.display_id}/riwayat-quiz`,
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
