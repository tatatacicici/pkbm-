import { StaticImageData } from "next/image";

export type TChoiceTestimonyCardProps = {
  name: string,
  job: string;
  desc: string;
  src: string | StaticImageData;
};
