'use client';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-hot-toast';
import { FaArrowLeft, FaRegCircle, FaRegCircleCheck } from 'react-icons/fa6';
import usePostAssessment from '../../../../../hooks/mystudy/teacher-assesment/post-assessment/hook';
import ConfirmModalTeacherAssesment from '../confirm-modal';

interface Question {
  id: string;
  question: string;
  type: 'OPTION' | 'SCORE' | 'ESSAY';
  answers: number[];
}

interface QuizProps {
  questions?: Question[]; // Make questions optional
}

export type TAnswer = {
  question_id: string;
  answer: string;
};

const QuizComponent: React.FC<QuizProps> = ({ questions = [] }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Array<TAnswer>>([]);
  const currentQuestion = questions[currentQuestionIndex];
  const router = useRouter();

  const [result, setResult] = useState({
    answers: answers,
  });
  React.useEffect(() => {
    setResult({
      answers: answers,
    });
  }, [answers]);

  const [showPopup, setShowPopup] = useState(false);
  const params = useParams();
  const { subjectId, sessionId } = params;
  const { mutate, isLoading } = usePostAssessment();

  const handleNext = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePrev = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const handleAnswer = (answer: number | string) => {
    const existingAnswerIndex = answers.findIndex(
      (ans) => ans.question_id === questions[currentQuestionIndex].id
    );

    if (existingAnswerIndex !== -1) {
      // Update existing answer if question already answered
      setAnswers((prevAnswers) => [
        ...prevAnswers.slice(0, existingAnswerIndex),
        {
          question_id: questions[currentQuestionIndex].id,
          answer: answer.toString(),
        },
        ...prevAnswers.slice(existingAnswerIndex + 1),
      ]);
    } else {
      // Add a new answer if the question is not answered yet
      setAnswers((prevAnswers) => [
        ...prevAnswers,
        {
          question_id: questions[currentQuestionIndex].id,
          answer: answer.toString(),
        },
      ]);
    }
  };

  const handleFinish = () => {
    if (answers.length !== questions.length) {
      toast.error('Kamu belum menjawab semua pertanyaan');
      return;
    }
    setShowPopup(true);
  };
  const handleSubmit = async () => {
    const payload = {
      subjectId: subjectId as string,
      sessionId: sessionId as string,
      payload: result,
    };
    try {
      mutate(payload, {
        onSuccess: () => {
          toast.success('Penilaian Pengajar Berhasil Dikirim!');
          router.push(`/studi-ku/${subjectId}/penilaian-pengajar/${sessionId}`);
        },
        onError: (err) => {
          toast.error(
            err?.response?.data.message || 'Gagal Mengirim Penilaian Pengajar'
          );
        },
      });
      setShowPopup(false);
    } catch (error) {
      toast.error('Gagal Mengirim Penilaian Pengajar');
    }
  };
  const renderQuestion = () => {
    if (!currentQuestion) {
      return <div>Question not found</div>;
    }

    return (
      <div>
        <h2 className="text-xl font-semibold pt-5">
          {currentQuestion.question}
        </h2>
        {currentQuestion.type === 'OPTION' && (
          <>
            <h3 className="text-sm text-slate-500">*Pilih salah satu</h3>
            <div className="flex flex-col md:flex-row gap-2 mt-4">
              {currentQuestion?.answers &&
                currentQuestion.answers.map((option) => (
                  <label
                    htmlFor={`${currentQuestion.id}-${option}`}
                    key={option}
                    className={`
                  w-full cursor-pointer flex space-x-5 px-4 py-3 rounded-lg transition items-center gap-2 group
                  ${
                    answers.find(
                      (ans) => ans.question_id === currentQuestion.id
                    )?.answer === option.toString()
                      ? 'bg-primary-400 text-white border-primary-400'
                      : 'border-primary-400 hover:bg-primary-400 hover:text-white hover:border-primary-400 text-primary-400 bg-[#e2f2fc]'
                  }`}
                  >
                    {answers.find(
                      (ans) => ans.question_id === currentQuestion.id
                    )?.answer === option.toString() ? (
                      <FaRegCircleCheck className="text-white" />
                    ) : (
                      <FaRegCircle className="text-primary-400 group-hover:text-white" />
                    )}
                    <input
                      type="radio"
                      id={`${currentQuestion.id}-${option}`}
                      name={`${currentQuestion.id}-options`}
                      value={option}
                      onChange={() => handleAnswer(option)}
                      checked={
                        answers.find(
                          (ans) => ans.question_id === currentQuestion.id
                        )?.answer === option.toString()
                      }
                      className="hidden peer"
                    />
                    {option === 1
                      ? 'Sangat Baik'
                      : option === 2
                      ? 'Baik'
                      : option === 3
                      ? 'Biasa Saja'
                      : option === 4
                      ? 'Tidak Baik'
                      : 'Sangat Tidak Baik'}
                  </label>
                ))}
            </div>
          </>
        )}
        {currentQuestion.type === 'SCORE' && (
          <div className="flex flex-col gap-2 mt-4">
            <h3 className="text-sm text-slate-500">*Pilih salah satu</h3>
            <div className="flex flex-col md:flex-row gap-2">
              {currentQuestion &&
                currentQuestion.answers.map((score) => (
                  <label
                    htmlFor={`${currentQuestion.id}-${score}`}
                    key={score}
                    className={`
                  w-full cursor-pointer flex space-x-5 px-4 py-3 rounded-lg transition items-center gap-2 group justify-center
                  ${
                    answers.find(
                      (ans) => ans.question_id === currentQuestion.id
                    )?.answer === score.toString()
                      ? 'bg-primary-400 text-white border-primary-400'
                      : 'border-primary-400 hover:bg-primary-400 hover:text-white hover:border-primary-400 text-primary-400 bg-[#e2f2fc]'
                  }`}
                  >
                    {answers.find(
                      (ans) => ans.question_id === currentQuestion.id
                    )?.answer === score.toString() ? (
                      <FaRegCircleCheck className="text-white" />
                    ) : (
                      <FaRegCircle className="text-primary-400 group-hover:text-white" />
                    )}
                    <input
                      type="radio"
                      id={`${currentQuestion.id}-${score}`}
                      name={`${currentQuestion.id}-options`}
                      value={score}
                      onChange={() => handleAnswer(score)}
                      checked={
                        answers.find(
                          (ans) => ans.question_id === currentQuestion.id
                        )?.answer === score.toString()
                      }
                      className="hidden peer"
                    />
                    {score}
                  </label>
                ))}
            </div>
          </div>
        )}
        {currentQuestion.type === 'ESSAY' && (
          <>
            <textarea
              className="w-full border rounded-md h-[20vh] px-3 py-2 mt-4 focus:bg-white focus:ring-0 focus:outline-primary-400 placeholder:text-slate-500 transition"
              placeholder="Masukkan tanggapan Anda ..."
              onChange={(e: any) => handleAnswer(e.target.value)}
              minLength={36}
              value={
                answers.find((ans) => ans.question_id === currentQuestion.id)
                  ?.answer ?? ''
              }
            />
            <div className="text-sm text-slate-500 mb-2">
              *Minimal 36 karakter
            </div>
          </>
        )}
        <ConfirmModalTeacherAssesment
          isOpen={showPopup}
          closeModal={() => setShowPopup(false)}
          confirmAction={handleSubmit}
          title="Kirim Penilaian"
          description="Apakah kamu yakin ingin mengirim penilaian ini?"
          confirmText="Kirim Penilaian"
          cancelText="Tinjau Kembali"
          isSubmitting={isLoading}
        />
      </div>
    );
  };

  return (
    <>
      {!currentQuestion ? (
        <div className="flex flex-col space-y-10 h-[200px] pt-10 place-items-center w-full">
          <p className="text-2xl">Kamu Sudah Menjawab Penilaian Ini</p>
          {/* <button
            className="bg-blue-base hover:bg-blue-base/80 text-white px-5 py-2 border rounded"
            onClick={() => router.push(`/studi-ku/${subjectId}`)}
          > */}
          <button
            className="bg-sky-base hover:bg-sky-base/80 text-white px-5 py-2 border rounded"
            onClick={() => router.push(`/studi-ku/${subjectId}`)}
          >
            Kembali
          </button>
        </div>
      ) : (
        <div>
          {renderQuestion()}
          <div className="flex place-items-center justify-between mt-4 flex-wrap">
            <button
              onClick={handlePrev}
              className={`text-sky-base flex space-x-3 place-items-center border border-sky-base hover:bg-sky-base hover:text-white transition-all rounded-lg px-4 py-1.5 ${
                currentQuestionIndex === 0 ? 'invisible' : 'visible'
              }`}
            >
              <FaArrowLeft />
              <p>Kembali</p>
            </button>
            <button
              onClick={
                currentQuestionIndex === questions.length - 1
                  ? handleFinish
                  : handleNext
              }
              className="bg-sky-base hover:bg-sky-base/80 text-white px-5 py-2 border rounded-lg transi"
            >
              {currentQuestionIndex === questions.length - 1
                ? 'Kirim Penilaian'
                : 'Selanjutnya'}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizComponent;
