import { TMetaErrorResponse } from '@kampus-gratis/utils';
import {
  UseMutationResult,
  UseQueryResult,
  useMutation,
  useQuery,
} from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import {
  TDataTakeStudyPlanResponse,
  TDetailStudyPlanResponse,
  TDetailStudyPlanSessionsResponse,
  TMajorResponse,
  TRencanaStudiResponse,
  TSemesterResponse,
  TStatusReturnEmptyStudyPlan,
  TStatusReturnStudyPlanCard,
  TStudyPlanFilter,
} from '../../types/rencana-studi';
import { CardStudyPlanState, EmptyStudyPlanState } from './atom';
import {
  detailStudyPlanRequest,
  getAllMajorRequest,
  getSemester,
  getStudyPlanFilter,
  getSubject,
  sessionsStudyPlanRequest,
  studentSubjectPlanTake,
} from './request';

export const useStudyPlanCardStatus = (): TStatusReturnStudyPlanCard => {
  const [getLoading, setLoading] = useRecoilState(CardStudyPlanState);

  return {
    setStudyPlanLoading: (val: any) => setLoading(val),
    getStudyPlanLoading: getLoading,
  };
};

export const useStudyPlanEmpty = (): TStatusReturnEmptyStudyPlan => {
  const [getEmpty, setEmpty] = useRecoilState(EmptyStudyPlanState);

  return {
    setEmptyStudyPlan: (val: any) => setEmpty(val),
    getEmptyStudyPlan: getEmpty,
  };
};

export const useGetAllSubject = (
  faculty_id?: string,
  major_id?: string,
  semester?: number | string,
  credit?: string,
  level?: string,
  search?: string,
  type?: string,
  limit?: number | string
): UseQueryResult<TRencanaStudiResponse> =>
  useQuery({
    queryKey: [
      'get-all-subject',
      faculty_id,
      major_id,
      semester,
      credit,
      level,
      search,
      type,
      limit,
    ],
    queryFn: async () =>
      await getSubject(
        faculty_id,
        major_id,
        semester,
        credit,
        level,
        search,
        type,
        limit
      ),
  });

export const useGetFilter = (): UseQueryResult<TStudyPlanFilter> =>
  useQuery({
    queryKey: ['get-filter'],
    queryFn: async () => await getStudyPlanFilter(),
  });

export const useGetSemester = (): UseQueryResult<TSemesterResponse> =>
  useQuery({
    queryKey: ['get-semester'],
    queryFn: async () => await getSemester(),
  });

export const useGetDetailStudyPlan = (
  id: string
): UseQueryResult<TDetailStudyPlanResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-detail-study-plan', id],
    queryFn: async () => await detailStudyPlanRequest(id),
  });
};

export const useGetSessionsDetailStudyPlan = (
  id: string | number
): UseQueryResult<TDetailStudyPlanSessionsResponse, TMetaErrorResponse> => {
  return useQuery({
    queryKey: ['get-detail-study-plan-sessions', id],
    queryFn: async () => await sessionsStudyPlanRequest(id),
  });
};

export const useTakeSubjectPlan = (): UseMutationResult<
  TDataTakeStudyPlanResponse,
  TMetaErrorResponse,
  string,
  unknown
> => {
  return useMutation({
    mutationKey: ['post-take-student-subject'],
    mutationFn: async (id) => await studentSubjectPlanTake(id),
  });
};

export const useGetAllMajor = (): UseQueryResult<TMajorResponse> => {
  return useQuery({
    queryKey: ['get-major-id'],
    queryFn: async () => await getAllMajorRequest(),
  });
};
