import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TPenyaluranKerjaResponse } from '../../types/penyalurankerja';
import { jobGetRequest } from './api';
import { useRecoilState } from 'recoil';
import { penyalurankerjaState } from './atom';

export const useGetJob = (
  page: string
): UseQueryResult<TPenyaluranKerjaResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['get-penyalurankerja', page],
    queryFn: async () => await jobGetRequest(page),
  });

export const useJob = () => {
  const [get, set] = useRecoilState(penyalurankerjaState);

  return {
    getPenyaluranKerja: get as any,
    setPenyaluranKerja: (val: any) => set(val),
  };
};
