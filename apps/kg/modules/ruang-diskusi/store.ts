import { atom } from 'recoil';

export const selectedOption = atom({
  key: 'post-option',
  default: '',
});

export const isModalOpen = atom({
  key: 'modal-opened',
  default: false,
});

export const reportDetailTitle = atom({
  key: 'report-detail-title',
  default: '',
});

export const reportDetailType = atom({
  key: 'report-detail-type',
  default: '',
});

export const reportSuccess = atom({
  key: 'report-success',
  default: false,
});

export const selectedPostId = atom({
  key: 'post-id',
  default: '',
});

export const selectedCommentId = atom({
  key: 'comment-id',
  default: '',
});

export const selectedReplyId = atom({
  key: 'reply-id',
  default: '',
});

export const isCommentInputOpen = atom({
  key: 'comment-input-opened',
  default: false,
});

export const isImageInputOpen = atom({
  key: 'image-input-opened',
  default: false,
});

export const postState = atom({
  key: 'post-state',
  default: {
    id: '',
    isCommentOpen: false,
  },
});

export const selectedDiscussionId = atom({
  key: 'discussion-id',
  default: '',
});
