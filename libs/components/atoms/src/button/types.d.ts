import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: ReactNode | string;
  href?: string;
  children: ReactNode;
  disabled?: boolean;
  type: "button" | "submit" | "reset";
}
