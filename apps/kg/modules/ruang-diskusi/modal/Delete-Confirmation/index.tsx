import { Button } from '@kampus-gratis/components/atoms';
import { useQueryClient } from '@tanstack/react-query';
import { FC, ReactElement } from 'react';
import { FaTrash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  useDeleteComment,
  useDeleteDiscussion,
  useDeleteReply,
} from '../../../../hooks/ruang-diskusi/hooks';
import {
  isModalOpen,
  selectedCommentId,
  selectedDiscussionId,
  selectedPostId,
  selectedReplyId,
} from '../../store';
import { TDeleteConfirmationProps } from './types';

export const DeleteConfirmationModal: FC<TDeleteConfirmationProps> = ({
  type,
}): ReactElement => {
  const setOptionOpen = useSetRecoilState(isModalOpen);
  const getSelectedPostId = useRecoilValue(selectedPostId);
  const getSelectedDiscussionId = useRecoilValue(selectedDiscussionId);
  const getSelectedCommentId = useRecoilValue(selectedCommentId);
  const getSelectedReplyId = useRecoilValue(selectedReplyId);
  const queryClient = useQueryClient();
  const { mutate, isLoading, isSuccess } = useDeleteDiscussion();

  const {
    mutate: mutateComment,
    isSuccess: successComment,
    isLoading: isLoadingComment,
  } = useDeleteComment();

  const {
    mutate: mutateReply,
    isSuccess: isSuccessReply,
    isLoading: isLoadingReply,
  } = useDeleteReply();

  const handleSubmit = async () => {
    await mutate(getSelectedDiscussionId, {
      onSuccess: () => {
        queryClient.invalidateQueries(['get-all-discussion']);
        setOptionOpen(false);
        toast.success('Diskusi Berhasil Dihapus');
      },
    });
  };

  const handleSubmitComment = async () => {
    await mutateComment(
      { discussion_id: getSelectedDiscussionId, id: getSelectedCommentId },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([
            'get-all-comment',
            getSelectedDiscussionId,
          ]);
          queryClient.invalidateQueries([
            'comment-get-by-id',
            getSelectedDiscussionId,
          ]);

          setOptionOpen(false);
          toast.success('Komentar Berhasil Dihapus');
        },
      }
    );
  };

  const handleSubmitReply = async () => {
    await mutateReply(
      {
        discussion_id: getSelectedDiscussionId,
        comment_id: getSelectedCommentId,
        id: getSelectedReplyId,
      },
      {
        onSuccess: () => {
          queryClient.invalidateQueries([
            'get-all-replies',
            getSelectedDiscussionId,
            getSelectedCommentId,
          ]);
          setOptionOpen(false);
          toast.success('Komentar Berhasil Dihapus');
        },
      }
    );
  };

  return (
    <section className="flex flex-col items-center justify-center px-10 py-6">
      <div className="relative grid w-10 h-10 rounded-full place-items-center">
        <FaTrash className="z-20 text-4xl text-warning-500" />
      </div>
      <div className="flex flex-col gap-3 items-center justify-center py-2 w-[490px]">
        <h1 className="text-lg font-bold text-neutral-800">Konfirmasi</h1>
        <p className="w-full mb-4 text-sm text-center ">
          {`Apakah anda ingin menghapus ${
            type === 'discussion'
              ? 'postingan'
              : type === 'comment'
              ? 'komentar'
              : 'balasan'
          }  ini?`}
        </p>
        <section className="flex w-full gap-6">
          <Button
            type="button"
            className="py-2.5 w-full text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 "
            onClick={
              type === 'discussion'
                ? handleSubmit
                : type === 'comment'
                ? handleSubmitComment
                : handleSubmitReply
            }
          >
            {isLoading || isLoadingComment || isLoadingReply ? (
              <h1>Sedang menghapus</h1>
            ) : (
              <h1>Ya, hapus</h1>
            )}
          </Button>
          <Button
            type="button"
            className="py-2.5 w-full text-sm font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 bg-neutral-50 text-version2-500 hover:border-version2-300 hover:bg-neutral-100 hover:text-version2-400 "
            onClick={() => {
              setOptionOpen(false);
            }}
          >
            <h1>Tidak</h1>
          </Button>
        </section>
      </div>
    </section>
  );
};
