'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import PaymentDetail from '@kampus-gratis/apps/kg/components/payment-detail';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { usePathname } from 'next/navigation';
import { AssesmenListBreadcrumb } from '../../constant';

export default function AssesmenPaymentModule() {
  const pathname = usePathname();

  const BreadCrumbData = [
    {
      name: 'Pembayaran',
      link: pathname,
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb
        items={[...AssesmenListBreadcrumb, ...BreadCrumbData]}
        bgColor="bg-grey-100"
      />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-4 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <PaymentDetail
            title="Ringkasan Pembayaran"
            description="Konsultasi online dengan konselor siaga kami"
          />
        </div>
      </div>
    </BaseLayout>
  );
}
