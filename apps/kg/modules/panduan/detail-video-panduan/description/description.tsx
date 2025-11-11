import { videoGuideTypes } from "../../../../types/panduan";
import React, { ReactElement } from "react";

type Props = {
  titleVideo: string,
  descVideo: string
}

export const Description = (props: Props): ReactElement => {
  const { titleVideo, descVideo } = props;
  return (
    <div className="bg-white w-full h-fit rounded-[8px] mt-[28px] shadow-md py-8 px-[46px] mb-10">
      <h1 className="text-[18px] font-[600] text-neutral-900  h-269px ">{titleVideo}</h1>
      <p className="text-[12px] font-[400] text-neutral-500  h-269px pt-[20px] ">{descVideo}</p>
    </div>
  );
};
