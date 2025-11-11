'use client';
import { BaseLayout } from '../../../components';
import { BreadCrumb } from '../../../components/bread-crumb/index';
import { Suspense, useEffect, useState } from 'react';
import { RiwayatKonversiBreadcrumb } from '../constants';
import { Tab } from '@headlessui/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import TransferKonversiSection from './section/transfer-konversi';
import KonversiBalikSection from './section/konversi-balik';
import FooterCredit from '../../../components/footer/footer-credit/footer-credit';

const RiwayatKonversiModule = () => {
  const query = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [active, setactive] = useState('transfer-konversi');

  useEffect(() => {
    if (query.get('tab') === 'transfer-konversi') {
      setactive('transfer-konversi');
    } else if (query.get('tab') === 'konversi-balik') {
      setactive('konversi-balik');
    }
  }, [query, router]);

  return (
    <BaseLayout>
      <BreadCrumb items={RiwayatKonversiBreadcrumb} bgColor="bg-gray-50" />
      <section className="py-1 bg-[#FAFAFA] dark:bg-gray-900">
        <main className="max-w-[1440px] mx-auto md:min-h-[80vh] h-full pt-4 lg:pb-10 pb-6">
          <Tab.Group>
            <Tab.List
              as={'div'}
              className="flex gap-4 lg:gap-6 px-2 mb-10 text-lg font-medium border-b-2 text-neutral-400 md:justify-start md:items-start justify-center items-center"
            >
              <Tab
                className={`${
                  active === 'transfer-konversi'
                    ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                    : ''
                } py-2 px-4 cursor-pointer font-bold lg:text-xl text-xs`}
                as={'div'}
                onClick={() => {
                  setactive('transfer-konversi');
                  router.push(`${pathName}?tab=transfer-konversi`);
                }}
              >
                Transfer Konversi SKS
              </Tab>
              {/* <Tab
                className={`${
                  active === 'konversi-balik'
                    ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                    : ''
                } py-2 px-4 cursor-pointer font-bold lg:text-xl text-xs`}
                as={'div'}
                onClick={() => {
                  setactive('konversi-balik');
                  router.push(`${pathName}?tab=konversi-balik`);
                }}
              >
                Konversi Balik SKS
              </Tab> */}
            </Tab.List>
            <Tab.Panels>
              <Suspense fallback={'Loading...'}>
                {active === 'transfer-konversi' && <TransferKonversiSection />}
              </Suspense>
              <Suspense fallback={'Loading...'}>
                {active === 'konversi-balik' && <KonversiBalikSection />}
              </Suspense>
            </Tab.Panels>
          </Tab.Group>
        </main>
        <FooterCredit />
      </section>
    </BaseLayout>
  );
};

export default RiwayatKonversiModule;
