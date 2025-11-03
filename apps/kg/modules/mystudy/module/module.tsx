'use client';
import CardListSubject from '@kampus-gratis/apps/kg/components/my-study/card-list';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import EmptyState from 'apps/kg/components/empty-state';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { useGetModuleById } from '../../../hooks/mystudy/module/hook';
import {
  TModuleContentDetail,
  TModuleItem,
} from '../../../types/module-content';
import toast from 'react-hot-toast';

export const ModuleMyStudyModule = (): ReactElement => {
  const pathname = usePathname();
  const { subjectId, sessionId } = useParams();
  const { data, isLoading } = useGetModuleById(
    subjectId as string,
    sessionId as string
  );
  const dataModules: TModuleItem[] = data?.data.modules as TModuleItem[];
  const dataDetail: TModuleContentDetail = data?.data
    .detail as TModuleContentDetail;

  const myStudyModuleBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: dataDetail?.subject_name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: `Pertemuan ${dataDetail?.session_no}`,
      link: `/studi-ku/${subjectId}/session/${sessionId}`,
    },
  ];

  if (isLoading) return <LoadingSpinner />;

  if (dataModules?.length === 0)
    return <EmptyState text="Oops! Modul ini belum tersedia." />;

  if (!data) {
    return <EmptyState text="Oops! Halaman ini tidak tersedia." />;
  }

  return (
    <>
      <BreadCrumb className="px-5" items={myStudyModuleBreadcrumb} />
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="w-full justify-start p-2 md:px-10 mt-4">
          <div className="w-full">
            <h3 className="text-center text-lg md:text-xl lg:text-[28px] font-extrabold text-neutral-900">
              Modul Pertemuan {dataDetail?.session_no}
            </h3>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-8">
            {dataModules ? (
              dataModules?.map((module, index) => {
                const totalArticles = Number(module?.total_articles) || 0;
                const totalDocuments = Number(module?.total_documents) || 0;
                const totalJournals = Number(module?.total_journals) || 0;
                const totalVideos = Number(module?.total_videos) || 0;

                const hasModules =
                  totalArticles > 0 ||
                  totalDocuments > 0 ||
                  totalJournals > 0 ||
                  totalVideos > 0;

                const handleLinkClick = (e: any) => {
                  if (!hasModules) {
                    e.preventDefault();
                    toast.error('Belum ada modul pada pertemuan ini.');
                  }
                };

                return (
                  <Link
                    key={index}
                    href={`${pathname}/${module?.id}`}
                    onClick={handleLinkClick}
                  >
                    <CardListSubject {...module} id={index + 1} />
                  </Link>
                );
              })
            ) : (
              <EmptyState text="Oops! Modul ini belum tersedia." />
            )}
          </div>
          <div className="mt-8">
            <Link
              href={`/studi-ku/${subjectId}`}
              className="text-blue-500 hover:text-blue-500/80 cursor-pointer flex items-center gap-x-2 underline"
            >
              <FaArrowLeft />
              Kembali
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
