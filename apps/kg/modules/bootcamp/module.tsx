'use client';

import { Button, LoadingSpinner } from '@kampus-gratis/components/atoms';
import { TSubject } from 'apps/kg/types/rencana-studi';
import Link from 'next/link';
import { useState } from 'react';
import {
  useGetBootcampSubject,
  useGetBootcampTopic,
} from '../../hooks/bootcamp/hook';
import { TBootcampSubjectItem, TBootcampTopicItem } from '../../types/bootcamp';
import CardBootcamp from './bootcamp-card';

export default function BootcampModule() {
  const { data, isLoading } = useGetBootcampSubject();
  const { data: topicData, isLoading: topicIsLoading } = useGetBootcampTopic();
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  if (isLoading || topicIsLoading) {
    return <LoadingSpinner />;
  }

  const filteredData = selectedTopic
    ? data?.data?.subjects.filter(
        (subject: TBootcampSubjectItem) => subject.topic_slug === selectedTopic
      )
    : data?.data?.subjects;

  const generatedButtonColor = (topic?: string) => {
    switch (topic) {
      case 'AI & Data Science':
        return 'bg-[#4caf50] text-[#fff]';
      case 'Soft Skill':
        return 'bg-[#ff9800] text-[#fff]';
      case 'Teknologi Informasi':
        return 'bg-[#ff9800] text-[#fff]';
      case 'Design':
        return 'bg-[#e91e63] text-[#fff]';
      case 'Bisnis':
        return 'bg-[#9c27b0] text-[#fff]';
      case 'Leadership':
        return 'bg-[#9c27b0] text-[#fff]';
      default:
        return 'bg-[#607d8b] text-[#fff]';
    }
  };

  return (
    <section className="py-1 bg-[#FAFAFA] px-6 md:px-14 lg:px-16">
      <main className="max-w-[1440px] mx-auto py-4 bg-white rounded-lg px-2 md:px-6 mb-10 pb-10">
        <div className="my-10">
          {/* <h1 className="text-5xl font-bold text-blue-base text-center"> */}
          <h1 className="text-5xl font-bold text-sky-base text-center">
            Program Pelatihan Berbasis Kompetensi
          </h1>
          <div className="w-full md:w-2/3 my-6 text-center mx-auto">
            <h2 className="font-bold text-2xl text-black">
              Selamat datang di Paket-C Gratis!
            </h2>
            <p className="text-lg text-gray-500 mt-1">
              Mempersembahkan pelatihan unggulan kami yang dirancang khusus
              untuk membantu mengembangkan kemampuan dan pengetahuan Anda, dalam
              berbagai bidang. Program kami ini menawarkan pelatihan intensif
              dengan para mentor yang ahli dan berpengalaman dalam beragam
              industri, Mempersiapkan diri Anda untuk sukses di dunia kerja yang
              kompetitif.
            </p>
          </div>
          <div className="flex items-center flex-col md:flex-row md:w-1/2 gap-2 mx-auto justify-center">
            <Link
              href="https://wa.me/6285183004001?text=Haloooo%20Kampus%20Gratis%2C%20Saya%20Ingin%20Bertanya%20Mengenai%20Bootcamp!"
              target="_blank"
            >
              {/* <Button
                className="w-full text-[#7f5539] bg-[#ddb892] rounded-lg font-semibold px-6 py-2.5"
                type="button"
              > */}
              <Button
                className="w-full border-2 border-sky-base text-sky-base rounded-lg font-semibold px-6 py-2.5 hover:bg-sky-base hover:text-white transition-all"
                type="button"
              >
                Informasi Lanjut
              </Button>
            </Link>
            <Link href="#bootcamp">
              {/* <Button
                className="w-full bg-blue-base text-white rounded-lg font-semibold px-6 py-2.5"
                type="button"
              > */}
              <Button
                className="w-full bg-sky-base text-white rounded-lg font-semibold px-6 py-2.5 hover:bg-sky-base/80 transition-all"
                type="button"
              >
                Daftar Sekarang
              </Button>
            </Link>
          </div>
        </div>
        <div className="space-y-8" id="bootcamp">
          <div className="">
            {/* <h2 className="text-3xl font-bold text-blue-base text-center mt-16"> */}
            <h2 className="text-3xl font-bold text-sky-base text-center mt-16">
              Daftar Pelatihan Berbasis Kompetensi
            </h2>
            <p className="text-lg text-gray-500 text-center mt-2">
              Temukan pelatihan yang sesuai dengan minat dan kebutuhan Anda.
            </p>
          </div>
          {/* {topicData.data.topics ? (
            <div className="flex flex-wrap gap-2 justify-center">
              <Button
                className={`rounded-xl font-semibold px-6 py-2.5 cursor-pointer transition bg-[#1b4332] text-[#fff]
               `}
                type="button"
                onClick={() => setSelectedTopic('')}
              >
                Semua Topik
              </Button>
              {topicData.data.topics
                .filter(
                  (topic: TBootcampTopicItem) => topic.total_bootcamps > 0
                )
                .map((topic: TBootcampTopicItem, index: number) => (
                  <Button
                    className={`rounded-xl font-semibold px-6 py-2.5 cursor-pointer transition 
                      ${generatedButtonColor(topic.name)}
                      `}
                    type="button"
                    key={index}
                    onClick={() => setSelectedTopic(topic.slug)}
                  >
                    {topic.name}
                  </Button>
                ))}
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-[300px]">
              <p className="text-neutral-500 font-medium text-[14px]">
                Tidak Ada Topik
              </p>
            </div>
          )} */}
          {filteredData.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-12">
              {filteredData.map((subject: TSubject, index: number) => (
                <CardBootcamp key={index} {...subject} />
              ))}
            </div>
          ) : (
            <div className="flex justify-center items-center w-full h-[300px]">
              <p className="font-medium">Tidak Ada Bootcamp</p>
            </div>
          )}
        </div>
      </main>
    </section>
  );
}
