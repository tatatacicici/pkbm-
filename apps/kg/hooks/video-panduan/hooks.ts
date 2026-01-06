"use client"

import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { videoGuideStateAtom } from "../../store/video-panduan";
import { TuseDetailVideoPanduan, TuseVideoPanduan, videoGuideTypes } from "../../types/panduan";
import { useAtom } from "jotai";
import { panduanDetailVideoGetRequest, panduanVideoGetRequest } from "./request";
import { useRouter } from "next/navigation";
import { detailVideoGuideStateAtom } from "../../store/detail-video-panduan";

export const useGetVideoPanduan = (
): UseQueryResult<videoGuideTypes> =>
  useQuery({
    queryKey: ['panduan-vide-get'],
    queryFn: async () => await panduanVideoGetRequest(),
  });

export const useVideoData = (): TuseVideoPanduan => {
  const [get, set] = useAtom(videoGuideStateAtom);
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
        throw new Error("Data not found");
      }
    } catch (error) {
      router.push('/panduan/video-panduan');
    }
  });
};

export const useDetailVideoData = (): TuseDetailVideoPanduan => {
  const [get, set] = useAtom(detailVideoGuideStateAtom);
  return {
    getDetailVideoData: get,
    setDetailVideoData: (val) => set(val),
  };
};
