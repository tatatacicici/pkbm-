'use client';

import { TMultipleChoiceQuestion } from '@kampus-gratis/apps/kg/types/quiz';
import { translateIndex } from '@kampus-gratis/apps/kg/utils/quizFunction';
import Image from 'next/image';
import { quizTesMinatInfoDummyData } from '../../../constant';

const MultipleChoiceQuestion = ({
  question,
  answers,
  selectedAnswer,
  onAnswerClick,
  currentQuestion,
}: TMultipleChoiceQuestion) => {
  // const totalQuestions = 10;
  const totalQuestions = quizTesMinatInfoDummyData.quiz.total_questions;
  const progress = ((currentQuestion + 1) / totalQuestions) * 100;
  const countdownTime = '09.20';

  return (
    <div className="flex flex-col gap-8">
      {/* Header Bar dengan Soal & Waktu */}
      <div className="w-full bg-white border-b border-gray-200 py-2 px-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white bg-orange-400 px-3 py-1 rounded-full text-sm font-medium w-16 justify-center">
          {currentQuestion + 1}/{totalQuestions}
        </div>
        <div className="flex items-center gap-2 bg-orange-400 px-3 py-1 rounded-full text-white text-sm font-medium">
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6v6l4 2m-4 8a10 10 0 100-20 10 10 0 000 20z"
            />
          </svg>
          {countdownTime}
        </div>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-100 h-2">
        <div
          className="bg-blue-600 h-full transition-all duration-300"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Judul & Instruksi */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold mb-2">
          Seberapa Besar Minatmu Terhadap Profesi Berikut
        </h1>
        <div className="flex items-center justify-center gap-2 text-sm text-neutral-600">
          <div className="w-5 h-5 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold">
            !
          </div>
          <p>
            Beri penilaian dari 1 (sangat suka) hingga 12 (sangat tidak suka)
            untuk masing-masing profesi!
          </p>
        </div>
      </div>

      {/* Daftar Profesi */}
      <div className="grid grid-cols-1 gap-4 max-w-5xl">
        {answers?.map((answer, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-xl border border-gray-200 flex flex-col gap-2"
          >
            {/* <div className="text-base font-medium">{answer?.answer}</div> */}
            <div className="flex items-center justify-between gap-2 overflow-x-auto">
              <span className="text-xs whitespace-nowrap">Perawat</span>
              <span className="text-xs whitespace-nowrap">Sangat Suka</span>

              <div className="flex items-center justify-center gap-3">
                {Array.from({ length: 12 }).map((_, idx) => {
                  const value = (idx + 1).toString();
                  return (
                    <label
                      key={idx}
                      className="flex flex-col items-center text-xs gap-1"
                    >
                      <span className="text-[10px]">{value}</span>
                      <input
                        type="radio"
                        name={`answers-${answer?.id}`}
                        value={value}
                        checked={
                          selectedAnswer?.answer === `${answer?.id}-${value}`
                        }
                        onChange={() => onAnswerClick(`${answer?.id}-${value}`)}
                        className="w-4 h-4 border border-gray-400 rounded-full checked:bg-blue-500 checked:border-blue-500 cursor-pointer"
                      />
                    </label>
                  );
                })}
              </div>

              <span className="text-xs whitespace-nowrap">
                Sangat Tidak Suka
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>

    // <div className="text-center flex flex-col items-center justify-center  mb-4">
    //   <p className="font-semibold text-xl  mb-10">
    //     {currentQuestion + 1}. {question}
    //   </p>
    //   <Image
    //     src={question}
    //     alt={`Soal nomor ${currentQuestion + 1}`}
    //     width={500}
    //     height={300}
    //     className="mb-10 mx-auto object-contain"
    //   />

    //   {answers?.map((answer, index) => {
    //     return (
    //       <label
    //         key={index}
    //         className={`block mb-5 w-full md:max-w-[550px] md:w-[80%] py-3 rounded-md font-medium cursor-pointer border-2 tracking-wider ${
    //           selectedAnswer?.answer === answer?.id
    //             ? 'bg-primary-500 text-white border-transparent'
    //             : 'bg-white text-primary-500 border-primary-500'
    //         }`}
    //       >
    //         <input
    //           type="radio"
    //           name="answers"
    //           value={answer?.id}
    //           checked={selectedAnswer?.answer === answer?.id}
    //           onChange={() => onAnswerClick(answer?.id)}
    //           className="mr-2 w-0 h-0"
    //         />
    //         {translateIndex(index.toString())}. {answer?.answer}
    //         {answer?.answer}.
    //       </label>
    //     );
    //   })}
    // </div>
  );
};

export default MultipleChoiceQuestion;
