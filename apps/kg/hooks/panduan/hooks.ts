"use client"

import { bookGuideState } from "../../recoil/atoms/buku-panduan";
import { TBookGuidesDetailResponse, TBookGuidesResponse, TDictionariesDetailResponse, TDictionariesResponse, TFaqResponse, TuseBukuPanduan, TuseKamusPanduan} from "../../types/panduan";
import { useRecoilState } from "recoil";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { detailDictionaryGetRequest, detailPanduanBukuGetRequest, dictionaryGetRequest, faqGetRequest, panduanBukuGetRequest } from "./request";
import { dictionaryState } from "../../recoil/atoms/kamus-kampus-gratis";

  export const useGetBukuPanduan = (
    ): UseQueryResult<TBookGuidesResponse> =>
      useQuery({
        queryKey: ['panduan-book-get'],
        queryFn: async () => await panduanBukuGetRequest(),
      });

  export const useGuideBook = (): TuseBukuPanduan => {
    const [get, set] = useRecoilState(bookGuideState);
    return {
      setBookData: (val: TBookGuidesResponse) => set(val),
      getBookData: get,
    };
  };  

  export const useGetDetailBukuPanduan = (
    id: string
    ): UseQueryResult<TBookGuidesDetailResponse> =>
      useQuery({
        queryKey: ['detail-panduan-book-get'],
        queryFn: async () => await detailPanduanBukuGetRequest(id),
      });


      export const useGetDictionary = (
        ): UseQueryResult<TBookGuidesResponse> =>
          useQuery({
            queryKey: ['panduan-kamus-get'],
            queryFn: async () => await dictionaryGetRequest(),
          });
    
      export const useDictionary = (): TuseKamusPanduan => {
        const [get, set] = useRecoilState(dictionaryState);
        return {
          setDictionariesData: (val: TDictionariesResponse) => set(val),
          getDictionariesData: get,
        };
      }; 

      export const useGetDetailDictionary = (
        id: string
        ): UseQueryResult<TDictionariesDetailResponse> =>
          useQuery({
            queryKey: ['detail-panduan-dictionary-get'],
            queryFn: async () => await detailDictionaryGetRequest(id),
          });

          export const useGetFaq = (
            ): UseQueryResult<TFaqResponse> =>
              useQuery({
                queryKey: ['faq-get'],
                queryFn: async () => await faqGetRequest(),
              });