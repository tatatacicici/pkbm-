import { TCard } from '../../types';

export const Card = ({ amount, title, logo }: TCard) => {
  return (
    <div className="w-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="bg-white h-full rounded-lg flex justify-center items-center gap-5 py-7">
        <div className="bg-primary-100 rounded-full p-1">{logo}</div>
        <div className="flex flex-col">
          <p className="font-semibold text-xl">{amount}</p>
          <p className="font-bold text-sm text-neutral-500">{title}</p>
        </div>
      </div>
    </div>
  );
};
