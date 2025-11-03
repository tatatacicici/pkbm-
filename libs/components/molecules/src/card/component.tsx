import { FC, Fragment, ReactElement } from "react";
import { TCardProps } from "./type";
import Link from "next/link";
import Image from "next/image";

export const Card: FC<TCardProps> = ({
  className,
  children,
  title,
  icon,
  src,
  href,
  imgwidth,
  imgheight,
  titleStyle,
  hasImage,
  imgStyle,
  onClick,
}): ReactElement => {
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <Fragment>
      {href ? (
        <Link href={`${href}`}>
          <div className={`${className} flex auto p-4 flex-col`} onClick={onClick}>
            {hasImage && (
              <Image
                className={`object-cover ${imgStyle}`}
                src={src}
                alt="Picture of the author"
                width={imgwidth}
                height={imgheight}
              />
            )}
            {icon}
            <h1 className={titleStyle}>{title}</h1>
            <section className="flex">{children}</section>
          </div>
        </Link>
      ) : (
        <div className={`${className} flex auto p-4 flex-col cursor-pointer`} onClick={onClick}>
          {hasImage && (
            <Image
              className={`w-full object-cover ${imgStyle}`}
              src={src}
              alt={title as string}
              width={imgwidth}
              height={imgheight}
            />
          )}
          {icon}
          <h1 className={titleStyle}>{title}</h1>
          <section className="flex">{children}</section>
        </div>
      )}
    </Fragment>
  );
};
