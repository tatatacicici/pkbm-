import { Dialog, Transition } from '@headlessui/react';
import { Major, TFilterData } from '@kampus-gratis/apps/kg/types/rencana-studi';
import { Button } from '@kampus-gratis/components/atoms';
import { useRouter, useSearchParams } from 'next/navigation';
import { Fragment, useEffect, useMemo, useState } from 'react';

export default function FilterModalStudyPlan({
  isOpen,
  setIsOpen,
  data,
  facultyParams,
  majorSelection,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  data: TFilterData;
  facultyParams: string;
  majorSelection: Major[];
}) {
  const searchParams = useSearchParams();
  const params = useMemo(
    () => new URLSearchParams(searchParams),
    [searchParams]
  );
  const router = useRouter();

  const [selectedMajor, setSelectedMajor] = useState<Major | undefined>(
    undefined
  );
  const [selectedSemester, setSelectedSemester] = useState<number | undefined>(
    undefined
  );
  const [selectedCredit, setSelectedCredit] = useState<number | undefined>(
    undefined
  );
  const [selectedLevel, setSelectedLevel] = useState<number | undefined>(
    undefined
  );

  function closeModal() {
    setIsOpen(false);
  }

  const handleFilter = (
    major?: string,
    semester?: number,
    credit?: number,
    level?: number
  ) => {
    params.delete('major');
    params.delete('semester');
    params.delete('credit');
    params.delete('level');
    major && params.set('major', major);
    semester && params.set('semester', semester.toString());
    credit && params.set('credit', credit.toString());
    level && params.set('level', level.toString());
    router.replace(`?${params.toString()}`);
    closeModal();
  };

  const handleReset = () => {
    setSelectedMajor(undefined);
    setSelectedSemester(undefined);
    setSelectedCredit(undefined);
    setSelectedLevel(undefined);
  };

  useEffect(() => {
    if (facultyParams == '9886a97b-d570-4c71-ac7f-3be2ce98b1aa') {
      setSelectedMajor(
        data.majors.find(
          (item) => item.id === '71969662-85ec-48e4-b762-bd2511a8d56f'
        )
      );
    }

    if (facultyParams == 'dd34b43a-edde-479d-9292-24a949e14bf0') {
      setSelectedMajor(
        data.majors.find(
          (item) => item.id === '1d5634b4-abd2-4b32-8e49-1475b5f45a64'
        )
      );
    }

    if (facultyParams == '6b25cc9c-143e-4377-b275-ab7f2043f8e5') {
      setSelectedMajor(
        data.majors.find(
          (item) => item.id === 'f1390af0-278c-433a-8df6-bc5b6f035678'
        )
      );
    }
  }, [facultyParams, data.majors]);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="relative w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div className="absolute top-4 right-4">
                    <Button
                      type="button"
                      className="p-2 rounded-full hover:bg-gray-100 transition"
                      onClick={closeModal}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M6 18L18 6M6 6l12 12"
                        />
                      </svg>
                    </Button>
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-bold leading-6 text-blue-base"
                  >
                    Filter Rencana Studi
                  </Dialog.Title>
                  <div className="">
                    <div className="py-5 flex flex-col gap-3 ">
                      {facultyParams && (
                        <div className="pb-2">
                          <p className="text-sm font-semibold mb-3">
                            Program Studi
                          </p>
                          <section className="flex flex-wrap gap-2 bg-[#f5ebe0] p-2 rounded-lg">
                            {majorSelection.map((item) => (
                              <Button
                                key={item.id}
                                type="button"
                                className={`flex px-6 py-3 gap-2 text-sm items-center leading-none rounded-md transition min-w-[120px] justify-center 
                                  ${
                                    selectedMajor?.id === item.id
                                      ? 'bg-[#3181AC] text-white'
                                      : 'border border-primary-500 text-primary-500 hover:bg-primary-100/50'
                                  }
                                `}
                                onClick={() => setSelectedMajor(item)}
                              >
                                {item.name}
                              </Button>
                            ))}
                          </section>
                        </div>
                      )}
                      <div className="pb-2">
                        <p className="text-sm font-semibold mb-3">Semester</p>
                        <section className="flex flex-wrap gap-2 bg-[#edf6f9] p-2 rounded-lg">
                          <Button
                            type="button"
                            className={`flex px-6 py-3 gap-2 text-sm items-center leading-none rounded-md transition min-w-[120px] justify-center 
                            ${
                              selectedSemester === undefined
                                ? 'bg-[#3181AC] text-white'
                                : 'border border-primary-500 text-primary-500 hover:bg-primary-100/50'
                            }
                          `}
                            onClick={() => setSelectedSemester(undefined)}
                          >
                            Semua Semester
                          </Button>
                          {data.semesters.map((item) => (
                            <Button
                              key={item}
                              type="button"
                              className={`flex px-6 py-3 gap-2 text-sm items-center leading-none rounded-md transition min-w-[120px] justify-center 
                              ${
                                selectedSemester === item
                                  ? 'bg-[#3181AC] text-white'
                                  : 'border border-primary-500 text-primary-500 hover:bg-primary-100/50'
                              }
                            `}
                              onClick={() => setSelectedSemester(item)}
                            >
                              Semester {item}
                            </Button>
                          ))}
                        </section>
                      </div>
                      <div className="pb-2">
                        <p className="text-sm font-semibold mb-3">Jumlah SKS</p>
                        <section className="flex flex-wrap gap-2  bg-[#d8f3dc] p-2 rounded-lg">
                          <Button
                            type="button"
                            className={`flex px-6 py-3 gap-2 text-sm items-center leading-none rounded-md transition min-w-[120px] justify-center 
                            ${
                              selectedCredit === undefined
                                ? 'bg-[#3181AC] text-white'
                                : 'border border-primary-500 text-primary-500 hover:bg-primary-100/50'
                            }
                          `}
                            onClick={() => setSelectedCredit(undefined)}
                          >
                            Semua SKS
                          </Button>
                          {data.credits.map((item) => (
                            <Button
                              key={item}
                              type="button"
                              className={`flex px-6 py-3 gap-2 text-sm items-center leading-none rounded-md transition min-w-[120px] justify-center 
                              ${
                                selectedCredit === item
                                  ? 'bg-[#3181AC] text-white'
                                  : 'border border-primary-500 text-primary-500 hover:bg-primary-100/50'
                              }
                            `}
                              onClick={() => setSelectedCredit(item)}
                            >
                              {item} SKS
                            </Button>
                          ))}
                        </section>
                      </div>
                      <div className="pb-2">
                        <p className="text-sm font-semibold mb-3">Tingkat</p>
                        <section className="flex flex-wrap gap-2  p-2 rounded-lg bg-[#acfcf1]">
                          <Button
                            type="button"
                            className={`flex px-6 py-3 gap-2 text-sm items-center leading-none rounded-md transition min-w-[120px] justify-center 
                            ${
                              selectedLevel === undefined
                                ? 'bg-[#3181AC] text-white'
                                : 'border border-primary-500 text-primary-500 hover:bg-primary-100/50'
                            }
                          `}
                            onClick={() => setSelectedLevel(undefined)}
                          >
                            Semua Tingkatan
                          </Button>
                          {data.levels.map((item) => (
                            <Button
                              key={item}
                              type="button"
                              className={`flex px-6 py-3 gap-2 text-sm items-center leading-none rounded-md transition min-w-[120px] justify-center 
                              ${
                                selectedLevel === item
                                  ? 'bg-[#3181AC] text-white'
                                  : 'border border-primary-500 text-primary-500 hover:bg-primary-100/50'
                              }
                            `}
                              onClick={() => setSelectedLevel(item)}
                            >
                              {item === 1
                                ? 'Dasar'
                                : item === 2
                                ? 'Menengah'
                                : 'Lanjutan'}
                            </Button>
                          ))}
                        </section>
                      </div>

                      <div className="flex gap-2">
                        <Button
                          type="button"
                          className="w-full flex px-2 py-3 gap-2 items-center outline-none border border-gray-300 text-gray-500 rounded-md justify-center hover:bg-gray-200"
                          onClick={handleReset}
                        >
                          Reset
                        </Button>
                        <Button
                          type="button"
                          className="w-full flex px-2 py-3 gap-2 items-center bg-blue-base text-white rounded-md justify-center hover:bg-blue-base/80 transition"
                          onClick={() =>
                            handleFilter(
                              selectedMajor?.id || '',
                              selectedSemester,
                              selectedCredit,
                              selectedLevel
                            )
                          }
                        >
                          Terapkan
                        </Button>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
