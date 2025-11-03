'use client';

import { usePathname } from 'next/navigation';
import { FC, ReactElement } from 'react';
import {
  RiCheckboxCircleFill,
  RiErrorWarningFill,
  RiThumbUpFill,
} from 'react-icons/ri';
import { useGetAllAdministration } from '../../../hooks/administration/hook';
import { AdministrationStatus } from '../enum';

interface AdministrationDetails {
  status: AdministrationStatus;
  reason?: string;
}

export const TitleAdministration: FC = (): ReactElement => {
  const { data, isLoading } = useGetAllAdministration();
  const getAdministrationStatus: AdministrationDetails = data?.data?.details;
  const pathname = usePathname();

  const isBootcamp = pathname.includes('bootcamp');

  if (isLoading) {
    return <></>;
  }

  const getStatusColor = (status: AdministrationStatus) => {
    switch (status) {
      case AdministrationStatus.NotSubmitted:
        return 'bg-red-100 text-red-600';
      case AdministrationStatus.Pending:
        return 'bg-primary-100 text-primary-600';
      case AdministrationStatus.Accepted:
        return 'bg-blue-100 text-primary-600';
      case AdministrationStatus.Approved:
        return 'bg-green-100 text-green-600';
      case AdministrationStatus.Rejected:
        return 'bg-red-100 text-red-600';
      default:
        return 'bg-red-100 text-red-600';
    }
  };

  const getStatusIcon = (status: AdministrationStatus) => {
    switch (status) {
      case AdministrationStatus.NotSubmitted:
      case AdministrationStatus.Pending:
        return <RiErrorWarningFill className=" text-2xl" />;
      case AdministrationStatus.Accepted:
        return <RiThumbUpFill className=" text-xl" />;
      case AdministrationStatus.Approved:
        return <RiCheckboxCircleFill className=" text-2xl" />;
      case AdministrationStatus.Rejected:
        return <RiErrorWarningFill className=" text-2xl" />;
      default:
        return <RiErrorWarningFill className=" text-2xl" />;
    }
  };

  const getStatusMessage = (details: AdministrationDetails) => {
    switch (details.status) {
      case AdministrationStatus.NotSubmitted:
        return 'Kamu belum mengisi administrasi, silahkan isi administrasi terlebih dahulu.';
      case AdministrationStatus.Pending:
        return 'Administrasi kamu sedang dalam proses persetujuan.';
      case AdministrationStatus.Accepted:
        return isBootcamp
          ? 'Administrasi kamu sudah selesai, kamu bisa mengambil pelatihan'
          : 'Administrasi kamu sudah selesai, silahkan gabung ke grup WhatsApp dan Telegram';
      case AdministrationStatus.Approved:
        return isBootcamp
          ? 'Administrasi kamu sudah disetujui, kamu bisa mengambil pelatihan'
          : 'Administrasi kamu sudah disetujui, silahkan gabung ke grup WhatsApp dan Telegram. Sampai jumpa di kelas!';
      case AdministrationStatus.Rejected:
        return `Administrasi kamu belum lengkap. ${
          details.reason
            ? `Alasan: ${details.reason}`
            : 'Silahkan hubungi admin untuk informasi lebih lanjut.'
        }`;
      default:
        return 'Kamu belum mengisi administrasi, silahkan isi administrasi terlebih dahulu.';
    }
  };

  return (
    <div className="title px-8 md:px-14 lg:px-16 w-full">
      <div className="max-w-[1440px] mx-auto">
        <h1 className="text-2xl mt-6 font-bold text-black md:text-left mb-4">
          {isBootcamp
            ? 'Administrasi Bootcamp / Pelatihan'
            : 'Administrasi Sekolah'}
        </h1>
        <div
          className={`${getStatusColor(
            getAdministrationStatus.status
          )} w-full flex items-center gap-x-2 px-4 py-2.5 rounded-lg font-medium`}
        >
          <span className="text-2xl">
            {getStatusIcon(getAdministrationStatus.status)}
          </span>
          <p className="">{getStatusMessage(getAdministrationStatus)}</p>
        </div>
      </div>
    </div>
  );
};
