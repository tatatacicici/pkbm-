import { Metadata } from 'next';
import { ResetModule } from '../../../../modules/auth/reset-password';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Reset Password',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const ResetPages = ({ params }: { params: { token: string } }) => {
  return <ResetModule params={params} />;
};

export default ResetPages;
