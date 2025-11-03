'use client';
import { FC, ReactElement } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import BaseLayout from '../../../../modules/base/BaseLayout';
import Breadcrumb from '../../../../components/breadcrumb/Breadcrumb';
import { LihatBerkasModule } from '../../../../modules/user/berkas';
import Button from '../../../../components/button/Button';
import { useRouter } from 'next/navigation';

const LihatBerkas: FC = (): ReactElement => {
  const router = useRouter();
  const userBerkasPageBC = [
    {
      name: 'User Mahasiswa',
      link: '/user',
    },
    {
      name: 'Informasi Data Diri',
      link: '',
    },
  ];
  return (
    <ErrorBoundary fallback={<>Error was happenned</>}>
      <BaseLayout>
        <div className="flex flex-row justify-between">
          <Breadcrumb items={userBerkasPageBC} />
          <Button
            plus={true}
            buttonStyle="flex items-center hover:bg-primary-600 justify-center bg-primary-base w-[200px] h-10 px-3 rounded text-white"
            onClick={() => router.push('/user/tambah-user')}
          >
            Berkas
          </Button>
        </div>
        <LihatBerkasModule />
      </BaseLayout>
    </ErrorBoundary>
  );
};

export default LihatBerkas;
