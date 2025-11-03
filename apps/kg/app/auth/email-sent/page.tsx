import { EmailSentModule } from '../../../modules/auth/email-sent';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Paket-C Gratis - Email Terkirim',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const EmailSentPages: NextPage = () => {
  return <EmailSentModule />;
};

export default EmailSentPages;
