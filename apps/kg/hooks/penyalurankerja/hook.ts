import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TPenyaluranKerjaResponse } from '../../types/penyalurankerja';
import { jobGetRequest } from './api';
import { useAtom } from 'jotai';
import { penyalurankerjaStateAtom } from './atom';

export const useGetJob = (
  page: string
): UseQueryResult<TPenyaluranKerjaResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['get-penyalurankerja', page],
    queryFn: async () => await jobGetRequest(page),
  });

export const useJob = () => {
  const [get, set] = useAtom(penyalurankerjaStateAtom);

  return {
    getPenyaluranKerja: get as any,
    setPenyaluranKerja: (val: any) => set(val),
  };
};
