import { TMetaResponse } from '@kampus-gratis/utils';
import { Url } from 'next/dist/shared/lib/router/router';

export interface TTheacher {
  id: string;
  full_name: string;
  avatar?: string ;
}

export interface TLiveMentoring {
  id: string;
  session: number;
  title: string;
  content: string;
  teacher: TTheacher;
}

export interface TLiveMentoringData {
id?: string;
   link?:Url;
    session: number;
    title: string;
    content: string;
    teacher: TTheacher;
  }

export interface TLiveResponse {
  code: number;
  status: string;
  message: string;
  data: TLiveMentoring[];
}

export interface TDetailLive {
    id: string;
  session: number;
  title: string;
  content: string;
  teacher: TTheacher;
  duration:number;
  location: string;
  date: string;
  time: string;
  link: string;
}

export interface DetailProps{
    id: string;
    session: number;
    title: string;
    content: string;
    teacher: TTheacher;
    duration:number;
    location: string;
    date: string;
    time: string;
    link: string;
}

export interface TDetailLiveResponse {
  code: number;
  status: string;
  message: string;
  data: TDetailLive;
}
export type TLiveMentoringResponse = TMetaResponse<TLiveMentoring>;
