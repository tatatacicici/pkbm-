'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { FC, ReactElement } from 'react';
import { BaseLayout } from '../../components';
import { useGetAssignment } from '../../hooks/assigment/hook';
import { assignmentBreadCumbs } from './constants';
import { BannerSection } from './section/banner';
import { Empty } from './section/content/empty';
import { ContentSection } from './section/content/content';
import { ErrorBoundary } from 'react-error-boundary';
import { ErrorAssignment } from './section/content/error';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';

export const AssignmentModule: FC = (): ReactElement => {
  const { data } = useGetAssignment();

  return (
    <BaseLayout title="Penugasan">
      <BreadCrumb items={assignmentBreadCumbs} bgColor={'bg-neutral-50'} />
      {data?.data?.length === 0 || undefined ? (
        <Empty />
      ) : (
        <ErrorBoundary fallback={<ErrorAssignment />}>
          <section className="bg-neutral-50 pt-2">
            <BannerSection />
            <ContentSection />
          </section>
        </ErrorBoundary>
      )}
      <FooterCredit />
    </BaseLayout>
  );
};
