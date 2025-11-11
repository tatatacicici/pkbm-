'use client';

import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { paymentBank, paymentCounter, paymentEwallet } from './constant';
import PaymentMethod from './payment-method';

export default function PaymentTab({
  selected,
  setSelected,
}: {
  selected: string;
  setSelected: (value: string) => void;
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
                  ? 'border-b-2 font-semibold outline-none border-primary-500 text-primary-500'
                  : ''
              } py-2 px-4 cursor-pointer`}
            >
              Transfer Bank
            </div>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <div
              className={`${
                selected
                  ? 'border-b-2 font-semibold outline-none border-primary-500 text-primary-500'
                  : ''
              } py-2 px-4 cursor-pointer`}
            >
              Uang Elektronik
            </div>
          )}
        </Tab>
        <Tab as={Fragment}>
          {({ selected }) => (
            <div
              className={`${
                selected
                  ? 'border-b-2 font-semibold outline-none border-primary-500 text-primary-500'
                  : ''
              } py-2 px-4 cursor-pointer`}
            >
              Counter
            </div>
          )}
        </Tab>
      </Tab.List>
      <Tab.Panels>
        <Tab.Panel>
          <div className="space-y-4 mt-4">
            {paymentBank.map((data, index) => (
              <PaymentMethod
                selected={selected}
                setSelected={setSelected}
                key={index}
                title={data.title}
                img={data.img}
              />
            ))}
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="space-y-4 mt-4">
            {paymentEwallet.map((data, index) => (
              <PaymentMethod
                selected={selected}
                setSelected={setSelected}
                key={index}
                title={data.title}
                img={data.img}
              />
            ))}
          </div>
        </Tab.Panel>
        <Tab.Panel>
          <div className="space-y-4 mt-4">
            {paymentCounter.map((data, index) => (
              <PaymentMethod
                selected={selected}
                setSelected={setSelected}
                key={index}
                title={data.title}
                img={data.img}
              />
            ))}
          </div>
        </Tab.Panel>
      </Tab.Panels>
    </Tab.Group>
  );
}
