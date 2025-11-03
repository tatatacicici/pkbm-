'use client';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { FC, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import {
  useGetQuizTakeById,
  useSubmitQuiz,
} from '@kampus-gratis/apps/kg/hooks/tes-minat-bakat/bakat/quiz/hook';
import { QuizTakeBreadCrumb } from './Breadcrumb';
import {
  quizTesMinatInfoDummyData,
  quizTesMinatTakeDummyData,
} from '../../../constant';
import { PopUpQuit } from './PopUpQuit';
import QuestionNavigation from './Question.Navigation';
import QuestionList from './QuestionList';
import CountdownTimer from './CountdownTimer';
import { PopUpSubmit } from './PopUpSubmit';
import { LikertQuestion } from '@kampus-gratis/apps/kg/components/tes-minat-bakat';

export const QuizTakeModule = () => {
  const searchParams = useSearchParams();
  const { quizId } = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const lengthQuestion = searchParams.get('total_question');
  const id = quizId as string;
  //   const { data, isLoading } = useGetQuizTakeById(id);

  // TODO | soal quiz start
  const data = quizTesMinatTakeDummyData;
  const isLoading = false;
  // TODO | soal quiz end

  // ? | di comment biar ga pake API
  // const data = quizTempData;
  // const { mutate } = useSubmitQuiz();

  const [isFirstRender, setIsFirstRender] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [isAlreadySubmit, setIsAlreadySubmit] = useState(false);
  const [popUpSubmit, setPopUpSubmit] = useState(false);

  const [selectedAnswers, setSelectedAnswers] = useState(() => {
    const emptyArray = Array(Number(lengthQuestion)).fill({
      answer: '',
      id: '',
      status: 'not-answered',
    });
    return emptyArray;
  });

  useEffect(() => {
    if (typeof window !== 'undefined' && id && !isFirstRender) {
      const storedSelectedAnswers = localStorage.getItem(
        `selectedAnswers-${id}`
      );
      if (storedSelectedAnswers !== null) {
        setSelectedAnswers(JSON.parse(storedSelectedAnswers));
        setIsFirstRender(true);
      }
    }
  }, [id, isFirstRender]);

  useEffect(() => {
    if (typeof window !== 'undefined' && id) {
      localStorage.setItem(
        `selectedAnswers-${id}`,
        JSON.stringify(selectedAnswers)
      );
    }
  }, [id, selectedAnswers]);

  useEffect(() => {
    const lastQuestionIndex = localStorage.getItem(`lastQuestionIndex-${id}`);
    if (lastQuestionIndex !== null) {
      setCurrentQuestion(Number(lastQuestionIndex));
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const startTime = localStorage.getItem('quizStartTime');

      if (!startTime) {
        localStorage.setItem('quizStartTime', JSON.stringify(Date.now()));
      }
    }
  }, []);

  const handleAnswerClick = (answerId: string, score: number) => {
    setSelectedAnswers((prevAnswers: any) =>
      prevAnswers.map((answer: any, index: number) => {
        if (index === currentQuestion) {
          return {
            answer: answerId,
            id: answerId,
            status: 'answered',
            score: score,
          };
        }
        return answer;
      })
    );
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      localStorage.setItem(
        `lastQuestionIndex-${id}`,
        String(currentQuestion - 1)
      );
    }
  };

  const handleUndecided = () => {
    setSelectedAnswers((prevAnswers: any) =>
      prevAnswers.map((answer: any, index: number) => {
        if (index === currentQuestion) {
          return {
            answer: answer.answer,
            id: answer.id,
            status: 'undecided',
            score: answer.score,
          };
        }
        return answer;
      })
    );
  };

  const handleNext = () => {
    if (currentQuestion < data?.data?.questions_answers?.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      localStorage.setItem(
        `lastQuestionIndex-${id}`,
        String(currentQuestion + 1)
      );
    }
  };

  const handleQuestionClick = (index: number) => {
    setCurrentQuestion(index);
    localStorage.setItem(`lastQuestionIndex-${id}`, index.toString());
  };

  const totalQuestions = data?.data?.questions_answers?.length ?? 0;

  const answeredCount = Array.isArray(selectedAnswers)
    ? selectedAnswers.filter((a) => a && typeof a.score === 'number').length
    : Object.values(selectedAnswers || {}).filter(
        (a: any) => a && typeof a.score === 'number'
      ).length;

  // payload for submit quiz
  // function createResult() {
  //   // Create an array to store the question and answer pairs
  //   const questionAnswerPairs: { question: string; answer: string }[] = [];

  //   // Iterate through the selected_answer array and filter out only the answered questions
  //   selectedAnswers.forEach((selected, index) => {
  //     if (selected.status === 'answered') {
  //       const idQuestion = data.data.questions_answers[index].id;
  //       const idAnswer = selected.answer;

  //       questionAnswerPairs.push({ question: idQuestion, answer: idAnswer });
  //     }
  //   });

  //   // Construct the result object
  //   const result = {
  //     id: id,
  //     req: {
  //       questions_answers:
  //         questionAnswerPairs.length > 0
  //           ? questionAnswerPairs
  //           : [
  //               {
  //                 question: '00000000-0000-0000-0000-000000000000',
  //                 answer: '00000000-0000-0000-0000-000000000000',
  //               },
  //             ],
  //     },
  //   };

  //   return result;
  // }

  // ? | untuk menyimpan nilai skor user
  function createResult() {
    let right = 0;
    let unanswered = 0;

    const totalQuestions = quizTesMinatInfoDummyData.quiz.total_questions;
    const questionPoint = quizTesMinatInfoDummyData.quiz.question_point;
    const remainingAttempt = quizTesMinatInfoDummyData.quiz.remaining_attempts;

    const questionAnswerPairs: {
      question: string;
      answer: string;
      score: number;
    }[] = [];

    const scores = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 } as any;
    const questionCounts = { R: 0, I: 0, A: 0, S: 0, E: 0, C: 0 } as any;

    selectedAnswers.forEach((selected, index) => {
      const questionData = data.data.questions_answers[index];
      const idQuestion = questionData.id;
      const idAnswer = selected.answer;
      const type = questionData.type;

      if (selected.status === 'answered') {
        right += 1;
        questionAnswerPairs.push({
          question: idQuestion,
          answer: idAnswer,
          score: selected.score || 0,
        });

        if (type && selected.score) {
          scores[type] += selected.score;
          questionCounts[type]++;
        }
      } else {
        unanswered += 1;
      }
    });

    const startTime = JSON.parse(localStorage.getItem('quizStartTime') || '0');
    const timeElapsed = startTime
      ? Math.floor((Date.now() - startTime) / 1000)
      : 0;

    const score = right * questionPoint;

    const totalScorePossible = totalQuestions * questionPoint;
    const status = score >= totalScorePossible * 0.5 ? 'Lulus' : 'Tidak Lulus';

    const timestamp_taken = new Date().toISOString();

    const averageScores = {
      R:
        questionCounts.R > 0
          ? Math.round((scores.R / questionCounts.R) * 20)
          : 0,
      I:
        questionCounts.I > 0
          ? Math.round((scores.I / questionCounts.I) * 20)
          : 0,
      A:
        questionCounts.A > 0
          ? Math.round((scores.A / questionCounts.A) * 20)
          : 0,
      S:
        questionCounts.S > 0
          ? Math.round((scores.S / questionCounts.S) * 20)
          : 0,
      E:
        questionCounts.E > 0
          ? Math.round((scores.E / questionCounts.E) * 20)
          : 0,
      C:
        questionCounts.C > 0
          ? Math.round((scores.C / questionCounts.C) * 20)
          : 0,
    };

    const sortedScores = Object.entries(averageScores)
      .sort(([, a], [, b]) => b - a)
      .map(([type]) => type);
    const dominantCode = sortedScores.slice(0, 3).join('');
    const dominantTypes = sortedScores.slice(0, 3);

    const result = {
      id: id,
      right: right,
      time_elapsed: timeElapsed,
      total_question: totalQuestions,
      remaining_attempt: remainingAttempt - 1,
      score: score,
      status: status,
      timestamp_taken: timestamp_taken,
      scores: averageScores,
      dominantCode: dominantCode,
      dominantTypes: dominantTypes,
      req: {
        questions_answers:
          questionAnswerPairs.length > 0
            ? questionAnswerPairs
            : [
                {
                  question: '00000000-0000-0000-0000-000000000000',
                  answer: '00000000-0000-0000-0000-000000000000',
                  score: 0,
                },
              ],
      },
    };

    return result;
  }

  // const handleSubmit = () => {
  //   // submit when time is up
  //   if (!isAlreadySubmit) {
  //     const answers = createResult();

  //     localStorage.removeItem(`selectedAnswers-${id}`);
  //     localStorage.removeItem(`endTime-${id}`);
  //     localStorage.removeItem(`lastQuestionIndex-${id}`);
  //     mutate(answers, {
  //       onSuccess: () => {
  //         router.push(
  //           `${pathname}/nilai-quiz?total_question=${lengthQuestion}`
  //         );
  //       },
  //       onError: (error) => {
  //         toast.error(error?.response?.data?.message as string);
  //       },
  //     });
  //     setIsAlreadySubmit(true);
  //   }
  // };

  // ? | untuk menyimpan nilai skor user
  const handleSubmit = () => {
    if (!isAlreadySubmit) {
      const result = createResult();
      console.log('Hasil Kuis (Waktu Habis):', result);

      const storedResults = localStorage.getItem('quizTesMinatScoreHistory');
      const scoreHistory = storedResults ? JSON.parse(storedResults) : [];

      scoreHistory.push(result);
      localStorage.setItem(
        'quizTesMinatScoreHistory',
        JSON.stringify(scoreHistory)
      );

      router.push(`${pathname}/result`);

      setIsAlreadySubmit(true);

      localStorage.removeItem(`selectedAnswers-${id}`);
      localStorage.removeItem(`endTime-${id}`);
      localStorage.removeItem(`lastQuestionIndex-${id}`);

      localStorage.removeItem(`selectedAnswers-tes-minat`);
      localStorage.removeItem('quizStartTime');
      localStorage.removeItem(`quiz_start_time`);
    }
  };

  const handleClosePopUpSubmit = () => {
    setPopUpSubmit(false);
  };

  // const handleClickSubmit = () => {
  //   // submit when click kirim button
  //   const answers = createResult();

  //   mutate(answers, {
  //     onSuccess: () => {
  //       router.push(`${pathname}/nilai-quiz?total_question=${lengthQuestion}`);
  //     },
  //     onError: (error) => {
  //       toast.error(error?.response?.data?.message as string);
  //     },
  //   });
  //   setPopUpSubmit(false);
  //   localStorage.removeItem(`selectedAnswers-${id}`);
  //   localStorage.removeItem(`endTime-${id}`);
  //   localStorage.removeItem(`lastQuestionIndex-${id}`);
  // };

  // ? | untuk menyimpan nilai skor user
  const handleClickSubmit = () => {
    if (!isAlreadySubmit) {
      const result = createResult();
      console.log('Hasil Kuis:', result);

      const storedResults = localStorage.getItem('quizTesMinatScoreHistory');
      const scoreHistory = storedResults ? JSON.parse(storedResults) : [];

      scoreHistory.push(result);
      localStorage.setItem(
        'quizTesMinatScoreHistory',
        JSON.stringify(scoreHistory)
      );

      router.push(`${pathname}/result`);

      setPopUpSubmit(false);

      localStorage.removeItem(`selectedAnswers-${id}`);
      localStorage.removeItem(`endTime-${id}`);
      localStorage.removeItem(`lastQuestionIndex-${id}`);

      localStorage.removeItem(`selectedAnswers-tes-minat`);
      localStorage.removeItem('quizStartTime');
      localStorage.removeItem(`quiz_start_time`);
    }
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data?.data)
    return <EmptyState text="Oops! Kamu tidak dapat mengakses kuis ini" />;

  return (
    <>
      <QuizTakeBreadCrumb />
      <div className="pb-8 px-8 md:px-14 lg:px-16">
        <div className="max-w-[1440px] mx-auto min-h-[calc(100vh-190px)]">
          <PopUpQuit />
          <div className="bg-white py-5 sm:py-7 lg:py-14 px-3 sm:px-5 lg:px-10 rounded-lg flex md:gap-5 lg:gap-10">
            <div className="flex flex-col lg:flex-row gap-8 w-full">
              {data && (
                <div className="lg:order-1 order-2 flex flex-col justify-center p-8 border-neutral-300 border-[1px] rounded-2xl w-full lg:w-[calc(100%-400px)]">
                  <div className="mb-8">
                    <LikertQuestion
                      question={data?.data?.questions_answers[currentQuestion]}
                      selectedAnswer={selectedAnswers[currentQuestion]}
                      onAnswerSelect={handleAnswerClick}
                      questionNumber={currentQuestion + 1}
                      totalQuestions={data?.data?.questions_answers?.length}
                      answeredCount={answeredCount}
                    />
                  </div>
                  <div className="mt-8">
                    <QuestionNavigation
                      onPrevious={handlePrevious}
                      onUndecided={handleUndecided}
                      onNext={handleNext}
                      currentQuestion={currentQuestion}
                      lengthQuestions={data?.data?.questions_answers?.length}
                      handleSubmit={() => setPopUpSubmit(true)}
                    />
                  </div>
                </div>
              )}
              <div className="lg:order-2 order-1 w-full lg:w-[400px] flex flex-col gap-4 justify-center lg:justify-start">
                <QuestionList
                  questions={data?.data?.questions_answers}
                  selectedAnswers={selectedAnswers}
                  currentQuestion={currentQuestion}
                  onQuestionClick={handleQuestionClick}
                />
                {data && (
                  <>
                    <CountdownTimer
                      duration={data?.data?.duration}
                      onSubmit={handleSubmit}
                      isAlreadySubmit={isAlreadySubmit}
                      id={id}
                    />
                  </>
                )}
              </div>
            </div>
            <PopUpSubmit
              isOpen={popUpSubmit}
              closeModal={handleClosePopUpSubmit}
              handleClickSubmit={handleClickSubmit}
            />
          </div>
        </div>
      </div>
    </>
  );
};
