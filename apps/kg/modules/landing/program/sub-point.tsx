import { FaChevronCircleRight } from 'react-icons/fa';

export default function SubPoint({ title }: { title: string }) {
  return (
    <div className="flex gap-2 py-2 text-sm items-center">
      {/* <Image width={20} height={20} src="/icons/checklist.svg" alt="" /> */}
      <FaChevronCircleRight className="text-orange-base text-xl" />
      <p>{title}</p>
    </div>
  );
}
