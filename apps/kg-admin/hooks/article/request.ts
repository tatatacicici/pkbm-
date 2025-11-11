import { api } from '../../config/apiConfig';
import { TArticleResponse } from '../../types';

export const articleRequest = async (
  page: number,
  limit: number,
  search: string
): Promise<TArticleResponse> => {
  const { data } = await api.get(
    `v1/article/filter?page=${page}&limit=${limit}&search=${search}&sort_by=TITLE`
  );

  return data;
};
