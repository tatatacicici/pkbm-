import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import {
  TCommentResponse,
  TCommentsPayload,
  TDiscussionResponse,
  TReplyResponse,
  TSingleCommentReplyResponse,
  TSingleReplyResponse,
} from '../../../types/mystudy-discussions';
import {
  CreateComment,
  CreateReply,
  DeleteComment,
  DeleteReply,
  EditComment,
  EditReply,
  getComments,
  getReplies,
  getSingleComment,
  getSingleReply,
  getStudikuDisscussionRequest,
} from './request';

export const useGetAllStudikuDiscussion = (
  subject_id: string,
  session_id: string
): UseQueryResult<TDiscussionResponse> =>
  useQuery({
    queryKey: ['get-discussion-by-session', subject_id, session_id],
    queryFn: async () =>
      await getStudikuDisscussionRequest(subject_id, session_id),
  });

// export const useGetComments = (
//   subject_id: string,
//   session_id: string,
//   discussion_id: string,
//   pageParam?: string
// ): UseQueryResult<TCommentResponse> =>
//   useQuery({
//     queryKey: [
//       'get-sessions-discussions-comments-by-id',
//       subject_id,
//       session_id,
//       discussion_id,
//       page,
//     ],
//     queryFn: async () =>
//       await getComments(subject_id, session_id, discussion_id, pageParam),
//   });

// export const useGetReplies = (
//   subject_id: string,
//   session_id: string,
//   discussion_id: string,
//   comment_id: string
// ): UseQueryResult<TReplyResponse> =>
//   useQuery({
//     queryKey: [
//       'get-sessions-discussions-replies-by-id',
//       subject_id,
//       session_id,
//       discussion_id,
//       comment_id,
//     ],
//     queryFn: async () =>
//       await getReplies(subject_id, session_id, discussion_id, comment_id),
//   });

export const useGetSingleComment = (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string
): UseQueryResult<TSingleCommentReplyResponse> =>
  useQuery({
    queryKey: [
      'get-sessions-discussions-single-comment',
      subject_id,
      session_id,
      discussion_id,
      comment_id,
    ],
    queryFn: async () =>
      await getSingleComment(subject_id, session_id, discussion_id, comment_id),
  });

export const useGetSingleReply = (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string,
  reply_id: string
): UseQueryResult<TSingleReplyResponse> =>
  useQuery({
    queryKey: [
      'get-sessions-discussions-single-comment',
      subject_id,
      session_id,
      discussion_id,
      comment_id,
      reply_id,
    ],
    queryFn: async () =>
      await getSingleReply(
        subject_id,
        session_id,
        discussion_id,
        comment_id,
        reply_id
      ),
  });

export const useCreateComment = (
  subject_id: string,
  session_id: string,
  discussion_id: string
): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  TCommentsPayload
> => {
  return useMutation({
    mutationKey: ['create-comment', subject_id, session_id, discussion_id],
    mutationFn: async (payload) =>
      await CreateComment(subject_id, session_id, discussion_id, payload),
  });
};

export const useCreateReply = (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string
): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  TCommentsPayload
> => {
  return useMutation({
    mutationKey: [
      'create-comment',
      subject_id,
      session_id,
      discussion_id,
      comment_id,
    ],
    mutationFn: async (payload) =>
      await CreateReply(
        subject_id,
        session_id,
        discussion_id,
        comment_id,
        payload
      ),
  });
};

export const useEditComment = (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string
): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  TCommentsPayload
> => {
  return useMutation({
    mutationKey: [
      'edit-comment',
      subject_id,
      session_id,
      discussion_id,
      comment_id,
    ],
    mutationFn: async (payload) =>
      await EditComment(
        subject_id,
        session_id,
        discussion_id,
        comment_id,
        payload
      ),
  });
};

export const useEditReply = (
  subject_id: string,
  session_id: string,
  discussion_id: string,
  comment_id: string,
  reply_id: string
): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  TCommentsPayload
> => {
  return useMutation({
    mutationKey: [
      'edit-comment',
      subject_id,
      session_id,
      discussion_id,
      comment_id,
      reply_id,
    ],
    mutationFn: async (payload) =>
      await EditReply(
        subject_id,
        session_id,
        discussion_id,
        comment_id,
        reply_id,
        payload
      ),
  });
};

export const useDeleteComment = (): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  {
    subject_id: string;
    session_id: string;
    discussion_id: string;
    comment_id: string;
  }
> => {
  return useMutation({
    mutationKey: ['delete-comment'],
    mutationFn: async ({ subject_id, session_id, discussion_id, comment_id }) =>
      await DeleteComment(subject_id, session_id, discussion_id, comment_id),
  });
};

export const useDeleteReply = (): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  {
    subject_id: string;
    session_id: string;
    discussion_id: string;
    comment_id: string;
    reply_id: string;
  }
> => {
  return useMutation({
    mutationKey: ['delete-reply'],
    mutationFn: async ({
      subject_id,
      session_id,
      discussion_id,
      comment_id,
      reply_id,
    }) =>
      await DeleteReply(
        subject_id,
        session_id,
        discussion_id,
        comment_id,
        reply_id
      ),
  });
};
