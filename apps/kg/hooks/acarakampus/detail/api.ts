import { EVENT, STUDENT_EVENT } from '@kampus-gratis/utils';
import { api } from '../../../config';
import {
  TEventResponse,
  TRegisterEventPayload,
  TRegisterEventResponse,
} from '../../../types/acarakampus';

export const eventGetByIdRequest = async (
  id: string | string[]
): Promise<TEventResponse> => {
  const { data } = await api.get(`${EVENT}/${id}`);
  return data;
};

export const registerEventRequest = async (
  payload: TRegisterEventPayload
): Promise<TRegisterEventResponse> => {
  const { data } = await api.post(`${STUDENT_EVENT}`, payload);
  return data;
};
