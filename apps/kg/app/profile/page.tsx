import { ProfileModule } from '../../modules/profile/module';
import { BaseLayout } from '../../components/layouts/base/section';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';

export const metadata: Metadata = {
  title: 'Profil',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const ProfilePage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Profile User">
      <ProfileModule />
    </BaseLayout>
  );
};

export default ProfilePage;
