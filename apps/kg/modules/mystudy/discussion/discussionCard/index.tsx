import { useQueryClient } from '@tanstack/react-query';
import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import Avatar from 'react-avatar';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { BsDot } from 'react-icons/bs';
import { GoComment, GoCommentDiscussion } from 'react-icons/go';
import { ImagePreview } from '../../../../components/ruang-diskusi/imagePreview';
import {
  useLikeComment,
  useLikeDiscussion,
  useLikeReply,
} from '../../../../hooks/ruang-diskusi/hooks';
import { CommentInput } from '../commentInput';
import { TDiscussinCardProps } from './types';
import toast from 'react-hot-toast';
import { FaRegComment, FaRegComments } from 'react-icons/fa';

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
  discussionId,
  session,
  sessionId,
  subjectId,
  commentId,
  role,
  index,
  comment,
}) => {
  const queryClient = useQueryClient();
  const { mutate, isSuccess } = useLikeDiscussion(id as string);
  const { mutate: mutateLikeComment, isSuccess: isSuccessLikeComment } =
    useLikeComment(id as string);
  const { mutate: mutateLikeReply, isSuccess: isSuccessLikeReply } =
    useLikeReply(id as string);

  const [isCommentOpen, setCommentOpen] = useState(type === 'post');

  const [temporaryCountLikes, setTemporaryCountLikes] = useState(countLikes);
  const [temporaryIsLiked, setTemporaryIsLiked] = useState(isLiked);
  const [clickCount, setClickCount] = useState(0);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (clickCount >= 4) {
      toast.error('Terlalu banyak aksi, silakan tunggu 30 detik');
      setIsButtonDisabled(true);
      const timeout = setTimeout(() => {
        setClickCount(0);
        setIsButtonDisabled(false);
      }, 30000);
      return () => clearTimeout(timeout);
    }
  }, [clickCount]);

  const handleSubmit = async () => {
    if (isButtonDisabled) return;

    setClickCount((prevCount) => prevCount + 1);

    setTemporaryIsLiked(!temporaryIsLiked);
    setTemporaryCountLikes(
      temporaryIsLiked ? temporaryCountLikes - 1 : temporaryCountLikes + 1
    );

    if (type === 'post') {
      await mutate({
        onSuccess: () => {
          queryClient.invalidateQueries([
            'get-discussion-by-session',
            subjectId,
            sessionId,
          ]);
        },
      });
    } else if (type === 'comment') {
      await mutateLikeComment({
        onSuccess: () => {
          queryClient.invalidateQueries([
            'get-comments',
            subjectId,
            sessionId,
            discussionId,
          ]);
        },
      });
    } else {
      await mutateLikeReply({
        onSuccess: () => {
          queryClient.invalidateQueries([
            'get-replies',
            subjectId,
            sessionId,
            commentId,
          ]);
        },
      });
    }
  };

  if (isSuccess || isSuccessLikeComment || isSuccessLikeReply) {
    queryClient.invalidateQueries([
      'get-discussion-by-session',
      subjectId,
      sessionId,
    ]);
    queryClient.invalidateQueries([
      'get-comments',
      subjectId,
      sessionId,
      discussionId,
    ]);
    queryClient.invalidateQueries([
      'get-replies',
      subjectId,
      sessionId,
      discussionId,
      commentId,
    ]);
  }

  return (
    <div className="w-full">
      <div className={`px-8 py-6 border rounded-xl shadow-sm space-y-4`}>
        {type === 'post' && (
          <div className="flex justify-between">
            <h1 className="text-2xl font-bold text-neutral-800">
              Forum Diskusi {(index ?? 0) + 1}
            </h1>
            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="bg-neutral-100 text-neutral-800 border border-neutral-800 py-1 px-3 rounded-full hidden md:block">
                {session}
              </span>
            </div>
          </div>
        )}
        <div className="relative flex justify-between">
          <section className="flex items-center gap-4 border-neutral-100/60">
            {avatar ? (
              <Image
                src={avatar}
                alt={'user avatar'}
                width={36}
                height={36}
                className="bg-white h-9 w-9 flex text-neutral-600 items-center justify-center font-[700] object-cover bg-center rounded-full"
              />
            ) : (
              <Avatar
                name={userName}
                color="#000"
                className="w-[36px] rounded-lg h-9"
                size="36"
              />
            )}
            <div className="flex flex-col justify-center">
              <h1 className="text-xs font-bold text-neutral-800 md:text-[15px]">
                {userName}
              </h1>
              <div className="flex gap-1">
                {/* <p className="text-xs text-green-500">
                  {role === 'ADMIN' ? 'Admin' : 'Mahasiswa'}
                </p>
                <BsDot className="text-primary-500" /> */}
                <p className="text-xs text-neutral-400">{time}</p>
              </div>
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
          {(type === 'comment' || type === 'reply') &&
            hasImage &&
            !Array.isArray(imgSource) && (
              <ImagePreview
                imgSource={imgSource.url}
                alt={`imageby${userName}`}
                type={type}
              />
            )}
          {title && <h1 className="text-sm font-bold md:text-base">{title}</h1>}
          <p className="font-sans">{text}</p>
          <div
            className={`${
              type === 'post'
                ? 'sm:flex-row flex-col items-start sm:items-center'
                : 'items-center'
            } flex gap-2 pt-4 `}
          >
            {type === 'post' && (
              <div className="flex items-center gap-2 z-40 py-2 px-2 rounded-full">
                <h1 className="text-xs sm:text-[12px]">
                  <span className="font-sans">{comment} </span>
                  Balasan
                </h1>
              </div>
            )}
            <div
              className={`flex items-center gap-2 cursor-pointer z-40 bg-neutral-100 py-2 px-4 rounded-full ${
                isButtonDisabled ? 'cursor-not-allowed opacity-50' : ''
              }`}
              onClick={handleSubmit}
            >
              {temporaryIsLiked ? <AiFillLike /> : <AiOutlineLike />}
              <h1 className="text-xs sm:text-[12px]">
                <span className="font-sans">{temporaryCountLikes} </span>
                Disukai
              </h1>
            </div>
            {type !== 'reply' && (
              <div
                className="flex items-center gap-2 cursor-pointer z-40 bg-neutral-100 py-2 px-4 rounded-full"
                onClick={() => setCommentOpen(!isCommentOpen)}
              >
                <GoCommentDiscussion />
                <h1 className="text-xs sm:text-[12px]">Balas</h1>
              </div>
            )}
          </div>
        </section>
      </div>
      <section
        className={`w-full mb-1 rounded-xl shadow-md border mt-2 ${
          isCommentOpen
            ? 'block max-h-[1000px] transition-all duration-500 opacity-100 ease-in-out translate-y-0'
            : 'hidden max-h-0 transition-all duration-300 opacity-0 ease-out -translate-y-12'
        }`}
      >
        <CommentInput
          id={id}
          type={type === 'post' ? 'comment' : 'reply'}
          discussion_id={discussionId}
          subject_id={subjectId}
          session_id={sessionId}
        />
      </section>
      {children}
    </div>
  );
};
