import { api } from '../../config/api/apiConfig';
import { TBookGuidesDetailResponse, TBookGuidesResponse, TDictionariesDetailResponse, TDictionariesResponse, TFaqResponse } from "../../types/panduan";

export const panduanBukuGetRequest =
  async (): Promise<TBookGuidesResponse> => {
    const { data } = await api.get(`v1/guides/books`);

    return data;
  };

  export const detailPanduanBukuGetRequest = async (
    id: string
  ): Promise<TBookGuidesDetailResponse> => {
    const { data } = await api.get(`v1/guides/books/${id}`);

    return data;
  };

  export const dictionaryGetRequest =
  async (): Promise<TDictionariesResponse> => {
    const { data } = await api.get(`v1/guides/dictionaries`);

    return data;
  };

  export const detailDictionaryGetRequest = async (
    id: string
  ): Promise<TDictionariesDetailResponse> => {
    const { data } = await api.get(`v1/guides/dictionaries/${id}`);

    return data;
  };

  export const faqGetRequest =
  async (): Promise<TFaqResponse> => {
    const { data } = await api.get(`v1/guides/frequently-asked-questions`);

    return data;
  };