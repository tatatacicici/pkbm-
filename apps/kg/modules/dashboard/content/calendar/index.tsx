import { FC, ReactElement, useState } from 'react';
import { TCalendarItems } from '../../../../types/calendar';

interface CalendarProps {
  events: TCalendarItems[];
}

export const CalendarSection: FC<CalendarProps> = ({
  events,
}): ReactElement => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState<number>(0);
  const [dataAllSelect, setDataAllSelect] = useState<TCalendarItems[] | any>(
    []
  );
  const [selectedEvent, setSelectedEvent] = useState<TCalendarItems | any>(
    null
  );
  const [selectedIndex, setSelectedIndex] = useState<any>(null); // State untuk melacak indeks yang ditekan
  const handleEventClick = (event: TCalendarItems | any, Tanggal: any) => {
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

            // Jika event berlangsung selama satu hari
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

      setDataAllSelect(selectedEvents); // Set selectedEvents to state
      setSelectedEvent(event); // Set the clicked event to state
      setSelectedDay(Tanggal); // Set the clicked day to state
    }
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
  const daysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    return new Date(year, month + 1, 0).getDate();
  };

  const isEventInRange = (date: Date, event: TCalendarItems) => {
    const startDate = new Date(event.startAt);
    const endDate = new Date(event.endAt);

    // Set time to 00:00:00 for startDate and 23:59:59 for endDate
    startDate.setHours(0, 0, 0, 0);
    endDate.setHours(23, 59, 59, 999);

    return date >= startDate && date <= endDate;
  };

  const renderMonthView = () => {
    const daysCount = daysInMonth(currentDate);
    const firstDayOfMonth = getFirstDayOfMonth(currentDate);
    const dayNames = ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'];
    const days = [];

    // Add day names at the top
    for (let i = 0; i < firstDayOfMonth; i++) {
      let prevMonthYear = currentDate.getFullYear();
      let prevMonth = currentDate.getMonth() - 1;

      if (prevMonth < 0) {
        prevMonth = 11;
        prevMonthYear--;
      }

      const prevMonthDate = new Date(
        prevMonthYear,
        prevMonth,
        daysInMonth(currentDate) - (firstDayOfMonth - i) + 1
      );
      days.push(
        <div
          key={`empty-next-${i}`}
          className={`flex flex-col  justify-center rounded-md items-center relative w-full h-full `}
        >
          <div className="flex flex-col justify-center items-center mx-3 my-4">
            <div
              className={`flex text-neutral-400  justify-center order-first items-center align-center lg:justify-end lg:items-end lg:align-end`}
            >
              {dayNames[prevMonthDate.getDay()]}
            </div>
            <div className="flex justify-center items-center text-neutral-400 order-last lg:order-first">
              {prevMonthDate.getDate()}
            </div>
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
        <button
          key={i}
          className={`flex flex-col ${
            (isTodayDate && selectedIndex === null) || selectedIndex === i
              ? ' bg-primary-500 text-white'
              : ''
          } justify-center rounded-md items-center px-5  pb-4 relative `}
          onClick={() => {
            handleEventClick(
              typeof eventsForDay[0] === 'undefined'
                ? setDataAllSelect(null)
                : eventsForDay[0],
              i
            );
            setSelectedIndex(i);
          }}
        >
          <div className="flex flex-col gap-1 my-4 justify-center items-center">
            <div
              className={`flex flex-col  ${
                (isTodayDate && selectedIndex === null) || selectedIndex === i
                  ? ' bg-primary-500 text-white'
                  : 'text-neutral-600'
              } justify-center order-first  items-center align-center lg:justify-end lg:items-end lg:align-end`}
            >
              {dayNames[currentDayDate.getDay()]}
            </div>
            <div
              className={` ${
                (isTodayDate && selectedIndex === null) || selectedIndex === i
                  ? ' bg-primary-500 text-white'
                  : 'text-dark'
              } flex justify-center  items-center text-dark order-last lg:order-first`}
            >
              <div className="text-md">{i}</div>
            </div>
          </div>
          {eventsForDay.length > 0 && (
            <button
              className={`${
                eventsForDay[0].type === 'QUIZ'
                  ? 'bg-[#2D9A41]'
                  : eventsForDay[0].type === 'MEETING'
                  ? 'bg-[#0B568D]'
                  : 'bg-[#D63649]'
              } p-[8px] bottom-4 lg:p-2 absolute  rounded-full`}
            ></button>
          )}
        </button>
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
          className={`flex flex-col  justify-center rounded-md items-center relative w-full h-full `}
        >
          <div className="flex flex-col justify-center items-center mx-3 my-4">
            <div
              className={`flex text-neutral-400  justify-center order-first items-center align-center lg:justify-end lg:items-end lg:align-end`}
            >
              {dayNames[nextMonthDate.getDay()]}
            </div>
            <div className="flex justify-center items-center text-neutral-400 order-last lg:order-first">
              {nextMonthDate.getDate()}
            </div>
          </div>
        </div>
      );
    }

    return days;
  };

  const renderInformationDate = () => {
    const currentMonth = currentDate.getMonth(); // Bulan saat ini

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

    const currentMonthName = monthNames[currentMonth];

    if (!selectedEvent)
      return (
        <div className="flex flex-col mt-5 md:justify-start md:items-start md:align-start lg:justify-start lg:items-start lg:align-start justify-center items-center">
          <span className="text-lg text-blue-base/70">
            {currentDate.getFullYear()}
          </span>
          <span className="text-4xl">{currentMonthName}</span>
        </div>
      );

    const startDayName = dayNames[new Date(selectedEvent.startAt).getDay()];
    const endDayName = dayNames[new Date(selectedEvent.endAt).getDay()];
    if (startDayName === endDayName) {
      return (
        <div className="flex flex-col mt-5 gap-3 justify-start items-start align-start">
          <span className="text-[25px] lg:text-[35px] ">
            {currentDate.getFullYear()}
          </span>
          <span className="text-[20px] lg:text-[27px]">{currentMonthName}</span>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col mt-5 gap-5 justify-start items-start align-start">
          <span className="text-[25px] lg:text-[35px] ">
            {currentDate.getFullYear()}
          </span>
          <span className="text-[25px] lg:text-[35px] ">
            {currentMonthName}
          </span>
        </div>
      );
    }
  };

  const RenderedCardEvent = () => {
    // Dapatkan tanggal hari ini dalam format yang sesuai dengan format tanggal event
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

    // Pastikan events dan dataAllSelect terinisialisasi dan memiliki data
    if (events && dataAllSelect) {
      eventsToRender =
        dataAllSelect.length > 0
          ? dataAllSelect
          : events.filter((event) => {
              // Ubah format tanggal event sesuai dengan format today
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
        <div className=" mt-4 flex justify-center items-center bg-primary-500/10 py-8 w-full rounded-lg">
          Tidak ada tugas dan acara minggu ini.
        </div>
      );
    }

    const dayNames = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ];

    const getCondisional = (event: any) => {
      const startDayName = dayNames[new Date(event.startAt).getDay()];
      const endDayName = dayNames[new Date(event.endAt).getDay()];

      return startDayName != endDayName;
    };
    return (
      <div className="flex flex-col gap-10 mt-4">
        {eventsToRender.map((event: any, i: any) => (
          <div
            key={i}
            className={` py-4 px-6  rounded-md flex justify-between items-center gap-2
              ${
                event.type === 'QUIZ'
                  ? 'border-l-8 border-[#2D9A41]'
                  : event.type === 'MEETING'
                  ? ' border-l-8 border-[#0B568D]'
                  : ' border-l-8 border-[#D63649]'
              }
            `}
          >
            <div className="flex flex-col gap-2 justify-start items-start align-start">
              {getCondisional(event) ? (
                <div className="flex gap-4">
                  <span className="text-[14px]">
                    {getDayName(new Date(event.startAt))} -{' '}
                    {getDayName(new Date(event.endAt))}{' '}
                  </span>
                  <span className="text-[14px]">
                    {getTimeString(new Date(event.startAt))} -{' '}
                    {getTimeString(new Date(event.endAt))}
                  </span>
                </div>
              ) : (
                <div className="flex gap-4">
                  <span className="text-[14px]">
                    {getDayName(new Date(event.startAt))},
                  </span>
                  <span className="text-[14px]">
                    {getTimeString(new Date(event.startAt))} -{' '}
                    {getTimeString(new Date(event.endAt))}
                  </span>
                </div>
              )}
              <h1 className="font-bold text-[14px]">{event.summary}</h1>
              <h1 className="text-[14px]">{event.type}</h1>
            </div>
            {/* <Link
              href={'/kalender-saya'}
              className="px-2 py-1 bg-gray-400 text-white rounded-md text-md"
            >
              Lihat
            </Link> */}
          </div>
        ))}
      </div>
    );
  };

  return (
    <section
      className={`w-full text-neutral-900 bg-white h-fit px-7 py-12 rounded-md`}
    >
      <header className="flex justify-between items-center">
        <h1 className="text-neutral-900 font-bold text-2xl">Jadwal-Ku</h1>
        {/* <Link
          passHref
          href={'/kalender-saya'}
          className="text-primary-500 text-sm font-bold hover:text-primary-400"
        >
          Lihat Detail
        </Link> */}
      </header>
      <div className="flex justify-center md:justify-start lg:justify-start items-start">
        {/* <div className="mb-4 font-bold text-blue-base"> */}
        <div className="mb-4 font-bold text-sky-base">
          {renderInformationDate()}
        </div>
      </div>
      <section className="flex justify-center items-center">
        <div className="mb-4 gap-2 w-full overflow-hidden overflow-x-scroll scrollbar-hide md:scrollbar-default flex">
          {renderMonthView()}
        </div>
      </section>
      {RenderedCardEvent()}
    </section>
  );
};
