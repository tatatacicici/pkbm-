import { StaticImageData } from 'next/image';

export type TChoiceProgramCardProps = {
  title: string;
  tag: string;
  src: string | StaticImageData;
  link: string;
  index: number;
};
