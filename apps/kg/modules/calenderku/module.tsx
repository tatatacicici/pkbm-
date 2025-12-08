'use client';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { FC, ReactElement } from 'react';
import { BreadCrumb } from '../../components/bread-crumb';
import FooterCredit from '../../components/footer/footer-credit/footer-credit';
import { BaseLayout } from '../../components/layouts/base/section';
import { RequestCalendarData } from '../../hooks/kalenderku/hook';
import { kalendarSayaBreadCumbs } from '../administration/constant';
import CalendarEvent from './calendar';

export const Calenderku: FC = (): ReactElement => {
  const { data, isLoading } = RequestCalendarData();

  if (isLoading) return <LoadingSpinner />;

  return (
    <>
      <BaseLayout title="Kalenderku">
        <div className="bg-[#fff]">
          <div className=" w-full pb-32 max-w-[1440px] mx-auto">
            <BreadCrumb items={kalendarSayaBreadCumbs} />
            <div className="w-full mx-auto px-4 sm:px-8 md:px-16 bg-white py-2 md:py-8 rounded-lg">
              <h1 className="text-3xl font-bold text-start">Jadwal-Ku</h1>
              <p className="text-gray-500 mb-4 text-sm md:text-md">
                Lihat jadwal pembelajaran, ujian, PR, dan lainnya
              </p>
              {data?.data ? (
                <CalendarEvent events={data.data} />
              ) : (
                <div className="flex justify-center items-center h-[500px]">
                  <h1 className="text-2xl font-bold text-center">
                    Tidak ada data
                  </h1>
                </div>
              )}
            </div>
          </div>
        </div>
        <FooterCredit />
      </BaseLayout>
    </>
  );
};
