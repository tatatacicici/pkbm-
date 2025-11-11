'use client';
import BaseLayout from '../../../../modules/base/BaseLayout';
import Breadcrumb from '../../../../components/breadcrumb/Breadcrumb';
import React from 'react';
import { EditUser } from '../../../../modules/user/edituser';

const page = () => {
  const constantAddUser = [
    {
      name: 'User',
      link: 'not-routing',
    },
    {
      name: 'Edit User',
      link: 'user/edituser',
    },
  ];
  return (
    <BaseLayout>
      <Breadcrumb items={constantAddUser} />
      <EditUser />
    </BaseLayout>
  );
};

export default page;
