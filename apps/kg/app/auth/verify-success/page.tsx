import { Metadata, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import 'swiper/css';
import { VerifySuccessModule } from '../../../modules/auth/verify-success';
import { authOptions } from '../../api/auth/[...nextauth]/options';

export const metadata: Metadata = {
  title: 'Verifikasi Berhasil',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const SuccessVeriryPage: NextPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/beranda');
  }
  return <VerifySuccessModule />;
};

export default SuccessVeriryPage;
