'use client';
import React, { FC, useState, Fragment } from 'react';
import { UploadField } from '@kampus-gratis/components/atoms';
import { Listbox, Transition, Combobox } from '@headlessui/react';
import { LuChevronsUpDown } from 'react-icons/lu';
interface Props {
  name: any;
  fakultas: any;
  prodi: any;
}

export const SectionSertificate: FC<Props> = ({ prodi, name, fakultas }) => {
  const [selectedPerson, setSelectedPerson] = useState<any>(name[0]);
  const [selectedFaculty, setSelectedFaculty] = useState<any>(fakultas[0]);
  const [selectedMajor, setSelectedMajor] = useState<any>(prodi[0]);
  const [query, setQuery] = useState<any>('');
  console.log(selectedPerson);
  const filteredPeople =
    query === ''
      ? name
      : name.filter((person: any) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, '')
            .includes(query.toLowerCase().replace(/\s+/g, ''))
        );
  return (
    <div className="grid grid-cols-2 gap-5 flex flex-col">
      <div className="grid-cols-2 grid gap-5 col-span-2 flex">
        <div className="col-span-1">
          <span className="flex ">
            <span>Peserta</span>
            <span className="text-[#f51505]">*</span>
          </span>
          <Combobox value={selectedPerson} onChange={setSelectedPerson}>
            <div className="relative mt-1">
              <div className="relative w-full cursor-default overflow-hidden rounded-lg bg-white text-left shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-teal-300 sm:text-sm">
                <Combobox.Input
                  className="w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-0"
                  displayValue={selectedPerson.name}
                  placeholder="Cari peserta"
                  onChange={(event) => setQuery(event.target.value)}
                />
                <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2 z-50">
                  <LuChevronsUpDown size={20} />
                </Combobox.Button>
              </div>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
                afterLeave={() => setQuery('')}
              >
                <Combobox.Options className="absolute z-50 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                  {filteredPeople.length === 0 && query !== '' ? (
                    <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                      Nothing found.
                    </div>
                  ) : (
                    filteredPeople.map((name: any) => (
                      <Combobox.Option
                        key={name.id}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? 'bg-teal-600 text-white' : 'text-gray-900'
                          }`
                        }
                        value={name}
                      >
                        {({ selected, active }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {name.name}
                            </span>
                            {selected ? (
                              <span
                                className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                                  active ? 'text-white' : 'text-teal-600'
                                }`}
                              >
                                <LuChevronsUpDown size={20} />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Combobox.Option>
                    ))
                  )}
                </Combobox.Options>
              </Transition>
            </div>
          </Combobox>
        </div>
        <div className="col-span-1">
          <span className="flex ">
            <span>Fakultas</span>
            <span className="text-[#f51505]">*</span>
          </span>
          <Listbox value={selectedFaculty} onChange={setSelectedFaculty}>
            <div className="relative mt-1">
              <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
                <span className="block truncate">{selectedFaculty.name}</span>
                <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                  <LuChevronsUpDown size={20} color="gray" />
                </span>
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options
                  className={`${
                    selectedFaculty ? 'z-50' : 'z-0'
                  } absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm `}
                >
                  {fakultas &&
                    fakultas.map((fakultas: any, fakultasIdx: number) => (
                      <Listbox.Option
                        key={fakultasIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? 'bg-amber-100 text-amber-900'
                              : 'text-gray-900'
                          }`
                        }
                        value={fakultas}
                      >
                        {({ selectedFaculty }: any) => (
                          <>
                            <span
                              className={`block truncate ${
                                selectedFaculty ? 'font-medium' : 'font-normal'
                              }`}
                            >
                              {fakultas.name}
                            </span>
                            {selectedFaculty ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                                dawod
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
      </div>
      <div className="col-span-1">
        <span className="flex ">
          <span>Prodi</span>
          <span className="text-[#f51505]">*</span>
        </span>
        <Listbox value={selectedMajor} onChange={setSelectedMajor}>
          <div className="relative mt-1">
            <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
              <span className="block truncate">{selectedMajor.name}</span>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <LuChevronsUpDown size={20} color="gray" />
              </span>
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute mt-1 z-50 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm ">
                {prodi &&
                  prodi.map((prodi: any, prodiIdx: number) => (
                    <Listbox.Option
                      key={prodiIdx}
                      className={({ active }) =>
                        `relative cursor-default select-none py-2 z-50 pl-10 pr-4 ${
                          active
                            ? 'bg-amber-100 text-amber-900 '
                            : 'text-gray-900'
                        }`
                      }
                      value={prodi}
                    >
                      {({ selectedMajor }: any) => (
                        <>
                          <span
                            className={`block truncate  ${
                              selectedMajor ? 'font-medium' : 'font-normal'
                            }`}
                          >
                            {prodi.name}
                          </span>
                          {selectedMajor ? (
                            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                              dawod
                            </span>
                          ) : null}
                        </>
                      )}
                    </Listbox.Option>
                  ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
      </div>
    </div>
  );
};
