'use client';


import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  useQuery,
  UseQueryResult,
} from '@tanstack/react-query';
import {
    liveMentoringGetRequest,detailLiveMentoringGetRequest
} from './request';

import { TLiveMentoringResponse,TDetailLiveResponse } from '../../types/livementoring';

export const useLiveMentoring = (
    idSession: string
): UseQueryResult<TLiveMentoringResponse, TMetaErrorResponse> =>
  useQuery({
    queryKey: ['live-mentoring', idSession],
    queryFn: async () => await liveMentoringGetRequest(idSession),
  });

  export const useDetailLiveMentoring = (
    idSession: string,
    idMentoring: string
): UseQueryResult<TDetailLiveResponse, TMetaErrorResponse> =>
    useQuery({
        queryKey: ['detail-live-mentoring', idSession, idMentoring],
        queryFn: async () => await detailLiveMentoringGetRequest(idSession, idMentoring),
    });
    

  
