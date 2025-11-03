'use client';

import { FC, Fragment, ReactElement, useEffect } from 'react';
import { useRecoilValue } from 'recoil';

import { redirect, useParams, useRouter } from 'next/navigation';

import { YoutubeSection } from '../youtube/youtube';
import { Description } from '../description/description';
import {
  useDetailVideoData,
  useGetVideoPanduanDetail,
} from '../../../../hooks/video-panduan/hooks';
import { LoadingSpinner } from '@kampus-gratis/components/atoms';
import { ListVideo } from '../list-video/listVideo';
import { videoIdState } from '../../../../recoil/atoms/video-panduan';

export const ContentSection: FC = (): ReactElement => {
  // const videoIds = useRecoilValue(videoIdState);

  // if (videoIds.length === 0) {
  //   redirect("/panduan/video-panduan");
  // }

  const params = useParams();

  const idAvailable = params.videoId;

  const { setDetailVideoData, getDetailVideoData } = useDetailVideoData();
  const {
    data: videoDetailData,
    refetch: refetchDetailVideo,
    isLoading: isLoadingDetailVideo,
  } = useGetVideoPanduanDetail(idAvailable as string);

  useEffect(() => {
    setDetailVideoData(videoDetailData as any);
  }, [videoDetailData, setDetailVideoData]);

  if (isLoadingDetailVideo) {
    return <LoadingSpinner />;
  }
  // const getOption = useRecoilValue(filterOption(idAvailable as unknown as string));
  const data = getDetailVideoData?.data;

  let videoId;

  if (data?.url.includes('=')) {
    videoId = data?.url.split('=').pop();
  } else if (data?.url.includes('/')) {
    videoId = data?.url.split('/').pop();
  }

  // const parts = data?.url.split('=');
  // const videoId = parts?.pop();

  return (
    <Fragment>
      <div
        key={data?.id}
        className="lg:flex gap-[68px] xl:flex-nowrap lg:flex-wrap lg:px-[70px] p-5 max-w-[1440px] mx-auto 2xl:px-0 mb-8"
      >
        <div className="w-full">
          <YoutubeSection videoId={videoId as string} />

          <Description
            titleVideo={data?.title as string}
            descVideo={data?.description as string}
          />
        </div>
        <div className="w-full h-full">
          <ListVideo />
        </div>
      </div>
    </Fragment>
  );
};
