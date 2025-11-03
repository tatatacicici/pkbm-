import { Avatar } from '@nextui-org/react';
import Link from 'next/link';
import { TLiveMentoringData } from '../../../../../types/livementoring';

export const CardMentoring: React.FC<TLiveMentoringData> = ({
  title,
  content,
  session,
  link,
  teacher,
}) => {
  return (
    <Link href={`${link}`}>
      <div className="flex col-span-1 flex-col w-full p-5 shadow-md rounded-md gap-2">
        <div className="flex flex-row gap-3 justify-start items-center">
          <Avatar className="shadow-md" src={teacher.avatar} />
          <div className="flex flex-col">
            <h1 className="font-bold text-md">{teacher.full_name}</h1>
            <h1 className="text-sm text-gray-500">Pengajar</h1>
          </div>
        </div>
        <h1 className="font-bold text-lg capitalize">{title}</h1>
        <div className="text-sm">{content}</div>
        <div>
          <span className="text-sm w-auto bg-gray-200 py-1 rounded-md text-gray-500 px-2">
            Sesi {session}
          </span>
        </div>
      </div>
    </Link>
  );
};
