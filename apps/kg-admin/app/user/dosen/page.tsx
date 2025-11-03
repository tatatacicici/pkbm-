'use client';

import BaseLayout from '../../../modules/base/BaseLayout';

import React from 'react';
import { DosenData } from '../../../modules/user/dosen';

const UserAdminPage = () => {
  return (
    <BaseLayout>
      <DosenData />
    </BaseLayout>
  );
};

export default UserAdminPage;
