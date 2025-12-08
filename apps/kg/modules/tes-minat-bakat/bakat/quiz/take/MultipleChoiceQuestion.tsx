'use client';

import { TMultipleChoiceQuestion } from '@kampus-gratis/apps/kg/types/quiz';
import { translateIndex } from '@kampus-gratis/apps/kg/utils/quizFunction';
import Image from 'next/image';

const MultipleChoiceQuestion = ({
  question,
  answers,
  selectedAnswer,
  onAnswerClick,
  currentQuestion,
}: TMultipleChoiceQuestion) => {
  return (
    <div className="text-center flex flex-col items-center justify-center  mb-4">
      {/* <p className="font-semibold text-xl  mb-10">
        {currentQuestion + 1}. {question}
      </p> */}
      <Image
        src={question}
        alt={`Soal nomor ${currentQuestion + 1}`}
        width={500}
        height={300}
        className="mb-10 mx-auto object-contain"
      />

      {answers?.map((answer, index) => {
        return (
          <label
            key={index}
            className={`block mb-5 w-full md:max-w-[550px] md:w-[80%] py-3 rounded-md font-medium cursor-pointer border-2 tracking-wider ${
              selectedAnswer?.answer === answer?.id
                ? 'bg-sky-base text-white border-transparent'
                : 'bg-white text-sky-base border-sky-base'
            }`}
          >
            <input
              type="radio"
              name="answers"
              value={answer?.id}
              checked={selectedAnswer?.answer === answer?.id}
              onChange={() => onAnswerClick(answer?.id)}
              className="mr-2 w-0 h-0"
            />
            {/* {translateIndex(index.toString())}. {answer?.answer} */}
            {answer?.answer}.
          </label>
        );
      })}
    </div>
  );
};

export default MultipleChoiceQuestion;
