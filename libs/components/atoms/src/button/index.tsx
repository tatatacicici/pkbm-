import Link from 'next/link';
import { FC, ReactElement } from 'react';
import { IButtonProps } from './types';

export const Button: FC<IButtonProps> = ({
  children,
  loading,
  href,
  disabled,
  ...props
}): ReactElement => {
  if (href && !disabled) {
    return (
      <Link href={href}>
        <button {...props}>{loading ? loading : children}</button>
      </Link>
    );
  }
  return (
    <button {...props} disabled={disabled}>
      {loading ? loading : children}
    </button>
  );
};
