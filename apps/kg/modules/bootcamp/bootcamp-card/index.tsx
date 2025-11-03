import Image from 'next/image';
import { useState } from 'react';
import DetailBootcampModal from '../detail-modal';

interface CardBootcampProps {
  id?: string;
  name: string;
  level: number;
  thumbnail: string;
  is_taken?: boolean;
  is_available?: boolean;
  start_at?: string;
  description?: string;
  brochure?: string;
  total_session?: number;
  slug?: string;
  topic_name?: string;
}

export default function CardBootcamp({
  id,
  level,
  name,
  thumbnail,
  is_taken,
  is_available,
  start_at,
  description,
  brochure,
  total_session,
  slug,
  topic_name,
}: CardBootcampProps) {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);

  const generatedBadgeColor = (topic?: string) => {
    switch (topic) {
      case 'AI & Data Science':
        return 'bg-[#4caf50] text-[#74c69d]';
      case 'Soft Skill':
        return 'bg-[#ff9800] text-[#74c69d]';
      case 'Teknologi Informasi':
        return 'bg-[#ff9800] text-[#74c69d]';
      case 'Design':
        return 'bg-[#e91e63] text-[#74c69d]';
      case 'Bisnis':
        return 'bg-[#9c27b0] text-[#74c69d]';
      case 'Leadership':
        return 'bg-[#9c27b0] text-[#74c69d]';
      default:
        return 'bg-[#607d8b] text-[#74c69d]';
    }
  };
  return (
    <>
      <div
        className="border rounded-xl shadow-lg flex flex-col justify-between relative h-max cursor-pointer"
        id={slug}
        onClick={() => setIsDetailModalOpen(!isDetailModalOpen)}
      >
        <div className="relative w-full px-4 flex flex-col pt-2 gap-2 h-[140px]">
          <Image
            src={thumbnail}
            loading="lazy"
            alt=""
            width={0}
            height={0}
            sizes="100vh"
            style={{
              width: 'auto',
              minWidth: '100%',
              height: '140px',
              objectFit: 'cover',
            }}
            className="rounded-lg absolute top-0 left-0 brightness-50"
          />
          <div
            className={`text-white px-2 py-1 text-[10px] w-max rounded-md font-semibold z-10
        ${generatedBadgeColor(topic_name)}
        `}
          >
            {topic_name}
          </div>
          <h5
            className="text-lg font-bold tracking-tight text-white z-10 line-clamp-3 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]
"
          >
            {name}
          </h5>
        </div>
      </div>
      <DetailBootcampModal
        id={id}
        isOpen={isDetailModalOpen}
        setIsOpen={setIsDetailModalOpen}
        name={name}
        description={description}
        thumbnail={thumbnail}
        level={level}
        start_at={start_at}
        is_taken={is_taken}
        is_available={is_available}
        total_session={total_session}
        brochure={brochure}
      />
    </>
  );
}
