import { getServerSession } from 'next-auth';
import Login from './auth/login';
import { redirect } from 'next/navigation';
import { authOptions } from './api/auth/[...nextauth]/option';

export default async function Index() {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect('/dashboard');
  }
  return <Login />;
}
