import React, { useState, useEffect } from 'react';
import moduleFour from '../assets/module-four.svg';
import Image from 'next/image';
import { RxSlider } from 'react-icons/rx';
import {
  useGetLeaderboard,
  useFilteredData,
} from '../../../hooks/leaderboard/hook';
import { useProfile } from '../../../hooks/profile/hook';

export const Filter: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('global');
  const { getFilteredData, setFilteredData } = useFilteredData();
  const [open, setOpen] = useState(false);
  const { data: dataProfile } = useProfile();
  const myId = dataProfile?.data?.user?.id;

  const { data: dataLeaderboard } = useGetLeaderboard();
  const getRank = dataLeaderboard;

  useEffect(() => {
    // Ensure dataLeaderboard is available before using it
    if (getRank) {
      // Find the matching rank for the current user
      const matchingRank = getRank?.data.find(
        (rank: any) => rank.student_id === myId
      );

      // Filter the data based on the active filter
      const filteredRank = getRank?.data.filter((rank: any) => {
        if (activeFilter === 'global') {
          return true; // Show all data when 'global' filter is active
        } else if (activeFilter === 'faculty' && matchingRank) {
          return rank.faculty === matchingRank.faculty;
        } else if (activeFilter === 'major' && matchingRank) {
          return rank.major === matchingRank.major;
        } else if (activeFilter === 'semester' && matchingRank) {
          return rank.semester === matchingRank.semester;
        }
        return true; // Default to showing all data
      });
      if (!Array.isArray(filteredRank)) {
        // Jika belum dalam bentuk array, ubah menjadi array
        setFilteredData({
          code: 200,
          status: 'success',
          message: 'Data filtered successfully',
          data: [filteredRank],
        });
      } else {
        // Jika sudah dalam bentuk array, langsung set sebagai filteredData
        setFilteredData({
          code: 200,
          status: 'success',
          message: 'Data filtered successfully',
          data: filteredRank,
        });
      }
    }
  }, [activeFilter, myId, getRank]);

  return (
    <button
      className="md:w-[109px] md:h-[40px] w-20 h-8 rounded-[8px] text-center border-[3px] border-[#106FA4] relative"
      onClick={() => setOpen(!open)}
    >
      <div className="my-auto flex justify-center md:gap-[10px] gap-[4px] items-center">
        <RxSlider color="#106FA4" size={20} />
        <p className="text-[#106FA4] md:text-[14px] text-[10px] dark:text-white">
          Filter
        </p>
      </div>
      {open && (
        <div className="flex justify-end container mt-[10px] z-[9000] absolute w-[150px] -bottom-40 ease-in-out">
          <div className="w-[160px] h-[154px] rounded-[8px] text-center overflow-hidden shadow-2xl">
            <button
              className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white"
              onClick={() => {
                setActiveFilter('global');
              }}
            >
              <div
                className={`h-full w-[5px] ${
                  activeFilter === 'global' ? 'bg-blue-100' : 'bg-white'
                } absolute left-0 overflow-hidden hover:hover:bg-neutral-100`}
              ></div>
              <p className="text-[#262626] md:text-[14px] text-[10px] my-auto ml-3">
                Global
              </p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white"
              onClick={() => {
                setActiveFilter('faculty');
              }}
            >
              <div
                className={`h-full w-[5px] ${
                  activeFilter === 'faculty' ? 'bg-blue-100' : 'bg-white'
                } absolute left-0 overflow-hidden hover:hover:bg-neutral-100`}
              ></div>
              <p className="text-[#262626] md:text-[14px] text-[10px] my-auto ml-3">
                Fakultas
              </p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white"
              onClick={() => {
                setActiveFilter('major');
              }}
            >
              <div
                className={`h-full w-[5px] ${
                  activeFilter === 'major' ? 'bg-blue-100' : 'bg-white'
                } absolute left-0 overflow-hidden`}
              ></div>
              <p className="text-[#262626] md:text-[14px] text-[10px] my-auto ml-3">
                Prodi
              </p>
            </button>
            <button
              className="flex justify-start h-[38px] relative hover:bg-neutral-100 w-full bg-white"
              onClick={() => {
                setActiveFilter('semester');
              }}
            >
              <div
                className={`h-full w-[5px] ${
                  activeFilter === 'semester' ? 'bg-blue-100' : 'bg-white'
                } absolute left-0 overflow-hidden`}
              ></div>
              <p className="text-[#262626] md:text-[14px] text-[10px] my-auto ml-3">
                Semester
              </p>
            </button>
          </div>
        </div>
      )}
    </button>
  );
};
