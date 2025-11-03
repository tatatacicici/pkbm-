import { FC, Fragment, ReactElement, ReactNode } from "react";
import Link from "next/link";
import { clsx } from "clsx";
import Image, { StaticImageData } from "next/image";
import { ButtonProps } from "./type";

export const GlobalButton: FC<ButtonProps> = ({
  className,
  textStyle,
  type,
  onClick,
  loading,
  text,
  to,
  size = "small",
  color = "blue",
  icon,
  WFull,
  hasImg,
  hasExternal,
  ...props
}): ReactElement => {
  const sizesClass = {
    large: `w-full h-[56px] lg:w-[786px] lg:h-[75px] text-lg font-semibold ${
      WFull && "!lg:w-full"
    }`,
    regular: `w-full h-[42px] lg:w-[328px] lg:h-[56px] text-[16px] font-medium ${
      WFull && "!lg:w-full"
    }`,
    base: `w-full h-[27px] lg:w-[160px] lg:h-[48px] text-[16px] font-medium ${
      WFull && "!lg:w-full"
    }`,
    small: `w-full h-[12px] lg:w-[98px] lg:h-[36px] text-[14px] font-normal ${
      WFull && "!lg:w-full"
    }`,
    modal: `w-full h-[12px] lg:w-[98px] lg:h-[36px] text-[14px] font-normal ${
      WFull && "!lg:w-full"
    }`,
    icon: `!w-[182px]w-full h-[12px] lg:w-[16px] lg:h-[16px] text-[14px] font-normal ${
      WFull && "!lg:w-full"
    }`,
  };

  const colorClass = {
    noBorder: `bg-transparent text-[#106FA4] disabled:text-[#A3A3A3] ${
      loading && "!text-[#67A5C8]"
    }`,
    green: `bg-[#3EB449] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3] ${
      loading && "!bg-[#6AD26A]"
    }`,
    blue: `bg-[#106FA4] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3] ${
      loading && "!bg-[#67A5C8]"
    }`,
    gray: `bg-[#D4D4D4] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3] ${
      loading && "!bg-[#67A5C8]"
    }`,
    yellow: `bg-[#FAB317] text-white disabled:bg[#D4D4D4] disabled:text-[#A3A3A3]${
      loading && "!bg-[#FBCB50]"
    }`,
    greenBorder: `bg-transparent text-[#3EB449] border-[#3EB449] border-2 disabled:text-[#A3A3A3] disabled:border-[#A3A3A3] ${
      loading && "!text-[#6AD26A] !border-[#6AD26A]"
    }`,
    blueBorder: `bg-transparent text-[#106FA4] border-[#106FA4] border-2 disabled:text-[#A3A3A3] disabled:border-[#A3A3A3] ${
      loading && "!text-[#67A5C8] !border-[#67A5C8]"
    }`,
  };
  const merged = clsx(
    "flex gap-x-2 rounded justify-center items-center hover:opacity-50 duration-1000",
    colorClass[color],
    sizesClass[size],
    className,
  );

  return (
    <Fragment>
      {to !== undefined ? (
        <Link href={hasExternal ? `${"https://" + to}` : `${to}`}>
          <button type={type} className={merged} {...props} onClick={onClick}>
            {hasImg ? (
              <Image src={icon as StaticImageData} className="text-black" alt="Icon" />
            ) : (
              <>{icon as ReactNode}</>
            )}
            <p className={textStyle}>{text}</p>
          </button>
        </Link>
      ) : (
        <button className={merged} {...props} onClick={onClick}>
          {hasImg ? (
            <Image src={icon as StaticImageData} className="text-black" alt="Icon" />
          ) : (
            <>{icon as ReactNode}</>
          )}
          <p className={textStyle}>{text}</p>
        </button>
      )}
    </Fragment>
  );
};

GlobalButton.displayName = "Button";
