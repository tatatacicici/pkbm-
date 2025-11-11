import { TSubject } from '../../../types/rencana-studi';

import {
  useGetBootcampSubject,
  useGetBootcampTopic,
} from '@kampus-gratis/apps/kg/hooks/bootcamp/hook';
import {
  TBootcampSubjectItem,
  TBootcampTopicItem,
} from '@kampus-gratis/apps/kg/types/bootcamp';
import { Button } from '@kampus-gratis/components/atoms';
import { useState } from 'react';
import CardBootcamp from '../../bootcamp/bootcamp-card';

export default function BootcampSection() {
  const { data, isLoading } = useGetBootcampSubject();
  const { data: topicData, isLoading: topicIsLoading } = useGetBootcampTopic();
  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const filteredData = selectedTopic
    ? data?.data?.subjects.filter(
        (subject: TBootcampSubjectItem) => subject.topic_slug === selectedTopic
      )
    : data?.data?.subjects;

  if (isLoading || topicIsLoading) return;

  return (
    <section className="w-full px-12 2xl:px-0 max-w-[1440px] mx-auto">
      <div className="space-y-8" id="bootcamp">
        <div className="">
          {/* <h2 className="text-3xl font-bold text-blue-base text-center mt-16"> */}
          <h2 className="text-3xl font-bold text-black text-center mt-16">
            Daftar Pelatihan Berbasis Kompetensi
          </h2>
          <p className="text-lg text-gray-500 font-medium text-center mt-2">
            Temukan pelatihan yang sesuai dengan minat dan kebutuhan Anda.
          </p>
        </div>
        {/* {topicData.data.topics ? (
          <div className="flex flex-wrap gap-2 justify-center">
            <Button
              className={`rounded-xl font-semibold px-6 py-2.5 cursor-pointer transition ${
                selectedTopic === ''
                  ? 'bg-[#1b4332] text-[#74c69d]'
                  : 'bg-[#74c69d] text-[#1b4332] hover:bg-[#74c69d]/70'
              }`}
              type="button"
              onClick={() => setSelectedTopic('')}
            >
              Semua Topik
            </Button>
            {topicData.data.topics.map(
              (topic: TBootcampTopicItem, index: number) => (
                <Button
                  className={`rounded-xl font-semibold px-6 py-2.5 cursor-pointer transition ${
                    topic.slug === selectedTopic
                      ? 'bg-[#1b4332] text-[#74c69d]'
                      : 'bg-[#74c69d] text-[#1b4332] hover:bg-[#74c69d]/70'
                  }`}
                  type="button"
                  key={index}
                  onClick={() => setSelectedTopic(topic.slug)}
                >
                  {topic.name}
                </Button>
              )
            )}
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
    </section>
  );
}
