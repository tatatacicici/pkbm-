'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { dummyContent } from '../../../constant';

const SideSectionDetail = ({ currentSlug }: { currentSlug: string }) => {
  const [filteredPustaka, setFilteredPustaka] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const truncateWords = (text: string, limit: number): string => {
    if (!text) return '';
    const words = text.split(' ');
    return words.length > limit ? words.slice(0, limit).join(' ') + '…' : text;
  };

  useEffect(() => {
    setIsLoading(true);

    const currentItem = dummyContent.find((item) => item.slug === currentSlug);
    if (!currentItem) return;

    const filteredItems = dummyContent
      .filter(
        (item) =>
          item.slug !== currentSlug && item.category === currentItem.category
      )
      .sort(() => 0.5 - Math.random())
      .slice(0, 4);

    setFilteredPustaka(filteredItems);
    setIsLoading(false);
  }, [currentSlug]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center gap-2">
        <h2 className="text-xs lg:text-lg max-md:text-lg font-medium">
          Katalog Lainnya
        </h2>
        <Link
          href={'/pustaka-library'}
          className="flex gap-1 max-md:gap-2 lg:gap-3 text-xs lg:text-lg max-md:text-lg items-center text-sky-base"
          target="_blank"
        >
          <p>Lihat Semua</p>
          <FaArrowRightLong />
        </Link>
      </div>
      <div className="my-3 flex flex-col gap-4">
        {filteredPustaka.length > 0 ? (
          filteredPustaka.map((item, i) => (
            <div key={i}>
              <Link
                href={`/pustaka-library/detail/${item.slug}`}
                target="_blank"
              >
                <div className="flex flex-col lg:flex-row w-full bg-white rounded-lg shadow-md">
                  <div className="lg:w-1/3 w-full">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      width={1000}
                      height={1000}
                      className="object-fit lg:h-full max-h-48 w-full rounded-t-lg lg:rounded-l-lg lg:rounded-r-none"
                    />
                  </div>
                  <div className="lg:w-2/3 w-full flex items-center">
                    <div className="w-full lg:p-5 max-md:p-5 p-3">
                      <div className="flex flex-col lg:gap-2 max-md:gap-2 gap-1 items-start">
                        <h3
                          className="text-xs lg:text-sm font-semibold"
                          title={item.title}
                        >
                          <span className="inline md:hidden">{item.title}</span>
                          <span className="hidden md:inline lg:hidden">
                            {truncateWords(item.title, 7)}
                          </span>
                          <span className="hidden lg:inline xl:hidden">
                            {truncateWords(item.title, 3)}
                          </span>
                          <span className="hidden xl:inline 2xl:hidden">
                            {truncateWords(item.title, 4)}
                          </span>
                          <span className="hidden 2xl:inline">
                            {truncateWords(item.title, 6)}
                          </span>
                        </h3>
                        <p
                          className="text-xs lg:text-sm text-gray-500"
                          title={item.author}
                        >
                          <span className="inline md:hidden">
                            {item.author}
                          </span>
                          <span className="hidden md:inline lg:hidden">
                            {truncateWords(item.author, 7)}
                          </span>
                          <span className="hidden lg:inline xl:hidden">
                            {truncateWords(item.author, 3)}
                          </span>
                          <span className="hidden xl:inline 2xl:hidden">
                            {truncateWords(item.author, 3)}
                          </span>
                          <span className="hidden 2xl:inline">
                            {truncateWords(item.author, 5)}
                          </span>
                        </p>
                        <div className="flex gap-3 items-center mt-2">
                          <p className="text-sm bg-blue-50 text-sky-base px-2 py-1 rounded">
                            {item.category}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">
            Tidak ada pustaka lain dalam kategori ini.
          </p>
        )}
      </div>
    </div>
  );
};

export default SideSectionDetail;
