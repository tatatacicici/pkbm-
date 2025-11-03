'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import PaymentDetail from '@kampus-gratis/apps/kg/components/payment-detail';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { useParams } from 'next/navigation';
import { DrillListBreadcrumb } from '../../../constant';

export default function PaymentDrillModule() {
  const { id } = useParams();

  const BreadCrumbData = [
    {
      name: 'Atur Jadwal',
      link: '/simulasi-dan-roleplay/drill/' + id,
    },
    {
      name: 'Pembayaran',
      link: '/simulasi-dan-roleplay/drill/' + id + '/pembayaran',
    },
  ];

  return (
    <BaseLayout>
      <BreadCrumb
        items={[...DrillListBreadcrumb, ...BreadCrumbData]}
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
