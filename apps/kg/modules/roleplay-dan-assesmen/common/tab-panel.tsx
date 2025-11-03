import { Tab } from '@headlessui/react';
import React from 'react';

export default function TabPanel({ children }: { children: React.ReactNode }) {
  return <Tab.Panel>{children}</Tab.Panel>;
}
