import { atom } from 'recoil';

export const selectedOption = atom({
  key: 'post-option-studiku',
  default: '',
});

export const isModalOpen = atom({
  key: 'modal-opened-studiku',
  default: false,
});

export const reportDetailTitle = atom({
  key: 'report-detail-title-studiku',
  default: '',
});

export const reportDetailType = atom({
  key: 'report-detail-type-studiku',
  default: '',
});

export const reportSuccess = atom({
  key: 'report-success-studiku',
  default: false,
});

export const selectedPostId = atom({
  key: 'post-id-studiku',
  default: '',
});

export const selectedCommentId = atom({
  key: 'comment-id-studiku',
  default: '',
});

export const selectedReplyId = atom({
  key: 'reply-id-studiku',
  default: '',
});

export const isCommentInputOpen = atom({
  key: 'comment-input-opened-studiku',
  default: false,
});

export const isImageInputOpen = atom({
  key: 'image-input-opened-studiku',
  default: false,
});

export const postState = atom({
  key: 'post-state-studiku',
  default: {
    id: '',
    isCommentOpen: false,
  },
});

export const selectedDiscussionId = atom({
  key: 'discussion-id',
  default: '',
});
