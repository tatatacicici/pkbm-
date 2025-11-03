'use client';

import { useState, useEffect } from 'react';
import { TCountdownTimerProps, TCountdownTimerReturn } from './types';

export const useCountdownTimer = ({
  targetHours,
}: TCountdownTimerProps): TCountdownTimerReturn => {
  const [targetTime] = useState(() => {
    const storedTargetTime = localStorage.getItem('targetTime');
    if (storedTargetTime) {
      return new Date(JSON.parse(storedTargetTime));
    } else {
      const time = new Date();
      time.setMinutes(time.getMinutes() + targetHours);
      return time;
    }
  });

  const [timeRemaining, setTimeRemaining] = useState(() => {
    const storedTimeRemaining = localStorage.getItem('timeRemaining');
    if (storedTimeRemaining) {
      return Math.max(JSON.parse(storedTimeRemaining), 0);
    } else {
      const timeDiff = targetTime.getTime() - Date.now();
      return timeDiff > 0 ? timeDiff : 0;
    }
  });

  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeRemaining(() => {
        const timeDiff = targetTime.getTime() - Date.now();

        if (timeDiff <= 0) {
          localStorage.removeItem('timeRemaining');
          localStorage.removeItem('targetTime');
          setIsComplete(true);
          return 0;
        }

        return timeDiff;
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, [targetTime]);

  useEffect(() => {
    localStorage.setItem('targetTime', JSON.stringify(targetTime));
  }, [targetTime]);

  useEffect(() => {
    localStorage.setItem('timeRemaining', JSON.stringify(timeRemaining));
  }, [timeRemaining]);

  const hours = String(Math.floor(timeRemaining / (1000 * 60 * 60))).padStart(
    2,
    '0'
  );
  const minutes = String(
    Math.floor((timeRemaining / (1000 * 60)) % 60)
  ).padStart(2, '0');
  const seconds = String(Math.floor((timeRemaining / 1000) % 60)).padStart(
    2,
    '0'
  );

  return {
    hours,
    minutes,
    seconds,
    isComplete,
  };
};
