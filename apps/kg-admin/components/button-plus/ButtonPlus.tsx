import React from 'react';

type TButton = {
  title: string;
  buttonStyle: string;
  plus?: boolean;
  onClick?: () => void;
};

const ButtonPlus = ({ title, buttonStyle, plus, onClick }: TButton) => {
  return (
    <button
      className={`${buttonStyle} flex ${plus ? 'gap-2 items-center' : 'gap-0'}`}
      onClick={onClick}
    >
      {plus ? (
        <span className="text-xl font-medium">&#43;</span>
      ) : (
        <span></span>
      )}
      {title}
    </button>
  );
};

export default ButtonPlus;
