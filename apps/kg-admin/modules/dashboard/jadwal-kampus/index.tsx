'use client';
import React from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import { JadwalMk } from '../../../components/jadwal-mk/JadwalMk';
import { useGetEvent } from '../../../hooks/dashboard/acara-kampus/hook';
import { TEventItem } from '../../../types/leaderboard';

const JadwalKampusDashboard = () => {
  const { data: event } = useGetEvent();
  const eventData = event?.data.events;

  const acaraKampusPageBC = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Acara Kampus',
      link: '/dashboard/jadwal-acara-kampus',
    },
  ];
  return (
    <div>
      <Breadcrumb items={acaraKampusPageBC} />
      <div className="w-full grid grid-cols-3 gap-10 mt-12">
        {eventData &&
          eventData?.map((event: TEventItem, i: number) => {
            const Day = new Date(event.date_start.slice(0, 10));
            const newDay = new Intl.DateTimeFormat('id', {
              dateStyle: 'full',
            }).format(Day);
            return (
              <div
                key={i}
                className="bg-white p-4 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
              >
                <JadwalMk
                  image={event.thumbnail}
                  title={event.name}
                  dateEven={newDay}
                  time={event.date_end.slice(11, 16)}
                  position="vert"
                />
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default JadwalKampusDashboard;
