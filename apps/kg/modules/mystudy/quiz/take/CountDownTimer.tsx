'use client';

import { BsExclamationCircleFill } from 'react-icons/bs';
import React, { useEffect, useRef, useState } from 'react';
import { useRemainingTimeQuiz } from '../../../../hooks/mystudy/quiz/hook';
import { TCountdownTimer } from '../../../../types/quiz';

const CountdownTimer: React.FC<TCountdownTimer> = ({
  duration,
  onSubmit,
  isAlreadySubmit,
  id,
}) => {
  // const [remainingTime, setRemainingTime] = useState(1800);
  const { setRemainingTime: setGlobalRemaingTime } = useRemainingTimeQuiz();
  const [remainingTime, setRemainingTime] = useState(duration);
  const remainingTimeRef = useRef<number>(duration);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secondsLeft = seconds % 60;

    const pad = (value: number) =>
      value < 10 ? `0${value}` : value.toString();

    return `${pad(hours)}:${pad(minutes)}:${pad(secondsLeft)}`;
  };

  useEffect(() => {
    remainingTimeRef.current = remainingTime;

    const timerInterval = setInterval(() => {
      if (remainingTimeRef.current - 5 <= 0) {
        clearInterval(timerInterval);

        onSubmit();
      } else {
        setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
        setGlobalRemaingTime(remainingTime);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime]);

  return (
    <div className="flex justify-center md:justify-start">
      <div className="text-red-700 bg-red-200 flex gap-2 w-fit py-3 px-5 rounded-lg text-sm items-center">
        <BsExclamationCircleFill className="text-red-700 w-5 h-5" /> Sisa Waktu:{' '}
        {formatTime(remainingTime)}
      </div>
    </div>
  );
};

export default CountdownTimer;
