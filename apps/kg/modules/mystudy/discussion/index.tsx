'use client';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { Modal } from '@kampus-gratis/components/molecules';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Image from 'next/image';
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from 'next/navigation';
import { DependencyList, useCallback, useEffect, useState } from 'react';
import { BiSolidLock } from 'react-icons/bi';
import { useRecoilState } from 'recoil';
import { useGetAllStudikuDiscussion } from '../../../hooks/mystudy/discussion/hooks';
import { useGetSubjectDetailsById } from '../../../hooks/mystudy/subject-detail/hook';
import { CommentSection } from './commentSection';
import { DiscussionCard } from './discussionCard';
import { DeleteConfirmationModal } from './modal/Delete-Confirmation';
import { PostCreateModal } from './modal/Post-Create';
import { PostEditModal } from './modal/Post-Edit';
import { PostEditCommentModal } from './modal/Post-Edit-Comment';
import { PostReportModal } from './modal/Post-Report';
import { ReportSuccessModal } from './modal/Report-Success';
import { isModalOpen, selectedOption } from './store';

export const DiskusiStudikuModule = () => {
  const { subjectId, sessionId } = useParams();
  const searchParams = useSearchParams();
  const page = searchParams.get('page');
  const { data: dataSubject } = useGetSubjectDetailsById(subjectId as string);
  const [isOptionOpen, setOptionOpen] = useRecoilState(isModalOpen);
  const [getSelectedOption] = useRecoilState(selectedOption);
  const [selectedPertemuan, setSelectedPertemuan] = useState<string>(
    sessionId as string
  );
  const { data, isLoading } = useGetAllStudikuDiscussion(
    subjectId as string,
    selectedPertemuan
  );

  const listDiscussionData = data?.data?.discussions;

  const [openCommentStates, setOpenCommentStates] = useState<{
    [key: string]: boolean;
  }>({});

  const handleToggleComment = (discussionId: string) => {
    setOpenCommentStates((prevState) => ({
      ...prevState,
      [discussionId]: !prevState[discussionId],
    }));
  };

  const DiskusiStudikuBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: data?.data?.detail?.subject_name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: 'Diskusi',
      link: `/studi-ku/${subjectId}/diskusi/${sessionId}`,
    },
  ];

  return (
    <>
      <BreadCrumb items={DiskusiStudikuBreadcrumb} bgColor="" />
      <div className="mx-auto md:flex-nowrap flex-wrap w-full mb-12 px-8 2xl:px-0 max-w-[1440px] flex h-full md:min-h-[calc(100vh-192px)] justify-around ">
        <div className=" flex w-full md:w-full rounded-md">
          {listDiscussionData && listDiscussionData?.length > 0 ? (
            <div className="w-full">
              {listDiscussionData?.map((discussion, index) => {
                const isCommentOpen = openCommentStates[discussion.id] ?? false;

                return (
                  <div
                    key={index}
                    className="p-4 m-3 bg-white shadow-md border rounded-2xl max-w-[968px] mx-auto"
                  >
                    <DiscussionCard
                      avatar={discussion.author.avatar}
                      type="post"
                      hasImage={discussion.images[0] ? true : false}
                      imgSource={discussion.images}
                      countLikes={discussion.likes}
                      time={discussion.time_elapsed}
                      userName={discussion.author.full_name}
                      text={discussion.content}
                      id={discussion.id}
                      session="Pertemuan 1"
                      option={<div></div>}
                      isLiked={discussion.is_liked}
                      discussionId={discussion.id}
                      subjectId={subjectId as string}
                      sessionId={selectedPertemuan}
                      commentId=""
                      role={discussion.author.role}
                      index={index}
                      comment={discussion?.comments}
                    >
                      <section>
                        <span
                          className="mb-3 text-xs sm:text-sm mt-4 justify-center text-center items-center flex transition font-medium hover:text-neutral-700 hover:underline decoration-neutral-300"
                          onClick={() => handleToggleComment(discussion.id)}
                          style={{ cursor: 'pointer' }}
                        >
                          {/* {discussion?.comments} balasan */}
                          {isCommentOpen
                            ? 'Tutup Balasan'
                            : 'Klik untuk melihat semua Balasan'}
                        </span>
                        {isCommentOpen && (
                          <CommentSection
                            subject_id={subjectId as string}
                            session_id={selectedPertemuan}
                            discussion_id={discussion.id}
                            key={index}
                          />
                        )}
                      </section>
                    </DiscussionCard>
                  </div>
                );
              })}
            </div>
          ) : isLoading ? (
            <LoadingSpinner />
          ) : (
            <div className="flex flex-col justify-center items-center h-full w-full">
              <Image
                src="/images/dashboard/emptyMatkul.svg"
                width={280}
                height={280}
                alt="Empty"
              />
              <p>Belum ada diskusi pada pertemuan ini</p>
            </div>
          )}
        </div>

        <Modal
          withClose={false}
          hasImage={false}
          lookup={isOptionOpen}
          onClose={() => setOptionOpen(false)}
        >
          {getSelectedOption === 'create' && <PostCreateModal />}
          {getSelectedOption === 'editDiscussion' && <PostEditModal />}
          {getSelectedOption === 'editComment' && (
            <PostEditCommentModal
              type="comment"
              subject_id={subjectId as string}
              session_id={selectedPertemuan}
            />
          )}
          {getSelectedOption === 'editReply' && (
            <PostEditCommentModal
              type="reply"
              subject_id={subjectId as string}
              session_id={selectedPertemuan}
            />
          )}
          {getSelectedOption === 'reportDiscussion' && (
            <PostReportModal type="discussion" />
          )}
          {getSelectedOption === 'reportComment' && (
            <PostReportModal type="comment" />
          )}
          {getSelectedOption === 'reportSuccess' && <ReportSuccessModal />}
          {getSelectedOption === 'deleteDiscussion' && (
            <DeleteConfirmationModal
              type="discussion"
              subject_id={subjectId as string}
              session_id={selectedPertemuan}
            />
          )}
          {getSelectedOption === 'deleteComment' && (
            <DeleteConfirmationModal
              type="comment"
              subject_id={subjectId as string}
              session_id={selectedPertemuan}
            />
          )}
          {getSelectedOption === 'deleteReply' && (
            <DeleteConfirmationModal
              type="reply"
              subject_id={subjectId as string}
              session_id={selectedPertemuan}
            />
          )}
        </Modal>
      </div>
    </>
  );
};
