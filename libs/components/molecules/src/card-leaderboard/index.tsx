import React, { FC } from 'react';
import Image from 'next/image';

interface Component {
  no: number;
  name: string;
  score: number;
  avatar: string;
  hasMySelf?: boolean;
}

export const CardLeaderBoard: FC<Component> = ({
  no,
  name,
  score,
  avatar,
  hasMySelf,
}) => {
  return (
    <div className="h-full w-full justify-between items-center flex flex-row gap-5">
      <div className="justify-center items-center flex-row">
        <span>{no}</span>
        <div className="rounded-full w-8 h-8">
          <img src={avatar} alt="" />
        </div>
        {hasMySelf ? (
          <div className="flex-col flex justify-center items-center gap-2"></div>
        ) : (
          <div className="flex-row flex justify-center items-center gap-2">
            <span>{name}</span>
          </div>
        )}
      </div>
      <div className="flex justify-center items-center">
        <span>{score} poin</span>
      </div>
    </div>
  );
};
