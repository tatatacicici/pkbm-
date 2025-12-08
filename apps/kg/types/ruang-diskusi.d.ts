import { TMetaResponse } from '@kampus-gratis/utils';

export type TDiscussion = {
  id: string;
  user_id: string;
  session_id: string;
  title: string;
  content: string;
  is_global: boolean;
  images: string[];
  updated_at: string;
  created_at: string;
  deleted_at: string;
};

export type TDiscussionPayload = {
  // title: string;
  content?: string;
  images?: Array<File>;
};

export type TDiscussionUpdatePayload = {
  // title: string;
  content?: string;
  images?: Array<string>;
  imagesToDelete?: string[];
};

export type TDiscussionItem = {
  id: string;
  user_id: string;
  session_id: string;
  // title: string;
  content: string;
  images: string[];
  is_global: boolean;
  created_at: string;
  author: Author;
  likes: number;
  is_liked: boolean;
  comments: number;
  time_elapsed: string;
};

export type TCommentsPayload = {
  content?: string;
  image?: File;
};

export type TReportPayload = {
  report_type: string;
  report_detail: string;
};
export interface TDiscussionComment {
  id: string;
  user_id: string;
  content: string;
  image: string[];
  created_at: string;
  comment_replies: CommentReply[];
  time_elapsed: string;
  likes: number;
  replies: number;
  author: Author2;
  is_liked: boolean;
}

export interface CommentReply {
  id: string;
  user_id: string;
  content: string;
  image: string[];
  created_at: string;
  likes: number;
  author: Author;
  isLiked: boolean;
}

export interface Author {
  id: string;
  avatar: string;
  full_name: string;
  major: string;
  role: string;
}

export type TDiscussionSingleResponse = TMetaResponseSingle<TDiscussionItem>;
export type TCommentResponse = TMetaResponseSingle<TDiscussionItem>;
export type TDiscussionDetailResponse = TMetaResponseSingle<TDiscussion>;

export type TmetaDiscussion = {
  meta: {
    page: number;
    page_size: number;
    per_page: number;
    total_data: number;
  };
};

export type TDiscussionResponse = TMetaResponse<TDiscussionItem> &
  TmetaDiscussion;
