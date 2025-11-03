'use client';

import { AdminData } from '../../../modules/user/admin';

import BaseLayout from '../../../modules/base/BaseLayout';
import React from 'react';

const UserAdminPage = () => {
  return (
    <BaseLayout>
      <AdminData />
    </BaseLayout>
  );
};

export default UserAdminPage;
