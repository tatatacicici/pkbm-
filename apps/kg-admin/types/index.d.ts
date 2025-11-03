import React, { ReactNode } from 'react';
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

export type TArticleItem = {
  id: string | string[];
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  is_favorite: boolean;
  category_id: string;
  author_id: string;
  created_at: string;
  tags: Array<{ tag: string }>;
};

type CategoriesItem = {
  [];
  id: string;
  name: string;
  created_at: string;
  updated_at: string;
};

export type TCategoriesResponse = {
  code: number;
  status: string;
  message: string;
  data: CategoriesItem[{
    id: string;
    name: string;
    created_at: string;
    updated_at: string;
  }];
};

export interface articleSlugResponse {
  code: number;
  status: string;
  message: string;
  data: articleDataBySlug;
}

export interface articleDataBySlug {
  id: string;
  title: string;
  content: string;
  thumbnail: string;
  slug: string;
  views: number;
  created_at: string;
  author: Author;
  category: string;
  tags: Array<string>;
}

export type TArticleSlugResponse = TMetaResponseSingle<articleDataBySlug>;
interface Author {
  full_name: string;
}

export type TArticleResponse = {
  code: number;
  status: string;
  message: string;
  data: {
    data: TArticleItem[];
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};
export interface TButton {
  type?: string;
  children: ReactNode;
  buttonStyle: string;
  className?: string;
  plus: boolean;
  title?: string;
  onClick?: () => void;
}

export interface TSearchbar {
  placeholder?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
}

export interface TTable {
  children: ReactNode;
}

export interface TModal {
  isVisible: boolean;
  children: ReactNode;
}

export interface TDropdown {
  dataOptions?: string[] | undefined;
  placeholder: string;
  icons: React.ReactElement;
  reverse: boolean;
  textCentre: boolean;
  shadow: boolean;
  bold: boolean;
  onChange: (value: string) => void;
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
  value?: string;
  readonly?: boolean;
  hidden?: boolean;
  required?: boolean;
  onChange?: (event: string) => void;
};

export type JPGInput = {
  id: string;
  title: string;
  htmlfor: string;
};
export type TMatakuliah = {
  image: File;
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
  UserRole: { id: string; user_id: string; role_id: string };
};

export type TUserAdminDataResponse = TMetaResponse<TUserAdminData>;

export interface TUserDataResponse {
  code: number;
  status: string;
  message: string;
  data: {
    users: [
      {
        id: string;
        full_name: string;
        user_name?: string;
        email: string;
        email_verified_at?: string;
        avatar?: string;
        gender: string | null;
        phone_number: string | null;
        role: string;
        created_at: string;
        updated_at: string;
      }
    ];
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
}

export interface Meta {
  page_size: number;
  total_data: number;
  current_page: number;
  max_page: number;
}
type TUsersResponses = {
  id: string | number;
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
  filter: any;
};

type TMetaItem = {
  meta: {
    page_size: number;
    total_data: number;
    current_page: number;
    max_page: number;
  };
};

// export type TUserData = {
//   users: Users[];
// };

// export type TUserDataResponse = TMetaResponseSingle<TUsersResponses>;

// type User = {
//   id: string | number;
//   email: string;
//   full_name: string;
//   user_name: string;
//   avatar: string;
//   gender: string;
//   phone_number: string;
//   email_verified_at: string;
//   role: string;
//   created_at: string;
//   updated_at: string;
// };

export interface TUserDataById {
  code: number;
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  user: User;
  id: string;
  user_id: string;
  status: string;
  type: string;
  reason: any;
  action_by: any;
  biodata: Biodata;
  familial: Familial;
  file: any;
}

export interface User {
  id: string;
  email: string | string[];
  full_name: string;
  user_name: string;
  avatar: any;
  gender: string;
  phone_number: string;
  email_verified_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: any;
}

export interface Biodata {
  id: string;
  administration_id: string;
  full_name: string;
  gender: string;
  phone_number: string;
  birthdate: string;
  birthplace: string;
  address: string;
  last_education: string;
  nim: string;
  university: string;
  major: string;
  semester: number;
}

export interface Familial {
  id: string;
  administration_id: string;
  father_name: string;
  father_occupation: string;
  father_salary: string;
  mother_name: string;
  mother_occupation: string;
  mother_salary: string;
  self_salary: string;
  self_occupation: string;
  live_with: string;
  tuition_payer: string;
}

// export type TUserDataResponseById = TMetaResponseSingle<TUserDataById>;
