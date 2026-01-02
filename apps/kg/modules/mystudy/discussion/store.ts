import { atom } from 'jotai';

export const selectedOptionAtom = atom('');

export const isModalOpenAtom = atom(false);

export const reportDetailTitleAtom = atom('');

export const reportDetailTypeAtom = atom('');

export const reportSuccessAtom = atom(false);

export const selectedPostIdAtom = atom('');

export const selectedCommentIdAtom = atom('');

export const selectedReplyIdAtom = atom('');

export const isCommentInputOpenAtom = atom(false);

export const isImageInputOpenAtom = atom(false);

export const postStateAtom = atom({
  id: '',
  isCommentOpen: false,
});

export const selectedDiscussionIdAtom = atom('');
