import { TMetaErrorResponse } from "@kampus-gratis/utils";
import { useMutation, UseMutationResult, useQuery, UseQueryResult } from "@tanstack/react-query";
import { TNotificationResponse, TNotificationUpdateResponse } from "../../types/notification";
import { notificationAllUpdateRequest, notificationGetRequest, notificationSingleUpdateRequest } from "./request";


export const useGetNotification = (): UseQueryResult<TNotificationResponse> => {
    return useQuery({
        queryKey: ['get-notification'],
        queryFn: async () => await notificationGetRequest(),
        refetchInterval: false,
    });
}

export const useUpdateSingleNotification = (): UseMutationResult<
    TNotificationUpdateResponse,
    TMetaErrorResponse,
    string,
    unknown
> => {
    return useMutation({
        mutationFn: async (id: string) => await notificationSingleUpdateRequest(id),
    });
}

export const useUpdateAllNotification = (): UseMutationResult<
    TNotificationUpdateResponse,
    TMetaErrorResponse,
    unknown,
    unknown
> => {
    return useMutation({
        mutationFn: async () => await notificationAllUpdateRequest(),
    });
}
