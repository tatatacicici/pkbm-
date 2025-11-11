import { TArticleResponse } from '../../../types';
import { api } from '../../../config/apiConfig';

export const DeleteArticle = async (
  id: string | string[]
): Promise<TArticleResponse> => {
  const { data } = await api({
    method: 'delete',
    url: `v1/article/delete/${id}`,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return data;
};
