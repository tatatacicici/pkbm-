import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function FeatureCard({
  src,
  alt,
  title,
  desc,
  href,
  buttonText,
  buttonColor,
  cardColor = '#fff',
  cardPadding,
  imageSize,
  titleColor = 'text-black',
  lineBorder = false,
}: {
  src: string | StaticImageData;
  alt: string;
  title: string;
  desc?: string;
  href: string;
  buttonText: string;
  buttonColor: string;
  cardColor?: string;
  cardPadding?: string;
  imageSize: string;
  titleColor?: string;
  lineBorder?: boolean;
}) {
  const router = useRouter();

  const handleClick = () => {
    !buttonText && router.push(href);
  };

  return (
    <div
      className={`
    flex flex-col h-full shadow-lg w-full max-w-[300px] mx-auto rounded-xl bg-white overflow-hidden border border-gray-200 p-4 ${
      !buttonText && 'cursor-pointer hover:bg-gray-100/50 transition'
    }`}
      onClick={handleClick}
    >
      <div
        className={`bg-[${cardColor}] flex justify-center items-center ${cardPadding} mb-2 rounded-lg `}
      >
        <Image
          src={src}
          alt={alt}
          width={100}
          height={100}
          className={`${imageSize} object-contain`}
        />
      </div>

      <div className="flex flex-col flex-grow gap-2 text-center">
        <h1
          className={`${titleColor} font-semibold text-[14px] md:text-[16px]`}
        >
          {title}
        </h1>
        {lineBorder && (
          <hr className="border-t-[1px] border-gray-300 w-full mx-auto" />
        )}
        <p className="text-black text-[12px] md:text-[14px] leading-snug flex-grow">
          {desc}
        </p>
        {lineBorder && (
          <hr className="border-t-[1px] border-gray-300 w-full mx-auto mb-4" />
        )}
      </div>
      {buttonText && (
        <Link
          href={href}
          className={`${buttonColor} py-2 text-white text-[12px] md:text-[14px] font-semibold flex justify-center items-center rounded-lg w-full`}
        >
          {buttonText}
        </Link>
      )}
    </div>
  );
}
