import { TMetaErrorResponse } from "@kampus-gratis/utils";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { TAssesmenListResponse, TAssesmenSelfScoringPayload, TAssesmenSessionResponse, TAssesmenSessionSubmitPayload, TAssesmenTakeResponse, TAssesmenTakeWithIdPayload } from "../../types/asesmen";
import { assesmenListGetRequest, assesmenSelfScoringSubmitRequest, assesmenSessionDetailGetRequest, assesmenSessionSubmitRequest, assesmenTake } from "./request";

export const useGetAssesmenList = (
): UseQueryResult<TAssesmenListResponse, TMetaErrorResponse> =>
    useQuery({
        queryKey: ['assesmen-list'],
        queryFn: async () => await assesmenListGetRequest(),
    });

export const useTakeAssesmen = (): UseMutationResult<
    TAssesmenTakeResponse,
    TMetaErrorResponse,
    TAssesmenTakeWithIdPayload,
    TAssesmenTakeResponse
> => {
    return useMutation({
        mutationKey: ['take-assesmen'],
        mutationFn: async (payload) => await assesmenTake(payload.id, payload.payload),
    });
};

export const useGetAssesmenDetailSession = (
    session_id: string
): UseQueryResult<TAssesmenSessionResponse, TMetaErrorResponse> =>
    useQuery({
        queryKey: ['assesmen-detail-session', session_id],
        queryFn: async () => await assesmenSessionDetailGetRequest(session_id),
    });

export const useSubmitAssesmenSession = (
    session_id: string,
): UseMutationResult<
    TAssesmenTakeResponse,
    TMetaErrorResponse,
    TAssesmenSessionSubmitPayload,
    TAssesmenTakeResponse
> => {
    return useMutation({
        mutationKey: ['submit-assesmen-session'],
        mutationFn: async (payload) => await assesmenSessionSubmitRequest(session_id, payload),
    });
}

export const useSubmitSelfScoringSession = (
    session_id: string,
): UseMutationResult<
    TAssesmenTakeResponse,
    TMetaErrorResponse,
    TAssesmenSelfScoringPayload,
    string
> => {
    return useMutation({
        mutationKey: ['submit-self-scoring-session'],
        mutationFn: async (payload) => await assesmenSelfScoringSubmitRequest(session_id, payload),
    });
}