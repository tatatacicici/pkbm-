import KebijakanPrivasiModule from '../../modules/kebijakan-privasi/module';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Kebijakan Privasi',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const PrivacyPolicy: NextPage = () => {
  return (
    <>
      <KebijakanPrivasiModule />
    </>
  );
};

export default PrivacyPolicy;
