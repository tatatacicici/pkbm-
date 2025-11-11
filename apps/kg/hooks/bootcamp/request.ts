import { api } from "../../config";
import { TBootcampSubjectResponse, TBootcampTopicResponse } from "../../types/bootcamp";

export const bootcampSubjectRequest = async (): Promise<TBootcampSubjectResponse> => {
    const { data } = await api.get(
        `v1/bootcamp/subjects`
    );
    return data;
}

export const bootcampTopicRequest = async (): Promise<TBootcampTopicResponse> => {
    const { data } = await api.get(
        `v1/bootcamp/topics`
    );
    return data;
}