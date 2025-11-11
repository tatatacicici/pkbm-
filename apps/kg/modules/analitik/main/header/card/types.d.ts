import { StaticImageData } from 'next/image';
import { Control } from 'react-hook-form';
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
  RefObject,
  ButtonHTMLAttributes,
  MouseEventHandler,
  Ref,
} from 'react';

export interface TCardProps {
  className?: string;
  title?: string;
  icon?: ReactNode;
  children?: ReactNode;
  titleStyle?: string;
  imgwidth?: number;
  imgheight?: number;
  src?: StaticImport;
  topText?: string;
  hasImage: boolean;
  href?: string;
  imgStyle?: string;
  desc?: string;
  moreDesc?: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
}
