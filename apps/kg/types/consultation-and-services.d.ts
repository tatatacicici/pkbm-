export interface IChatBoxProps {
  userData?: {
    full_name?: string;
    email?: string;
    avatar?: string;
  };
}

export interface IMessageProps {
  role: 'user' | 'admin';
  message: string;
}

export interface StatusCardProps {
  titleCard?: string;
  status?: string;
  date?: string;
  description?: string;
  bgLine?: string;
  classNameStatus?: string;
  imgCard?: StaticImageData;
}
