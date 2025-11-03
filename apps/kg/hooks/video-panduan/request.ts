import { api } from '../../config/api/apiConfig';
import { videoGuideTypesResponse } from '../../types/panduan';

export const panduanVideoGetRequest =
  async (): Promise<videoGuideTypesResponse> => {
    const { data } = await api.get(`v1/guides/videos`);

    return data;
  };

export const panduanDetailVideoGetRequest = async (
  id: string
): Promise<videoGuideTypesResponse> => {
  const { data } = await api.get(`v1/guides/videos/${id}`);

  return data;
};
