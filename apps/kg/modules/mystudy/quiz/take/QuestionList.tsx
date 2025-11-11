'use client';

import { TQuestionList } from '../../../../types/quiz';

const QuestionList = ({
  questions,
  currentQuestion,
  onQuestionClick,
  selectedAnswers,
}: TQuestionList) => {
  return (
    <div className="flex flex-col gap-8 border-[2px] border-neutral-300 rounded-xl p-4 lg:p-8">
      <h4 className="text-lg font-semibold">Daftar Soal:</h4>
      <div className="flex flex-wrap gap-2">
        {questions?.map((question, index) => {
          return (
            <button
              key={index}
              onClick={() => onQuestionClick(index)}
              className={`mr-2 mb-2 w-[48px] h-[48px] border-[2px] p-2 rounded ${
                selectedAnswers[index]?.status === 'answered'
                  ? 'bg-sky-base text-white border-transparent'
                  : selectedAnswers[index]?.status === 'not-answered' &&
                    index !== currentQuestion
                  ? 'bg-white text-sky-base border-sky-base'
                  : selectedAnswers[index]?.status === 'not-answered' &&
                    index === currentQuestion
                  ? 'font-bold bg-primary-300 text-white border-transparent'
                  : 'bg-yellow-500 text-white border-transparent'
              } `}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionList;
