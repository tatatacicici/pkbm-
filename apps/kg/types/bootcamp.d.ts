export type TBootcampSubjectResponse =
  TMetaResponseSingle<TBootcampSubjectData>;

export interface TBootcampSubjectData {
  subjects: TBootcampSubjectItem[];
}

export interface TBootcampSubjectItem {
  id: string;
  name: string;
  slug: string;
  description: string;
  code: string;
  type: string;
  level: number;
  thumbnail: string;
  brochure: string;
  total_sessions: number;
  start_at: string;
  is_taken: boolean;
  is_available: boolean;
  topic_id: string;
  topic_name: string;
  topic_slug: string;
}

export type TBootcampTopicResponse = TMetaResponseSingle<TBootcampTopicData>;

export interface TBootcampTopicData {
  topics: TBootcampTopicItem[];
}

export interface TBootcampTopicItem {
  id: string;
  name: string;
  slug: string;
  total_bootcamps: number;
}
