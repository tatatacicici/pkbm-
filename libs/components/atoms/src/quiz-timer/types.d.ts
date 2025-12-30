import { StaticImageData } from "next/image";
import { TQuizSubmitPayload } from "../../type";

export type TCountdownTimerProps = {
  targetHours: number;
};

export type TCountdownTimerReturn = {
  hours: string;
  minutes: string;
  seconds: string;
  isComplete: boolean;
};

export type TRemainingTimeProps = {
  expiryTimestamp: number;
  icon: StaticImageData;
};
