import { Tab } from '@headlessui/react';
import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import { Fragment } from 'react';
import CardList from './card-list';

export default function TabList({
  href,
  badgeColor,
  badgeText,
  title,
  type,
}: {
  href: string;
  badgeColor: string;
  badgeText: string;
  title: string;
  type?: string;
}) {
  return (
    <Tab.Group>
      <Tab.List as={'div'} className="flex mb-8 font-medium text-neutral-400">
        <TabItem>Daftar</TabItem>
        <TabItem>Terjadwal</TabItem>
        <TabItem>Penilaian</TabItem>
        <TabItem>Selesai</TabItem>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, index) => (
              <CardList
                key={index}
                href={href}
                badgeColor={badgeColor}
                badgeText={badgeText}
                title={title}
                type={type}
              />
            ))}
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <EmptyState text="Anda belum mengambil assesmen apapun!" />
        </Tab.Panel>
        <Tab.Panel>
          <EmptyState text="Anda belum menyelesaikan assesmen apapun!" />
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}

export function TabItem({ children }: { children: React.ReactNode }) {
  return (
    <Tab as={Fragment}>
      {({ selected }) => (
        <div
          className={`${
            selected
              ? 'border-b-4 outline-none border-primary-500 text-primary-500'
              : ''
          } pb-4 px-16 cursor-pointer border-b text-lg font-medium`}
        >
          {children}
        </div>
      )}
    </Tab>
  );
}
