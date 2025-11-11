'use client';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import InputText from '../../../components/input/text/InputText';
import AddUser from '../../../modules/user/adduser';
import BaseLayout from '../../../modules/base/BaseLayout';
import React from 'react';

const TambahUserPage = () => {
  const constantAddUser = [
    {
      name: 'User',
      link: 'not-routing',
    },
    {
      name: 'Tambah User',
      link: 'user/tambah-user',
    },
  ];
  return (
    <BaseLayout>
      <Breadcrumb items={constantAddUser} />
      <AddUser />
    </BaseLayout>
  );
};

export default TambahUserPage;
