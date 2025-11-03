'use client';
import React, { Fragment } from 'react';
import Breadcrumb from '../../../components/breadcrumb/Breadcrumb';
import Dropdown from '../../../components/dropdown/Dropdown';
import { IconFilter } from '../../../components/icons/ic-filter';
import { IconMedalFirst } from '../../../components/icons/ic-medal-1';
import { IconMedalSecond } from '../../../components/icons/ic-medal-2';
import { IconMedalThird } from '../../../components/icons/ic-medal-3';
import Table from '../../../components/table/Table';
import Image from 'next/image';
import { useGetLeaderboard } from '../../../hooks/dashboard/leaderboard/hook';
import Avatar from 'react-avatar';
import { TLeaderboardItem } from '../../../types/leaderboard';

const PapanSkorDashboard = () => {
  const { data: leaderboard } = useGetLeaderboard();
  const leaderboardData = leaderboard?.data;
  const papanSkorPageBC = [
    {
      name: 'Dashboard',
      link: '/dashboard',
    },
    {
      name: 'Papan Skor',
      link: '/dashboard/papan-skor',
    },
  ];

  const options = ['Global', 'Fakultas', 'Prodi', 'Semester'];

  return (
    <div>
      <div className="flex justify-start">
        <Breadcrumb items={papanSkorPageBC} />
      </div>
      <div className="flex justify-end">
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
      <div className="mt-5">
        <div className="max-h-[28rem] overflow-y-scroll no-scrollbar">
          <Table>
            {leaderboardData &&
              leaderboardData?.map((item: TLeaderboardItem, index: number) => (
                <tr key={index} className="bg-white">
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
                            {item?.author?.poin} Poin
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
              ))}
          </Table>
        </div>
      </div>
    </div>
  );
};

export default PapanSkorDashboard;
