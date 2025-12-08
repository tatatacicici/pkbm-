'use client';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { BaseLayout } from 'apps/kg/components';
import { LiveMentoringModul } from 'apps/kg/modules/live-mentoring/module';

export default function LiveMentoringPage() {
  return (
    <BaseLayout title="Live Mentoring">
      <LiveMentoringModul />
    </BaseLayout>
  );
}
