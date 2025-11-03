'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import ModalConfirmation from '../../common/modal-confirmation';
import SectionDetail from '../../common/section-detail';
import { RoleplayListBreadcrumb } from '../../constant';
import SelectMember from '../team/common/select-member';

export default function RoleplayDetailModule() {
  const pathname = usePathname();
  const router = useRouter();
  const breadcrumbData = {
    name: 'Detail Roleplay',
    link: pathname,
  };
  const [isOpen, setIsOpen] = useState(false);
  const onSubmit = () => {
    router.push(`${pathname}/team-scoring`);
    setIsOpen(false);
  };
  return (
    <BaseLayout>
      <BreadCrumb
        items={[...RoleplayListBreadcrumb, breadcrumbData]}
        bgColor="bg-grey-100"
      />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-6 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-medium">Roleplay Matkul</h2>
          </div>
          <div className="px-8 py-4 bg-white rounded-lg shadow-lg space-y-6">
            <SectionDetail
              avatar="/images/roleplay/roleplay-1.png"
              description="Deskripsi Roleplay 1"
              caseStudy="Case Study Roleplay 1"
              name="Rizki Pratama"
              isLoading={false}
              onSubmit={() => {
                console.log('submit');
              }}
              rules="Roleplay 1 Rules"
              status="Roleplay 1 Status"
              topic="Roleplay 1 Topic"
            />
            <div className="flex gap-8 w-full">
              <div className="w-full">
                <SelectMember text="Rizki Pratama" placeholder="Pilih Peran" />
              </div>
              <div className="w-full">
                <SelectMember text="Aryo Bimo" placeholder="Pilih Peran" />
              </div>
              <div className="w-full">
                <SelectMember text="Johntol" placeholder="Pilih Peran" />
              </div>
            </div>
            <div className="flex pt-2 pb-6 gap-2">
              <button
                className="bg-blue-base text-white px-6 py-2 rounded-lg"
                onClick={() => setIsOpen(true)}
              >
                Kumpulkan
              </button>
              <button
                className="px-6 py-2 rounded-lg border border-primary-500 flex gap-2 items-center text-primary-500"
                onClick={() => router.push(`${pathname}/team-scoring`)}
              >
                Nilai Teman Anda <FaArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
      <ModalConfirmation
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        text={
          <>
            <p className="text-lg font-medium text-gray-800">
              Apakah anda yakin ingin mengumpulkan tugas ini?
            </p>
            <p className="text-sm text-gray-500">
              Setelah mengumpulkan tugas, Anda tidak dapat mengubahnya lagi.
            </p>
          </>
        }
        buttonText="Kumpulkan"
        onSubmit={onSubmit}
      />
    </BaseLayout>
  );
}
