import { ReactElement, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { Card } from '@kampus-gratis/components/molecules';
import {
  useGetVideoPanduan,
  useVideoData,
} from '../../../../hooks/video-panduan/hooks';
// import { filterPanduanVideo } from "apps/kg/recoil/selectors/video-panduan";
import { useRecoilState, useRecoilValue } from 'recoil';
import { url } from 'inspector';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { filterPanduanVideo } from '../../../../recoil/selectors/video-panduan';
import { videoIdState } from '../../../../recoil/atoms/video-panduan';

export const ContentSection = (): ReactElement => {
  const { setVideoData, getVideoData } = useVideoData();
  const [videoIds, setVideoIds] = useRecoilState<string[]>(videoIdState);
  const {
    data: videoData,
    refetch: refetchVideo,
    isLoading: isLoadingVideo,
  } = useGetVideoPanduan();

  const videoDataFilter = useRecoilValue(filterPanduanVideo); // Use

  useEffect(() => {
    setVideoData(videoData as any);
  }, [videoData, setVideoData]);

  if (isLoadingVideo) {
    return <LoadingSpinner />;
  }

  return (
    <div className="w-full px-6 md:px-8 lg:px-16 max-w-[1440px] mx-auto 2xl:px-0">
      <div className="md:mt-[24px] mt-0 mb-[54px] justify-between grid lg:grid-cols-3 md:grid-cols-2 lg:gap-x-8 md:gap-x-8 md:gap-y-5 gap-y-5">
        {videoDataFilter?.map((item, i) => {
          let videoId;

          if (item.url.includes('=')) {
            videoId = item.url.split('=').pop();
          } else if (item.url.includes('/')) {
            videoId = item.url.split('/').pop();
          }

          // setVideoId(item.id);

          return (
            <Link href={`/panduan/video-panduan/${item.id}`} key={i}>
              <Card
                className="relative w-full  max-h-full min-h-full dark:bg-[#232529] shadow-[#969696]/10 rounded-lg px-3 shadow-lg"
                src={`https://i.ytimg.com/vi/${videoId}/hq720.jpg`}
                imgwidth={380}
                imgheight={170}
                imgStyle="w-full rounded-[8px]"
                hasImage={true}
                titleStyle={'text-xl font-bold mt-2'}
                title={item.title}
                icon={
                  <div className="absolute bottom-[60%] left-[45%]">
                    <Image
                      src="/images/panduan/play-button.svg"
                      width={30}
                      height={30}
                      alt="play button"
                    />
                  </div>
                }
                onClick={() => setVideoIds([...videoIds, item.id])}
              >
                <p className="w-full text-sm font-base mt-2 dark:text-white text-black">
                  {item.description?.substring(0, 80)} ...
                </p>
              </Card>
            </Link>
          );
        })}
      </div>
    </div>
  );
};
