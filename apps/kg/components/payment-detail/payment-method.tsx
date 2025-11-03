import Image from 'next/image';

export default function PaymentMethod({
  title,
  img,
  selected,
  setSelected,
}: {
  title: string;
  img: string;
  selected: string;
  setSelected: (value: string) => void;
}) {
  return (
    <div
      className={`flex items-center gap-4 p-4  rounded-lg cursor-pointer ${
        selected === title ? 'border-2 border-primary-500' : 'border'
      }`}
      onClick={() => setSelected(title)}
    >
      <Image src={img} alt="icon" width={40} height={40} />
      <p className="text-md">{title}</p>
    </div>
  );
}
