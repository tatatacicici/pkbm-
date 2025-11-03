"use client"

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { videoGuideState } from "../../recoil/atoms/video-panduan";
import { TuseDetailVideoPanduan, TuseVideoPanduan, videoGuideTypes } from "../../types/panduan";
import { useRecoilState } from "recoil";
import { panduanDetailVideoGetRequest, panduanVideoGetRequest } from "./request";
import { useRouter } from "next/navigation";
import { detailVideoGuideState } from "../../recoil/atoms/detail-video-panduan";

// type GuideVideo = {
//   setGuideVideo: (val: Array<videoGuideTypes>) => void;
//   getGuideVideo: Array<videoGuideTypes>;
// };

// export const useGuideVideo = (): GuideVideo => {
//   const [get, set] = useRecoilState(videoGuideState);
//   return {
//     setGuideVideo: (val: Array<videoGuideTypes>) => set(val),
//     getGuideVideo: get,
//   };
// };

export const useGetVideoPanduan = (
): UseQueryResult<videoGuideTypes> =>
  useQuery({
    queryKey: ['panduan-vide-get'],
    queryFn: async () => await panduanVideoGetRequest(),
  });

export const useVideoData = (): TuseVideoPanduan => {
  const [get, set] = useRecoilState(videoGuideState);
  return {
    getVideoData: get,
    setVideoData: (val) => set(val),
  };
};

export const useGetVideoPanduanDetail = (id: string) => {
  const router = useRouter();
  return useQuery(["panduan-detail-video", id], async () => {
    try {
      const response = await panduanDetailVideoGetRequest(id);
      if (response) {
        return response;
      } else {
        // Jika response kosong, Anda dapat mengembalikan nilai default atau pesan error
        throw new Error("Data not found");
      }
    } catch (error) {
      router.push('/panduan/video-panduan');
    }
  });
};


export const useDetailVideoData = (): TuseDetailVideoPanduan => {
  const [get, set] = useRecoilState(detailVideoGuideState);
  return {
    getDetailVideoData: get,
    setDetailVideoData: (val) => set(val),
  };
};
