'use client';

import BaseLayout from '../../../modules/base/BaseLayout';
import React from 'react';
import { MahasiswaData } from '../../../modules/user/mahasiswa';

const UserMahasiswaPage = () => {
  return (
    <BaseLayout>
      <MahasiswaData />
    </BaseLayout>
  );
};

export default UserMahasiswaPage;
