'use client';

import { Listbox } from '@headlessui/react';
import { Info } from 'lucide-react';
import { Key } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { ISelect, TOption } from './types';

export const SelectField = <T extends FieldValues>({
  variant = 'lg',
  defaultValue,
  ...props
}: ISelect<T>) => {
  const getLabel = (value: string) =>
    props.options?.find((item) => item.value === value)?.label;

  const { field } = useController(props);

  return (
    <Listbox
      {...field}
      {...props}
      onChange={(e) => {
        field.onChange(e);
        props.helper && props.helper(e);
      }}
    >
      <div className="flex flex-col gap-y-1 w-auto ">
        <Listbox.Label
          className={` ${props.labelClassName} text-black font-bold 
             ${
               variant === 'lg'
                 ? 'text-[18px] font-bold'
                 : variant === 'md'
                 ? 'text-[16px] font-bold'
                 : variant === 'sm'
                 ? 'text-[14px] font-bold'
                 : ''
             }
            `}
          htmlFor={props.name}
        >
          {props.label}
          {props.required && (
            <span className="text-error-base font-bold ml-1">*</span>
          )}
        </Listbox.Label>

        <div className="relative w-full mt-2">
          <Listbox.Button
            as="button"
            className={` ${props.className}
              px-4 outline-none focus:outline-none w-full bg-white
              ${
                props.disabled &&
                `!border-neutral-100 ring-neutral-400 !bg-neutral-100 !cursor-not-allowed`
              }
              ${props.success && `border-success-base border-[1px]`}
              ${props.error && `border-error-base border-[1px]`}
              ${props.warning && `border-warning-base border-[1px]`}
              ${
                !props.success &&
                !props.error &&
                !props.warning &&
                `border-[1px] border-neutral-400`
              }
              
             ${
               variant === 'lg'
                 ? 'py-4 rounded-lg'
                 : variant === 'md'
                 ? 'py-2 rounded-md'
                 : variant === 'sm'
                 ? 'p-1 rounded-md'
                 : ''
             }
            `}
          >
            {(data) => (
              <div className="flex justify-between items-center">
                <span
                  className={`${props.styletext} ${
                    getLabel(data.value) || defaultValue
                      ? 'text-black'
                      : 'text-neutral-400'
                  }
                       ${
                         variant === 'lg'
                           ? 'text-[18px]'
                           : variant === 'md'
                           ? 'text-[16px]'
                           : variant === 'sm'
                           ? 'text-[14px]'
                           : ''
                       }
                      `}
                >
                  {getLabel(data.value) || defaultValue || props.placeholder}
                </span>
                <ChevronDown />
              </div>
            )}
          </Listbox.Button>

          <Listbox.Options className="absolute bg-white w-full drop-shadow-xl z-10 rounded mt-2 max-h-[400px] overflow-y-auto">
            {props.options?.map(
              (data: TOption, key: Key | null | undefined) => (
                <Listbox.Option
                  key={key}
                  value={data.value}
                  className="px-4 py-2 cursor-pointer hover:bg-neutral-100 hover:rounded"
                >
                  <span
                    className={
                      variant === 'lg'
                        ? 'text-[16px]'
                        : variant === 'md'
                        ? 'text-[14px]'
                        : variant === 'sm'
                        ? 'text-[10px]'
                        : ''
                    }
                  >
                    {data.label}
                  </span>
                  {/* <div className={`${props.border}`}></div> */}
                </Listbox.Option>
              )
            )}
          </Listbox.Options>

          <div className="flex flex-col items-start w-full gap-x-1 pt-2">
            {props.hint && (
              <span className="text-xs gap-1 font-medium flex items-center">
                <Info size={14} />
                {props.hint}
              </span>
            )}
            {props.error && (
              <span className={`text-sm text-error-base`}>{props.error}</span>
            )}
            {props.warning && (
              <span className={`text-sm text-warning-base`}>
                {props.warning}
              </span>
            )}
            {props.success && (
              <span className={`text-sm text-success-base`}>
                {props.success}
              </span>
            )}
          </div>
        </div>
      </div>
    </Listbox>
  );
};

const ChevronDown = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="w-4 h-4"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};
