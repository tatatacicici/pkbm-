import { STUDENT_EVENT_HISTORY } from '@kampus-gratis/utils';
import { api } from '../../../../kg/config';
import { TEventResponse } from '../../../../kg/types/acarakampus';

export const eventHistoryGetRequest = async (): Promise<TEventResponse> => {
  const { data } = await api.get(`${STUDENT_EVENT_HISTORY}`);
  return data;
};
