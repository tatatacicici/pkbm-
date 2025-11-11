import React, { FC, Fragment, ReactElement } from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getReplies } from '@kampus-gratis/apps/kg/hooks/mystudy/discussion/request';
import { TDiscussionComment } from '../../../../types/mystudy-discussions';
import { DiscussionCard } from '../discussionCard';
import { DiscussionPostOption } from '../discussionPostOption';

type TReplyProps = {
  subject_id: string;
  session_id: string;
  discussion_id: string;
  comment_id: string;
  hidden?: boolean;
  onHideReplies: () => void;
};

export const ReplySection: FC<TReplyProps> = ({
  subject_id,
  session_id,
  discussion_id,
  comment_id,
  hidden = false,
  onHideReplies,
}): ReactElement => {
  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: [
        'get-replies',
        subject_id,
        session_id,
        discussion_id,
        comment_id,
      ],
      queryFn: async ({ pageParam = 1 }) => {
        return await getReplies({
          subject_id,
          session_id,
          discussion_id,
          comment_id,
          pageParam,
        });
      },
      getNextPageParam: (lastPage) => {
        return lastPage.meta.page < lastPage.meta.page_size
          ? lastPage.meta.page + 1
          : undefined;
      },
    });

  const listCommentData =
    data?.pages.flatMap((page) => page.data.replies) || [];

  return (
    <Fragment>
      <div className={hidden ? 'hidden' : ''}>
        {listCommentData.map((comment: TDiscussionComment, index: number) => {
          return (
            <section
              key={`comment-${index}`}
              className="pl-6 mb-5 md:pl-8 lg:pl-14"
            >
              <DiscussionCard
                avatar={comment.author.avatar}
                hasImage={comment.image ? true : false}
                countLikes={comment.likes}
                time={comment.time_elapsed}
                id={comment.id}
                subjectId={subject_id}
                sessionId={session_id}
                commentId={comment_id}
                isLiked={comment.is_liked}
                discussionId={discussion_id}
                session={`Pertemuan ${data?.pages[0]?.data?.detail.session_no}`}
                type="reply"
                userName={comment.author.full_name}
                text={comment.content}
                imgSource={comment.image}
                option={
                  <DiscussionPostOption
                    type="reply"
                    author_id={comment.author.id}
                    comment_id={comment_id}
                    discussion_id={discussion_id}
                    reply_id={comment.id}
                  />
                }
              ></DiscussionCard>
            </section>
          );
        })}
        {hasNextPage ? (
          <div className="flex justify-center">
            <button
              onClick={() => fetchNextPage()}
              disabled={isFetchingNextPage}
              className="text-blue-base"
            >
              {isFetchingNextPage ? (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
              ) : (
                'Lihat lainnya'
              )}
            </button>
          </div>
        ) : (
          <div className="flex justify-center">
            <button
              onClick={onHideReplies}
              className="text-sky-base font-medium"
            >
              Sembunyikan Balasan
            </button>
          </div>
        )}
      </div>
    </Fragment>
  );
};
