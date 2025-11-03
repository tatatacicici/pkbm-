import React, { FC } from 'react';
import { TCalendarItems } from '../../types/calendar';

interface Component {
  data: TCalendarItems[];
  currentDate?: any;
  onClick?: (event: TCalendarItems | undefined) => void;
}

export const WeekView: FC<Component> = ({ data, currentDate, onClick }) => {
  const firstDayOfWeek = new Date(currentDate);
  firstDayOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
  const lastDayOfWeek = new Date(firstDayOfWeek);
  lastDayOfWeek.setDate(firstDayOfWeek.getDate() + 6);
  const dayNames = [
    'Minggu',
    'Senin',
    'Selasa',
    'Rabu',
    'Kamis',
    'Jumat',
    'Sabtu',
  ];
  function getSundayThisNearestMonday() {
    const sunday = new Date(currentDate);
    sunday.setDate(currentDate.getDate() + 6); // Adding 6 days to get the Sunday
    return sunday;
  }
  function getSundayAfterNearestMonday() {
    const sunday = new Date(currentDate);
    sunday.setDate(currentDate.getDate() + 13); // Adding 6 days to get the Sunday
    return sunday;
  }
  function getSundayBeforeNearestMonday() {
    const sunday = new Date(currentDate);
    sunday.setDate(currentDate.getDate() - 1); // Adding 6 days to get the Sunday
    return sunday;
  }
  const renderWeekDays = () => {
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate() + day);
      weekDays.push(date);
    }
    return weekDays;
  };
  return (
    <div className="w-full h-[300px] overflow-auto">
      <div className="w-full flex h-full  ">
        <div className="flex h-full">
          {renderWeekDays().map((date, index) => (
            <div
              key={index}
              style={{ height: '5000px' }}
              className={`flex flex-col text-[#BDBDBD] gap-5 flex justify-center items-center h-auto justify-center items-center w-[98px] ${
                index === 0
                  ? 'border-r-2 border-gray-300 '
                  : index === 6
                  ? ''
                  : 'border-r-2 border-gray-300 '
              }`}
            >
              <div className="flex justify-center items-start">
                {dayNames[date.getDay()]}
              </div>
              <div
                className={`flex justify-center items-start ${
                  date.getMonth() !== currentDate.getMonth()
                    ? 'text-[#BDBDBD]'
                    : 'text-black'
                }`}
              >
                {date.getDate()}
              </div>
              <div className="flex flex-col relative justify-center gap-5 items-start h-full w-full">
                {data &&
                  data.map((event: TCalendarItems, eventIndex: number) => {
                    const startDate: any = new Date(event.startAt);
                    const endDate: any = new Date(event.endAt);
                    const weekDays = renderWeekDays();
                    const weekIndex = weekDays.map((date) =>
                      date.toDateString()
                    );
                    const indexOfEndDate = weekIndex.findIndex(
                      (date) => endDate.toDateString() === date
                    );
                    let calculationsWidthStartDate;
                    let calculationsWidthEndDate;
                    let indexOfEnd;
                    let indexOfStart;
                    if (indexOfEndDate !== -1) {
                      calculationsWidthEndDate = (indexOfEndDate + 1) * 92;
                      indexOfEnd = indexOfEndDate;
                      console.log(indexOfEnd);
                    }
                    const indexOfStartDate = weekIndex.findIndex(
                      (date) => startDate.toDateString() === date
                    );
                    if (indexOfStartDate !== -1) {
                      calculationsWidthStartDate = (7 - indexOfStartDate) * 92;
                      indexOfStart = indexOfStartDate;
                    }
                    const maxAllowedWidth: any = calculationsWidthStartDate;
                    const calculateWidth = () => {
                      const diffInMilliseconds = endDate - startDate;
                      const diffInDays =
                        diffInMilliseconds / (1000 * 60 * 60 * 24);
                      let width = diffInDays * 110;
                      width = Math.min(width, maxAllowedWidth);
                      return width;
                    };
                    const width = calculateWidth();
                    const currentDayOfWeek = currentDate.getDay();
                    const mondayToday = new Date(currentDate);
                    mondayToday.setDate(
                      currentDate.getDate() - currentDayOfWeek + 6
                    );
                    const nextMonday = new Date(currentDate.get);
                    nextMonday.setDate(
                      currentDate.getDate() + (8 - currentDayOfWeek)
                    );
                    const lastMonday = new Date(currentDate);
                    lastMonday.setDate(
                      currentDate.getDate() - currentDayOfWeek - 6
                    );
                    if (
                      startDate.toDateString() === date.toDateString() &&
                      startDate.toDateString() === endDate.toDateString()
                    ) {
                      return (
                        <div
                          key={eventIndex}
                          className={`text-white absolute px-4 h-[80px] flex justify-center items-center `}
                          style={{
                            top: `${eventIndex * 70}px`,
                            zIndex: eventIndex + 1,
                          }}
                        >
                          <div
                            onClick={() => onClick && onClick(event)}
                            className={`w-full p-2  h-full rounded-md text-[13px] align-middle flex justify-center items-center  ${
                              event.type === 'QUIZ'
                                ? 'bg-[#2D9A41]'
                                : event.type === 'ASSIGNMENT'
                                ? 'bg-[#0B568D]'
                                : 'bg-[#D79210]'
                            }`}
                            style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
                          >
                            {event.summary.substring(0, 10)}...
                          </div>
                        </div>
                      );
                    } else if (
                      startDate >= getSundayBeforeNearestMonday() &&
                      startDate <= getSundayThisNearestMonday() &&
                      startDate.getDate() === date.getDate()
                    ) {
                      return (
                        <div
                          key={eventIndex}
                          className={`text-white  absolute px-4 h-[80px] flex justify-center items-center `}
                          style={{
                            top: `${eventIndex * 70}px`,
                            zIndex: eventIndex + 1,
                            width: `${width}px`,
                          }}
                        >
                          <div
                            onClick={() => onClick && onClick(event)}
                            className={`w-full p-2 h-full text-[13px] rounded-md align-middle flex justify-center items-center  ${
                              event.type === 'QUIZ'
                                ? 'bg-[#2D9A41]'
                                : event.type === 'ASSIGNMENT'
                                ? 'bg-[#0B568D]'
                                : 'bg-[#D79210]'
                            }`}
                            style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
                          >
                            {event.summary.substring(0, 10)}...
                          </div>
                        </div>
                      );
                    } else if (
                      getSundayAfterNearestMonday() >= startDate &&
                      getSundayBeforeNearestMonday() <= endDate &&
                      getSundayBeforeNearestMonday() >= startDate &&
                      getSundayAfterNearestMonday() >= endDate &&
                      getSundayThisNearestMonday() >= endDate &&
                      index === 0
                    ) {
                      return (
                        <div
                          key={eventIndex}
                          className={`text-white absolute px-4 h-[80px] flex justify-center items-center `}
                          style={{
                            top: `${eventIndex * 70}px`,
                            zIndex: eventIndex + 1,
                            width: `${calculationsWidthEndDate}px`,
                          }}
                        >
                          <div
                            onClick={() => onClick && onClick(event)}
                            className={`w-full p-2 h-full text-[13px] rounded-md align-middle flex justify-center items-center  ${
                              event.type === 'QUIZ'
                                ? 'bg-[#2D9A41]'
                                : event.type === 'ASSIGNMENT'
                                ? 'bg-[#0B568D]'
                                : 'bg-[#D79210]'
                            }`}
                            style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
                          >
                            {event.summary.substring(0, 10)}...
                          </div>
                        </div>
                      );
                    } else if (
                      getSundayBeforeNearestMonday() >= startDate &&
                      getSundayBeforeNearestMonday() <= endDate &&
                      getSundayThisNearestMonday() >= startDate &&
                      index === 0
                    ) {
                      return (
                        <div
                          onClick={() => onClick && onClick(event)}
                          key={eventIndex}
                          className={`text-white absolute px-4 h-[80px] flex justify-center items-center `}
                          style={{
                            top: `${eventIndex * 70}px`,
                            zIndex: eventIndex + 1,
                            width: `${calculationsWidthEndDate}px`,
                          }}
                        >
                          <div
                            className={`w-full p-2 text-[13px] h-full rounded-md align-middle flex justify-center items-center  ${
                              event.type === 'QUIZ'
                                ? 'bg-[#2D9A41]'
                                : event.type === 'ASSIGNMENT'
                                ? 'bg-[#0B568D]'
                                : 'bg-[#D79210]'
                            }`}
                            style={{ boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)' }}
                          >
                            {event.summary.substring(0, 10)}...
                          </div>
                        </div>
                      );
                    }
                    return null;
                  })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
