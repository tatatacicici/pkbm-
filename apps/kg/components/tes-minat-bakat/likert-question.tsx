'use client';

import React from 'react';

interface LikertQuestionProps {
  question: {
    id: string;
    question: string;
    type: string;
    answers: Array<{
      id: string;
      answer: string;
      score: number;
    }>;
  };
  selectedAnswer: {
    answer: string;
    id: string;
    status: string;
    score?: number;
  };
  onAnswerSelect: (answerId: string, score: number) => void;
  questionNumber: number;
  totalQuestions: number;
  answeredCount: number;
}

export const LikertQuestion: React.FC<LikertQuestionProps> = ({
  question,
  selectedAnswer,
  onAnswerSelect,
  questionNumber,
  totalQuestions,
  answeredCount,
}) => {
  const likertOptions = [
    {
      id: '1',
      label: 'Sangat Tidak Setuju',
      score: 1,
      color:
        'bg-red-100 border-red-300 text-red-700 hover:bg-red-400 hover:shadow-lg',
      selectedColor: 'bg-red-400 border-red-800 text-red-800',
    },
    {
      id: '2',
      label: 'Tidak Setuju',
      score: 2,
      color:
        'bg-orange-100 border-orange-300 text-orange-700 hover:bg-orange-400 hover:shadow-lg',
      selectedColor: 'bg-orange-400 border-orange-800 text-orange-800',
    },
    {
      id: '3',
      label: 'Netral',
      score: 3,
      color:
        'bg-yellow-100 border-yellow-300 text-yellow-700 hover:bg-yellow-400 hover:shadow-lg',
      selectedColor: 'bg-yellow-400 border-yellow-800 text-yellow-800',
    },
    {
      id: '4',
      label: 'Setuju',
      score: 4,
      color:
        'bg-green-100 border-green-300 text-green-700 hover:bg-green-400 hover:shadow-lg',
      selectedColor: 'bg-green-400 border-green-800 text-green-800',
    },
    {
      id: '5',
      label: 'Sangat Setuju',
      score: 5,
      color:
        'bg-blue-100 border-blue-300 text-blue-700 hover:bg-blue-400 hover:shadow-lg',
      selectedColor: 'bg-blue-400 border-blue-800 text-blue-800',
    },
  ];

  const percent = Math.min(
    100,
    Math.round(((answeredCount || 0) / Math.max(totalQuestions || 0, 1)) * 100)
  );

  return (
    <div className="bg-white border-2 rounded-lg shadow-lg p-6 max-w-4xl mx-auto">
      <div className="mb-12 md:mb-20">
        <div className="flex justify-between items-center mb-3">
          <span className="text-base font-semibold text-gray-700">
            Soal {questionNumber} dari {totalQuestions}
          </span>
          <span className="text-base font-semibold text-sky-base">
            {percent}%
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-gradient-to-r from-sky-base to-red-base h-4 rounded-full transition-all duration-300 shadow-sm"
            style={{ width: `${percent}%` }}
          />
        </div>
      </div>
      <div className="mb-10 md:mb-20">
        <div className="mb-2 flex justify-start">
          <span
            className={`inline-block px-3 py-1 rounded-full text-xs font-bold mr-2 ${
              question.type === 'R'
                ? 'bg-blue-200 text-blue-800'
                : question.type === 'I'
                ? 'bg-green-200 text-green-800'
                : question.type === 'A'
                ? 'bg-purple-200 text-purple-800'
                : question.type === 'S'
                ? 'bg-orange-200 text-orange-800'
                : question.type === 'E'
                ? 'bg-red-200 text-red-800'
                : question.type === 'C'
                ? 'bg-gray-200 text-gray-800'
                : 'bg-gray-100 text-gray-600'
            }`}
          >
            {question.type}
          </span>
        </div>
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 text-center border-2 border-sky-base rounded-full p-5 hover:shadow-lg hover:shadow-sky-200 transition-all leading-relaxed">
          {question.question}
        </h2>
      </div>
      <div className="space-y-4 mb-8">
        <div className="text-center mb-4">
          <p className="text-lg font-medium text-gray-700 mb-2">
            Seberapa setuju Anda dengan pernyataan di atas?
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-5 lg:grid-cols-3 xl:grid-cols-5 gap-3">
          {likertOptions.map((option) => {
            const isSelected = selectedAnswer?.score === option.score;
            return (
              <button
                key={option.id}
                onClick={() => onAnswerSelect(option.id, option.score)}
                className={`
                  p-4 rounded-lg border-2 transition-all 
                  ${
                    isSelected
                      ? `${option.selectedColor} `
                      : `border-gray-200 ${option.color}`
                  }
                `}
              >
                <div className="text-center">
                  <div
                    className={`text-2xl font-bold mb-2 ${
                      isSelected
                        ? option.selectedColor
                            .split(' ')
                            .find((c) => c.startsWith('text-'))
                        : option.color
                            .split(' ')
                            .find((c) => c.startsWith('text-'))
                    }`}
                  >
                    {option.id}
                  </div>
                  <div className="text-xs font-medium leading-tight">
                    {option.label}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>
      <div className="mt-6 p-4 bg-sky-50 border border-sky-200 rounded-lg">
        <div className="flex items-start">
          <span className="text-sky-600 mr-2">💡</span>
          <div className="text-md text-sky-800">
            <p className="font-medium mb-1">Petunjuk</p>
            <ul className="space-y-1">
              <li>• Pilih jawaban yang paling sesuai dengan pendapat Anda</li>
              <li>• Tidak ada jawaban yang benar atau salah</li>
              <li>• Jawablah dengan jujur sesuai dengan minat Anda</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
