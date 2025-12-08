import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { FC, ReactElement, Suspense, useEffect, useState } from 'react';
import { Assigment } from '../../../../components/assigment/assignment-card';
import { useGetAssignment } from '../../../../hooks/assigment/hook';
import { TAssignmentUser } from '../../../../types/assigment';
import AssignedAssesment from '../../assets/assigned-assesment.svg';
// import AssigmentAssigned from '../../assets/assigned-assigment.svg';
import AssigmentAssigned from '../../assets/assigned-assigment-new.svg';
import AssigmentDone from '../../assets/assigned-done.svg';
import AssignedLate from '../../assets/assigned-late.svg';

export const ContentSection: FC = (): ReactElement => {
  const { data } = useGetAssignment();
  const getAssigment = data?.data;
  const query = useSearchParams();
  const router = useRouter();
  const [active, setactive] = useState('semua-tugas');

  useEffect(() => {
    if (query.get('tab') === 'semua-tugas' || query.get('tab') === null) {
      setactive('semua-tugas');
    } else if (query.get('tab') === 'ditugaskan') {
      setactive('ONGOING');
    } else if (query.get('tab') === 'terlambat') {
      setactive('LATE');
    } else if (query.get('tab') === 'sedang-dinilai') {
      setactive('GRADING');
    } else if (query.get('tab') === 'selesai') {
      setactive('FINISHED');
    }
  }, [query, router, active]);

  return (
    <Suspense fallback={<LoadingSpinner />}>
      <section className="lg:px-20 md:px-10 px-5 py-3 w-full mt-[36px] drop-shadow-md mb-3 min-h-screen max-w-[1440px] mx-auto">
        <div className="bg-white h-full rounded-[8px] dark:bg-gray-800 ">
          <div className="mb-5 lg:mb-8 text-[20px] font-semibold text-[#262626] border-b border-gray-200 hover:text-[#000]">
            <ul className="p-2 flex flex-wrap gap-5 justify-center items-center">
              <li className="mr-2">
                {/* <Link
                  href={'/penugasan?tab=semua-tugas'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'semua-tugas' ||
                    query.get('tab') === null
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]  `}
                  aria-current="page"
                  onClick={() => setactive('semua-tugas')}
                >
                  Semua Tugas
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={'/penugasan?tab=ditugaskan'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'ditugaskan'
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  dark:text-[#0B568D] `}
                  aria-current="page"
                  onClick={() => setactive('ONGOING')}
                >
                  Ditugaskan
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={'/penugasan?tab=terlambat'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'terlambat'
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]  `}
                  aria-current="page"
                  onClick={() => setactive('LATE')}
                >
                  Terlambat
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={'/penugasan?tab=sedang-dinilai'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'sedang-dinilai'
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D] `}
                  aria-current="page"
                  onClick={() => setactive('GRADING')}
                >
                  Sedang Dinilai
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={'/penugasan?tab=selesai'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'selesai'
                      ? 'text-[#0B568D] border-[#0B568D] dark:text-[#0B568D] dark:border-[#0B568D] border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-[#0B568D]`}
                  aria-current="page"
                  onClick={() => setactive('FINISHED')}
                >
                  Selesai
                </Link> */}
                <Link
                  href={'/penugasan?tab=semua-tugas'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'semua-tugas' ||
                    query.get('tab') === null
                      ? 'text-sky-base border-sky-base dark:text-sky-base dark:border-sky-base border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-sky-base  `}
                  aria-current="page"
                  onClick={() => setactive('semua-tugas')}
                >
                  Semua Tugas
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={'/penugasan?tab=ditugaskan'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'ditugaskan'
                      ? 'text-sky-base border-sky-base dark:text-sky-base dark:border-sky-base border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300  dark:text-sky-base `}
                  aria-current="page"
                  onClick={() => setactive('ONGOING')}
                >
                  Ditugaskan
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={'/penugasan?tab=terlambat'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'terlambat'
                      ? 'text-sky-base border-sky-base dark:text-sky-base dark:border-sky-base border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-sky-base  `}
                  aria-current="page"
                  onClick={() => setactive('LATE')}
                >
                  Terlambat
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={'/penugasan?tab=sedang-dinilai'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'sedang-dinilai'
                      ? 'text-sky-base border-sky-base dark:text-sky-base dark:border-sky-base border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-sky-base `}
                  aria-current="page"
                  onClick={() => setactive('GRADING')}
                >
                  Sedang Dinilai
                </Link>
              </li>
              <li className="mr-2">
                <Link
                  href={'/penugasan?tab=selesai'}
                  className={`inline-block p-4 ${
                    query.get('tab') === 'selesai'
                      ? 'text-sky-base border-sky-base dark:text-sky-base dark:border-sky-base border-b-2'
                      : ''
                  }     rounded-t-lg active hover:border-gray-300 dark:hover:text-gray-300 dark:text-sky-base`}
                  aria-current="page"
                  onClick={() => setactive('FINISHED')}
                >
                  Selesai
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-8">
            {active === 'semua-tugas' ? (
              getAssigment?.map((item: TAssignmentUser) => (
                <Assigment
                  key={item.assignment_id}
                  titleAssigment={item.assignment_title}
                  category={
                    item.progress_status === 'ONGOING'
                      ? 'Ditugaskan'
                      : item.progress_status === 'LATE'
                      ? 'Terlambat'
                      : item.progress_status === 'FINISHED'
                      ? 'Selesai'
                      : item.progress_status === 'GRADING'
                      ? 'Sedang Dinilai'
                      : ''
                  }
                  titleCourse={item.subject_name}
                  courseId={item.subject_id}
                  assignmentId={item.assignment_id}
                  assignmentSessionId={item.assignment_session_id}
                  date={item.progress_deadline}
                  time={item.progress_deadline}
                  bgLine={
                    item.progress_status === 'ONGOING'
                      ? 'bg-sky-base'
                      : item.progress_status === 'LATE'
                      ? 'bg-[#D79210]'
                      : item.progress_status === 'FINISHED'
                      ? 'bg-[#2D9A41]'
                      : item.progress_status === 'GRADING'
                      ? 'bg-[#737373]'
                      : ''
                  }
                  classNameCategory={
                    item.progress_status === 'ONGOING'
                      ? 'text-sky-base'
                      : item.progress_status === 'LATE'
                      ? 'text-[#D79210]'
                      : item.progress_status === 'FINISHED'
                      ? 'text-[#2D9A41]'
                      : item.progress_status === 'GRADING'
                      ? 'text-[#737373]'
                      : ''
                  }
                  imgAssigment={
                    item.progress_status === 'ONGOING'
                      ? AssigmentAssigned
                      : item.progress_status === 'LATE'
                      ? AssignedLate
                      : item.progress_status === 'FINISHED'
                      ? AssigmentDone
                      : item.progress_status === 'GRADING'
                      ? AssignedAssesment
                      : ''
                  }
                />
              ))
            ) : getAssigment?.filter((item) =>
                item.progress_status.includes(active)
              ).length == 0 ||
              undefined ||
              null ? (
              <div className="flex justify-center">
                <Image
                  src="./images/assigment/data-null-new.svg"
                  alt={'empty'}
                  width={250}
                  height={150}
                  priority
                />
              </div>
            ) : (
              getAssigment
                ?.filter((item) => item.progress_status.includes(active))
                .map((item) => (
                  <Assigment
                    key={item.assignment_id}
                    titleAssigment={item.assignment_title}
                    category={
                      item.progress_status === 'ONGOING'
                        ? 'Ditugaskan'
                        : item.progress_status === 'LATE'
                        ? 'Terlambat'
                        : item.progress_status === 'FINISHED'
                        ? 'Selesai'
                        : item.progress_status === 'GRADING'
                        ? 'Sedang Dinilai'
                        : ''
                    }
                    titleCourse={item.subject_name}
                    courseId={item.subject_id}
                    assignmentId={item.assignment_id}
                    assignmentSessionId={item.assignment_session_id}
                    date={item.progress_deadline}
                    time={item.progress_deadline}
                    bgLine={
                      item.progress_status === 'ONGOING'
                        ? 'bg-sky-base'
                        : item.progress_status === 'LATE'
                        ? 'bg-[#D79210]'
                        : item.progress_status === 'FINISHED'
                        ? 'bg-[#2D9A41]'
                        : item.progress_status === 'GRADING'
                        ? 'bg-[#737373]'
                        : ''
                    }
                    classNameCategory={
                      item.progress_status === 'ONGOING'
                        ? 'text-sky-base'
                        : item.progress_status === 'LATE'
                        ? 'text-[#D79210]'
                        : item.progress_status === 'FINISHED'
                        ? 'text-[#2D9A41]'
                        : item.progress_status === 'GRADING'
                        ? 'text-[#737373]'
                        : ''
                    }
                    imgAssigment={
                      item.progress_status === 'ONGOING'
                        ? AssigmentAssigned
                        : item.progress_status === 'LATE'
                        ? AssignedLate
                        : item.progress_status === 'FINISHED'
                        ? AssigmentDone
                        : item.progress_status === 'GRADING'
                        ? AssignedAssesment
                        : ''
                    }
                  />
                ))
            )}
          </div>
        </div>
      </section>
    </Suspense>
  );
};
