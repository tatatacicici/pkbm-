import { FC, Fragment, useState } from 'react';
import { TDiscussinCardProps } from './types';
import Image from 'next/image';
import { AiOutlineLike, AiFillLike } from 'react-icons/ai';
import { GoCommentDiscussion } from 'react-icons/go';
import Avatar from 'react-avatar';
import { useQueryClient } from '@tanstack/react-query';
import {
  useLikeComment,
  useLikeDiscussion,
  useLikeReply,
} from '../../../hooks/ruang-diskusi/hooks';
import { CommentInput } from '../commentInput';
import { ImagePreview } from '../../../components/ruang-diskusi/imagePreview';
import { toast } from 'react-toastify';

export const DiscussionCard: FC<TDiscussinCardProps> = ({
  avatar,
  hasImage,
  text,
  imgSource,
  userName,
  title,
  time,
  type,
  countLikes,
  children,
  option,
  id,
  isLiked,
  commentId,
  discussionId,
}) => {
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useLikeDiscussion(id as string);
  const { mutate: mutateLikeComment, isSuccess: isSuccessLikeComment } =
    useLikeComment(id as string);
  const {
    mutate: mutateLikeReply,
    isLoading: isLoadingLikeReply,
    isSuccess: isSuccessLikeReply,
  } = useLikeReply(id as string);

  const handleSubmit = async () => {
    type === 'post'
      ? mutate({
          onSuccess: () => {
            queryClient.invalidateQueries(['get-all-discussion']);
          },
        })
      : type === 'comment'
      ? mutateLikeComment({
          onSuccess: () => {
            queryClient.invalidateQueries(['get-all-comment', discussionId]);
          },
        })
      : mutateLikeReply({
          onSuccess: () => {
            queryClient.invalidateQueries([
              'get-all-replies',
              discussionId,
              id,
            ]);
          },
        });
  };

  if (isSuccess) {
    queryClient.invalidateQueries(['get-all-discussion']);
  }

  if (isSuccessLikeComment) {
    queryClient.invalidateQueries(['get-all-comment', discussionId]);
  }

  if (isSuccessLikeReply) {
    queryClient.invalidateQueries(['get-all-replies', discussionId, commentId]);
    // console.log(discussionId, id);
  }

  const [isCommentOpen, setCommentOpen] = useState(false);
  return (
    <Fragment>
      <div
        className={`${
          type === 'post' ? 'bg-neutral-50' : 'bg-neutral-100'
        } px-5 md:px-8 lg:px-10 py-5 mb-1  border-neutral-100 border-2 rounded-md shadow-sm`}
      >
        <div className="relative flex justify-between">
          <section className="flex items-center gap-4 mb-6 border-neutral-100/60">
            {avatar ? (
              <Image
                src={avatar}
                alt={'user avatar'}
                width={36}
                height={36}
                className="bg-white h-9 w-9  flex text-neutral-600 items-center justify-center font-[700] object-cover bg-center rounded-full"
              />
            ) : (
              <Avatar
                name={userName}
                color="#F26800"
                className=" w-[36px] rounded-full h-9"
                size="36"
              />
            )}
            <div className="flex flex-col">
              <h1 className="text-xs font-bold text-neutral-800 md:text-sm">
                {userName}
              </h1>
              <p className="text-xs text-neutral-400">{time}</p>
            </div>
          </section>
          {option}
        </div>
        <section className="text-sm text-neutral-900 z-20">
          {hasImage && Array.isArray(imgSource) && (
            <ImagePreview
              imgSource={imgSource.map((image) => image.url)}
              alt={`imageby ${userName}`}
              type={type}
            />
          )}
          {(type === 'comment' || type === 'reply') && hasImage && (
            <ImagePreview
              imgSource={imgSource.url}
              alt={`imageby${userName}`}
              type={type}
            />
          )}
          {title && (
            <h1 className="mb-3 text-sm font-bold md:text-base">{title}</h1>
          )}

          <p className="pr-0 mb-6 text-xs text-neutral-700 md:text-sm md:pr-4 lg:pr-20 md:mb-8 lg:mb-10">
            {text}
          </p>
          <div className="flex items-center gap-6">
            <div
              // className="flex items-center gap-2 text-[#106FA4] cursor-pointer z-40"
              className="flex items-center gap-2 text-sky-base cursor-pointer z-40"
              onClick={handleSubmit}
            >
              {isLiked ? <AiFillLike /> : <AiOutlineLike />}
              <h1 className="text-xs md:text-sm ">{countLikes} Disukai</h1>
            </div>
            {type !== 'reply' && (
              <div
                // className="flex items-center gap-2 text-[#106FA4] cursor-pointer z-40"
                className="flex items-center gap-2 text-sky-base cursor-pointer z-40"
                onClick={() => {
                  setCommentOpen(!isCommentOpen);
                }}
              >
                <GoCommentDiscussion />
                <h1 className="text-xs md:text-sm">Balas</h1>
              </div>
            )}
          </div>
        </section>
      </div>
      <section
        className={`w-full mb-1 border-2 rounded-md shadow-sm border-neutral-10 ${
          isCommentOpen
            ? 'block max-h-[1000px] transition-all duration-500 opacity-100 ease-in-out translate-y-0'
            : 'none  max-h-0 transition-all duration-300 opacity-0 ease-out -translate-y-12 '
        }`}
      >
        <CommentInput
          id={id}
          type={type === 'post' ? 'comment' : 'reply'}
          discussion_id={discussionId}
        />
      </section>
      {children}
    </Fragment>
  );
};
