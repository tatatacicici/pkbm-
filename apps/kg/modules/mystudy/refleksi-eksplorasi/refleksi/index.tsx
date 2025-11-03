'use client';

import EmptyState from '@kampus-gratis/apps/kg/components/empty-state';
import { BreadCrumb, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { StudiKuBreadCumbs } from 'apps/kg/utils/constantStudiKu';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Avatar from 'react-avatar';
import { toast } from 'react-hot-toast';
import { BiArrowBack } from 'react-icons/bi';
import { z } from 'zod';
import { usePostRefleksiEksplorasi } from '../../../../hooks/mystudy/refleksi-eksplorasi/hook';
import { useGetRiwayatRefleksi } from '../../../../hooks/mystudy/riwayat-refleksi/hooks';

const RefleksiModule = () => {
  const router = useRouter();
  const { subjectId, sessionId } = useParams();
  const { data, isLoading } = useGetRiwayatRefleksi(sessionId as string);
  const { mutate } = usePostRefleksiEksplorasi(sessionId as string);
  const teacher = data?.data?.teacher;

  const ValidationRefleksi = z.object({
    inputRefleksi: z.string().min(36, 'Minimal 36 Karakter'),
  });

  const [inputRefleksi, setInputRefleksi] = useState<string>('');
  const [error, setError] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    try {
      ValidationRefleksi.parse({ inputRefleksi });
      const payload = {
        message: inputRefleksi,
      };
      mutate(payload, {
        onSuccess: () => {
          setInputRefleksi('');
          setError('');
          toast.success('Refleksi terkirim');
          router.push(
            `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}/riwayat`
          );
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
    } catch (err) {
      if (err instanceof z.ZodError) {
        setError(err.errors[0].message);
      }
    }
  };

  const ITEMS = [
    ...StudiKuBreadCumbs,
    {
      name: data?.data?.subject_name,
      link: `/studi-ku/${subjectId}`,
    },
    {
      name: 'Refleksi Pembelajaran',
      link: `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}`,
    },
    {
      name: 'Refleksi',
      link: `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}/refleksi`,
    },
  ];

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) {
    return <EmptyState text="Oops! Refleksi pembelajaran belum tersedia." />;
  }

  return (
    <>
      <BreadCrumb items={ITEMS} />
      <main className="w-full max-w-[1440px] mx-auto my-4 max-h-max">
        <div className="w-full flex flex-col px-8 lg:px-16 gap-8">
          <section className="w-full bg-white rounded-lg">
            <h1 className="text-3xl font-semibold">Refleksi Pembelajaran</h1>
            <p className="mt-2 text-lg text-gray-500 font-normal">
              Pertemuan {data?.data?.session_no}
            </p>
          </section>
          <section className="bg-white rounded-lg mb-8">
            <div className="flex items-center gap-2">
              {!teacher?.avatar ? (
                <Avatar name={teacher?.full_name} size="40" round={true} />
              ) : (
                <Image
                  src={teacher?.avatar || ''}
                  alt="placeholder"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              )}
              <span>
                <p className="font-semibold">{teacher?.full_name}</p>
                <p className="text-xs text-green-600 font-medium">Pengajar</p>
              </span>
            </div>
            <h3 className="mt-5">
              Apa yang kamu ketahui secara keseluruhan dari pertemuan ini?
            </h3>
            {data?.data?.reflection ? (
              <div className="w-full h-40 mt-2 p-2 bg-gray-50 border border-dashed border-gray-300 rounded-lg text-gray-500 flex items-center justify-center">
                Kamu sudah mengirimkan refleksi untuk pertemuan ini
              </div>
            ) : (
              <textarea
                className="w-full h-40 mt-2 p-2 bg-gray-50 border border-gray-300 rounded-lg"
                placeholder="Masukkan jawaban anda..."
                value={inputRefleksi}
                onChange={(e) => setInputRefleksi(e.target.value)}
              />
            )}
            {error && <p className="text-red-500 text-sm">* {error}</p>}
            <span className="flex justify-between items-center mt-4">
              {/* <button
                onClick={() =>
                  router.push(
                    `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}`
                  )
                }
                className="flex items-center gap-2 border-2 border-blue-base text-blue-base py-2 px-6 rounded-lg hover:bg-blue-base/90 hover:text-white transition-all"
              > */}
              <button
                onClick={() =>
                  router.push(
                    `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}`
                  )
                }
                className="flex items-center gap-2 border-2 border-sky-base text-sky-base py-2 px-6 rounded-lg hover:bg-sky-base/90 hover:text-white transition-all"
              >
                <BiArrowBack />
                Kembali
              </button>
              {!data?.data?.reflection ? (
                // <button
                //   type="submit"
                //   className="bg-blue-base text-white py-2.5 px-6 rounded-lg hover:bg-blue-base/90"
                //   onClick={handleSubmit}
                // >
                <button
                  type="submit"
                  className="bg-sky-base text-white py-2.5 px-6 rounded-lg hover:bg-sky-base/90"
                  onClick={handleSubmit}
                >
                  Selesai
                </button>
              ) : (
                // <button
                //   onClick={() =>
                //     router.push(
                //       `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}/riwayat`
                //     )
                //   }
                //   className="bg-blue-base text-white py-2.5 px-6 rounded-lg hover:bg-blue-base/90"
                // >
                <button
                  onClick={() =>
                    router.push(
                      `/studi-ku/${subjectId}/refleksi-pembelajaran/${sessionId}/riwayat`
                    )
                  }
                  className="bg-sky-base text-white py-2.5 px-6 rounded-lg hover:bg-sky-base/90"
                >
                  Lihat Riwayat
                </button>
              )}
            </span>
          </section>
        </div>
      </main>
    </>
  );
};

export default RefleksiModule;
