import { serialize } from "object-to-formdata";
import { api } from "../../config";
import { TAssesmenListResponse, TAssesmenSelfScoringPayload, TAssesmenSessionResponse, TAssesmenSessionSubmitPayload, TAssesmenTakePayload, TAssesmenTakeResponse } from "../../types/asesmen";

export const assesmenListGetRequest = async (): Promise<TAssesmenListResponse> => {
    const { data } = await api.get(
        `v1/student/assessments`
    );
    return data;
};

export const assesmenTake = async (
    id: string,
    payload: TAssesmenTakePayload
): Promise<TAssesmenTakeResponse> => {
    const { data } = await api.post(`v1/student/assessments/${id}/request`, payload);

    return data;
};

export const assesmenSessionDetailGetRequest = async (
    session_id: string
): Promise<TAssesmenSessionResponse> => {
    const { data } = await api.get(
        `v1/student/assessments/sessions/${session_id}`
    );
    return data;
};


export const assesmenSessionSubmitRequest = async (
    session_id: string,
    payload: TAssesmenSessionSubmitPayload
) => {
    const { data } = await api.post(
        `v1/student/assessments/sessions/${session_id}/submission`,
        serialize(payload)
    );
    return data;
}

export const assesmenSelfScoringSubmitRequest = async (
    session_id: string,
    payload: TAssesmenSelfScoringPayload
) => {
    const { data } = await api.post(
        `v1/student/assessments/sessions/${session_id}/score/self`, payload
    );
    return data;
}
