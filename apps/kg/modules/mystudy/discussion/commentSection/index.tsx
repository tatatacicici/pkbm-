import React, {
  FC,
  Fragment,
  ReactElement,
  useEffect,
  useRef,
  useCallback,
  useState,
} from 'react';
import { useInfiniteQuery } from '@tanstack/react-query';
// eslint-disable-next-line @nx/enforce-module-boundaries
import { getComments } from '@kampus-gratis/apps/kg/hooks/mystudy/discussion/request';
import { TDiscussionComment } from '../../../../types/mystudy-discussions';
import { DiscussionCard } from '../discussionCard';
import { DiscussionPostOption } from '../discussionPostOption';
import { ReplySection } from '../replySection';

type TCommentProps = {
  subject_id: string;
  session_id: string;
  discussion_id: string;
};

export const CommentSection: FC<TCommentProps> = ({
  subject_id,
  session_id,
  discussion_id,
}): ReactElement => {
  const observerElem = useRef<HTMLDivElement | null>(null);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ['get-comments', subject_id, session_id, discussion_id],
      queryFn: async ({ pageParam = 1 }) => {
        return await getComments({
          subject_id,
          session_id,
          discussion_id,
          pageParam,
        });
      },
      getNextPageParam: (lastPage) => {
        return lastPage.meta.page < lastPage.meta.page_size
          ? lastPage.meta.page + 1
          : undefined;
      },
    });

  const handleObserver = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const target = entries[0];
      if (target.isIntersecting && hasNextPage) {
        fetchNextPage();
      }
    },
    [fetchNextPage, hasNextPage]
  );

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 1.0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (observerElem.current) observer.observe(observerElem.current);

    return () => {
      if (observerElem.current) observer.unobserve(observerElem.current);
    };
  }, [handleObserver]);

  const [openCommentStates, setOpenCommentStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleToggleComment = (discussionId: string) => {
    setOpenCommentStates((prevState) => ({
      ...prevState,
      [discussionId]: !prevState[discussionId],
    }));
  };

  const handleHideReplies = (discussionId: string) => {
    setOpenCommentStates((prevState) => ({
      ...prevState,
      [discussionId]: false,
    }));
  };

  if (isLoading)
    return (
      <div className="text-blue-base flex justify-center my-5">
        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
      </div>
    );

  return (
    <Fragment>
      {data?.pages.map((page, pageIndex) =>
        page.data.comments.map((comment: TDiscussionComment, index: number) => {
          const isCommentOpen = openCommentStates[comment.id] ?? false;
          return (
            <section
              key={`comment-${pageIndex}-${index}`}
              className="pl-6 mb-5 md:pl-8 lg:pl-14"
            >
              <DiscussionCard
                avatar={comment.author.avatar}
                hasImage={comment.image ? true : false}
                countLikes={comment.likes}
                time={comment.time_elapsed}
                id={comment.id}
                isLiked={comment.is_liked}
                discussionId={discussion_id}
                subjectId={subject_id}
                sessionId={session_id}
                type="comment"
                userName={comment.author.full_name}
                text={comment.content}
                imgSource={comment.image}
                session={`Pertemuan ${page.data.detail.session_no}`}
                option={
                  <DiscussionPostOption
                    type="comment"
                    author_id={comment.author.id}
                    comment_id={comment.id}
                    discussion_id={discussion_id}
                    reply_id=""
                  />
                }
              >
                <h1
                  className="mb-4 text-sm font-bold md:mb-4 lg:mb-6 text-sky-base mt-2"
                  onClick={() => handleToggleComment(comment.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {comment.replies > 0 ? `${comment.replies} Balasan` : ''}
                </h1>
                {isCommentOpen && (
                  <ReplySection
                    subject_id={subject_id}
                    session_id={session_id}
                    discussion_id={discussion_id}
                    comment_id={comment.id}
                    key={index}
                    onHideReplies={() => handleHideReplies(comment.id)}
                  />
                )}
              </DiscussionCard>
            </section>
          );
        })
      )}
      <div ref={observerElem}>
        {isFetchingNextPage ? (
          <div className="flex justify-center">
            <button className="text-blue-base" disabled>
              Memuat...
            </button>
          </div>
        ) : null}
      </div>
    </Fragment>
  );
};
