import { TMetaResponseSingle } from "@kampus-gratis/utils";

export interface TNotificationItem {
    id: string;
    user_id: string;
    sender_id: string | null;
    title: string;
    message: string;
    category: string | null;
    type: string;
    destination: string | null;
    seen_at: string | null;
    created_at: string;
    updated_at: string;
    deleted_at: string | null;
}

export interface TNotificationData {
    notifications: TNotificationItem[];
}

export type TNotificationResponse = TMetaResponseSingle<TNotificationData>;

export type TNotificationUpdateResponse = TMetaResponseSingle<>;