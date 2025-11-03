'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import {
  useGetAssesmenDetailSession,
  useSubmitAssesmenSession,
} from '@kampus-gratis/apps/kg/hooks/asesmen/hook';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { useQueryClient } from '@tanstack/react-query';
import { useParams, usePathname } from 'next/navigation';
import toast from 'react-hot-toast';
import { AssesmenListBreadcrumb } from '../../constant';
import RubricTable from './table-rubric';

export default function AssesmenDetailModules() {
  const pathname = usePathname();
  const queryClient = useQueryClient();

  const { session_id } = useParams();

  const { data, isLoading } = useGetAssesmenDetailSession(session_id as string);
  const { mutate, isLoading: submitLoading } = useSubmitAssesmenSession(
    session_id as string
  );

  const breadcrumbData = {
    name: 'Detail Assesmen',
    link: pathname,
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const payload = {
      video_url: formData.get('link'),
      document: formData.get('file-input'),
    };

    try {
      mutate(payload, {
        onSuccess: (data) => {
          queryClient.invalidateQueries(['assesmen-detail-session']);
          toast.success(data.message);
        },
        onError: (error) => {
          toast.error(
            error.response?.data.message || 'Gagal mengumpulkan assesmen'
          );
        },
      });
    } catch (error) {
      toast.error('Terjadi kesalahan');
    }
    toast.dismiss();
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <BaseLayout>
      <BreadCrumb
        items={[...AssesmenListBreadcrumb, breadcrumbData]}
        bgColor="bg-grey-100"
      />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-6 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-medium">
              Assesmen {data.data.assessment.topic}
            </h2>
          </div>
          <div className="px-8 py-4 bg-white rounded-lg shadow-lg space-y-6 pb-12">
            {/* <SectionDetail
              avatar={data.data.detail.participant_avatar}
              name={data.data.detail.participant_full_name}
              topic={data.data.assessment.topic}
              description={data.data.assessment.description}
              caseStudy={data.data.assessment.case_study}
              rules={data.data.assessment.rules}
              duration={data.data.assessment.duration}
              value={data.data.submission}
              status={data.data.session.status}
              isLoading={submitLoading}
              onSubmit={onSubmit}
            /> */}
            <div className="mb-4">
              <h2 className="text-xl font-medium">Penilaian diri sendiri</h2>
              <p className="text-sm text-gray-500">
                Berikan penilaian untuk diri sendiri dengan
                <span className="text-primary-700 font-semibold">
                  {' '}
                  klik nomor 1 - 10{' '}
                </span>
                , dan berikan rekomendasi perbaikan jika diperlukan.
              </p>
              {data.data.scores ? (
                <RubricTable data={data.data} />
              ) : (
                <div className="w-full h-36 border border-gray-400 border-dashed rounded-xl flex items-center justify-center mt-2 bg-gray-100">
                  <p className="font-medium text-sm">
                    Kamu harus unggah dokumen atau link video terlebih dahulu
                    untuk penilaian diri sendiri.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
