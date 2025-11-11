import { Metadata, NextPage } from 'next';
import { BaseLayout } from '../../../components/layouts/base/section';
import { ProfileModule } from '../../../modules/profile/module';

export const metadata: Metadata = {
  title: 'Delete Account',
  description: 'Permanently delete your account and all associated data',
};

const DeleteAccountPage: NextPage = () => {
  return (
    <BaseLayout title="Delete Account">
      <ProfileModule />
    </BaseLayout>
  );
};

export default DeleteAccountPage;
