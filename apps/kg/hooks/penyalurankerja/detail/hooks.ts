import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TPenyaluranKerjaDataById } from '../../../types/penyalurankerja';
import { jobGetByIdRequest } from './api';
import { useRecoilState } from 'recoil';
import { PopupAjukanLamaran, PopupAjukanLamaranLetter } from './atom';

type TReturnPopupJob = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};
type TReturnPopupJobLetter = {
  setPopupLetter: (val: boolean) => void;
  getPopupLetter: boolean;
};

export const useGetJobById = (
  id: string[] | string
): UseQueryResult<TPenyaluranKerjaDataById, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['job-get-by-id', id],
    queryFn: async () => await jobGetByIdRequest(id),
    staleTime: Infinity,
  });

export const usePopUpJob = (): TReturnPopupJob => {
  const [get, set] = useRecoilState(PopupAjukanLamaran);
  return {
    setPopupStatus: (val) => set(val),
    getPopupStatus: get,
  };
};
export const usePopUpJobLetter = (): TReturnPopupJobLetter => {
  const [get, set] = useRecoilState(PopupAjukanLamaranLetter);
  return {
    setPopupLetter: (val) => set(val),
    getPopupLetter: get,
  };
};
