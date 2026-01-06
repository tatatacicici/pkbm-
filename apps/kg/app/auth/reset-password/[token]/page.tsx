import { Metadata } from 'next';
import { ResetModule } from '../../../../modules/auth/reset-password';
import { use } from 'react';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Reset Password',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const ResetPages = ({ params }: { params: Promise<{ token: string }> }) => {
  const resolvedParams = use(params);
  return <ResetModule params={resolvedParams} />;
};

export default ResetPages;
