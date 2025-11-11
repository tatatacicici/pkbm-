import { api } from '../../../config/apiConfig';
import { TArticleResponse, TArticleSlugResponse } from '../../../types';
import { TEditArticlePayload } from './type';

export const EditArticleRequest = async (
  id: string | string[],
  payload: TEditArticlePayload
): Promise<TArticleSlugResponse> => {
  const { data } = await api({
    method: 'put',
    url: `v1/article/update/${id}`,
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};
export const getArticleBySlug = async (
  slug: string | string[]
): Promise<TArticleSlugResponse> => {
  const { data } = await api.get(`v1/article/${slug}`);
  return data;
};
