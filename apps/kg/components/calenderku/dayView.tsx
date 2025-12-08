import React, { FC } from 'react';
import { TCalendarItems } from '../../types/calendar';

interface Component {
  data: TCalendarItems[];
  currentDate?: any;
  onClick?: (event: TCalendarItems | undefined) => void;
}

export const DayView: FC<Component> = ({ data, currentDate, onClick }) => {
  const currentDateObj = new Date(currentDate); // Gunakan currentDate jika tersedia, jika tidak, gunakan tanggal saat ini

  const timeSlots = [];
  for (let hour = 0; hour < 24; hour++) {
    const time = `${hour.toString().padStart(2, '0')}:00`;
    timeSlots.push(time);
  }

  return (
    <div className="flex w-full overflow-auto h-[300px]">
      <div className="w-full flex">
        <div className="flex ">
          {timeSlots.map((time, index) => (
            <div
              style={{ height: '3000px' }}
              key={index}
              className={`${
                index === 0
                  ? 'border-r-2 border-gray-300 '
                  : index === 23
                  ? ''
                  : 'border-r-2 border-gray-300 '
              }
             pb-5
              flex flex-col gap-5 justify-center items-center w-[80px]`}
            >
              <div>{time}</div>
              <div className="flex flex-col relative justify-center gap-5 items-start h-full w-full">
                {data &&
                  data.map((event: any, eventIndex) => {
                    const startDate = new Date(event.startAt); // Convert startAt to Date object
                    const endDate = new Date(event.endAt); // Convert endAt to Date object
                    const startDay = startDate.getDate();
                    const endDay = endDate.getDate();
                    const startHour = startDate.getHours();
                    const parseEndHour: any = parseFloat(
                      `${endDate.getHours()}.${endDate.getMinutes()}`
                    ).toFixed(2);
                    const calculationsWidthStart = (24 - (index + 1)) * 90;
                    const calculationsWidthRange = 24 * 80;
                    const date = new Date(currentDate);

                    const year = date.getFullYear();
                    const month = date.getMonth();
                    console.log(startDate.getFullYear() === year);
                    if (
                      startDay === currentDateObj.getDate() &&
                      startDate.getFullYear() === year &&
                      startDate.getMonth() === month &&
                      index === startHour
                    ) {
                      return (
                        <div
                          key={eventIndex}
                          className={`text-white absolute px-4 h-[40px] flex justify-center items-center `}
                          style={{
                            top: `${eventIndex === 0 ? 0 : 30 * eventIndex}px`,
                            width: `${calculationsWidthStart}px`,
                            zIndex: eventIndex + 1,
                          }}
                        >
                          <div
                            onClick={() => onClick && onClick(event)}
                            style={{
                              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                            }}
                            className={`w-full shadow-2xl  h-full rounded-md  flex justify-center items-center ${
                              event.type === 'QUIZ'
                                ? 'bg-[#2D9A41]'
                                : event.type === 'ASSIGNMENT'
                                ? 'bg-[#0B568D]'
                                : 'bg-[#D79210]'
                            }`}
                          >
                            {event.summary}
                          </div>
                        </div>
                      );
                    } else if (
                      endDay === currentDateObj.getDate() &&
                      endDate.getFullYear() === year &&
                      endDate.getMonth() === month &&
                      index === 0
                    ) {
                      const calculationsWidthEnd = parseEndHour * 95;

                      return (
                        <div
                          key={eventIndex}
                          className={`text-white absolute px-4 h-[40px] flex justify-center items-center `}
                          style={{
                            top: `${eventIndex === 0 ? 0 : 30 * eventIndex}px`,
                            width: `${calculationsWidthEnd}px`,
                            zIndex: eventIndex + 1,
                          }}
                        >
                          <div
                            onClick={() => onClick && onClick(event)}
                            style={{
                              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                            }}
                            className={`w-full shadow-2xl h-full rounded-md  flex justify-center items-center ${
                              event.type === 'QUIZ'
                                ? 'bg-[#2D9A41]'
                                : event.type === 'ASSIGNMENT'
                                ? 'bg-[#0B568D]'
                                : 'bg-[#D79210]'
                            }`}
                          >
                            {event.summary}
                          </div>
                        </div>
                      );
                    } else if (
                      startDay < currentDateObj.getDate() &&
                      endDay > currentDateObj.getDate() &&
                      startDate.getFullYear() === year &&
                      endDate.getFullYear() === year &&
                      index === 0
                    ) {
                      return (
                        <div
                          key={eventIndex}
                          className={`text-white absolute px-4 h-[40px] flex justify-center items-center `}
                          style={{
                            top: `${eventIndex === 0 ? 0 : 30 * eventIndex}px`,
                            width: `${calculationsWidthRange}px`,
                            zIndex: eventIndex + 1,
                          }}
                        >
                          <div
                            onClick={() => onClick && onClick(event)}
                            style={{
                              boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
                            }}
                            className={`w-full  h-full shadow-2xl rounded-md  flex justify-center items-center ${
                              event.type === 'QUIZ'
                                ? 'bg-[#2D9A41]'
                                : event.type === 'ASSIGNMENT'
                                ? 'bg-[#0B568D]'
                                : 'bg-[#D79210]'
                            }`}
                          >
                            {event.summary}
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
