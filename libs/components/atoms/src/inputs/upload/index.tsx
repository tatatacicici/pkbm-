'use client';

import { Info } from 'lucide-react';
import { ReactElement, useState } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { TUploadFieldProps } from './types';

export const UploadField = <T extends FieldValues>(
  props: TUploadFieldProps<T>
): ReactElement => {
  const { field } = useController(props);
  const [getName, setName] = useState('');

  return (
    <section className="flex flex-col w-auto my-1 gap-y-2 ">
      {props.label && (
        <div>
          <label
            htmlFor={props.name}
            className={`text-[#000] ${
              props.variant === 'lg'
                ? 'text-[18px] font-bold'
                : props.variant === 'md'
                ? 'text-[16px] font-bold'
                : props.variant === 'sm'
                ? 'text-[14px] font-bold'
                : ''
            } `}
          >
            {props.label}
            {props.required && (
              <span className="ml-1 font-bold  text-error-600">*</span>
            )}
          </label>
          {props.hint && (
            <span className="text-xs gap-1 font-medium flex items-center">
              <Info size={14} />
              {props.hint}
            </span>
          )}
        </div>
      )}

      <label className="mb-2" htmlFor={props.name}>
        <section
          className={`${
            props.status === 'error' && ' border-error-400'
          } flex overflow-hidden border mb-1 rounded-lg ${props.className}`}
        >
          <div className="w-full flex items-center ">
            <h1
              // className={`w-fit h-full flex items-center text-white py-3 transition-colors ease-in-out duration-300 px-4 rounded-l-lg ${
              //   props.disabled
              //     ? 'bg-neutral-300'
              //     : 'bg-primary-400 hover:bg-primary-600 cursor-pointer'
              // }`}
              className={`w-fit h-full flex items-center text-white py-3 transition-colors ease-in-out duration-300 px-4 rounded-l-lg ${
                props.disabled
                  ? 'bg-neutral-300'
                  : 'bg-sky-base hover:bg-sky-base/80 cursor-pointer'
              }`}
            >
              Pilih File
            </h1>
            <p
              className={`${
                props.status === 'error' ? 'text-error-500 italic' : ''
              } px-4 text-xs`}
            >
              {getName ||
              (typeof field.value === 'string' &&
                field.value.match(/administration_[\w-]+\.(jpg|pdf|png|jpeg)/))
                ? getName ||
                  field.value.match(/administration_[\w-]+\.(jpg|pdf|png|jpeg)/)
                : 'Tidak ada file yang dipilih'}
            </p>
          </div>
          <div className="hidden md:block w-max">
            <p className="whitespace-nowrap px-4 py-3 lg:py-3 bg-[#E9F6FD] text-neutral-600 text-xs lg:text-sm h-full flex items-center">
              {props.accepted}
            </p>
          </div>
        </section>
        <span
          className={`${
            props.status === 'error'
              ? 'text-error-base'
              : props.status === 'success'
              ? 'text-success-base'
              : props.status === 'warning'
              ? 'text-warning-base'
              : ''
          } text-xs`}
        >
          {props.message}
        </span>
      </label>

      <input
        {...props}
        onChange={(event) => {
          field.onChange(event.target.files);
          setName(event.target?.files?.[0]?.name as string);
          props?.onChange?.(event);
        }}
        id={props.name}
        type="file"
        disabled={props.disabled}
        className={`
            ${
              props.status === 'error' &&
              'focus:ring-1 focus:ring-error-base bg-error-100 placeholder:text-white ring-1 ring-error-base text-sm'
            }

            ${
              props.status === 'success' &&
              'focus:ring-1 focus:ring-success-base bg-success-100 text-sm'
            }

            ${
              props.status === 'warning' &&
              'focus:ring-1 focus:ring-warning-base bg-warning-100 text-sm'
            }

            ${
              !props.status ||
              (props.status === 'none' &&
                `border-[0.5px] border-neutral-400 shadow-sm ${props.className}`)
            }

           rounded-lg p-4 outline-none focus:outline-none
        `}
        hidden
      />
    </section>
  );
};
