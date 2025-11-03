import type { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { BaseLayout } from '../../../../components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { constantAcaraKampusDetail } from '../../../../../kg/utils/constantAcaraKampus';
import { EventDetail } from '../../../../../kg/modules/acara-kampus/detail';
import FooterCredit from '../../../../../kg/components/footer/footer-credit/footer-credit';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Acara Kampus - Event',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const StudyPlanPage: NextPage = (): ReactElement => {
  return (
    <ErrorBoundary fallback={<>Error was happenned</>}>
      <BaseLayout>
        <BreadCrumb items={constantAcaraKampusDetail} />
        <div className=" bg-neutral-100">
          <EventDetail />
        </div>
        <FooterCredit />
      </BaseLayout>
    </ErrorBoundary>
  );
};

export default StudyPlanPage;
