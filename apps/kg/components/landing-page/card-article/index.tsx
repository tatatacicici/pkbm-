import { FC, ReactElement } from "react";
import Image from "next/image";
import { TChoiceArticleCardProps } from "./types";
import { Button } from "@kampus-gratis/components/atoms";

export const ChoiceArticleCard: FC<TChoiceArticleCardProps> = (props): ReactElement => {
  return (
    <section className="flex flex-col border border-neutral-300 w-auto rounded-lg h-auto bg-white justify-between">
      <Image
        src={props.src}
        alt={"card-landing"}
        width={282}
        height={208}
        loading={"lazy"}
        priority={false}
        className="w-auto h-auto p-4"
      />
      <div className="flex flex-col p-[10px] px-4">
        <div className="flex flex-col justify-between gap-y-6">
          <div className="flex justify-between w-full ">
            <p className={`text[12px] bg-[${props.bg}] font-semibold px-3  w-auto rounded-md`}>#{props.tag}</p>
            <p className="flex text-[12px] text-neutral-500 justify-center items-center">
              {props.date}
            </p>
          </div>
          <div>
            <h1 className="text-black font-bold text-[18px]">{props.title}</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-between px-4 pt-4 pb-6">
        <p className="flex text-[12px] text-neutral-500 justify-end items-end">172 views</p>
        <Button type="button" className="bg-gray-100 p-2 rounded-md"> <Image
         src="icons/article-save.svg"
         alt={"card-landing"}
         width={30}
         height={30}
         loading={"lazy"}
         priority={false}
         className="w-auto h-auto"
        /></Button>
      </div>
    </section>
  );
};
