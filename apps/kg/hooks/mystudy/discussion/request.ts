import { serialize } from 'object-to-formdata';
import { api } from '../../../config/api';
import {
  TCommentResponse,
  TCommentsPayload,
  TDiscussionResponse,
  TReplyResponse,
  TSingleCommentReplyResponse,
  TSingleReplyResponse,
} from '../../../types/mystudy-discussions';

export const getStudikuDisscussionRequest = async (
  subject_id: string,
  session_id: string
): Promise<TDiscussionResponse> => {
  const { data } = await api(
    `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions?limit=50`
  );
  return data;
};

export const getComments = async ({
  subject_id,
  session_id,
  discussion_id,
  pageParam,
}: {
  subject_id: string;
  session_id: string;
  discussion_id: string;
  pageParam: number;
}): Promise<TCommentResponse> => {
  const { data } = await api(
    `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments?page=${pageParam}`
  );
  return data;
};

export const getReplies = async ({
  subject_id,
  session_id,
  discussion_id,
  comment_id,
  pageParam,
}: {
  subject_id: string;
  session_id: string;
  discussion_id: string;
  comment_id: string;
  pageParam: number;
}): Promise<TReplyResponse> => {
  const { data } = await api({
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    url: `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments/${comment_id}/replies?page=${pageParam}`,
  });
  return data;
};

export const getSingleComment = async (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string
): Promise<TSingleCommentReplyResponse> => {
  const { data } = await api.get(
    `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments/${comment_id}`
  );
  return data;
};

export const getSingleReply = async (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string,
  reply_id: string
): Promise<TSingleReplyResponse> => {
  const { data } = await api.get(
    `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments/${comment_id}/replies/${reply_id}`
  );
  return data;
};

export const CreateComment = async (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  payload: TCommentsPayload
): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'post',
    url: `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: serialize(payload),
  });
  return data;
};

export const CreateReply = async (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string,
  payload: TCommentsPayload
): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'post',
    url: `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments/${comment_id}/replies`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: serialize(payload),
  });
  return data;
};

export const EditComment = async (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string,
  payload: TCommentsPayload
): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'PUT',
    url: `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments/${comment_id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
  });
  return data;
};

export const EditReply = async (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string,
  reply_id: string,
  payload: TCommentsPayload
): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'PUT',
    url: `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments/${comment_id}/replies/${reply_id}`,
    headers: {
      'Content-Type': 'application/json',
    },
    data: payload,
  });
  return data;
};

export const DeleteComment = async (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string
): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'delete',
    url: `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments/${comment_id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};

export const DeleteReply = async (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string,
  reply_id: string
): Promise<TCommentResponse> => {
  const { data } = await api({
    method: 'delete',
    url: `/v2/my-study/subjects/${subject_id}/sessions/${session_id}/discussions/${discussion_id}/comments/${comment_id}/replies/${reply_id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
