import { STUDI_KU_ASSIGNMENT_PROGRESS } from '@kampus-gratis/utils';
import { api } from '../../config';
import { TAssignmentUser } from '../../types/assigment';

export const asigmentGetRequest = async (): Promise<TAssignmentUser> => {
  const { data } = await api.get(STUDI_KU_ASSIGNMENT_PROGRESS);
  return data;
};
