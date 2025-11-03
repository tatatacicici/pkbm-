import { api } from '../../../config/apiConfig';
import { TCategoriesResponse } from '../../../types';

export const categoriesRequest = async (): Promise<TCategoriesResponse> => {
  const { data } = await api.get(`v1/article/categories`);

  return data;
};
