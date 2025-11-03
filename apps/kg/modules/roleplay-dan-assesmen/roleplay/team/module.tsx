'use client';

import { BaseLayout } from '@kampus-gratis/apps/kg/components';
import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import {
  useGetRoleplayDetail,
  useGetRoleplayTeam,
} from '@kampus-gratis/apps/kg/hooks/roleplay/hook';
import {
  TRoleplayDetailItem,
  TRoleplayTeamItem,
} from '@kampus-gratis/apps/kg/types/roleplay';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { useParams, usePathname } from 'next/navigation';
import { RoleplayListBreadcrumb } from '../../constant';
import CardTeam from './common/card-team';

export default function RoleplayTeamModule() {
  const pathname = usePathname();
  const { roleplayId } = useParams();

  const { data, isLoading } = useGetRoleplayDetail(roleplayId as string);
  const { data: dataTeam } = useGetRoleplayTeam(roleplayId as string);

  const dataRoleplay: TRoleplayDetailItem = data?.data?.roleplay;

  const breadcrumbData = {
    name: 'Detail Roleplay',
    link: pathname,
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!dataRoleplay || !dataTeam) {
    return <EmptyState text="Roleplay tidak ditemukan" />;
  }

  return (
    <BaseLayout>
      <BreadCrumb
        items={[...RoleplayListBreadcrumb, breadcrumbData]}
        bgColor="bg-grey-100"
      />
      <div className="bg-grey-100">
        <div className="w-full max-w-[1440px] mt-4 mb-12 mx-auto min-h-[80vh] space-y-6 px-8 md:px-14 lg:px-16 2xl:px-0 ">
          <div className="bg-white rounded-md p-8 w-full shadow-sm">
            <h2 className="text-2xl font-semibold">
              {dataRoleplay?.subject_name}
            </h2>
            <table className="w-full mt-4">
              <tbody>
                <tr>
                  <td className="w-2/12 align-top pr-2 py-2 font-medium">
                    Pelatihan
                  </td>
                  <td className="py-2 text-gray-700">
                    {dataRoleplay?.session_title}
                  </td>
                </tr>
                <tr>
                  <td className="w-2/12 align-top pr-2 py-2 font-medium">
                    Peran{' '}
                  </td>
                  <td className="py-2 text-gray-700">-</td>
                </tr>
                <tr>
                  <td className="w-2/12 align-top pr-2 py-2 font-medium">
                    Kode Roleplay
                  </td>
                  <td className="py-2 text-gray-700">{dataRoleplay?.id}</td>
                </tr>
                <tr>
                  <td className="w-2/12 align-top pr-2 py-2 font-medium">
                    Deskripsi
                  </td>
                  <td className="py-2 text-gray-700">
                    {dataRoleplay?.description}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="px-8 py-4 bg-white rounded-lg shadow-lg space-y-6">
            <div className="text-center">
              <h2 className="text-2xl font-semibold">Pilih tim roleplay</h2>
              <p className="text-gray-700 text-sm">
                Buat tim roleplay atau gabung dengan tim yang sudah ada
              </p>
            </div>
            <div className="grid px-8 grid-cols-1 lg:grid-cols-2 gap-4">
              {dataTeam?.data?.teams.length !== 0 ? (
                dataTeam?.data?.teams.map(
                  (team: TRoleplayTeamItem, index: number) => (
                    <CardTeam key={index} {...team} />
                  )
                )
              ) : (
                <p className="text-center">{dataTeam?.message}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </BaseLayout>
  );
}
