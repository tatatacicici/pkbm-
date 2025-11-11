import React, { ReactElement, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  useGetVideoPanduan,
  useVideoData,
} from '../../../../hooks/video-panduan/hooks';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';

export const ListVideo = (): ReactElement => {
  const { setVideoData, getVideoData } = useVideoData();
  const {
    data: videoData,
    refetch: refetchVideo,
    isLoading: isLoadingVideo,
  } = useGetVideoPanduan();

  useEffect(() => {
    setVideoData(videoData as any);
  }, [videoData, setVideoData]);

  if (isLoadingVideo) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full">
      <div className="title mb-[2px]">
        <h1 className="text-black font-[700] text-[20px]">
          Video panduan lainnya
        </h1>
      </div>
      {getVideoData &&
        getVideoData?.data
          ?.slice(0, 4)
          .map((item, index) => {
            const parts = item?.url?.split('=');
            const videoId = parts.pop();
            return (
              <Link
                key={index}
                href={`/panduan/video-panduan/${item?.id as string}`}
              >
                <div
                  key={index}
                  className="w-full bg-white h-[120px] rounded-[8px] shadow-sm mt-[12px] mb-4"
                >
                  <div className="flex px-[10px] py-[10px] gap-[16px]">
                    <Image
                      className={'rounded-[8px]'}
                      src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`}
                      width={187}
                      height={100}
                      alt={'thumbnail'}
                    />
                    <div>
                      <h1 className="text-[14px] font-[700] text-black">
                        {item?.title}
                      </h1>
                      <p className="text-[12px] font-[400] text-black mt-[4px]">
                        {item.description?.substring(0, 30)} ...
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })
          .slice(0, 5)}
    </div>
  );
};
