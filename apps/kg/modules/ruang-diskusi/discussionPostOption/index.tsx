import { FC, ReactElement } from 'react';
import { AiFillFlag } from 'react-icons/ai';
import { Menu, Transition } from '@headlessui/react';
import { BsPencilFill, BsThreeDotsVertical } from 'react-icons/bs';
import { MdDelete } from 'react-icons/md';
import { useSetRecoilState } from 'recoil';

import { TSelectedOptionId } from './types';
import {
  isModalOpen,
  selectedCommentId,
  selectedDiscussionId,
  selectedOption,
  selectedPostId,
  selectedReplyId,
} from '../store';
import { useProfile } from '../../../hooks/profile/hook';

export const DiscussionPostOption: FC<TSelectedOptionId> = ({
  reply_id,
  discussion_id,
  comment_id,
  author_id,
  type,
}): ReactElement => {
  const { data } = useProfile();

  let options = [
    {
      title: 'Report',
      icon: <AiFillFlag className="text-blue-600" />,
      option: type === 'discussion' ? 'reportDiscussion' : 'reportComment',
    },
  ];

  if (data?.data.user.id === author_id) {
    {
      type === 'discussion'
        ? (options = [
            ...options,
            {
              title: 'Edit',
              icon: <BsPencilFill className="text-version3-400" />,
              option: 'editDiscussion',
            },
            {
              title: 'Delete',
              icon: <MdDelete className="text-warning-500" />,
              option: 'deleteDiscussion',
            },
          ])
        : type === 'comment'
        ? (options = [
            ...options,
            {
              title: 'Edit',
              icon: <BsPencilFill className="text-version3-400" />,
              option: 'editComment',
            },
            {
              title: 'Delete',
              icon: <MdDelete className="text-warning-500" />,
              option: 'deleteComment',
            },
          ])
        : (options = [
            ...options,
            {
              title: 'Edit',
              icon: <BsPencilFill className="text-version3-400" />,
              option: 'editReply',
            },
            {
              title: 'Delete',
              icon: <MdDelete className="text-warning-500" />,
              option: 'deleteReply',
            },
          ]);
    }
  }

  const setSeletedOption = useSetRecoilState(selectedOption);
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const setSelectedCommentId = useSetRecoilState(selectedCommentId);
  const setSelectedReplyId = useSetRecoilState(selectedReplyId);
  const setSelectedDiscussionId = useSetRecoilState(selectedDiscussionId);

  return (
    <div className="z-50">
      <Menu
        as="div"
        className={'inline-block bg-neutral-50/0 text-left left-0 mt-1.5  z-40'}
      >
        <Menu.Button>
          <div className="cursor-pointer text-neutral-800 group">
            <BsThreeDotsVertical />
          </div>
        </Menu.Button>

        <Transition
          enter="transition ease duration-500 transform"
          enterFrom="opacity-0 -translate-y-12"
          enterTo="opacity-100 translate-y-0"
          leaveFrom="opacity-100 translate-y-0"
          leaveTo="opacity-0 -translate-y-12"
        >
          <Menu.Items
            as="div"
            className="absolute right-0 overflow-hidden origin-top-right bg-white rounded-md shadow-lg bg-neutral-50 top-2 w-30 "
          >
            {options.map(({ icon, title, option }, index) => (
              <Menu.Item
                key={index}
                as="div"
                className={
                  'flex gap-3 items-center px-4 py-3 cursor-pointer  hover:bg-neutral-100 transition-all duration-300 ease-in-out'
                }
                onClick={() => {
                  setSelectedReplyId(reply_id);
                  setSeletedOption(option);
                  setSelectedDiscussionId(discussion_id);
                  setSelectedCommentId(comment_id);
                  setOptionOpen(true);
                }}
              >
                {icon}
                <h1
                  id="post-option"
                  className="text-xs text-center text-neutral-800"
                >
                  {title}
                </h1>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};
