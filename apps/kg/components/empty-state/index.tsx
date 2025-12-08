import Image from 'next/image';
import OrangBingungIcon from '../../public/images/mystudy/mystudy-module/orang-bingung-new.svg';

export default function EmptyState({ text }: { text: string }) {
  return (
    <div className="w-full min-h-[calc(100vh-343px)] flex items-center justify-center">
      <div className="w-fit p-1 lg:p-4 bg-white dark:bg-gray-600 mb-10">
        <Image
          src={OrangBingungIcon}
          alt="simulasi-null"
          style={{
            width: 'auto',
            height: 'auto',
          }}
          className="mx-auto"
        />
        <h1 className="text-center">{text}</h1>
      </div>
    </div>
  );
}
