import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import ListCard from './list-card';

type ListCardData = {
  title: string;
  description: string;
  href: string;
};

export default function TabListSimulasiRoleplay({
  finishedData,
  notFinishedData,
}: {
  finishedData: ListCardData[];
  notFinishedData: ListCardData[];
}) {
  return (
    <Tab.Group>
      <Tab.List
        as={'div'}
        className="flex gap-2 mb-5 font-medium text-neutral-400"
      >
        <Tab as={Fragment}>
          {({ selected }) => (
            <div
              className={`${
                selected
                  ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                  : ''
              } py-2 px-4 cursor-pointer  font-bold`}
            >
              Selesai
            </div>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <div
              className={`${
                selected
                  ? 'border-b-2 outline-none border-primary-500 text-primary-500'
                  : ''
              } py-2 px-4 cursor-pointer  font-bold`}
            >
              Belum Mengerjakan
            </div>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          {finishedData.map((data, index) => (
            <ListCard
              key={index}
              title={data.title}
              description={data.description}
              href={data.href}
            />
          ))}
        </Tab.Panel>
        <Tab.Panel>
          {notFinishedData.map((data, index) => (
            <ListCard
              key={index}
              title={data.title}
              description={data.description}
              href={data.href}
            />
          ))}
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
