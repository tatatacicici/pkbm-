import { api } from "../../config";
import { TNotificationResponse, TNotificationUpdateResponse } from "../../types/notification";

export const notificationGetRequest = async (): Promise<TNotificationResponse> => {
    const { data } = await api.get(`/v1/notifications`);
    return data;
}

export const notificationSingleUpdateRequest = async (id: string): Promise<TNotificationUpdateResponse> => {
    const { data } = await api.put(`/v1/notifications/${id}/mark-as-read`);
    return data;
}

export const notificationAllUpdateRequest = async (): Promise<TNotificationUpdateResponse> => {
    const { data } = await api.put(`/v1/notifications/mark-all-as-read`);
    return data;
}