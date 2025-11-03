import { FC, ReactElement } from "react";
import Image, { StaticImageData } from "next/image";
import { StepLadderProps } from "./type";

export const StepLadder: FC<StepLadderProps> = ({
  name,
  score,
  avatar,
  medal,
  styleCard,
  positionImage,
  styleAvatar,
  styleMedal,
  outlineImage,
  styleName,
  styleScore,
}): ReactElement => {
  return (
    <>
      <div className="grid content-end relative ">
        <div
          className={`bg-[#FEEAA2] lg:h-[209px] lg:w-[190px] md:h-[180px] md:w-[165px] h-[145px] w-[150px] text-center rounded-tr-[8px] rounded-tl-[8px] ${styleCard}`}
        >
          <div
            className={`absolute lg:top-[90px] lg:left-[40px] md:top-[50px] md:left-[30px] top-[55px] left-[34px] ${positionImage}`}
          >
            <div className={`rounded-full outline outline-4 outline-[#67A5C8] ${outlineImage}`}>
              <Image
                src={avatar}
                alt={"avatar"}
                className={`lg:w-28 lg:h-28 md:w-24 md:h-24 w-20 h-20 ${styleAvatar}`}
              />
              <Image
                src={medal as StaticImageData}
                alt={"medal"}
                className={`lg:top-24 lg:right-[25px] md:top-20 md:right-[22px] top-[65px] right-[20px] lg:w-[65px] md:w-[50px] w-[45px] absolute ${styleMedal} `}
              />
            </div>
          </div>
          <div
            className={`lg:mt-24 md:mt-[90px] mt-[70px] text-[#000000] font-[500] lg:text-[16px] md:text-[14px] text-[12px] ${styleName}`}
          >
            {name}
          </div>
          <button
            className={`bg-[#FAB317] text-white rounded-[8px] lg:text-[14px] md:text-[12px] text-[10px] px-2 py-1 mt-2 ${styleScore}`}
          >
            {score} Poin
          </button>
        </div>
      </div>
    </>
  );
};
