import { Calenderku } from '../../modules/calenderku/module';
import { Metadata, NextPage } from 'next';

export const metadata: Metadata = {
  title: 'Jadwal-Ku',
  description:
    'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
};

const MyCalendar: NextPage = () => {
  return (
    <>
      <Calenderku />
    </>
  );
};
export default MyCalendar;
