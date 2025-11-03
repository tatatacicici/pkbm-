import { BreadCrumb } from '@kampus-gratis/components/atoms';
import { administrationBreadCumbs } from '../constant';
import { ContentAdministration } from '../content-administration';
import { TitleAdministration } from '../title-administration';

export default function BootcampAdministrationModule() {
  const breadcrumbData = [
    ...administrationBreadCumbs,
    {
      name: 'Bootcamp',
      link: '',
    },
  ];

  return (
    <>
      <BreadCrumb items={breadcrumbData} />
      <TitleAdministration />
      <ContentAdministration />
    </>
  );
}
