import { TMetaResponseSingle } from '@kampus-gratis/utils';

export type TReturnStatusProvince = {
  setProvinceStatus: (val: boolean) => void;
  getProvinceStatus: boolean;
};

export type TProvince = {
  code: string;
  name: string;
}[];

export type TRegency = {
  code: string;
  province_code: string;
  name: string;
};

export type TDistrict = {
  code: string;
  regency_code: string;
  name: string;
};

export type TVillage = {
  code: string;
  district_code: string;
  name: string;
};

export type TProvinceResponse = TMetaResponseSingle<TProvince>;
