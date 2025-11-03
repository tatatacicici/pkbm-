import Link from 'next/link';
import { BsCalendarDateFill } from 'react-icons/bs';
import { ImStack } from 'react-icons/im';
import { IoPersonOutline } from 'react-icons/io5';

export default function CardList({
  title,
  description,
  asesor,
  date,
  link,
  href,
  badge,
}: {
  title: string;
  description: string;
  asesor: string;
  date: string;
  link: string;
  href: string;
  badge?: string;
}) {
  const generateBadgeColor = (badge: string) => {
    switch (badge) {
      case 'Sedang di nilai':
        return 'bg-primary-100 text-blue-base';
      case 'Selesai':
        return 'bg-green-100 text-success-700';
      default:
        return 'bg-[#FFD700]';
    }
  };

  return (
    <div className="bg-white shadow-sm w-full rounded-xl overflow-hidden border gap-8 flex items-center px-8 py-6 relative">
      {badge && (
        <div
          className={`absolute top-6 right-6 px-2 py-1 rounded-lg ${generateBadgeColor(
            badge
          )}`}
        >
          <p className="text-sm">{badge}</p>
        </div>
      )}
      <ImStack size={24} />
      <div className="space-y-2">
        <p className="text-xl font-bold text-black">{title}</p>
        <p className=" text-gray-500">{description}</p>
        <div className="flex items-center gap-2 text-gray-500 ">
          <IoPersonOutline />
          <p className="">{asesor}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500 ">
          <BsCalendarDateFill />
          <p className="">{date}</p>
        </div>
        <div className="flex items-center gap-2 text-gray-500 ">
          <Link
            href={href}
            className="text-blue-base hover:underline hover:cursor-pointer"
          >
            {link}
          </Link>
        </div>
      </div>
    </div>
  );
}
