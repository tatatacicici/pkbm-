export interface Contact {
  id: string;
  full_name: string;
  avatar?: string;
  status: 'ONLINE' | 'OFFLINE';
  join_since: string;
}

export interface Conversation {
  id: string;
  full_name: string;
  avatar?: string;
  status: 'ONLINE' | 'OFFLINE';
  join_since: string;

  last_message: string;
  last_message_timestamp: string;

  is_message_seen: boolean;
  is_message_from_current_user: boolean;

  total_unread_messages: number;
}

export interface Message {
  id: string
  message_id: string;
  message: string
  message_timestamp: string
  is_message_seen: boolean
  is_message_from_current_user: boolean
  created_at?: string
}

export interface MetaPagination {
  item_count: number;
  per_page: number;
  current_page: number;
  page_count: number;
  page_counter: number;
  has_prev: boolean;
  has_next: boolean;
  prev: number | null;
  next: number | null;
}