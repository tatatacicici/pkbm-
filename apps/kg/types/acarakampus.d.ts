import { TMetaResponseSingle } from '@kampus-gratis/utils';

export interface SideBarProps {
  active?: 'EventList' | 'RegisteredEvent' | 'EventHistory';
}
type TMetaItem = {
  code: number;
  status: string;
  message: string;
};
type TMetaResponse = {
  data: {
    current_page: number;
    events: Array<TEventItem>;
    max_page: number;
    page_size: number;
    total_data: number;
  };
} & TMetaItem;

export interface EventStudentEvent {
  id: string;
  student_id: string;
  event_id: string;
  status: string;
}
export type TEventItem = {
  status: string;
  id: string;
  name: string;
  registration_close_date: string;
  date_start: string;
  date_end: string;
  description: string;
  capacity: number;
  thumbnail: string;
  contact_person_name: string;
  contact_person_phone: string;
  contact_person_email: string;
  type_order: string;
  type_event: string;
  event_studentEvent: EventStudentEvent[];
};

export type TEventResponse = TMetaResponse<Array<TEventItem>>;

export interface CardListProps {
  slug?: string;
  title?: string;
  image?: StaticImageData;
  price?: Gratis | number;
  status?: Terdaftar | Selesai;
  day?: string;
  date?: Date | string;
}

export interface StaticImageData {
  src: string;
  height: number;
  width: number;
  blurDataURL?: string;
  blurWidth?: number;
  blurHeight?: number;
}

export interface EventCardProps {
  isOrder: boolean;
  content?: string;
}

export interface TCardHistory {
  status?: string;
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
  onClick?: MouseEventHandler<HTMLDivElement>;
}

export interface RegisterEventResponse {
  id: string;
  student_id: string;
  event_id: string;
  status: string;
  updated_at: string;
  created_at: string;
}
export type TRegisterEventResponse = TMetaResponseSingle<RegisterEventResponse>;

export interface TRegisterEventPayload {
  event_id: string;
}
