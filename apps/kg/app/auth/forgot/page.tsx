import { ForgotModule } from '../../../modules/auth/forgot/module';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Lupa Password',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const ForgotPages: NextPage = async () => {
  return <ForgotModule />;
};

export default ForgotPages;
