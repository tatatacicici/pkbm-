import { BaseLayout } from '../../components';
import { BreadCrumb } from '../../components/bread-crumb/index';
import React from 'react';
import { kebijakanPrivaciBreadCumbs } from './constant';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import { KebijakanPrivasiContent } from './content/content';

const KebijakanPrivasiModule = () => {
  return (
    <BaseLayout>
      <BreadCrumb items={kebijakanPrivaciBreadCumbs} />
      <KebijakanPrivasiContent />
      <FooterCredit />
    </BaseLayout>
  );
};

export default KebijakanPrivasiModule;
