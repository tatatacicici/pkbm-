import { useParams, usePathname } from 'next/navigation';
import { FC, Fragment, ReactElement, useEffect } from 'react';
import { MdChevronRight } from 'react-icons/md';
import { quizTryoutInfoDummyData, TryOutBreadcrumb } from '../constant';
import {
  useGetQuizDescById,
  useQuizQuitPopup,
} from '@kampus-gratis/apps/kg/hooks/try-out/quiz/hook';

export const QuizTakeBreadCrumb = () => {
  const { subjectId, sessionId, quizId } = useParams();
  const { getQuizQuitPopup, setQuizQuitPopup } = useQuizQuitPopup();
  //   const { data, isLoading } = useGetQuizDescById(
  //     subjectId as string,
  //     sessionId as string,
  //     quizId as string
  //   );

  // const data = { data: quizTryoutInfoDummyData };
  // const { quizId } = useParams();
  // Cari data quiz berdasarkan display_id
  const quizData = quizTryoutInfoDummyData.find(
    (item) => String(item.display_id) === String(quizId)
  );

  const quizDesc = quizData?.quiz;
  const isLoading = false;

  const prevPath = usePathname();

  useEffect(() => {
    if (prevPath.includes('nilai-quiz')) {
      setQuizQuitPopup({
        ...getQuizQuitPopup,
        prevPath: prevPath,
        quizTakeId: quizId as string,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prevPath]);

  //   const quizTakeBreadCrumb = [
  //     ...StudiKuBreadCumbs,
  //     {
  //       name: data?.data.subject.name,
  //       link: `/studi-ku/${subjectId}`,
  //     },
  //     {
  //       name: data?.data.quiz.title,
  //       link: `/studi-ku/${subjectId}/session/${sessionId}/quiz/${quizId}`,
  //     },
  //     {
  //       name: 'Mulai Kuis',
  //       link: `/studi-ku/${subjectId}/session/${sessionId}/quiz/${quizId}/mulai`,
  //     },
  //   ];

  const quizTakeBreadCrumb = [
    ...TryOutBreadcrumb,
    {
      name: `${quizDesc?.categoryQuiz}`,
      link: `/try-out/session/${quizData?.display_session_no}/quiz/${quizData?.display_id}`,
    },
    {
      name: 'Mulai Try Out',
      link: `/try-out/${subjectId}/session/${sessionId}/quiz/${quizId}/mulai`,
    },
  ];

  function onClickHandler(link: string) {
    setQuizQuitPopup({ ...getQuizQuitPopup, link, status: true });
  }

  if (isLoading) return;

  return (
    <div
      className="w-full px-8 md:px-14 lg:px-16 py-4 !font-extrabold text-xs md:text-sm"
      aria-label="Breadcrumb"
    >
      <div className="w-full max-w-[1440px] mx-auto">
        <ol className="flex w-full items-center gap-x-2">
          {quizTakeBreadCrumb.map((crumb, index) => {
            const isLastItem = index === quizTakeBreadCrumb.length - 1;
            if (!isLastItem) {
              return (
                <Fragment key={index}>
                  <button
                    key={index}
                    onClick={() => onClickHandler(crumb.link)}
                    className="inline-flex text-sky-base text-sm font-semibold items-center"
                  >
                    {crumb.name}
                  </button>
                  <MdChevronRight className="text-xl text-sky-base" />
                </Fragment>
              );
            } else {
              return (
                <button key={index}>
                  <span className="text-neutral-400 text-sm font-semibold cursor-default">
                    {crumb.name}
                  </span>
                </button>
              );
            }
          })}
        </ol>
      </div>
    </div>
  );
};
