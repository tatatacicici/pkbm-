import { useGetLeaderboard } from '../../../hooks/dashboard/leaderboard/hook';
import { Card } from '../../../components/card/Card';
import { RequestChart } from '../../../components/chart-user/ChartUser';
import Dropdown from '../../../components/dropdown/Dropdown';
import { IconBoard } from '../../../components/icons/ic-board';
import { IconBuilding } from '../../../components/icons/ic-building';
import { IconFilter } from '../../../components/icons/ic-filter';
import { IconMedalFirst } from '../../../components/icons/ic-medal-1';
import { IconMedalSecond } from '../../../components/icons/ic-medal-2';
import { IconMedalThird } from '../../../components/icons/ic-medal-3';
import { IconMultiUser } from '../../../components/icons/ic-multiuser';
import { IconUser } from '../../../components/icons/ic-user';
import Matakuliah from '../../../components/mk/Matakuliah';
import Table from '../../../components/table/Table';
import Image from 'next/image';
import Link from 'next/link';
import React, { Fragment } from 'react';
import Avatar from 'react-avatar';
import { TEventItem, TLeaderboardItem } from '../../../types/leaderboard';
import { useGetSubject } from '../../../hooks/rencana-studi/hook';
import { TSubjectItem } from '../../../types/rencatastudi';
import { JadwalMk } from '../../../components/jadwal-mk/JadwalMk';
import { useGetEvent } from '../../../hooks/dashboard/acara-kampus/hook';

const MainDashboard = () => {
  const { data: leaderboard } = useGetLeaderboard();
  const { data: subject } = useGetSubject();
  const { data: event } = useGetEvent();

  const leaderboardData = leaderboard?.data;
  const subjectData = subject?.data;
  const eventData = event?.data.events;

  const options = ['Global', 'Fakultas', 'Prodi', 'Semester'];

  const cardItems = [
    {
      amount: 2500,
      title: 'Pendaftar',
      icon: <IconUser />,
    },
    {
      amount: 1000,
      title: 'Mahasiswa',
      icon: <IconMultiUser />,
    },
    {
      amount: 50,
      title: 'Matakuliah',
      icon: <IconBoard />,
    },
    {
      amount: 3,
      title: 'Fakultas',
      icon: <IconBuilding />,
    },
  ];

  return (
    <div>
      <div className="flex justify-between gap-7">
        {cardItems.map((card, i) => (
          <Card
            amount={card.amount}
            title={card.title}
            logo={card.icon}
            key={i}
          />
        ))}
      </div>

      <div className="flex justify-end my-6 font-bold">
        <Link href="/dashboard/analitik">
          <p className="text-sm text-blue-base">Lihat Semua</p>
        </Link>
      </div>

      <div className="w-full border border-neutral-300"></div>

      <div className="grid grid-cols-2 gap-y-20 gap-x-7 mt-7 mb-20">
        <div className="h-full w-full">
          <h1 className="font-bold text-lg mb-3">Grafik Pengguna</h1>
          <div className="flex w-full justify-center items-center bg-white h-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <RequestChart />
          </div>
        </div>

        <div className="h-full w-full">
          <div className="flex justify-between">
            <h1 className="font-bold text-lg mb-3">Papan Skor</h1>
            <Dropdown
              dataOptions={options}
              placeholder="Filter"
              icons={<IconFilter />}
              reverse={true}
              textCentre={false}
              shadow={true}
              bold={true}
              onChange={() => ''}
            />
          </div>
          <div className="relative bg-white h-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="p-5">
              <div className="max-h-96 overflow-y-scroll no-scrollbar">
                <Table>
                  {leaderboardData &&
                    leaderboardData?.map(
                      (item: TLeaderboardItem, index: number) => (
                        <tr key={index}>
                          <td>
                            <div className="w-full px-2 flex justify-between items-center">
                              <div className="flex items-center gap-4">
                                {item?.author?.avatar === null ? (
                                  <Fragment>
                                    <Avatar
                                      name={item?.author?.full_name}
                                      color="#F26800"
                                      className="rounded-full object-cover w-full m-0 p-0"
                                      size="40"
                                    />
                                  </Fragment>
                                ) : (
                                  <Fragment>
                                    <Image
                                      src={item?.author?.avatar}
                                      width={30}
                                      height={30}
                                      alt={'avatar'}
                                      className="rounded-full w-10 h-10 object-cover"
                                    />
                                  </Fragment>
                                )}
                                <div className="flex flex-col items-start">
                                  <p className="text-sm font-bold">
                                    {item?.author?.full_name}
                                  </p>
                                  <p className="text-sm text-blue-base">
                                    {item?.author.poin} Poin
                                  </p>
                                </div>
                              </div>
                              {index + 1 === 1 ? (
                                <IconMedalFirst />
                              ) : index + 1 === 2 ? (
                                <IconMedalSecond />
                              ) : index + 1 === 3 ? (
                                <IconMedalThird />
                              ) : (
                                <p className="pr-3">{index + 1}</p>
                              )}
                            </div>
                          </td>
                        </tr>
                      )
                    )}
                </Table>
              </div>
            </div>

            <div className="absolute bottom-0 right-0 pb-5 pr-8 font-bold">
              <Link href="/dashboard/papan-skor">
                <p className="text-sm text-blue-base">Lihat Semua</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full w-full">
          <h1 className="font-bold text-lg mb-3">Jadwal Acara Kampus</h1>
          <div className="relative bg-white h-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="grid grid-cols-1 p-5 gap-5">
              {eventData &&
                eventData?.map((event: TEventItem, i: number) => {
                  const Day = new Date(event.date_start.slice(0, 10));
                  const newDay = new Intl.DateTimeFormat('id', {
                    dateStyle: 'full',
                  }).format(Day);
                  return (
                    <Fragment key={i}>
                      <JadwalMk
                        image={event.thumbnail}
                        title={event.name}
                        dateEven={newDay}
                        time={event.date_end.slice(11, 16)}
                        position="hor"
                      />
                    </Fragment>
                  );
                })}
            </div>

            <div className="absolute bottom-0 right-0 pb-5 pr-8 font-bold">
              <Link href="/dashboard/jadwal-acara-kampus">
                <p className="text-sm text-blue-base">Lihat Semua</p>
              </Link>
            </div>
          </div>
        </div>

        <div className="h-full w-full">
          <h1 className="font-bold text-lg mb-3">Mata Kuliah</h1>
          <div className="relative bg-white h-full rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
            <div className="flex justify-between p-5 gap-10">
              {subjectData &&
                subjectData
                  ?.slice(0, 1)
                  .map((mk: TSubjectItem, index: number) => (
                    <Matakuliah
                      key={index}
                      image={mk.thumbnail as File}
                      total_student={mk.credit}
                      title={mk.name}
                      desc={mk.description}
                    />
                  ))}
            </div>

            <div className="absolute bottom-0 right-0 pb-5 pr-8 font-bold">
              <Link href="/dashboard/matakuliah">
                <p className="text-sm text-blue-base">Lihat Semua</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDashboard;
