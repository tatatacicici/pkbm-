import { FC, ReactElement } from 'react';
import Avatar from 'react-avatar';

export const ChatList: FC = (): ReactElement => {
  return (
    <>
      <div className="cursor-pointer hover:bg-neutral-100 px-7 py-4">
        <div className="flex gap-4">
          <div className="relative">
            <Avatar
              name={'Ryandi Margono'}
              color="#F26800"
              className=" w-[35px] h-[35px] rounded-full"
              size="35"
            />
            <div className="absolute bottom-4 right-0 h-3 w-3 bg-success-base rounded-full border-2 border-white"></div>
          </div>
          <div className="w-full">
            <div className="flex justify-between">
              <p className="text-xs font-[600]">Ryandi Margono</p>
              <p className="text-xs text-neutral-400 font-[500]">12.00</p>
            </div>
            <div className="mt-1">
              <p className="text-xs text-neutral-400">
                Terima kasih atas nasehatnya, Pak. Saya akan coba
                implementasikan
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr className="border-neutral-300 w-[100%] mx-auto border-t-[0.2px]" />
    </>
  );
};
