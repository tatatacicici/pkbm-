import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TPenyaluranKerjaDataById } from '../../../types/penyalurankerja';
import { jobGetByIdRequest } from './api';
import { useAtom } from 'jotai';
import { PopupAjukanLamaranAtom, PopupAjukanLamaranLetterAtom } from './atom';

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
  const [get, set] = useAtom(PopupAjukanLamaranAtom);
  return {
    setPopupStatus: (val) => set(val),
    getPopupStatus: get,
  };
};
export const usePopUpJobLetter = (): TReturnPopupJobLetter => {
  const [get, set] = useAtom(PopupAjukanLamaranLetterAtom);
  return {
    setPopupLetter: (val) => set(val),
    getPopupLetter: get,
  };
};
