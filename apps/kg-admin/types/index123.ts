import { ChangeEventHandler, ReactNode } from 'react';
import { User } from 'next-auth';
import { TMetaResponse, TMetaResponseSingle } from './Meta';

type dataSidebar = {
  title: string;
  path: string;
  icon: React.ReactElement;
};

export type TSidebarProp = {
  children: ReactNode;
  dataSidebar?: dataSidebar[];
};

export type TBaseLayout = {
  children: ReactNode;
};

export type TCard = {
  amount: number;
  title: string;
  logo: React.ReactElement;
};

export type TJadwalMk = {
  image: string;
  title: string;
  dateEven: string;
  time: string;
  position: 'vert' | 'hor';
};

export type TArticleResponse = {
  title: string;
  content: string;
  thumbnail: string;
  category_id: string;
  tags: string[];
};

export interface TButton {
  title?: string;
  buttonStyle: string;
  plus: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

export interface TSearchbar {
  placeholder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export interface TTable {
  children: ReactNode;
}

export interface TModal {
  isVisible: boolean;
  children: ReactNode;
}

export interface TDropdown {
  dataOptions?: string[];
  placeholder: string;
  icons: React.ReactElement;
  reverse: boolean;
  textCentre: boolean;
  shadow: boolean;
  bold: boolean;
  onChange?: (event: string) => void;
}

export interface TPagination {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

type TCrumbItem = {
  link: string;
  name: string;
};

export type TBreadCrumbProps = {
  textColor?: string;
  bgColor?: string;
  items: TCrumbItem[];
};

export type TPopover = {
  title: string;
  menus: string[];
};

export type TextInput = {
  placeholder: string;
  id: string;
  title: string;
  name: string;
  onChange: (event: string) => void;
  value: string;
  readonly: boolean;
  hidden: boolean;
  required: boolean;
};

export type JPGInput = {
  id: string;
  title: string;
  htmlfor: string;
};
export type TMatakuliah = {
  image: string;
  total_student: number;
  title: string;
  desc: string;
};

export type TLoginData = {
  data: {
    access_token: string;
    refresh_token: string;
  };
} & User;

export type TLoginPayload = {
  email?: string;
  password?: string;
  role?: string;
};

export type TLoginResponse = TLoginData;

export type TRefreshTokenPayload = {
  refresh_token: string;
};

export type TRefreshTokenResponse = {
  data: {
    token: {
      access_token: string;
    };
  };
};

export type TUserAdminData = {
  id: string;
  full_name: string;
  user_name: string;
  avatar?: string;
  Roles: RoleAdmin[];
};

type RoleAdmin = {
  id: string;
  name: string;
  UserRole: UserRoleAdmin[];
};

type UserRoleAdmin = {
  id: string;
  user_id: string;
  role_id: string;
};

export type TUserAdminDataResponse = TMetaResponse<TUserAdminData>;

type Users = {
  id: string;
  email: string;
  full_name: string;
  user_name: string;
  avatar: string;
  gender: string;
  phone_number: string;
  email_verified_at: string;
  role: string;
  created_at: string;
  updated_at: string;
};

export type TUserData = {
  users: Users[];
};

export type TUserDataResponse = TMetaResponseSingle<TUserData>;
