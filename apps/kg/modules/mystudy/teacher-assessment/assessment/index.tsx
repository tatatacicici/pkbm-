import { useParams } from 'next/navigation';
import { useGetQuizTeacherAssessment } from '../../../../hooks/mystudy/teacher-assesment/hooks';

import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { useGetSubjectDetailsById } from 'apps/kg/hooks/mystudy/subject-detail/hook';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Image from 'next/image';
import Avatar from 'react-avatar';
import QuizComponent from '../component/question2';

const PenilaianPengajarStartModule = () => {
  const params = useParams();
  const { subjectId, sessionId } = params;
  const { data, isLoading } = useGetQuizTeacherAssessment(subjectId, sessionId);
  const { data: subjectDetail } = useGetSubjectDetailsById(subjectId as string);

  const AssessmentQuestion = data?.data?.questions;

  const penilaianPengajarStartBreadcrumb = [
    ...StudiKuBreadCumbs,
    {
      name: subjectDetail?.data?.subject?.name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: 'Penilaian Pengajar',
      link: `/studi-ku/${subjectId}/penilaian-pengajar/${sessionId}`,
    },
    {
      name: 'Mulai',
      link: `/studi-ku/${subjectId}/penilaian-pengajar/${sessionId}/mulai`,
    },
  ];

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <BreadCrumb items={penilaianPengajarStartBreadcrumb} />
      <div className="mx-auto px-[7%] mb-8 max-w-[1440px] w-full">
        <div className="flex flex-col mb-10">
          <div className="bg-[#E1F0FA] flex px-5 py-5 gap-2 rounded-md mt-10 mb-4">
            {data?.data?.teacher?.avatar ? (
              <Image
                src={data?.data?.teacher?.avatar || ''}
                alt="placeholder"
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <Avatar
                name={data?.data?.teacher?.full_name}
                size="40"
                round={true}
              />
            )}
            <div>
              <h1>{data?.data?.teacher?.full_name}</h1>
              <p className="text-xs text-slate-500">Pengajar</p>
            </div>
          </div>

          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <QuizComponent questions={AssessmentQuestion} />
          )}
        </div>
      </div>
    </>
  );
};

export default PenilaianPengajarStartModule;
