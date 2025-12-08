import { BaseLayout } from 'apps/kg/components';
import FooterCredit from 'apps/kg/components/footer/footer-credit/footer-credit';
import { ModuleContentModule } from 'apps/kg/modules/mystudy/module/module-content';
import { Metadata } from 'next';
import { ReactElement } from 'react';

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Studi-Ku - Detail Modul`,
    description:
      'Platform belajar gratis pertama di Indonesia, belajar mudah dengan paket-c gratis bisa diakses siapapun khususnya kaum marginal',
  };
}

const MyStudyModulePage = (): ReactElement => {
  return (
    <BaseLayout title="Studi-Ku">
      <div className="w-full bg-neutral-50 px-6  md:px-14 lg:px-16">
        <div className="max-w-[1440px] mx-auto bg-white rounded-lg mb-10 pb-10 shadow-sm">
          <ModuleContentModule />
        </div>
      </div>
      <FooterCredit />
    </BaseLayout>
  );
};

export default MyStudyModulePage;
