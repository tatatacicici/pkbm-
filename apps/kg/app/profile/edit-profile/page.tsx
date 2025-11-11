import { BaseLayout } from '../../../components/layouts/base/section';
import { ProfileModule } from '../../../modules/profile/module';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Ubah Profil',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const ProfileEditPage: NextPage = () => {
  return (
    <BaseLayout title="Ubah Profile">
      <ProfileModule />
    </BaseLayout>
  );
};

export default ProfileEditPage;
