'use client';

import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { usePathname, useRouter } from 'next/navigation';
import { FC, ReactElement } from 'react';
import { ViewProfileBreadCumbs } from '../../utils/constantProfile';
import { LaporanDanBantuanSection } from './section/bantuan-dan-laporan';
import { ChangePasswordSection } from './section/change-password';
import { DeleteAccountSection } from './section/delete-account';
import { EditProfileSection } from './section/edit-profile';
import { ViewProfileModule } from './section/view-profile';
import { ProfileSidebar } from './sidebar';

export const ProfileModule: FC = (): ReactElement => {
  const router = useRouter();
  const pathname = usePathname();

  const eventPath = [
    '/profile',
    '/profile/edit-profile',
    '/profile/ubah-password',
    '/profile/bantuan-dan-laporan',
    '/profile/delete-account',
  ];

  if (!eventPath.includes(pathname)) {
    router.push('/profile');
  }

  return (
    <>
      <BreadCrumb items={ViewProfileBreadCumbs} bgColor="bg-neutral-100" />
      <div className="w-full px-8 md:px-14 lg:px-16 bg-neutral-100 pb-20">
        <div className="w-full mb-4 md:mb-6 lg:mb-8">
          <header className="max-w-[1440px] mx-auto">
            <h1 className="text-xl font-bold text-neutral-800">Profil Kamu</h1>
          </header>
        </div>
        <section className="min-h-[66vh] w-full mx-auto max-w-[1440px]">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            <ProfileSidebar />
            <div className="col-span-2">
              {pathname === '/profile' && <ViewProfileModule />}
              {pathname === '/profile/edit-profile' && <EditProfileSection />}
              {pathname === '/profile/ubah-password' && (
                <ChangePasswordSection />
              )}
              {pathname === '/profile/bantuan-dan-laporan' && (
                <LaporanDanBantuanSection />
              )}
              {pathname === '/profile/delete-account' && (
                <DeleteAccountSection />
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
