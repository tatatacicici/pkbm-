import { FC, ReactElement } from 'react';
import { IMessageProps } from '../../../../types';
import Avatar from 'react-avatar';

export const Message: FC<IMessageProps> = ({ role, message }): ReactElement => {
  return (
    <div className="px-10">
      {role === 'user' ? (
        <div className="flex justify-end">
          <div className="flex justify-end my-3 gap-3 max-w-[80%]">
            <p className="self-end font-[500] text-xs text-neutral-400">
              14.00
            </p>
            <div className="">
              <p className="text-end font-[600] text-xs my-2">User Account</p>
              <div className="bg-yellow-100 rounded-lg shadow-sm py-3 px-4">
                <p className="text-neutral-800 text-sm font-[400]">{message}</p>
              </div>
            </div>
            <Avatar
              name={'User'}
              color="#F26800"
              className=" w-[52px] h-[52px] rounded-full"
              size="52"
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-start my-5 max-w-[80%] gap-3">
          <Avatar
            name={'Consultant Admin'}
            color="#F26800"
            className=" w-[52px] h-[52px] rounded-full"
            size="52"
          />
          <div className="">
            <p className="font-[600] text-xs my-2">Consultant Admin</p>
            <div className="bg-sky-100 rounded-lg shadow-sm py-3 px-4">
              <p className="text-neutral-800 text-sm font-[400]">{message}</p>
            </div>
          </div>
          <p className="self-end font-[500] text-xs text-neutral-400">14.00</p>
        </div>
      )}
    </div>
  );
};
