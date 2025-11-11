import { TLeaderboard } from '@/services/Leaderboard/types';
import { StaticImageData } from 'next/image';
import { MouseEventHandler, ReactNode } from 'react';

export interface PopupProfilProps {
  lookup?: boolean;
  widthModal?: string;
  onClose?: MouseEventHandler<HTMLDivElement | HTMLSpanElement>;
  stylePopup?: string;
  student_id: string;
  author: AuthorLeaderboard;
}

export interface AuthorLead {
  avatar?: string;
  poin: number;
  user_name: string;
  discussion_likes: number;
  discussion_posted: number;
  full_name: string;
  semester: number;
  ipk: string;
  major: string;
  role: string;
  total_certificates: number;
  current_subjects: number;
  finished_subjects: number;
}

export interface StepLadderProps {
  avatar?: StaticImport;
  medal?: StaticImageData;
  name?: string;
  score?: number;
  styleCard?: string;
  positionImage?: string;
  styleAvatar?: string;
  styleMedal?: string;
  outlineImage?: string;
  styleName?: string;
  styleScore?: string;
}

export interface SelfLadderProps {
  avatar?: StaticImport;
  medal?: StaticImageData;
  name?: string;
  score?: number;
  styleCard?: string;
  positionImage?: string;
  styleAvatar?: string;
  styleMedal?: string;
  outlineImage?: string;
  styleName?: string;
  styleScore?: string;
}
