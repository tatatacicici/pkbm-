import { FC, Fragment, ReactElement } from 'react';
// import { DiscussionPostOption } from "./post/option";
// import { useGetCommentById } from "./hooks";
// import { ReplySection } from "./ReplySection";
import { DiscussionCard } from '../discussionCard';
import { DiscussionPostOption } from '../discussionPostOption';
import {
  useGetAllComment,
  useGetAllReplies,
  useGetCommentById,
} from '../../../hooks/ruang-diskusi/hooks';
import { TDiscussionComment } from '../../../types/ruang-diskusi';
import { ReplySection } from '../replySection';
type TCommentProps = {
  id: string;
};

export const CommentSection: FC<TCommentProps> = ({ id }): ReactElement => {
  const { data } = useGetAllComment(id);
  const listCommentData = data?.data;

  function daysAgo(days: string) {
    const today = new Date();
    const msInDay = 24 * 60 * 60 * 1000;
    const createdOn = new Date(days);
    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return String((+today - +createdOn) / msInDay);
  }
  return (
    <Fragment>
      {listCommentData &&
        listCommentData?.map((comment: TDiscussionComment, index: number) => {
          return (
            <section
              key={`comment-${index}`}
              className="pl-6 mb-10 md:pl-8 lg:pl-14"
            >
              <DiscussionCard
                avatar={comment.author.avatar}
                hasImage={comment.image ? true : false}
                countLikes={comment.likes}
                time={comment.time_elapsed}
                id={comment.id}
                isLiked={comment.is_liked}
                discussionId={id}
                // time={`${daysAgo(comment.created_at)} Hari yang lalu`}
                type="comment"
                userName={comment.author.full_name}
                text={comment.content}
                imgSource={comment.image}
                option={
                  <DiscussionPostOption
                    type="comment"
                    author_id={comment.author.id}
                    reply_id=""
                    comment_id={comment.id}
                    discussion_id={id}
                  />
                }
              >
                <h1 className="mb-6 text-sm font-bold md:mb-8 lg:mb-10 text-[#106FA4]">
                  {comment?.replies} balasan
                </h1>
                <ReplySection id={id} comment_id={comment.id} key={index} />
              </DiscussionCard>
            </section>
          );
        })}
    </Fragment>
  );
};
