import { TMetaErrorResponse } from "@kampus-gratis/utils";
import { UseMutationResult, UseQueryResult, useMutation, useQuery } from "@tanstack/react-query";
import { TRoleplayDetailResponse, TRoleplayJoinTeamPayload, TRoleplayListResponse, TRoleplayListTeamResponse } from "../../types/roleplay";
import { roleplayDetailGetRequest, roleplayListGetRequest, roleplayTeamGetRequest, roleplayTeamJoinRequest } from "./request";

export const useGetRoleplayList = (
): UseQueryResult<TRoleplayListResponse, TMetaErrorResponse> =>
    useQuery({
        queryKey: ['roleplay-list'],
        queryFn: async () => await roleplayListGetRequest(),
    });

export const useGetRoleplayDetail = (
    id: string
): UseQueryResult<TRoleplayDetailResponse, TMetaErrorResponse> =>
    useQuery({
        queryKey: ['roleplay-detail', id],
        queryFn: async () => await roleplayDetailGetRequest(id),
    });


export const useGetRoleplayTeam = (
    id: string
): UseQueryResult<TRoleplayListTeamResponse, TMetaErrorResponse> =>
    useQuery({
        queryKey: ['roleplay-team', id],
        queryFn: async () => await roleplayTeamGetRequest(id),
    });


export const useJoinRoleplayTeam = (
    id: string,
): UseMutationResult<
    TRoleplayListTeamResponse,
    TMetaErrorResponse,
    TRoleplayJoinTeamPayload,
    string
> => {
    return useMutation({
        mutationKey: ['submit-self-scoring-session'],
        mutationFn: async (payload) => await roleplayTeamJoinRequest(id, payload),
    });
}