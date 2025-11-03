'use client';

import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from '../../../../components/empty-state';
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
} from '@kampus-gratis/apps/kg/hooks/tes-kepemimpinan/quiz/hook';
import { QuizTakeBreadCrumb } from './Breadcrumb';
import {
  quizPramukaInfoDummyData,
  quizPramukaTakeDummyData,
} from '../../constant';
import { PopUpQuit } from './PopUpQuit';
import MultipleChoiceQuestion from './MultipleChoiceQuestion';
import QuestionNavigation from './Question.Navigation';
import QuestionList from './QuestionList';
import CountdownTimer from './CountdownTimer';
import { PopUpSubmit } from './PopUpSubmit';

export const QuizTakeModule = () => {
  const searchParams = useSearchParams();
  const { quizId } = useParams();
  const router = useRouter();
  const pathname = usePathname();

  const lengthQuestion = searchParams.get('total_question');
  const id = quizId as string;
  //   const { data, isLoading } = useGetQuizTakeById(id);

  // TODO | soal quiz start
  const data = quizPramukaTakeDummyData;
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
    // Coba ambil dari localStorage lebih dulu
    const storedSelectedAnswers = localStorage.getItem(`selectedAnswers-${id}`);

    if (storedSelectedAnswers !== null) {
      try {
        return JSON.parse(storedSelectedAnswers);
      } catch (e) {
        console.error('Failed to parse selected answers from localStorage', e);
      }
    }

    // Kalau belum ada di localStorage, inisialisasi default
    const emptyArray = Array(Number(lengthQuestion)).fill({
      answer: '',
      id: '',
      status: 'not-answered',
    });

    return emptyArray;
  });

  useEffect(() => {
    // get selected answers from local storage if exists
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
    localStorage.setItem(
      `selectedAnswers-${id}`,
      JSON.stringify(selectedAnswers)
    );
  }, [selectedAnswers, id]);

  useEffect(() => {
    // set currentQuestion to last question index from local storage
    const lastQuestionIndex = localStorage.getItem(`lastQuestionIndex-${id}`);
    if (lastQuestionIndex !== null) {
      setCurrentQuestion(Number(lastQuestionIndex));
    }
  }, []);

  // ? | untuk time_elapsed di createResult()
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const startTime = localStorage.getItem('quizStartTime');

      if (!startTime) {
        localStorage.setItem('quizStartTime', JSON.stringify(Date.now()));
      }
    }
  }, []);

  const handleAnswerClick = (answerId: string) => {
    // set selected answer
    setSelectedAnswers((prevAnswers: any) =>
      prevAnswers.map((answer: any, index: number) => {
        if (index === currentQuestion) {
          return {
            answer: answerId,
            status: 'answered',
          };
        }
        return answer;
      })
    );
  };

  const handlePrevious = () => {
    // go to previous question
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      localStorage.setItem(
        `lastQuestionIndex-${id}`,
        String(currentQuestion - 1)
      );
    }
  };

  const handleUndecided = () => {
    // set undecided answer
    setSelectedAnswers((prevAnswers: any) =>
      prevAnswers.map((answer: any, index: number) => {
        if (index === currentQuestion) {
          return {
            answer: answer.answer,
            id: answer.id,
            status: 'undecided',
          };
        }

        return answer;
      })
    );
  };

  const handleNext = () => {
    // go to next question
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
    let wrong = 0;
    let unanswered = 0; // Hitung jawaban kosong

    const totalQuestions = quizPramukaInfoDummyData.quiz.total_questions;
    const questionPoint = quizPramukaInfoDummyData.quiz.question_point;
    const remainingAttempt = quizPramukaInfoDummyData.quiz.remaining_attempts;

    const questionAnswerPairs: {
      question: string;
      answer: string;
      correct: boolean;
    }[] = [];

    selectedAnswers.forEach(
      (
        selected: { answer: string; id: string; status: string },
        index: number
      ) => {
        const questionData = data.data.questions_answers[index];
        const idQuestion = questionData.id;
        const idAnswer = selected.answer;

        const correctAnswer = questionData.answers.find(
          (ans: any) => ans.correct
        )?.id;

        if (selected.status === 'answered') {
          const isCorrect = correctAnswer === idAnswer;

          if (isCorrect) {
            right += 1;
          } else {
            wrong += 1;
          }

          questionAnswerPairs.push({
            question: idQuestion,
            answer: idAnswer,
            correct: isCorrect,
          });
        } else {
          unanswered += 1;
        }
      }
    );

    // Ambil waktu mulai dan hitung timeElapsed
    const startTime = JSON.parse(localStorage.getItem('quizStartTime') || '0');
    const timeElapsed = startTime
      ? Math.floor((Date.now() - startTime) / 1000)
      : 0; // Dalam detik

    // Hitung skor berdasarkan jumlah benar * poin per soal
    const score = right * questionPoint;

    // Tentukan status (Lulus jika skor di atas 50% dari total skor maksimal)
    const totalScorePossible = totalQuestions * questionPoint;
    const status = score >= totalScorePossible * 0.5 ? 'Lulus' : 'Tidak Lulus';

    // Tambahkan timestamp untuk tracking kapan kuis diambil
    const timestamp_taken = new Date().toISOString();

    const result = {
      id: id,
      right: right, // ✅ Tetap pakai "right" untuk jumlah jawaban benar
      wrong: wrong + unanswered, // Masukkan unanswered sebagai wrong
      time_elapsed: timeElapsed,
      total_question: totalQuestions,
      remaining_attempt: remainingAttempt - 1,
      score: score,
      status: status,
      timestamp_taken: timestamp_taken, // ✅ Tambahkan timestamp agar bisa diformat di HistoryCard.tsx
      req: {
        questions_answers:
          questionAnswerPairs.length > 0
            ? questionAnswerPairs
            : [
                {
                  question: '00000000-0000-0000-0000-000000000000',
                  answer: '00000000-0000-0000-0000-000000000000',
                  correct: false,
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

      // menghilangkan status 'kuis sedang berlangsung...'
      localStorage.removeItem(`selectedAnswers-tes-kepemimpinan-pramuka`);

      console.log('Hasil Kuis:', result);

      // ✅ Simpan hasil ke localStorage agar bisa diakses di halaman hasil kuis
      const storedResults = localStorage.getItem('quizPramukaScoreHistory');
      const scoreHistory = storedResults ? JSON.parse(storedResults) : [];

      scoreHistory.push(result); // Tambahkan hasil terbaru
      localStorage.setItem(
        'quizPramukaScoreHistory',
        JSON.stringify(scoreHistory)
      );

      // Hapus data jawaban dari localStorage setelah submit
      localStorage.removeItem(`selectedAnswers-${id}`);
      localStorage.removeItem(`endTime-${id}`);
      localStorage.removeItem(`lastQuestionIndex-${id}`);

      // menghilangkan status time_elapsed, dan remainingTime
      localStorage.removeItem('quizStartTime');
      localStorage.removeItem(`quiz_start_time`);

      // Redirect ke halaman hasil kuis dengan parameter yang diperlukan
      router.push(
        `${pathname}/nilai-quiz?score=${result.score}&right=${result.right}&wrong=${result.wrong}&time_elapsed=${result.time_elapsed}&total_question=${result.total_question}&remaining_attempt=${result.remaining_attempt}&status=${result.status}`
      );

      setIsAlreadySubmit(true);
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

      // Simpan hasil ke localStorage agar bisa diakses di halaman hasil kuis
      const storedResults = localStorage.getItem('quizPramukaScoreHistory');
      const scoreHistory = storedResults ? JSON.parse(storedResults) : [];

      scoreHistory.push(result); // Tambahkan hasil terbaru
      localStorage.setItem(
        'quizPramukaScoreHistory',
        JSON.stringify(scoreHistory)
      );

      // Redirect ke halaman hasil kuis dengan parameter yang diperlukan
      router.push(
        `${pathname}/nilai-quiz?score=${result.score}&right=${result.right}&wrong=${result.wrong}&time_elapsed=${result.time_elapsed}&total_question=${result.total_question}&remaining_attempt=${result.remaining_attempt}&status=${result.status}`
      );

      setPopUpSubmit(false);

      // Hapus data jawaban dari localStorage setelah submit
      localStorage.removeItem(`selectedAnswers-${id}`);
      localStorage.removeItem(`endTime-${id}`);
      localStorage.removeItem(`lastQuestionIndex-${id}`);

      // menghilangkan status 'kuis sedang berlangsung...' , time_elapsed, dan remainingTime
      localStorage.removeItem(`selectedAnswers-tes-kepemimpinan-pramuka`);
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
      <div className="pb-8 px-8 md:px-14  lg:px-16 ">
        <div className="max-w-[1440px] mx-auto h-[calc(100vh-190px)]">
          <PopUpQuit />
          <div className="bg-white py-5 sm:py-7 lg:py-14 px-3 sm:px-5 lg:px-10 rounded-lg flex md:gap-5 lg:gap-10">
            <div className="flex flex-col md:flex-row gap-8 w-full">
              {data && (
                <div className="md:order-1 order-2 flex flex-col p-8 border-neutral-300 border-[1px] rounded-2xl w-full md:w-[calc(100%-400px)]">
                  <MultipleChoiceQuestion
                    question={
                      data?.data?.questions_answers[currentQuestion]?.question
                    }
                    answers={
                      data?.data?.questions_answers[currentQuestion].answers
                    }
                    selectedAnswer={selectedAnswers[currentQuestion]}
                    onAnswerClick={handleAnswerClick}
                    currentQuestion={currentQuestion}
                  />
                  <QuestionNavigation
                    onPrevious={handlePrevious}
                    onUndecided={handleUndecided}
                    onNext={handleNext}
                    currentQuestion={currentQuestion}
                    lengthQuestions={data?.data?.questions_answers?.length}
                    handleSubmit={() => setPopUpSubmit(true)}
                  />
                </div>
              )}
              <div className="md:order-2 order-1 w-full md:w-[400px] flex flex-col gap-4 justify-center md:justify-start">
                <QuestionList
                  questions={data?.data?.questions_answers}
                  selectedAnswers={selectedAnswers}
                  currentQuestion={currentQuestion}
                  onQuestionClick={handleQuestionClick}
                />
                {data && (
                  <>
                    <CountdownTimer
                      duration={Number(data?.data?.duration)}
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
