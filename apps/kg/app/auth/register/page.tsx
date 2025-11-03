import { Metadata, NextPage } from 'next';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import 'swiper/css';
import { RegisterModule } from '../../../modules/auth/register/module';
import { authOptions } from '../../api/auth/[...nextauth]/options';

export const metadata: Metadata = {
  title: 'Register',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const RegisterPages: NextPage = async () => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/beranda');
  }
  return <RegisterModule />;
};

export default RegisterPages;
