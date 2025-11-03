'use client';
import { Tab } from '@headlessui/react';
import { FC, ReactElement, Suspense, useEffect, useState } from 'react';
import { useSetRecoilState } from 'recoil';

// import { CertificateSection } from "./section/certificate";
// import ScoreSection from "./section/score/score";
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { BaseLayout } from '../../components';
import { BreadCrumb } from '../../components/bread-crumb/index';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import { ShowDetailStatus } from '../../recoil/atoms/score-sertificate';
import { scoreBreadCumbs } from './constant';
import { CertificateSection } from './section/certificate/certificate';
import ScoreSection from './section/score/score';

export const ScoreModule: FC = (): ReactElement => {
  const query = useSearchParams();
  const router = useRouter();
  const pathName = usePathname();
  const [active, setactive] = useState('nilai');
  const setDetailStatus = useSetRecoilState(ShowDetailStatus);

  useEffect(() => {
    if (query.get('tab') === 'nilai') {
      setactive('nilai');
      setDetailStatus(false);
    } else if (query.get('tab') === 'sertifikat') {
      setactive('sertifikat');
    }
  }, [query, router, active, setDetailStatus]);

  return (
    <BaseLayout>
      <BreadCrumb items={scoreBreadCumbs} bgColor="bg-gray-50" />
      <section className="py-1 bg-[#FAFAFA] dark:bg-gray-900 px-6 md:px-14 lg:px-16">
        <main className="max-w-[1440px] mx-auto mb-20 py-4">
          <Tab.Group>
            <Tab.List
              as={'div'}
              className="flex gap-6 px-2 mb-10 text-lg font-medium border-b-2 text-neutral-400"
            >
              <Tab
                // className={`${
                //   active === 'nilai'
                //     ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                //     : ''
                // } py-2 px-4 cursor-pointer`}
                className={`${
                  active === 'nilai'
                    ? 'border-b-2 outline-none  border-sky-base text-sky-base'
                    : ''
                } py-2 px-4 cursor-pointer`}
                as={'div'}
                onClick={() => {
                  setDetailStatus(false);
                  setactive('nilai');
                  router.push(`${pathName}?tab=nilai`);
                }}
              >
                Nilai
              </Tab>
              <Tab
                // className={`${
                //   active === 'sertifikat'
                //     ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                //     : ''
                // } py-2 px-4 cursor-pointer`}
                className={`${
                  active === 'sertifikat'
                    ? 'border-b-2 outline-none border-sky-base text-sky-base'
                    : ''
                } py-2 px-4 cursor-pointer`}
                as={'div'}
                onClick={() => {
                  setactive('sertifikat');
                  router.push(`${pathName}?tab=sertifikat`);
                }}
              >
                Rapor
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Suspense fallback={'Loading...'}>
                {active === 'nilai' && <ScoreSection />}
              </Suspense>
              <Suspense fallback={'Loading...'}>
                {active === 'sertifikat' && <CertificateSection />}
              </Suspense>
            </Tab.Panels>
          </Tab.Group>
        </main>
      </section>
      <FooterCredit />
    </BaseLayout>
  );
};
