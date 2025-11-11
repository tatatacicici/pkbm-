export type TRoleplayListResponse = TMetaResponseSingle<TRoleplayListItem>;


export interface TRoleplayListData {
    roleplays: TRoleplayListItem[]
}

export interface TRoleplayListItem {
    id: string
    topic: string
    description: string
    duration: number
    subject_id: string
    subject_name: string
    subject_type: string
    subject_thumbnail: string
    session_id: string
    session_title: string
    session_no: number
    start_at: string
    end_at: string
}

export type TRoleplayDetailResponse = TMetaResponseSingle<TRoleplayDetailData>;

export interface TRoleplayDetailData {
    roleplay: TRoleplayDetailItem
}

export interface TRoleplayDetailItem {
    id: string
    topic: string
    description: string
    case_study: string
    rules: string
    duration: number
    subject_id: string
    subject_name: string
    subject_type: string
    subject_thumbnail: string
    session_id: string
    session_title: string
    session_no: number
    start_at: string
    end_at: string
}

export type TRoleplayListTeamResponse = TMetaResponseSingle<TRoleplayListTeamData>;

export interface TRoleplayListTeamData {
    teams: TRoleplayTeamItem[]
}

export interface TRoleplayTeamItem {
    id: string
    number: string
    status: string
    members: TRoleplayMemberItem[]
    schedules: TRoleplayScheduleItem[]
    created_at: string
}

export interface TRoleplayMemberItem {
    id: string
    full_name: string
    avatar: string
    status: string
    schedule_id: string
    schedule_datetime: string
}

export interface TRoleplayScheduleItem {
    id: string
    date: string
    time: string
    total_votes: number
}

export type TRoleplayJoinTeamPayload = {
    team_id: string
    schedule_id: string
}


