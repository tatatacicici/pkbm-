import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';

export type TAuthLayoutProps = {
  title?: string;
  children: ReactNode;
  description?: string;
  linkText?: string;
  to?: string;
  img?: string | StaticImageData;
  h?: string;
  error?: string;
};

export type TAuthCarouselProps = {
  carouselDotColor?: string;
};

export type TBaseLayoutProps = {
  children: ReactNode;
  title?: string;
  addSearch?: boolean;
};
