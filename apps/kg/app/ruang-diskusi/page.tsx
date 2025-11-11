import { BaseLayout } from '../../components/layouts/base';
import { RuangDiskusiModule } from '../../modules/ruang-diskusi/module';
import { Metadata, NextPage } from 'next';
import { ReactElement } from 'react';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { discussionRoomBreadCumbs } from '../../utils/constantAdministrations';

export const metadata: Metadata = {
  title: 'Forum Diskusi',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const RuangDiskusiPage: NextPage = (): ReactElement => {
  return (
    <BaseLayout title="Forum Diskusi">
      <BreadCrumb bgColor="bg-neutral-50" items={discussionRoomBreadCumbs} />
      <RuangDiskusiModule />
    </BaseLayout>
  );
};

export default RuangDiskusiPage;
