import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useAtom } from 'jotai';
import {
  CertificateStatusAtom,
  PopupModalSuccessOpenAtom,
} from '../../store';
import {
  TCertificateResponse,
  TScoreDetailResponse,
  TScoreResponse,
  certificateTypes,
} from '../../types/score-sertificate';
import { certificateGetRequest, detailScoreGetRequest, scoreGetRequest } from './request';

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupCertificate = (): ReturnTypes => {
  const [get, set] = useAtom(PopupModalSuccessOpenAtom);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};

type certificateReturnTypes = {
  setCertificate: (val: Array<certificateTypes>) => void;
  getCertificate: Array<certificateTypes>;
};

export const useCertficate = (): certificateReturnTypes => {
  const [getCertificate, setCertificate] = useAtom(CertificateStatusAtom);

  return {
    setCertificate: (val: Array<certificateTypes>) => setCertificate(val),
    getCertificate: getCertificate,
  };
};

export const useGetAllCertificate = (): UseQueryResult<TCertificateResponse> =>
  useQuery({
    queryKey: ['get-all-certificate'],
    queryFn: async () => await certificateGetRequest(),
  });

export const useGetAllScore = (): UseQueryResult<TScoreResponse> =>
  useQuery({
    queryKey: ['get-all-score'],
    queryFn: async () => await scoreGetRequest(),
  });

export const useGetDetailScore = (id: string): UseQueryResult<TScoreDetailResponse> =>
  useQuery({
    queryKey: ['get-detail-score', id],
    queryFn: async () => await detailScoreGetRequest(id),
  });
