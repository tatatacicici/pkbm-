import { TMetaResponse } from "@mknows-frontend-services/utils";


// Leaderboard Type
export type TLeaderboardItem = {
    student_id: string;
    author: AuthorLeaderboard;
  };
  
export type AuthorLeaderboard = {
    avatar: string;
    poin: number;
    user_name: string;
    discussion_likes: number;
    discussion_posted: number;
    full_name: string;
    semester: number;
    ipk: string;
    major: string;
    role: string;
    total_certificates: number;
    current_subjects: number;
    finished_subjects: number;
  };
  
  export type TLeaderboardResponse = TMetaResponse<TLeaderboardItem>;

  // Acarakampus Type

  export type TEventItem = {
    status: string;
    id: string;
    name: string;
    registration_close_date: string;
    date_start: string;
    date_end: string;
    description: string;
    capacity: number;
    thumbnail: string;
    contact_person_name: string;
    contact_person_phone: string;
    contact_person_email: string;
    type_order: string;
    type_event: string;
    event_studentEvent: EventStudentEvent[];
  };

  export type TEventResponse = TMetaResponse<Array<TEventItem>>;