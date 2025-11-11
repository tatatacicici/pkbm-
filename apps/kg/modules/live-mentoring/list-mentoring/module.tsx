import React, { Fragment } from 'react';
import { Tab } from '@headlessui/react';
import { getSession, useSession } from 'next-auth/react';
import { useProfile } from '../../../hooks/profile/hook';

export const ListMentoring = () => {
  const { data: session } = useSession();
  const { data: profile } = useProfile();

  return (
    <div>
      <Tab.Group>
        <Tab.List
          as={'div'}
          className="flex gap-2 mb-5 text-sm font-medium border-b-2 text-neutral-400"
        >
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <div
                className={`${
                  selected
                    ? 'border-b-2 outline-none   border-primary-500 text-primary-500'
                    : ''
                } py-2 px-4 cursor-pointer  font-bold`}
              >
                Deskripsi
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <div
                className={`${
                  selected
                    ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                    : ''
                } py-2 px-4 cursor-pointer  font-bold`}
              >
                Informasi
              </div>
            )}
          </Tab>
          <Tab as={Fragment}>
            {({ selected }) => (
              /* Use the `selected` state to conditionally style the selected tab. */
              <div
                className={`${
                  selected
                    ? 'border-b-2 outline-none  border-primary-500 text-primary-500'
                    : ''
                } py-2 px-4 cursor-pointer  font-bold`}
              >
                Kontak
              </div>
            )}
          </Tab>
        </Tab.List>
        <Tab.Panels>
          <Tab.Panel>daowdk</Tab.Panel>
          <Tab.Panel>aowdkoad</Tab.Panel>
          <Tab.Panel>awdiajdi</Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
