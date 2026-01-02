import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { TConversionDetailMatkul } from '../../types/konversi';
import { detailMatkulConversionRequest } from './request';
import { useAtom } from 'jotai';
import { detailMatkuConversionStateAtom } from '../../store';

export const useGetDetailMatkulConversion = (
  id: string
): UseQueryResult<TConversionDetailMatkul, TMetaErrorResponse> => {
  const [, set] = useAtom(detailMatkuConversionStateAtom);

  const options = {
    queryKey: ['detail-matkul-conversion', id],
    queryFn: async () => await detailMatkulConversionRequest(id),
    onSuccess: (data: TConversionDetailMatkul) => {
      set(data);
    },
  };

  return useQuery(options);
};
