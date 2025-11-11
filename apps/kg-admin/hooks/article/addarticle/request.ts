import { TCreateArticlePayload } from './type';
import { api } from '../../../config/apiConfig';

export const CreateArticle = async (
  payload: TCreateArticlePayload | unknown
): Promise<TCreateArticlePayload> => {
  const { data } = await api({
    method: 'post',
    url: 'v1/article/create',
    headers: {
      'Content-Type': 'multipart/form-data',
    },
    data: payload,
  });
  return data;
};
