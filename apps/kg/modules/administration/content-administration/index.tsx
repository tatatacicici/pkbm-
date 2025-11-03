'use client';

import { usePathname } from 'next/navigation';
import { ReactElement } from 'react';
import { BootcampInformation } from '../bootcamp-information';
import { FacultyInformation } from '../faculty-information';
import { FileInformation } from '../file-information';
import { JobsInformation } from '../jobs-information';
import { PrivateInformation } from '../private-information';
import { SocialMediaInformation } from '../social-media-information';
import { Stepper } from '../stepper';

export const ContentAdministration = (): ReactElement => {
  const pathname = usePathname();
  const isBootcamp = pathname.includes('bootcamp');
  return (
    <section className="my-8 px-8 md:px-14 lg:px-16 w-full">
      <div className="max-w-[1440px] mx-auto">
        {isBootcamp ? (
          <BootcampInformation />
        ) : (
          <div className="border border-neutral-300 p-4 rounded-lg">
            <Stepper />
            <FacultyInformation />
            <PrivateInformation />
            <JobsInformation />
            <FileInformation />
            <SocialMediaInformation />
          </div>
        )}
      </div>
    </section>
  );
};
