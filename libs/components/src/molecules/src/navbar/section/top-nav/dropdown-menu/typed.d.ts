import { ReactNode } from 'react';

export type TNavbarFeaturesProps = {
  features: Array<{
    name: string;
    link: string;
    icon: ReactNode;
  }>;
};

export type TNavbarMegaMenuProps = {
  megaMenuItems: Array<{
    name: string;
    submenus: Array<{
      name: string;
      link: string;
      icon: ReactNode;
    }>;
  }>;
};

export type TNavbarUserProps = {
  avatar?: string;
  listStyle?: string;
  userData: {
    full_name: string;
    email: string;
    avatar: string;
  };
  items: Array<{
    name: string;
    icon: ReactNode;
    onClick: MouseEventHandler<HTMLDivElement>;
  }>;
};

export type TMobileMenuProps = {
  mobileitems: Array<{
    name: string;
    submenus: Array<{
      name: string;
      link: string;
      icon: ReactNode;
    }>;
  }>;
  button: ReactNode;
  logo?: string;
} & TNavbarUserProps &
  TNavbarMegaMenuProps;
