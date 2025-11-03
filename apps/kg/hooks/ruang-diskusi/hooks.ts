import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
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
  CreateComment,
  CreateDiscussion,
  CreateReply,
  DeleteComment,
  DeleteDiscussion,
  DeleteReply,
  LikeComment,
  LikeDiscussion,
  LikeReply,
  ReportComment,
  ReportDiscussion,
  ReportReply,
  UpdateComment,
  UpdateDiscussion,
  UpdateReply,
  getAllCommentRequest,
  getAllRepliesRequest,
  getCommentByIdRequest,
  getDisscussionRequest,
} from './request';
import { TMetaErrorResponse, TMetaResponseSingle } from '@kampus-gratis/utils';
import { comment } from 'postcss';

export const useGetAllDiscussion = (
  limit: string,
  order: string,
  title: string,
  page: string,
  session_id?: string
): UseQueryResult<TDiscussionResponse> =>
  useQuery({
    queryKey: ['get-all-discussion', limit, order, title, page, session_id],
    queryFn: async () =>
      await getDisscussionRequest(limit, order, title, page, session_id),
  });

export const useGetCommentById = (
  id: string
): UseQueryResult<TCommentResponse> =>
  useQuery({
    queryKey: ['comment-get-by-id', id],
    queryFn: async () => await getCommentByIdRequest(id),
  });

export const useGetAllComment = (
  id: string
): UseQueryResult<TCommentResponse> =>
  useQuery({
    queryKey: ['get-all-comment', id],
    queryFn: async () => await getAllCommentRequest(id),
  });

export const useGetAllReplies = (
  id: string,
  comment_id: string
): UseQueryResult<TCommentResponse> =>
  useQuery({
    queryKey: ['get-all-replies', id, comment_id],
    queryFn: async () => await getAllRepliesRequest(id, comment_id),
  });

export const useCreateDiscussion = (): UseMutationResult<
  TDiscussionDetailResponse,
  TMetaErrorResponse,
  TDiscussionPayload,
  unknown
> => {
  return useMutation({
    mutationKey: ['create-discussion'],
    mutationFn: async (payload) => await CreateDiscussion(payload),
  });
};

export const useUpdateDiscussion = (
  id: string
): UseMutationResult<
  TDiscussionDetailResponse,
  TMetaErrorResponse,
  TDiscussionUpdatePayload
> => {
  return useMutation({
    mutationKey: ['update-discussion', id],
    mutationFn: async (payload) => await UpdateDiscussion(id, payload),
  });
};

export const useDeleteDiscussion = (): UseMutationResult<
  TDiscussionResponse,
  TMetaErrorResponse,
  string
> => {
  return useMutation({
    mutationKey: ['delete-discussion'],
    mutationFn: async (id: string) => await DeleteDiscussion(id),
  });
};

export const useLikeDiscussion = (
  id: string
): UseMutationResult<TDiscussionResponse, TMetaErrorResponse> => {
  return useMutation({
    mutationKey: ['like-discussion', id],
    mutationFn: async () => await LikeDiscussion(id),
  });
};

export const useReportDiscussion = (
  id: string
): UseMutationResult<
  TDiscussionDetailResponse,
  TMetaErrorResponse,
  TReportPayload
> => {
  return useMutation({
    mutationKey: ['report-discussion', id],
    mutationFn: async (payload) => await ReportDiscussion(id, payload),
  });
};

export const useCreateComment = (
  id: string
): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  TCommentsPayload
> => {
  return useMutation({
    mutationKey: ['create-comment', id],
    mutationFn: async (payload) => await CreateComment(id, payload),
  });
};

export const useUpdateComment = (
  discussion_id: string,
  id: string
): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  TCommentsPayload
> => {
  return useMutation({
    mutationKey: ['update-comment', discussion_id, id],
    mutationFn: async (payload) =>
      await UpdateComment(discussion_id, id, payload),
  });
};

export const useDeleteComment = (): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  { discussion_id: string; id: string }
> => {
  return useMutation({
    mutationKey: ['delete-comment'],
    mutationFn: async ({ discussion_id, id }) =>
      await DeleteComment(discussion_id, id),
  });
};

export const useLikeComment = (
  id: string
): UseMutationResult<TCommentResponse, TMetaErrorResponse> => {
  return useMutation({
    mutationKey: ['like-comment', id],
    mutationFn: async () => await LikeComment(id),
  });
};

export const useReportComment = (
  id: string
): UseMutationResult<TCommentResponse, TMetaErrorResponse, TReportPayload> => {
  return useMutation({
    mutationKey: ['report-comment', id],
    mutationFn: async (payload) => await ReportComment(id, payload),
  });
};

export const useCreateReply = (
  id: string,
  comment_id: string
): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  TCommentsPayload
> => {
  return useMutation({
    mutationKey: ['create-reply', id, comment_id],
    mutationFn: async (payload) => await CreateReply(id, comment_id, payload),
  });
};

export const useUpdateReply = (
  discussion_id: string,
  comment_id: string,
  id: string
): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  TCommentsPayload
> => {
  return useMutation({
    mutationKey: ['update-reply', discussion_id, comment_id, id],
    mutationFn: async (payload) =>
      await UpdateReply(discussion_id, comment_id, id, payload),
  });
};

export const useDeleteReply = (): UseMutationResult<
  TCommentResponse,
  TMetaErrorResponse,
  { discussion_id: string; comment_id: string; id: string }
> => {
  return useMutation({
    mutationKey: ['delete-reply'],
    mutationFn: async ({ discussion_id, comment_id, id }) =>
      await DeleteReply(discussion_id, comment_id, id),
  });
};

export const useLikeReply = (
  id: string
): UseMutationResult<TCommentResponse, TMetaErrorResponse> => {
  return useMutation({
    mutationKey: ['like-reply', id],
    mutationFn: async () => await LikeReply(id),
  });
};

export const useReportReply = (
  id: string
): UseMutationResult<TCommentResponse, TMetaErrorResponse, TReportPayload> => {
  return useMutation({
    mutationKey: ['report-reply', id],
    mutationFn: async (payload) => await ReportReply(id, payload),
  });
};
