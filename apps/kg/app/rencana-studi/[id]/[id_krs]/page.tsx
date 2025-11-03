import { SubmissionContractStudy } from '../../../../modules/study-plan/submission-contract';
import { BaseLayout } from '../../../../components/layouts/base/section';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Rencana Studi - Fakultas - Mata Kuliah',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const SubmissionContractPage = ({
  params,
}: {
  params: { id: string; id_krs: string };
}) => {
  const { id, id_krs } = params;

  const studyContractBreadCumbs = [
    {
      name: 'Beranda',
      link: '/beranda',
    },
    {
      name: 'Fakultas',
      link: '/rencana-studi',
    },
    {
      name: 'Program Studi',
      link: `/rencana-studi/${id}`,
    },
    {
      name: 'Kontrak KRS',
      link: `/rencana-studi/${id}/${id_krs}`,
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb bgColor="bg-neutral-50" items={studyContractBreadCumbs} />
      <SubmissionContractStudy id={id_krs} />
    </BaseLayout>
  );
};

export default SubmissionContractPage;
