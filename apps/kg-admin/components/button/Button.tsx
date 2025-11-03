import { TButton } from '../../types';
import React from 'react';

const Button = ({ buttonStyle, plus, onClick, children }: TButton) => {
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
      {children}
    </button>
  );
};

export default Button;
