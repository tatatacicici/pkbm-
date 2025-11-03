import { Button } from '@kampus-gratis/components/atoms';
import { useTakeSubjectPlan } from 'apps/kg/hooks/rencana-studi/hooks';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { BsBookHalf } from 'react-icons/bs';

import { BiSolidCalendar } from 'react-icons/bi';
import { MdStickyNote2 } from 'react-icons/md';
import { toast } from 'react-toastify';
import TakeSubjectModal from './takesubjectmodal';

export interface DataCard {
  id?: string;
  name: string;
  credit: number;
  level: number;
  code: string;
  semester: number;
  thumbnail: string;
  is_taken?: boolean;
  is_available?: boolean;
  start_at?: string;
  category?: string;
  type?: string;
  slug?: string;
}

export const SubjectCard: React.FC<DataCard> = ({
  id,
  semester,
  code,
  credit,
  level,
  name,
  thumbnail,
  is_taken,
  is_available,
  start_at,
  category,
  type,
  slug,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const { mutate } = useTakeSubjectPlan();

  const handleTakeSubject = () => {
    try {
      mutate(id as string, {
        onSuccess: () => {
          toast.success('Berhasil Mengajukan Matakuliah', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: 'light',
          });
        },
        onError: (error) => {
          if (
            error.response?.data &&
            error.response?.data.message === 'Subject cannot be taken yet'
          ) {
            toast.error('Kuliah Ini Belum Tersedia', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          } else if (
            error.response?.data &&
            error.response?.data.message === 'You already enroll this Subject'
          ) {
            toast.error('Kamu Telah Memilih Mata Kuliah Ini', {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          } else {
            const errorMessage = error.response?.data.message;
            toast.error(`${errorMessage}`, {
              position: 'top-right',
              autoClose: 2000,
              hideProgressBar: false,
              closeOnClick: true,
              pauseOnHover: true,
              draggable: true,
              progress: undefined,
              theme: 'light',
            });
          }
          setIsOpen(!isOpen);
        },
      });
    } catch (err) {
      return err;
    }
  };

  return (
    <div
      id={slug}
      className="bg-white border border-gray-200 rounded-xl shadow-lg flex flex-col justify-between min-w-[300px] xl:max-w-[300px]"
    >
      <div className="w-full p-4 pb-1 relative">
        {thumbnail ? (
          <Image
            src={thumbnail || ''}
            loading="lazy"
            alt=""
            width={0}
            height={0}
            sizes="100vh"
            style={{
              width: 'auto',
              minWidth: '100%',
              height: '150px',
              objectFit: 'cover',
            }}
            className="rounded-lg"
          />
        ) : (
          <div className="h-36 bg-gray-300 rounded-lg animate-pulse" />
        )}
        <div className="absolute top-6 right-6 bg-rose-900 text-white px-2 py-1 text-[10px] rounded-md">
          <span>
            Tingkat Kesulitan:
            {level === 1 ? ' Dasar' : level === 2 ? ' Menengah' : ' Lanjutan'}
          </span>
        </div>
      </div>

      <div className=" pt-0 p-4 h-full flex flex-col gap-2 justify-between">
        <div>
          <div className="flex justify-between items-center">
            <span className="text-gray-400 text-sm font-medium">{code}</span>
            {start_at && start_at && (
              <div className="text-rose-500 px-2 py-1 text-xs rounded-md font-semibold w-max flex gap-1 items-center">
                <BiSolidCalendar size={18} className="-mt-0.5" />
                {new Date(start_at).toLocaleDateString('id-ID', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </div>
            )}
          </div>
          <h5 className=" font-bold tracking-tight text-gray-900 line-clamp-2">
            {name}
          </h5>
        </div>
        <div className="">
          {/* <div className="flex gap-4 items-center text-sm px-1">
            <div className="flex items-center gap-1">
              <BsBookHalf className="text-blue-500" size={16} />
              {type == 'GROUP' ? 'Batch ' : 'Semester '}
              {semester}
            </div>
            <div className="flex items-center gap-1">
              <MdStickyNote2 className="text-green-500" size={16} />
              {credit} SKS
            </div>
          </div> */}
          <div className="flex justify-between gap-2 font-medium pt-4">
            <Link
              href={`/rencana-studi/detail-rencana-studi/${id}`}
              className="w-full"
            >
              <Button
                type="button"
                className="inline-flex justify-center items-center w-full px-3 py-2 text-sm font-medium text-center text-primary-500 border-2 border-primary-500 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 "
              >
                Detail
              </Button>
            </Link>
            <Button
              type="button"
              disabled={is_taken || !is_available}
              className="inline-flex justify-center items-center w-full px-3 py-2 text-sm font-medium text-center text-white bg-primary-500 rounded-lg hover:bg-primary-600 focus:ring-4 focus:outline-none focus:ring-blue-300 disabled:bg-gray-300"
              onClick={() => setIsOpen(!isOpen)}
            >
              Ambil
            </Button>
          </div>
          <TakeSubjectModal
            subjectCategory={category}
            handleClick={handleTakeSubject}
            closeModal={() => setIsOpen(!isOpen)}
            isOpen={isOpen}
          />
        </div>
      </div>
    </div>
  );
};
