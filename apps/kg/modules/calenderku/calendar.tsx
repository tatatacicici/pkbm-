'use client';

import { Calendar } from '@umakantp/react-date-range';
import '@umakantp/react-date-range/dist/styles.css'; // main style file
import '@umakantp/react-date-range/dist/theme/default.css'; // theme css file
import { Fragment, useEffect, useState } from 'react';
import { TCalendarItems } from '../../types';
import { BsQuestionCircleFill } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa';
import { CiCalendar } from 'react-icons/ci';

interface CalendarProps {
  events: TCalendarItems[];
}

export default function CalendarEvent({ events }: CalendarProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [filteredEvents, setFilteredEvents] = useState<TCalendarItems[]>([]);

  const isEventInRange = (date: Date, event: TCalendarItems) => {
    const startDate = new Date(event.startAt);
    const endDate = new Date(event.endAt);

    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    return date >= startDate && date <= endDate;
  };

  const filterEvents = (date: Date) => {
    const filtered = events.filter((event) => {
      const start = new Date(event.startAt);
      const end = new Date(event.endAt);
      return date >= start && date <= end;
    });
    setFilteredEvents(filtered);
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
    filterEvents(date);
  };

  useEffect(() => {
    if (events) {
      filterEvents(selectedDate);
    }
  }, []);

  return (
    <div className="flex gap-4 gap-y-8 flex-col lg:flex-row">
      <Calendar
        className="rounded-lg sm:!text-lg 2xl:!text-xl border shadow-md mx-auto"
        color="#262626"
        date={selectedDate}
        onChange={handleDateChange}
        direction="vertical"
        dayContentRenderer={(day) => {
          const currentDayDate = new Date(
            day.getFullYear(),
            day.getMonth(),
            day.getDate()
          );
          const eventsForDay = events
            ? events.filter((event) => isEventInRange(currentDayDate, event))
            : [];
          return (
            <div
              className={`flex flex-col items-center justify-center rounded-full ${
                currentDayDate.getDate() === selectedDate.getDate() &&
                currentDayDate.getMonth() === selectedDate.getMonth() &&
                currentDayDate.getFullYear() === selectedDate.getFullYear()
                  ? ' text-white'
                  : 'text-black'
              } ${
                currentDayDate.getMonth() === selectedDate.getMonth() &&
                currentDayDate.getFullYear() === selectedDate.getFullYear()
                  ? 'font-semibold'
                  : 'text-gray-400'
              }`}
            >
              {day.getDate()}
              {/* <span
                className={`
              w-6 h-1 rounded-full -translate-y-3
              ${
                eventsForDay.length > 0
                  ? eventsForDay[0].type === 'QUIZ'
                    ? 'bg-[#2D9A41]'
                    : eventsForDay[0].type === 'ASSIGNMENT'
                    ? 'bg-[#0B568D]'
                    : 'bg-[#D79210]'
                  : ''
              }
              `}
              ></span> */}
              <span
                className={`
              w-6 h-1 rounded-full -translate-y-3
              ${
                eventsForDay.length > 0
                  ? eventsForDay[0].type === 'QUIZ'
                    ? 'bg-[#2D9A41]'
                    : eventsForDay[0].type === 'ASSIGNMENT'
                    ? 'bg-sky-base'
                    : 'bg-[#D79210]'
                  : ''
              }
              `}
              ></span>
            </div>
          );
        }}
      />
      <div className="md:px-6 flex flex-col flex-grow">
        <div className="flex gap-4 items-center justify-between">
          <span className="bg-neutral-900 text-white text-sm font-semibold py-1.5 px-3 rounded-lg">
            {selectedDate.toLocaleDateString('id-ID', {
              weekday: 'long',
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            })}
          </span>
          <h1 className="font-semibold mt-2 mb-4 text-neutral-700">
            {filteredEvents.length} kegiatan
          </h1>
        </div>
        <div className="flex flex-col gap-1 mt-2 max-h-[400px] overflow-y-auto">
          {filteredEvents &&
            filteredEvents.map((event: any, i: any) => (
              <div
                key={i}
                className="py-4 px-6 rounded-md flex flex-col gap-2 border"
              >
                <div className="flex justify-between">
                  {/* <h1
                    className={`
                    text-[14px] font-semibold ${
                      event.type === 'QUIZ'
                        ? 'bg-[#2D9A41]'
                        : event.type === 'ASSIGNMENT'
                        ? 'bg-[#0B568D]'
                        : 'bg-[#D79210]'
                    } text-white rounded-md px-2 py-1 w-max flex items-center gap-2
                    `}
                  > */}
                  <h1
                    className={`
                    text-[14px] font-semibold ${
                      event.type === 'QUIZ'
                        ? 'bg-[#2D9A41]'
                        : event.type === 'ASSIGNMENT'
                        ? 'bg-sky-base'
                        : 'bg-[#D79210]'
                    } text-white rounded-md px-2 py-1 w-max flex items-center gap-2
                    `}
                  >
                    <FaClipboardList />
                    {event.type}
                  </h1>
                  <div
                    className={`
                   text-[14px] font-semibold flex items-center gap-2`}
                  >
                    <CiCalendar />
                    <span>
                      {new Date(event.startAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit',
                      })}
                      {' - '}
                      {new Date(event.endAt).toLocaleDateString('id-ID', {
                        day: 'numeric',
                        month: 'short',
                        year: '2-digit',
                      })}
                    </span>
                  </div>
                </div>
                <h1 className="font-bold text-[14px]">{event.summary}</h1>
                <div className="flex gap-2 justify-start items-center align-middle"></div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
