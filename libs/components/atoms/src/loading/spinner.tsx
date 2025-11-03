import { FC, ReactElement } from 'react';

export const LoadingSpinner: FC = (): ReactElement => {
  return (
    <div className="flex flex-col gap-5 h-screen w-full justify-center items-center">
      <div className="flex gap-2">
        {/* <div className="w-5 h-5 rounded-full bg-blue-base animate-bounce [animation-delay:-0.6s]"></div>
        <div className="w-5 h-5 rounded-full bg-blue-base animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-5 h-5 rounded-full bg-blue-base animate-bounce"></div> */}
        <div className="w-5 h-5 rounded-full bg-sky-base animate-bounce [animation-delay:-0.6s]"></div>
        <div className="w-5 h-5 rounded-full bg-sky-base animate-bounce [animation-delay:-0.3s]"></div>
        <div className="w-5 h-5 rounded-full bg-sky-base animate-bounce"></div>
      </div>
    </div>
  );
};
