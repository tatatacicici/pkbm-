import { Metadata, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import 'swiper/css';
import { LoginModule } from '../../../modules/auth/login/module';
import { authOptions } from '../../api/auth/[...nextauth]/options';

export const metadata: Metadata = {
  title: 'Login',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const LoginPages: NextPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/beranda');
  }

  return <LoginModule />;
};

export default LoginPages;
