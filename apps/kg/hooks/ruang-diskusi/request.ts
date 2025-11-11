import { serialize } from 'object-to-formdata';
import { api } from '../../config/api';
import {
  TCommentResponse,
  TCommentsPayload,
  TDiscussionDetailResponse,
  TDiscussionPayload,
  TDiscussionResponse,
  TDiscussionUpdatePayload,
  TReportPayload,
} from '../../types/ruang-diskusi';
import {
  DISCUSSION,
  DISCUSSION_COMMENT,
  DISCUSSION_COMMENT_REPORT,
  DISCUSSION_FORUM,
  DISCUSSION_FORUM_REPORT,
  DISCUSSION_LIKE,
  DISCUSSION_LIKE_COMMENT,
  DISCUSSION_LIKE_REPLY,
  DISCUSSION_REPLY,
  DISCUSSION_REPLY_REPORT,
  TMetaResponseSingle,
} from '@kampus-gratis/utils';

export const getDisscussionRequest = async (
  limit: string,
  order: string,
  title: string,
  page: string,
  session_id?: string
): Promise<TDiscussionResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    params: {
      limit,
      order,
      title,
      page,
      session_id,
    },
    url: '/v2/discussions',
  });
  return data;
};

export const getCommentByIdRequest = async (
  id: string
): Promise<TCommentResponse> => {
  const { data } = await api.get(`v2/discussions/${id}`);
  return data;
};

export const getAllCommentRequest = async (
  id: string
): Promise<TCommentResponse> => {
  const { data } = await api.get(`v2/discussions/${id}/comments`);
  return data;
};

export const getAllRepliesRequest = async (
  id: string,
  comment_id: string
): Promise<TCommentResponse> => {
  const { data } = await api.get(
    `v2/discussions/${id}/comments/${comment_id}/replies`
  );
  return data;
};

export const CreateDiscussion = async (
  payload: TDiscussionPayload
): Promise<TDiscussionPayload> => {
  const { data } = await api({
    method: 'post',
    url: DISCUSSION,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};

export const UpdateDiscussion = async (
  id: string,
  payload: TDiscussionUpdatePayload
): Promise<TDiscussionUpdatePayload> => {
  const { data } = await api({
    method: 'put',
    url: `${DISCUSSION}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
  });
  return data;
};

export const DeleteDiscussion = async (
  id: string
): Promise<TDiscussionResponse> => {
  const { data } = await api({
    method: 'delete',
    url: `v2/discussions/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const LikeDiscussion = async (
  id: string
): Promise<TDiscussionResponse> => {
  const { data } = await api({
    method: 'post',
    url: `${DISCUSSION_LIKE}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const ReportDiscussion = async (
  id: string,
  payload: TReportPayload
): Promise<TDiscussionResponse> => {
  const { data } = await api({
    method: 'post',
    url: `${DISCUSSION_FORUM_REPORT}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: serialize(payload),
  });
  return data;
};

export const CreateComment = async (
  id: string,
  payload: TCommentsPayload
): Promise<TCommentsPayload> => {
  const { data } = await api({
    method: 'post',
    url: `/v2/discussions/${id}/comments`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: serialize(payload),
  });
  return data;
};

export const UpdateComment = async (
  discussion_id: string,
  id: string,
  payload: TCommentsPayload
): Promise<TCommentsPayload> => {
  const { data } = await api({
    method: 'put',
    url: `/v2/discussions/${discussion_id}/comments/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
  });
  return data;
};

export const DeleteComment = async (
  discussion_id: string,
  id: string
): Promise<TDiscussionResponse> => {
  const { data } = await api({
    method: 'delete',
    url: `v2/discussions/${discussion_id}/comments/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const LikeComment = async (id: string): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'post',
    url: `${DISCUSSION_LIKE_COMMENT}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const ReportComment = async (
  id: string,
  payload: TReportPayload
): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'post',
    url: `${DISCUSSION_COMMENT_REPORT}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: serialize(payload),
  });
  return data;
};

export const CreateReply = async (
  id: string,
  comment_id: string,
  payload: TCommentsPayload
): Promise<TCommentsPayload> => {
  const { data } = await api({
    method: 'post',
    url: `/v2/discussions/${id}/comments/${comment_id}/replies`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: serialize(payload),
  });
  return data;
};

export const UpdateReply = async (
  discussion_id: string,
  comment_id: string,
  id: string,
  payload: TCommentsPayload
): Promise<TCommentsPayload> => {
  const { data } = await api({
    method: 'put',
    url: `/v2/discussions/${discussion_id}/comments/${comment_id}/replies/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
  });
  return data;
};

export const DeleteReply = async (
  discussion_id: string,
  comment_id: string,
  id: string
): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'delete',
    url: `/v2/discussions/${discussion_id}/comments/${comment_id}/replies/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const LikeReply = async (id: string): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'post',
    url: `${DISCUSSION_LIKE_REPLY}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const ReportReply = async (
  id: string,
  payload: TReportPayload
): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'post',
    url: `${DISCUSSION_REPLY_REPORT}/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: serialize(payload),
  });
  return data;
};
