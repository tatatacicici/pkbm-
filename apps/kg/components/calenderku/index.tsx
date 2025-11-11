'use client';
import React, { useState, useEffect, Fragment } from 'react';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import { MdOutlineKeyboardArrowLeft } from 'react-icons/md';
import { TCalendarItems } from '../../types';
import { RiFlag2Fill } from 'react-icons/ri';
import { DayView } from './dayView';
import { WeekView } from './weekView';
import './stylescroll.css';
interface CalendarProps {
  events: TCalendarItems[];
}

export const CalendarEvent: React.FC<CalendarProps> = ({ events }) => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [viewMode, setViewMode] = useState<'month' | 'week' | 'day'>('month');
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [dataAllSelect, setDataAllSelect] = useState<TCalendarItems[] | any>(
    []
  );
  const [tanggal, setTanggal] = useState<any>(0);
  const [selectedEvent, setSelectedEvent] = useState<TCalendarItems | null>(
    null
  );

  const daysOfWeek = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];
  const dayName = daysOfWeek[currentDate.getDay()];
  console.log(tanggal);
  const handleEventClick = (event: TCalendarItems | undefined) => {
    if (event) {
      const selectedEvents = events
        ? events.filter(
            (e) => e.startAt === event.startAt && e.summary === event.summary
          )
        : [];
      setDataAllSelect(selectedEvents);
      setSelectedEvent(event);
    }
  };

  const handleEventClickMonth = (event: TCalendarItems | any, Tanggal: any) => {
    if (event) {
      const currentClick = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        Tanggal
      );

      const selectedEvents = events
        ? events.filter((e) => {
            const startEventDate = new Date(e.startAt);
            const endEventDate = new Date(e.endAt);

            if (startEventDate.toDateString() === endEventDate.toDateString()) {
              return (
                currentClick.toDateString() === startEventDate.toDateString()
              );
            }

            // Jika event memiliki rentang waktu
            return (
              currentClick >= startEventDate && currentClick <= endEventDate
            );
          })
        : [];
      setTanggal(Tanggal);
      setDataAllSelect(selectedEvents); // Set selectedEvents to state
      setSelectedEvent(event); // Set the clicked event to state
    }
  };

  console.log(dataAllSelect, 'dataAllSelect');

  const daysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const renderInformationDate = () => {
    if (!selectedEvent)
      return (
        <div className="flex flex-col justify-center items-center align-center lg:justify-end lg:items-end lg:align-end">
          <span className="text-[25px] lg:text-[35px] ">
            {tanggal} {getMonthName(new Date())}
          </span>
          <span className="text-[20px] lg:text-[27px]">
            {getDayName(new Date())}
          </span>
        </div>
      );

    const startMonth = new Date(selectedEvent.startAt).getMonth();
    const monthNames = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ];
    const dayNames = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];
    const startMonthName = monthNames[startMonth];
    const startDayName = dayNames[new Date(selectedEvent.startAt).getDay()];
    console.log(startDayName);
    return (
      <div className="flex flex-col justify-center items-center align-center lg:justify-end lg:items-end lg:align-end">
        <span className="text-[25px] lg:text-[35px] ">
          {tanggal} {startMonthName}
        </span>
        <span className="text-[20px] lg:text-[27px]">{startDayName}</span>
      </div>
    );
  };

  const getMonthName = (date: Date) => {
    return date.toLocaleString('id-ID', { month: 'long' });
  };

  const getDayName = (date: Date) => {
    return date.toLocaleString('id-ID', { weekday: 'long' });
  };

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return (
      date.getDate() === today.getDate() &&
      date.getMonth() === today.getMonth() &&
      date.getFullYear() === today.getFullYear()
    );
  };

  const isEventInRange = (date: Date, event: TCalendarItems) => {
    const startDate = new Date(event.startAt);
    const endDate = new Date(event.endAt);

    // Set time to 00:00:00 for startDate and 23:59:59 for endDate
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    return date >= startDate && date <= endDate;
  };
  const PrevYear = () => {
    const prevYearDate = new Date(currentDate);
    prevYearDate.setFullYear(prevYearDate.getFullYear() - 1);
    setCurrentDate(prevYearDate);
  };

  const NextYear = () => {
    const nextYearDate = new Date(currentDate);
    nextYearDate.setFullYear(nextYearDate.getFullYear() + 1);
    setCurrentDate(nextYearDate);
  };

  const prevMonth = () => {
    const prevMonthDate = new Date(currentDate);
    prevMonthDate.setMonth(prevMonthDate.getMonth() - 1);
    setCurrentDate(prevMonthDate);
  };

  const nextMonth = () => {
    const nextMonthDate = new Date(currentDate);
    nextMonthDate.setMonth(nextMonthDate.getMonth() + 1);
    setCurrentDate(nextMonthDate);
  };

  const prevWeek = () => {
    const prevWeekDate = new Date(currentDate);
    prevWeekDate.setDate(prevWeekDate.getDate() - 7);
    setCurrentDate(prevWeekDate);
  };

  const nextWeek = () => {
    const nextWeekDate = new Date(currentDate);
    nextWeekDate.setDate(nextWeekDate.getDate() + 7);
    setCurrentDate(nextWeekDate);
  };

  const prevDay = () => {
    const prevDayDate = new Date(currentDate);
    prevDayDate.setDate(prevDayDate.getDate() - 1);
    setCurrentDate(prevDayDate);
    setTanggal(currentDate.getDate() + 1);
  };

  const nextDay = () => {
    const nextDayDate = new Date(currentDate);
    nextDayDate.setDate(nextDayDate.getDate() + 1);
    setCurrentDate(nextDayDate);
    setTanggal(currentDate.getDate() + 1);
  };

  const toggleViewMode = (mode: 'month' | 'week' | 'day') => {
    setViewMode(mode);
    setSelectedDay(0);
  };

  const renderDays = () => {
    if (viewMode === 'month') {
      return MonthView();
    } else if (viewMode === 'week') {
      return (
        <>
          <WeekView
            onClick={(events: TCalendarItems | undefined) =>
              handleEventClick(events)
            }
            currentDate={currentDate}
            data={events}
          />
        </>
      );
    } else {
      return (
        <>
          <div className="flex overflow-auto h-[300px] col-span-7">
            <DayView
              onClick={(events: TCalendarItems | undefined) =>
                handleEventClick(events)
              }
              currentDate={currentDate}
              data={events}
            />
          </div>
        </>
      );
    }
  };

  const renderMonthView = () => {
    const daysCount = daysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) {
      const prevMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() - 1,
        daysInMonth(currentDate) - (firstDayOfMonth - i) + 2
      );

      days.push(
        <div
          key={`empty-prev-${i}`}
          className="text-gray-400 flex justify-center items-center "
        >
          <div className=" lg:text-[18px] text-[13px] lg:text-[18px]">
            {prevMonthDate.getDate()}
          </div>
        </div>
      );
    }

    for (let i = 1; i <= daysCount; i++) {
      const currentDayDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        i
      );
      const eventsForDay = events
        ? events.filter((event) => isEventInRange(currentDayDate, event))
        : [];
      const isTodayDate = isToday(currentDayDate);

      days.push(
        <div
          key={i}
          className={`flex justify-center items-center w-[100%] lg:h-[60px] h-[40px] md:h-[60px] flex-col relative `}
          onClick={() => {
            handleEventClickMonth(
              typeof eventsForDay[0] === 'undefined'
                ? setDataAllSelect(null)
                : eventsForDay[0],
              i
            );
            setSelectedDay(i);
          }}
        >
          <div className="flex text-[13px] lg:text-[18px] justify-center cursor-pointer items-center order-last lg:order-first">
            <div
              className={`  ${
                isTodayDate
                  ? 'text-white lg:px-3 lg:py-1  md:px-3  md:py-1 px-2 py-1  bg-blue-base rounded-full '
                  : ''
              }`}
              onClick={() => {
                setTanggal(i);
              }}
            >
              {i}
            </div>
          </div>
          {eventsForDay.length > 0 && (
            <button
              className={`${
                eventsForDay[0].type === 'QUIZ'
                  ? 'bg-[#2D9A41]'
                  : eventsForDay[0].type === 'ASSIGNMENT'
                  ? 'bg-[#0B568D]'
                  : 'bg-[#D79210]'
              }  p-[8px] lg:p-2 absolute -top-[2px] lg:top-[43px] rounded-full`}
            ></button>
          )}
        </div>
      );
    }

    const nextMonthDaysToAdd =
      6 -
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        daysCount
      ).getDay();

    for (let i = 1; i <= nextMonthDaysToAdd; i++) {
      const nextMonthDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + 1,
        i
      );
      days.push(
        <div
          key={`empty-next-${i}`}
          className="text-gray-400 flex justify-center items-center "
        >
          <div className="lg:text-[18px] text-[13px] lg:text-[18px]">
            {nextMonthDate.getDate()}
          </div>
        </div>
      );
    }
    return days;
  };

  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);

  const RenderedCardEvent = () => {
    const today = new Date().toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });

    const getTimeString = (date: any) => {
      const hours = date.getHours().toString().padStart(2, '0');
      const minutes = date.getMinutes().toString().padStart(2, '0');
      return `${hours}.${minutes}`;
    };

    let eventsToRender: any[] = [];
    if (events && dataAllSelect) {
      eventsToRender =
        dataAllSelect.length > 0
          ? dataAllSelect
          : events.filter((event) => {
              const eventStartDate = new Date(event.startAt).toLocaleDateString(
                'id-ID',
                {
                  year: 'numeric',
                  month: 'numeric',
                  day: 'numeric',
                }
              );
              return eventStartDate === today;
            });
    }
    if (eventsToRender.length === 0) {
      return (
        <div className="mt-4 flex justify-center items-center">
          Tidak ada tugas dan acara minggu ini.
        </div>
      );
    }
    return (
      <div className="flex flex-col gap-1 mt-4">
        {eventsToRender &&
          eventsToRender.map((event: any, i: any) => (
            <div
              key={i}
              className={`py-4 px-6 text-white rounded-md flex flex-col gap-2
            ${
              event.type === 'QUIZ'
                ? 'bg-[#2D9A41]'
                : event.type === 'ASSIGNMENT'
                ? 'bg-[#0B568D]'
                : 'bg-[#D79210]'
            }`}
            >
              <span className="text-[14px]">
                {getTimeString(new Date(event.startAt))}-
                {getTimeString(new Date(event.endAt))}
              </span>
              <h1 className="font-bold text-[14px]">{event.summary}</h1>
              <div className="flex gap-2 justify-start items-center align-middle">
                {event.type === 'ASSIGNMENT' && event.speaker !== null ? (
                  <Fragment>
                    <h1 className="text-[14px]">Pemateri :</h1>
                    <h1 className="font-semibold text-[14px]">
                      {event.speaker}
                    </h1>
                    <span className="text-[14px]">|</span>
                    <h1 className="text-[14px]">{event.place}</h1>
                  </Fragment>
                ) : (
                  <Fragment>
                    <h1 className="text-[14px] font-semibold">{event.type}</h1>
                    <span className="text-[14px]">|</span>
                    <h1 className="text-[14px]">{event.place}</h1>
                  </Fragment>
                )}
              </div>
            </div>
          ))}
      </div>
    );
  };

  const MonthView = () => {
    return (
      <div
        className={`grid grid-cols-7  font-bold ${
          viewMode === 'month' ? 'px-5  lg:px-16 ' : ''
        }`}
      >
        <div
          className={`lg:text-[18px] text-[10px] flex mb-4 text-gray-400 font-bold justify-center items-center 
          }`}
        >
          Min
        </div>
        <div
          className={`lg:text-[18px] text-[10px] flex mb-4 text-gray-400 font-bold justify-center items-center 
          }`}
        >
          Sen
        </div>
        <div
          className={`lg:text-[18px] text-[10px] flex mb-4 text-gray-400 font-bold justify-center items-center 
          }`}
        >
          Sel
        </div>
        <div
          className={`lg:text-[18px] text-[10px] flex mb-4 text-gray-400 font-bold justify-center items-center 
          }`}
        >
          Rab
        </div>
        <div
          className={`lg:text-[18px] text-[10px] flex mb-4 text-gray-400 font-bold justify-center items-center 
          }`}
        >
          Kam
        </div>
        <div
          className={`lg:text-[18px] text-[10px] flex mb-4 text-gray-400 font-bold justify-center items-center 
          }`}
        >
          Jum
        </div>
        <div
          className={`lg:text-[18px] text-[10px] flex mb-4 text-gray-400 font-bold justify-center items-center 
          }`}
        >
          Sab
        </div>
        {renderMonthView()}
      </div>
    );
  };
  return (
    <div className="mt-[40px] w-full lg:px-[170px]  md:px-[20px] px-3  mb-10">
      <div className="flex flex-col gap-2 lg:gap-8">
        <h1 className="text-center lg:text-[40px] md:text-[50px] dark:text-white text-black text-[30px] font-[700] ">
          Kalender Saya
        </h1>
        <h1 className="text-center text-[#A3A3A3] lg:text-[20px] lg:text-black md:text-black md:text-[20px] dark:text-white  text-[15px]  ">
          Semua agenda yang kamu lakukan di Paket-C Gratis ada disini !
        </h1>
      </div>
      <div className="card bg-white flex lg:flex-col flex-col md:flex-col h-auto mt-[39px] w-full rounded-[8px]  overflow-hidden  grid grid-cols-3">
        <div className="col-span-3 lg:pt-10 lg:pb-10 justify-center lg:col-span-2 md:col-span-2 flex-col gap-8 flex border-r-2  border-gray-200 lg:px-5">
          <div className="mt-5 flex justify-between items-center px-4">
            <div className="flex">
              <button
                className={`${
                  viewMode === 'day'
                    ? 'bg-[#0B568D] text-white'
                    : ' border-l-2 border-y-2 border-gray-700'
                } rounded-l-md lg:px-4 py-2 px-3 text-sm lg:text-md lg:py-2 `}
                onClick={() => toggleViewMode('day')}
                disabled={viewMode === 'day'}
              >
                Hari
              </button>
              <button
                className={` lg:px-4 py-2 px-3 text-sm lg:text-md lg:py-2  ${
                  viewMode === 'week'
                    ? 'bg-[#0B568D] text-white'
                    : 'border-y-2 border-gray-700'
                }`}
                onClick={() => toggleViewMode('week')}
                disabled={viewMode === 'week'}
              >
                Minggu
              </button>
              <button
                className={`lg:px-4 py-2 px-3 text-sm lg:text-md lg:py-2 rounded-r-md  ${
                  viewMode === 'month'
                    ? 'bg-[#0B568D] text-white'
                    : 'border-r-2 border-y-2 border-gray-700'
                }`}
                onClick={() => toggleViewMode('month')}
                disabled={viewMode === 'month'}
              >
                Bulan
              </button>
            </div>
            <button className="p-2 lg:p-3 bg-white rounded-full drop-shadow-[0_0_16px_rgba(0,0,0,0.20)]">
              <RiFlag2Fill size={20} color="#0B568D" />
            </button>
          </div>

          <div className=" flex flex-col items-center justify-between mb-4">
            <div className="flex gap-20">
              {viewMode === 'day' && (
                <div className="flex flex-col gap-5 justify-center items-center">
                  <div className="flex gap-5 justify-center items-center ">
                    <button
                      className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                      onClick={prevMonth}
                    >
                      <MdOutlineKeyboardArrowLeft size={25} />
                    </button>
                    <h2 className="lg:text-[40px] text-[30px] font-bold">
                      {getMonthName(currentDate)} {currentDate.getFullYear()}
                    </h2>

                    <button
                      className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                      onClick={nextMonth}
                    >
                      <MdOutlineKeyboardArrowRight size={25} />
                    </button>
                  </div>
                  <div className="flex gap-5 justify-center items-center">
                    <button
                      className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                      onClick={prevDay}
                    >
                      <MdOutlineKeyboardArrowLeft size={20} />
                    </button>

                    <h2 className="text-lg font-bold">
                      {dayName},{currentDate.getDate()}
                    </h2>

                    <button
                      className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                      onClick={nextDay}
                    >
                      <MdOutlineKeyboardArrowRight size={20} />
                    </button>
                  </div>
                </div>
              )}
              {viewMode === 'week' && (
                <div className="flex flex-col gap-5 justify-center items-center">
                  <div className="flex gap-5 justify-center items-center ">
                    <button
                      className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                      onClick={prevMonth}
                    >
                      <MdOutlineKeyboardArrowLeft size={25} />
                    </button>
                    <h2 className="lg:text-[40px] text-[30px] font-bold">
                      {getMonthName(currentDate)} {currentDate.getFullYear()}
                    </h2>

                    <button
                      className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                      onClick={nextMonth}
                    >
                      <MdOutlineKeyboardArrowRight size={25} />
                    </button>
                  </div>
                  <div className="flex gap-5 justify-center items-center">
                    <button
                      className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                      onClick={prevWeek}
                    >
                      <MdOutlineKeyboardArrowLeft size={20} />
                    </button>

                    <h2 className="text-lg font-bold">
                      Minggu Ke -{Math.round(currentDate.getDate() / 7 + 1)}
                    </h2>

                    <button
                      className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                      onClick={nextWeek}
                    >
                      <MdOutlineKeyboardArrowRight size={20} />
                    </button>
                  </div>
                </div>
              )}
              {viewMode === 'month' && (
                <>
                  <div className="flex flex-col gap-8 justify-center items-center">
                    <div className="flex gap-5 justify-center items-center">
                      <button
                        className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                        onClick={PrevYear}
                      >
                        <MdOutlineKeyboardArrowLeft size={25} />
                      </button>
                      <h2 className="text-[30px] lg:text-[40px] font-bold">
                        {currentDate.getFullYear()}
                      </h2>
                      <button
                        className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                        onClick={NextYear}
                      >
                        <MdOutlineKeyboardArrowRight size={25} />
                      </button>
                    </div>
                    <div className="flex justify-center items-center gap-5">
                      <button
                        className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                        onClick={prevMonth}
                      >
                        <MdOutlineKeyboardArrowLeft size={20} />
                      </button>
                      <h2 className="text-lg font-bold">
                        {getMonthName(currentDate)} {currentDate.getFullYear()}
                      </h2>
                      <button
                        className="p-2 bg-white drop-shadow-[0_0_16px_rgba(0,0,0,0.20)] rounded-full"
                        onClick={nextMonth}
                      >
                        <MdOutlineKeyboardArrowRight size={20} />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div
            className={` text-[18px] font-bold ${
              viewMode === 'month' ? 'px-5  lg:px-16 ' : ''
            }`}
          >
            {renderDays()}
          </div>
        </div>
        <div className="flex flex-col justify-around md:justify-start lg:justify-start lg:gap-4 col-span-3 lg:col-span-1 md:col-span-1 px-2 py-4 lg:px-4 md:px-4  lg:py-4 md:py-4">
          <div className="py-4 lg:py-10  border-b-2 font-bold flex justify-center items-center align-center lg:justify-end lg:items-end lg:align-end md:justify-end md:items-end md:align-end">
            {renderInformationDate()}
          </div>
          <div
            className={`h-[410px] ${
              dataAllSelect && dataAllSelect.length > 3 ? 'overflow-y-auto' : ''
            }`}
          >
            {RenderedCardEvent()}
          </div>
        </div>
      </div>
    </div>
  );
};
