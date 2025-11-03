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
type TReplyProps = {
  id: string;
  comment_id: string;
};

export const ReplySection: FC<TReplyProps> = ({
  id,
  comment_id,
}): ReactElement => {
  const { data } = useGetAllReplies(id, comment_id);
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
                type="reply"
                userName={comment.author.full_name}
                text={comment.content}
                imgSource={comment.image}
                commentId={comment_id}
                option={
                  <DiscussionPostOption
                    type="reply"
                    author_id={comment.author.id}
                    reply_id={comment.id}
                    comment_id={comment_id}
                    discussion_id={id}
                  />
                }
              >
                {/* <h1 className="mb-6 text-sm font-bold md:mb-8 lg:mb-10 text-[#106FA4]">
                {comment?.replies} balasan
              </h1> */}
                {/* <ReplySection data={comment.comment_replies} /> */}
                {/* {comment.comment_replies.map((reply, index) => (
                <div
                  key={`reply-${index}`}
                  className="pl-6 mb-10 md:pl-8 lg:pl-14"
                >
                  <DiscussionCard
                    avatar={reply.author.avatar}
                    hasImage={reply.image ? true : false}
                    countLikes={reply.likes}
                    // time={reply.time_elapsed}
                    discussionId={id}
                    id={reply.id}
                    isLiked={reply.isLiked}
                    time={`${daysAgo(reply.created_at)} Hari yang lalu`}
                    type="reply"
                    userName={reply.author.full_name}
                    text={reply.content}
                    imgSource={reply.image}
                    option={
                      <DiscussionPostOption
                        type="reply"
                        author_id={reply.user_id}
                        id={reply.id}
                        discussion_id={id}
                        comment_id={comment.id}
                      />
                    }
                  ></DiscussionCard>
                </div>
              ))} */}
              </DiscussionCard>
            </section>
          );
        })}
    </Fragment>
  );
};
