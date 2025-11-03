export type TDiscussinCardProps = {
  avatar?: string;
  hasImage?: boolean;
  text: string;
  imgSource?: array;
  userName: string;
  title?: string;
  time: string;
  type: string;
  countLikes: number;
  option: ReactNode;
  children?: ReactNode;
  id: string;
  isLiked?: boolean;
  discussionId: string;
  commentId?: string;
};
