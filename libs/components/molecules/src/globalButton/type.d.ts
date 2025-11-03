import { StaticImageData } from "next/image";
import { Control } from "react-hook-form";
import {
  ChangeEventHandler,
  HTMLInputTypeAttribute,
  ReactNode,
  RefObject,
  ButtonHTMLAttributes,
  MouseEventHandler,
  Ref,
} from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  type?: "submit" | "button" | "reset";
  onClick?: MouseEventHandler<HTMLButtonElement>;
  text?: string | number;
  size?: "icon" | "modal" | "small" | "base" | "regular" | "large";
  color?: "noBorder" | "green" | "blue" | "yellow" | "gray" | "blueBorder" | "greenBorder";
  to?: string;
  icon?: ReactNode | StaticImageData;
  target?: string;
  WFull?: boolean;
  hasImg?: boolean;
  hasExternal?: boolean;
  loading?: boolean;
  textStyle?: string;
}
