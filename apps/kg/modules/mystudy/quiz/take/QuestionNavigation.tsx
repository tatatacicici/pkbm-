import { TQuestionParams } from '../../../../types/quiz';
import { BiChevronLeft, BiChevronRight } from 'react-icons/bi';
import { BsExclamationCircle } from 'react-icons/bs';

const QuestionNavigation = ({
  onPrevious,
  onUndecided,
  onNext,
  currentQuestion,
  lengthQuestions,
  handleSubmit,
}: TQuestionParams) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-3 mb-4">
      <button
        className={` flex items-center justify-center bg-white border-2 border-sky-base text-sky-base font-bold py-3 px-2 w-full sm:w-1/3 md:w-[160px] rounded hover:opacity-80 transition-all`}
        onClick={onPrevious}
      >
        <BiChevronLeft className="w-6 h-6 inline-block mr-1 text-sky-base" />
        Sebelumnya
      </button>
      <button
        className=" flex items-center justify-center bg-yellow-500 hover:bg-yellow-700 hover:border-yellow-700 border-2 border-yellow-500 text-white font-bold py-3 px-2 w-full sm:w-1/3 md:w-[160px] rounded transition-all"
        onClick={onUndecided}
      >
        <BsExclamationCircle className="w-6 h-6 inline-block mr-2 text-white" />
        Ragu-ragu
      </button>
      <button
        className={` flex items-center justify-center bg-sky-base border-2 border-sky-base text-white font-bold py-3 px-2 w-full sm:w-1/3 md:w-[160px] rounded hover:opacity-80 transition-all`}
        onClick={() => {
          if (currentQuestion === lengthQuestions - 1) handleSubmit();
          else onNext();
        }}
      >
        {currentQuestion !== lengthQuestions - 1 ? 'Selanjutnya' : 'Kirim'}
        <BiChevronRight className="w-6 h-6 inline-block ml-1 text-white" />
      </button>
    </div>
  );
};

export default QuestionNavigation;
