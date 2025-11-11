'use client';

import { BsExclamationCircleFill } from 'react-icons/bs';
import React, { useEffect, useRef, useState } from 'react';
import { useRemainingTimeQuiz } from '@kampus-gratis/apps/kg/hooks/try-out/quiz/hook';
import { TCountdownTimer } from '@kampus-gratis/apps/kg/types/quiz';

const CountdownTimer: React.FC<TCountdownTimer> = ({
  duration,
  onSubmit,
  isAlreadySubmit,
  id,
}) => {
  const { setRemainingTime: setGlobalRemaingTime } = useRemainingTimeQuiz();
  // const [remainingTime, setRemainingTime] = useState(1800);
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

  // useEffect(() => {
  //   remainingTimeRef.current = remainingTime;

  //   const timerInterval = setInterval(() => {
  //     // if (remainingTimeRef.current - 5 <= 0) {
  //     // diubah biar otomatis submit kalo udah bener2 abis
  //     if (remainingTimeRef.current <= 0) {
  //       clearInterval(timerInterval);

  //       onSubmit();
  //     } else {
  //       setRemainingTime((prevRemainingTime) => prevRemainingTime - 1);
  //       setGlobalRemaingTime(remainingTime);
  //     }
  //   }, 1000);

  //   return () => {
  //     clearInterval(timerInterval);
  //   };
  // }, [remainingTime]);

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (remainingTimeRef.current <= 0) {
        clearInterval(timerInterval);
        onSubmit();
      } else {
        setRemainingTime((prevRemainingTime) => {
          const updatedTime = prevRemainingTime - 1;
          remainingTimeRef.current = updatedTime;
          setGlobalRemaingTime(updatedTime);
          return updatedTime;
        });
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime]);

  // TODO | useEffect tambahan start
  useEffect(() => {
    const savedStartTime = localStorage.getItem(`quiz_start_time`);
    const currentTime = Math.floor(Date.now() / 1000);

    if (savedStartTime) {
      const elapsedTime = currentTime - parseInt(savedStartTime, 10);
      const newRemainingTime = Math.max(duration - elapsedTime, 0);
      setRemainingTime(newRemainingTime);
      remainingTimeRef.current = newRemainingTime;
    } else {
      localStorage.setItem(`quiz_start_time`, currentTime.toString());
    }
  }, [id, duration]);
  // TODO | useEffect tambahan end

  return (
    <div className="flex justify-center lg:justify-start">
      <div className="text-red-700 bg-red-200 flex gap-2 w-fit py-3 px-5 rounded-lg text-sm items-center">
        <BsExclamationCircleFill className="text-red-700 w-5 h-5" /> Sisa Waktu:{' '}
        {formatTime(remainingTime)}
      </div>
    </div>
  );
};

export default CountdownTimer;
