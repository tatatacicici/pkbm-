import { TMetaResponseSingle } from '@kampus-gratis/utils';

export type TAddUserPaylod = {
  full_name?: string;
  email?: string;
  password?: string;
  role_id?: string;
};

export type TAdduserResponse = TMetaResponseSingle<TAddUserPaylod>;
