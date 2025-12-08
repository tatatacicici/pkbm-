'use client';

import {
  useFileInformationStatus,
  useGetAllAdministration,
  useJobInformationStatus,
  usePrivateInformationStatus,
} from '@kampus-gratis/apps/kg/hooks/administration/hook';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { useEffect } from 'react';
import { administrationCollegeBreadCumbs } from '../constant';
import { ContentAdministration } from '../content-administration';
import { TitleAdministration } from '../title-administration';

export default function CollegeAdministrationModule() {
  const { data, isLoading } = useGetAllAdministration();
  const { setPrivateStatus } = usePrivateInformationStatus();
  const { setJobStatus } = useJobInformationStatus();
  const { setFileStatus } = useFileInformationStatus();

  const administrationBiodatas = data?.data?.biodatas?.status === 'SUBMITTED';
  const administrationFamilials = data?.data?.familials?.status === 'SUBMITTED';
  const administrationFiles = data?.data?.files?.status === 'SUBMITTED';

  useEffect(() => {
    setPrivateStatus(administrationBiodatas);
    setJobStatus(administrationFamilials);
    setFileStatus(administrationFiles);
  }, [administrationBiodatas, administrationFamilials, administrationFiles]);

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <BreadCrumb items={administrationCollegeBreadCumbs} />
      <TitleAdministration />
      <ContentAdministration />
    </>
  );
}
