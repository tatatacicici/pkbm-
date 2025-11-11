import { TMetaResponseSingle } from '@kampus-gratis/utils';

export interface TRefleksiEksplorasi {
  message: string;
}

export type TRefleksiEksplorasiSingleResponse =
  TMetaResponseSingle<TRefleksiEksplorasi>;

export type TRefleksiEksplorasiSubmissionPayload = {
  message: string;
};
