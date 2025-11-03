export type TAssesmenListResponse = TMetaResponseSingle<TAssesmenListItem>;


export interface TAssesmenListData {
    assessments: TAssesmenListItem[]
}

export interface TAssesmenListItem {
    id: string
    topic: string
    description: string
    thumbnail: string
    start_at: string
    end_at: string
    major_id: string
    major_name: string
    subject_id: string
    subject_name: string
    creator_id: string
    creator_full_name: string
    creator_avatar: any
    created_at: string
    updated_at: string
}

export interface TAssesmenTakeWithIdPayload {
    id: string
    payload: TAssesmenTakePayload
}

export interface TAssesmenTakePayload {
    type: string
}

export type TAssesmenTakeResponse = TMetaResponseSingle<TAssesmenTakeData>;

export interface TAssesmenTakeData {
    session: TAssesmenTakeSession
}

export interface TAssesmenTakeSession {
    id: string
    type: string
    day: string
    time: string
    status: string
    assessment_id: number
    booked_by: string
    booked_at: string
}

export type TAssesmenSessionResponse = TMetaResponseSingle<TAssesmenSessionData>;

export interface TAssesmenSessionData {
    detail: TAssesmenSessionItemDetail
    assessment: TAssesmenSessionItem
    session: TAssesmenSessionSession
    submission: TAssesmenSessionSubmission
    scores: TAssesmenSessionScore
}

export interface TAssesmenSessionItemDetail {
    participant_id: string
    participant_full_name: string
    participant_avatar: string
}

export interface TAssesmenSessionItem {
    id: string
    topic: string
    description: string
    case_study: string
    rules: string
    duration: number
}

export interface TAssesmenSessionSession {
    id: string
    type: string
    status: string
    day: string
    time: string
    booked_at: string
}

export interface TAssesmenSessionSubmission {
    document_url: any
    video_url: any
    submitted_at: any
}

export interface TAssesmenSessionScore {
    rubric: TAssesmenSessionRubric
    competencies: TAssesmenSessionCompetency[]
}

export interface TAssesmenSessionRubric {
    id: string
    title: string
    description: string
    type: string
    major_id: string
    major_name: string
    created_by: string
    creator_name: string
    total_criteria: string
    created_at: string
    updated_at: string
}

export interface TAssesmenSessionCompetency {
    id: string
    aspect: string
    description: string
    created_at: string
    updated_at: string
    details: TAssesmenSessionDetail[]
}

export interface TAssesmenSessionDetail {
    id: string
    title: string
    description: string
    score: number
    created_at: string
    updated_at: string
}

export interface TAssesmenSessionSubmitPayload {
    document: any
    video_url: any
}

export interface TAssesmenSelfScoringPayload {
    scores: TSelfScoringItem[]
}

export interface TSelfScoringItem {
    competency_id: string
    score_id: string | null;
    note: string
}