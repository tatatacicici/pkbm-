import { api } from "../../config";
import { TRoleplayDetailResponse, TRoleplayJoinTeamPayload, TRoleplayListResponse, TRoleplayListTeamResponse } from "../../types/roleplay";

export const roleplayListGetRequest = async (): Promise<TRoleplayListResponse> => {
    const { data } = await api.get(
        `v1/student/roleplays`
    );
    return data;
};

export const roleplayDetailGetRequest = async (id: string): Promise<TRoleplayDetailResponse> => {
    const { data } = await api.get(
        `v1/student/roleplays/${id}`
    );
    return data;
}

export const roleplayTeamGetRequest = async (id: string): Promise<TRoleplayListTeamResponse> => {
    const { data } = await api.get(
        `v1/student/roleplays/${id}/teams`
    );
    return data;
}

export const roleplayTeamJoinRequest = async (id: string, payload: TRoleplayJoinTeamPayload) => {
    await api.post(
        `v1/student/roleplays/${id}/teams/${payload.team_id}/join`,
        {
            schedule_id: payload.schedule_id
        }
    );
}