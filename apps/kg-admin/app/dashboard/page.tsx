'use client';

import MainDashboard from '../../modules/dashboard/main';
import BaseLayout from '../../modules/base/BaseLayout';
import React from 'react';

export default function DashboardPage() {
  return (
    <BaseLayout>
      <MainDashboard />
    </BaseLayout>
  );
}
