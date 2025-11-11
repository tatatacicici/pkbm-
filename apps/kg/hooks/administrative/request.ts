import { api } from '../../config/api/apiConfig';
import { TProvince } from '../../types/administrative';

import {
  ADMINISTRATIVE_DISTRICT,
  ADMINISTRATIVE_VILLAGE,
  ADMINSTRATIVE_PROVINCIES,
  ADMINSTRATIVE_REGENCY,
} from '@kampus-gratis/utils';

export const getProvinceRequest = async (): Promise<TProvince> => {
  const { data } = await api.get(ADMINSTRATIVE_PROVINCIES);
  return data;
};

export const getRegencyRequest = async (
  id: string | number
): Promise<TProvince> => {
  const { data } = await api.get(`${ADMINSTRATIVE_REGENCY}?province_id=${id}`);
  return data;
};

export const getDistrictRequest = async (
  id: string | number
): Promise<TProvince> => {
  const { data } = await api.get(`${ADMINISTRATIVE_DISTRICT}?regency_id=${id}`);
  return data;
};

export const getVillageRequest = async (
  id: string | number
): Promise<TProvince> => {
  const { data } = await api.get(`${ADMINISTRATIVE_VILLAGE}?district_id=${id}`);
  return data;
};
