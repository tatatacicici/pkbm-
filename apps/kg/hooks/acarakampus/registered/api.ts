import { STUDENT_EVENT_REGISTERED } from '@kampus-gratis/utils';
import { api } from '../../../config';
import { TEventResponse } from '../../../types/acarakampus';

export const eventRegisteredGetRequest = async (): Promise<TEventResponse> => {
  const { data } = await api.get(`${STUDENT_EVENT_REGISTERED}`);
  return data;
};
