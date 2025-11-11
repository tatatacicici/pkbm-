import { Tab } from '@headlessui/react';
import { Fragment } from 'react';

export default function TabList({
  children,
  tabItem,
}: {
  children: React.ReactNode;
  tabItem: string[];
}) {
  return (
    <Tab.Group>
      <Tab.List as={'div'} className="flex mb-8 font-medium text-neutral-400">
        {tabItem.map((item, index) => (
          <TabItem key={index}>{item}</TabItem>
        ))}
      </Tab.List>
      <Tab.Panels>{children}</Tab.Panels>
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
