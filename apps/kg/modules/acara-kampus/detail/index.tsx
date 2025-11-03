'use client';

import { Tab } from '@headlessui/react';
import Image from 'next/image';
import { FC, Fragment, ReactElement, useState } from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';
import { AiFillInfoCircle } from 'react-icons/ai';
import ImageEventList from '../../../assets/icons/ic-img-eventlist.svg';
import Link from 'next/link';
import { Button } from '@kampus-gratis/components/atoms';
import { PopupModal } from '@kampus-gratis/components/molecules';
import {
  useGetEventById,
  usePopupEvent,
  useRegisterEvent,
} from '../../../hooks/acarakampus/detail/hooks';
import { useParams } from 'next/navigation';
import { Description } from './description';
import { Information } from './information';
import Contact from './contact';
import CheckList from '../../../assets/icons/ic-checklist.svg';
import EventSuccess from '../../../assets/icons/ic-event-success.svg';
import { TRegisterEventPayload } from '../../../types/acarakampus';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const dummyBenefits = [
  'Sertifikat',
  'Pemahaman tentang Cyber Security',
  'Ilmu langsung dari seorang Cyber Security',
];

export const EventDetail: FC = (): ReactElement => {
  const { getPopupStatus, setPopupStatus } = usePopupEvent();
  const [popUpError, setPopUpError] = useState(false);

  const params = useParams();

  const { id } = params;

  const { data } = useGetEventById(id as string);

  const { mutate } = useRegisterEvent();

  const eventData = data?.data;

  const toastTrigger = (message: string) =>
    toast.error(message, {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });

  const registerEvent = async () => {
    const payload: TRegisterEventPayload = {
      event_id: id as string,
    };

    mutate(payload, {
      onSuccess: () => setPopupStatus(true),
      onError: async (error) => {
        toastTrigger(error?.response?.data?.message as string);
      },
    });
  };

  return (
    <div className="px-10 py-10 lg:px-20  max-w-[1440px] mx-auto">
      {/* card */}
      <section className="block mb-10 lg:flex gap-36">
        <Image
          src={ImageEventList}
          alt="event-card"
          width={100}
          className="w-full lg:w-[720px]"
        />
        <div className="py-4">
          <h1 className="text-lg font-bold mb-7 text-neutral-900">
            {eventData?.name}
          </h1>
          <div className="mb-7">
            <h1 className="mb-2 text-lg text-neutral-600">Benefit :</h1>
            {dummyBenefits.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex gap-x-1.5 items-center mb-1 text-sm text-neutral-800"
                >
                  <BsCheckCircleFill className="text-green-500" />
                  <p>{item}</p>
                </div>
              );
            })}
          </div>
          <h1 className="text-lg font-bold text-red-500 mb-7">GRATIS</h1>
          <p className="text-sm text-neutral-600 mb-7">
            Tuesday, {eventData?.date_start.slice(0, 10)}
          </p>
          <Button
            onClick={registerEvent}
            type="submit"
            className="py-3 text-lg text-white transition-colors duration-300 ease-out rounded-lg shadow-md bg-primary-500 px-28 hover:bg-primary-600"
          >
            Daftar Sekarang
          </Button>
        </div>
      </section>

      {/* tab */}
      <main className=" min-h-[80vh] py-4 ">
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
            <Tab.Panel>
              <Description content={eventData?.description} />
            </Tab.Panel>
            <Tab.Panel>
              <Information />
            </Tab.Panel>
            <Tab.Panel>
              <Contact />
            </Tab.Panel>
          </Tab.Panels>
        </Tab.Group>
      </main>
      <PopupModal
        icon={CheckList}
        lookup={getPopupStatus}
        image={EventSuccess as string}
        popupTitle={'Kamu Berhasil Mendaftar'}
        description={
          'Kamu telah mendaftar webinar di hari Selasa, 28 Februari 2023 Pukul 19:00 WIB'
        }
        className={''}
      >
        <div className="flex items-center gap-2 py-2 mt-4 mb-5 text-base rounded-md shadow-sm bg-primary-100 px-7">
          <AiFillInfoCircle className="text-primary-500" />
          <p className="text-primary-500/60">
            Untuk informasi lebih lanjut silakan pergi ke page{' '}
            <span className="font-bold text-primary-500">
              <Link passHref href={'/event'}>
                Event Terdaftar
              </Link>
            </span>
          </p>
        </div>
        <div className="flex items-center justify-center w-full gap-10">
          <Button
            onClick={() => {
              setPopupStatus(false);
            }}
            type="button"
            className={
              'bg-white hover:bg-neutral-100 transition-colors ease-in-out duration-300 py-3 w-72 text-primary-500 font-bold border-2 border-primary-500 rounded-md'
            }
          >
            Tutup
          </Button>
          <Link href={'/event'}>
            <Button
              type="button"
              className={
                'text-white hover:bg-primary-600 transition-colors ease-in-out duration-300 py-3 w-72 bg-primary-500 font-bold border-2 border-primary-500 rounded-md'
              }
              onClick={() => {
                setPopupStatus(false);
              }}
            >
              Event Terdaftar
            </Button>
          </Link>
        </div>
      </PopupModal>
    </div>
  );
};
