import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import FooterCredit from '../../../../../kg/components/footer/footer-credit/footer-credit';
import { BaseLayout } from '../../../../components';
import { JobDetail } from '../../../../modules/penyaluran-kerja/detail/index';
import { detailPenyaluranKerja } from '../../../../utils/constantPenyaluranKerja';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Penyaluran Kerja - Detail',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const StudyPlanPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happenned</>}>
      <BaseLayout>
        <BreadCrumb items={detailPenyaluranKerja} />
        <div className=" bg-neutral-50">
          <JobDetail />
        </div>
        <FooterCredit />
      </BaseLayout>
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
