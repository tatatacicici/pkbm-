'use client';

import { ReactElement } from 'react';
import { TCheckbox } from './types';
import { FieldValues, useController } from 'react-hook-form';
import clsx from 'clsx';

export const Checkbox = <T extends FieldValues>({
  variant = 'lg',
  status = 'none',
  ...props
}: TCheckbox<T>): ReactElement => {
  const inputStatus = clsx({
    'text-red-500': status === 'error',
    // 'tex': status === 'success',
    'text-yellow-500': status === 'warning',
    'text-neutral-500': status === 'none' || status === undefined,
  });

  const messageStatus = clsx({
    'text-error-base': status === 'error',
    'text-warning-base': status === 'warning',
    'text-success-base': status === 'success',
    hidden: status === 'none',
  });

  const { field } = useController(props);
  return (
    <>
      <label
        htmlFor={props.name}
        className={`
       ${props.className} 
       ${props.disabled && 'text-neutral-500'}
       ${variant === 'lg' && 'text-[18px]'}
       ${variant === 'md' && 'text-[16px]'}
       ${variant === 'sm' && 'text-[14px]'}
      flex items-center ${inputStatus}`}
      >
        <input
          {...props}
          {...field}
          type="checkbox"
          id={props.name}
          className="mr-2 accent-primary-base"
        />
        {props.label} {props.required && '*'}
      </label>
      {props.message && (
        <div className="flex flex-col items-start w-full gap-x-1">
          <span className={`${messageStatus} text-xs`}>{props.message}</span>
        </div>
      )}
    </>
  );
};
