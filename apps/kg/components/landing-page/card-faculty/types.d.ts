import { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export type TChoiceFacultyCardProps = {
  icon: LucideIcon
  title: string;
  src: string | StaticImageData;
  major?: Array<string>;
};
