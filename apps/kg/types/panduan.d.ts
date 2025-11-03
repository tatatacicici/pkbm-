import { TMetaResponse, TMetaResponseSingle } from "@kampus-gratis/utils";
import { StaticImageData } from "next/image";
import { ReactNode } from "react";

// export type videoGuideTypes = {
//   videoId?: string;
//   titleVideo?: string;
//   descVideo?: string;
//   imgVideo?: ReactNode | string;
// };

export type dictionaryType = {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
};

export type detailDictionaryType = {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
}

// export type bookGuideType = {
//   title?: string;
//   img?: string;
//   href?: string;
// };

export type bookGuideType = {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
}

export type detailBookGuideType = {
  id: string
  title: string
  description: string
  created_at: string
  updated_at: string
}

export type globalPanduanType = {
  id?: string;
  title?: string;
  href?: string;
};

export type videoGuideTypesResponse = {

  code: number
  status: string
  message: string
  data: videoGuideTypes[]
}

export type videoGuideTypes = {
  id: string
  url: string
  title: string
  description: string
  created_at: string
  updated_at: string
  img: string | StaticImageData
}

export type videoDetailGuideTypesResponse = {
  code: number
  status: string
  message: string
  data: Data
}

export type videoDetailGuideTypes =  {
  id: string
  url: string
  title: string
  description: string
  created_at: string
  updated_at: string
}

export type TFaqItem = {
  id: string
  title: string
  content: string
  created_at: string
  updated_at: string
}


export type TBookGuidesResponse = TMetaResponse<bookGuideType>
export type TBookGuidesDetailResponse = TMetaResponseSingle<detailBookGuideType>

export type TDictionariesResponse = TMetaResponse<dictionaryType>
export type TDictionariesDetailResponse = TMetaResponseSingle<detailDictionaryType>

export type TFaqResponse = TMetaResponse<TFaqItem>

export type TuseBukuPanduan = {
  getBookData: TBookGuidesResponse;
  setBookData: (val: TBookGuidesResponse) => void;
}

export type TuseVideoPanduan = {
  getVideoData: videoGuideTypesResponse;
  setVideoData: (val: videoGuideTypesResponse) => void;
}

export type TuseKamusPanduan = {
  getDictionariesData: TDictionariesResponse;
  setDictionariesData: (val: TDictionariesResponse) => void;
}

export type TuseDetailVideoPanduan = {
  getDetailVideoData: videoDetailGuideTypesResponse;
  setDetailVideoData: (val: videoDetailGuideTypesResponse) => void;
}

