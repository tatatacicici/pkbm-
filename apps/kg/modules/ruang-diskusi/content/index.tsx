'use client';
import { Modal } from '@kampus-gratis/components/molecules';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import {
  DependencyList,
  FC,
  ReactElement,
  useCallback,
  useEffect,
  useState,
} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { useRecoilState } from 'recoil';
import Pagination from '../../../components/general/pagination';
import { useProfile } from '../../../hooks/profile/hook';
import { useGetAllDiscussion } from '../../../hooks/ruang-diskusi/hooks';
import { CommentSection } from '../commentSection';
import { DiscussionCard } from '../discussionCard';
import { DiscussionPostOption } from '../discussionPostOption';
import { DeleteConfirmationModal } from '../modal/Delete-Confirmation';
import { PostCreateModal } from '../modal/Post-Create';
import { PostEditModal } from '../modal/Post-Edit';
import { PostEditCommentModal } from '../modal/Post-Edit-Comment';
import { PostReportModal } from '../modal/Post-Report';
import { ReportSuccessModal } from '../modal/Report-Success';
import { isModalOpen, selectedOption } from '../store';

export function useDebounce(
  effect: VoidFunction,
  dependencies: DependencyList,
  delay: number
): void {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const callback = useCallback(effect, dependencies);

  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
}

export const DiscussionContent: FC = (): ReactElement => {
  const [isOptionOpen, setOptionOpen] = useRecoilState(isModalOpen);
  const [getSelectedOption, setSelectedOption] = useRecoilState(selectedOption);
  // const [searchQuery, setSearchQuery] = useState<string>('');
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const page = searchParams.get('page') || '1';
  const searchQuery = searchParams.get('search') || '';

  const { data: user } = useProfile();

  const [option, setOption] = useState({
    limit: '5',
    order: 'LATEST',
    title: '',
    page: '1',
  });

  const { data, refetch } = useGetAllDiscussion(
    option.limit,
    option.order,
    searchQuery,
    page
  );

  const [deb, setDeb] = useState('');

  const listDiscussionData = data?.data;
  useEffect(() => {
    setOption(option);
  }, [option]);

  useDebounce(
    () => {
      setOption((prev) => ({ ...prev, title: deb, page: '1' }));
      router.replace(`/ruang-diskusi?page=1&search=${deb}`);
    },
    [deb],
    1000
  );

  function daysAgo(days: string) {
    const today = new Date();
    const msInDay = 24 * 60 * 60 * 1000;
    const createdOn = new Date(days);
    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return String((+today - +createdOn) / msInDay);
  }

  const handlePageChange = async (page: number) => {
    setOption((prev) => ({ ...prev, page: page.toString() }));
    router.push(`/ruang-diskusi?page=${page}`);
  };

  return (
    <div className="max-w-[1200px] px-1 py-8 mx-1 my-8 bg-white rounded-md shadow-sm md:mx-14 lg:mx-auto md:px-16 lg:px-20 ">
      <section className="flex flex-wrap items-center justify-between w-full mb-6 md:flex-nowrap gap-x-2 gap-y-3">
        <label
          htmlFor="searchDiscussion"
          className="flex  px-3 w-full gap-4 items-center rounded-md shadow-sm  bg-neutral-100  text-neutral-500 h-[42px] lg:h-[50px]"
        >
          <AiOutlineSearch className="text-xl md:text-2xl text-neutral-500 " />
          <input
            type="text"
            className="w-full px-2 text-xs outline-none bg-neutral-100 text-neutral-700 md:text-sm"
            id="searchDiscussion"
            placeholder="Cari Topik Diskusi"
            value={deb}
            onChange={(e) => setDeb(e.target.value)}
          />
        </label>
        <section className="w-full md:w-[200px] gap-10 lg:w-[200px] h-[42px] lg:h-[50px] flex justify-start md:justify-end">
          {/* <button
            type="button"
            className="relative z-10 flex items-center justify-center w-full gap-2 py-4 text-sm font-bold transition-colors duration-300 ease-in-out border-2 rounded-md border-version2-500 disabled:bg-[#106FA4]-200/70 disabled:border-none bg-[#106FA4] text-neutral-100 hover:opacity-50 hover:border-version2-300"
            onClick={() => {
              setOptionOpen(true);
              setSelectedOption('create');
            }}
          > */}
          <button
            type="button"
            className="relative z-10 flex items-center justify-center w-full gap-2 py-4 text-sm font-bold transition-colors duration-300 ease-in-out border-2 rounded-md border-version2-500 disabled:bg-sky-base-200/80 disabled:border-none bg-sky-base text-neutral-100 hover:opacity-50 hover:border-version2-300"
            onClick={() => {
              setOptionOpen(true);
              setSelectedOption('create');
            }}
          >
            <IoMdAddCircleOutline className="text-xl text-neutral-50" />
            <h1>Buat Diskusi</h1>
          </button>
        </section>
      </section>
      <section className="relative w-full py-4">
        {listDiscussionData &&
          listDiscussionData?.map((discussion, index) => {
            return (
              <div
                key={index}
                className="p-2 m-3 border-2 border-gray-200 rounded-lg"
              >
                <DiscussionCard
                  avatar={discussion.author.avatar}
                  type="post"
                  hasImage={discussion.images[0] ? true : false}
                  imgSource={discussion.images}
                  countLikes={discussion.likes}
                  time={discussion.time_elapsed}
                  // time={`${daysAgo(discussion.created_at)} Hari yang lalu`}
                  userName={discussion.author.full_name}
                  // title={discussion.title}
                  discussionId={discussion.id}
                  text={discussion.content}
                  id={discussion.id}
                  option={
                    <DiscussionPostOption
                      discussion_id={discussion.id}
                      reply_id=""
                      author_id={discussion.author.id}
                      comment_id=""
                      type="discussion"
                    />
                  }
                  isLiked={discussion.is_liked}
                >
                  <section>
                    {/* <span className="mb-3 text-sm font-bold text-[#106FA4] mx-2"> */}
                    <span className="mb-3 text-sm font-bold text-sky-base mx-2">
                      {discussion.comments} balasan
                    </span>
                    <CommentSection id={discussion.id} key={index} />
                  </section>
                </DiscussionCard>
              </div>
            );
          })}
      </section>
      <section>
        <Pagination
          onPageChange={handlePageChange}
          totalPages={Number(data?.meta?.page_size) || 1}
          currentPage={Number(data?.meta?.page) || 1}
        />
      </section>
      <Modal
        withClose={false}
        hasImage={false}
        lookup={isOptionOpen}
        onClose={() => setOptionOpen(false)}
      >
        {getSelectedOption === 'create' && <PostCreateModal />}
        {getSelectedOption === 'editDiscussion' && <PostEditModal />}
        {getSelectedOption === 'editComment' && (
          <PostEditCommentModal type="comment" />
        )}
        {getSelectedOption === 'editReply' && (
          <PostEditCommentModal type="reply" />
        )}
        {getSelectedOption === 'reportDiscussion' && (
          <PostReportModal type="discussion" />
        )}
        {getSelectedOption === 'reportComment' && (
          <PostReportModal type="comment" />
        )}
        {getSelectedOption === 'reportSuccess' && <ReportSuccessModal />}
        {getSelectedOption === 'deleteDiscussion' && (
          <DeleteConfirmationModal type="discussion" />
        )}
        {getSelectedOption === 'deleteComment' && (
          <DeleteConfirmationModal type="comment" />
        )}
        {getSelectedOption === 'deleteReply' && (
          <DeleteConfirmationModal type="reply" />
        )}
      </Modal>
    </div>
  );
};
