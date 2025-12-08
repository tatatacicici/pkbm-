import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FeatureCard({
  src,
  alt,
  text,
  buttonText,
  href,
  textColor = '',
  title,
}: {
  src: string;
  alt: string;
  text: string;
  buttonText?: string;
  href: string;
  textColor?: string;
  title?: string;
}) {
  const router = useRouter();

  const handleClick = () => {
    !buttonText && router.push(href);
  };

  return (
    <div
      className={`
      w-full rounded-lg shadow-sm border flex items-center flex-col py-6 text-center ${
        !buttonText && 'cursor-pointer hover:bg-gray-100/50 transition'
      }`}
      onClick={handleClick}
    >
      <Image src={src} alt={alt} width={70} height={70} className="mb-6" />
      {title && <h3 className={`text-lg font-bold ${textColor}`}>{title}</h3>}
      <p className={textColor}>{text}</p>
      {buttonText && (
        <Link href={href}>
          <button className="px-6 py-2 bg-blue-500 text-white mt-4 rounded-md w-max">
            {buttonText}
          </button>
        </Link>
      )}
    </div>
  );
}
