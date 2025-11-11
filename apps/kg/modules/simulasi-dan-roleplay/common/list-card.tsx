import Image from 'next/image';
import Link from 'next/link';
import { FaCheckCircle } from 'react-icons/fa';

export default function ListCard({
  title,
  description,
  href,
}: {
  title: string;
  description: string;
  href: string;
}) {
  return (
    <Link href={href}>
      <div className="border border-gray-200 rounded-lg py-4 px-6 flex items-center justify-between w-full shadow-sm mb-4 cursor-pointer hover:border-gray-400/60 transition-all">
        <div className="flex items-center gap-4">
          <Image
            src="/images/simulasi-dan-roleplay/card-icon.png"
            alt="Roleplay"
            width={25}
            height={25}
          />
          <div className="">
            <p className="font-bold">{title}</p>
            <p className="text-gray-500">{description}</p>
          </div>
        </div>
        <FaCheckCircle className="text-green-600 text-lg" />
      </div>
    </Link>
  );
}
