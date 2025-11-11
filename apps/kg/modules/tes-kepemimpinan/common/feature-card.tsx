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
    w-full rounded-lg shadow-sm border flex items-center py-6 px-6 text-left gap-6 ${
      !buttonText && 'cursor-pointer hover:bg-gray-100/50 transition'
    }`}
      onClick={handleClick}
    >
      {/* Gambar di kiri */}
      <div className="w-1/4 flex justify-center">
        <Image src={src} alt={alt} width={70} height={70} />
      </div>

      {/* Teks di kanan */}
      <div className="w-3/4">
        {title && (
          <h3 className={`text-lg font-bold mb-2 ${textColor}`}>{title}</h3>
        )}
        <p className={textColor}>{text}</p>

        {/* Button full width */}
        {buttonText && (
          <Link href={href}>
            <button className="w-full px-6 py-2 bg-sky-base hover:opacity-80 transition-all text-white mt-4 rounded-md">
              {buttonText}
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
