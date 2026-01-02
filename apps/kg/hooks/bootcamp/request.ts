import { api } from "../../config";
import { TBootcampSubjectResponse, TBootcampTopicResponse } from "../../types/bootcamp";

export const bootcampSubjectRequest = async (): Promise<TBootcampSubjectResponse> => {
  try {
    const { data } = await api.get('/v1/bootcamp/subjects');
    return data;
  } catch (error) {
    return {
      code: 503,
      status: 'error',
      message: 'Service unavailable',
      data: [],
    } as TBootcampSubjectResponse;
  }
};

export const bootcampTopicRequest = async (): Promise<TBootcampTopicResponse> => {
  try {
    const { data } = await api.get('/v1/bootcamp/topics');
    return data;
  } catch (error) {
    return {
      code: 503,
      status: 'error',
      message: 'Service unavailable',
      data: [],
    } as TBootcampTopicResponse;
  }
};
