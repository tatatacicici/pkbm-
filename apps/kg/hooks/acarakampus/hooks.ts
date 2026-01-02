import { useQuery, UseQueryResult } from '@tanstack/react-query';
import { TEventResponse } from '../../types/acarakampus';
import { eventGetRequest } from './api';
import { TMetaErrorResponse } from '@kampus-gratis/utils';
import { useAtom } from 'jotai';
import { AcaraKampusStateAtom } from './atom';

// type TEventAcaraKampus = {
//   setAcaraKampus: (val: boolean) => void;
//   getAcaraKampus: boolean;
// };

export const useGetEvent = (
  page: string
): UseQueryResult<TEventResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['get-acarakampus', page],
    queryFn: async () => await eventGetRequest(page),
  });
export const useAcaraKampus = () => {
  const [get, set] = useAtom(AcaraKampusStateAtom);

  return {
    getAcaraKampus: get as any,
    setAcaraKampus: (val: any) => set(val),
  };
};
