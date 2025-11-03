export type Progress = {
  id?: string;
  student_id?: string;
  module_id: any;
  quiz_id?: string;
  session_id?: string;
  subject_id?: string;
  status?: string;
  type?: string;
  score: any;
  is_late?: boolean;
  timestamp_taken?: string;
  timestamp_scored: any;
  timestamp_submitted: any;
  deadline: any;
};

export type TQuizItem = {
  id: string;
  type: string;
  title: string;
  session_id: string;
  module_id: any;
  start_date: any;
  end_date: any;
  duration: number;
  progress: Progress;
};

export type TQuizDetailItem = {
  subject_id: string;
  subject_name: string;
  session_id: string;
  session_no: number;
  session_type: string;
};

export type TQuizData = {
  detail: TQuizDetailItem;
  quizzes: TQuizItem[];
};

export type TQuizResponse = TMetaResponseSingle<TQuizData>;

export interface TQuizDescSubject {
  id: string;
  name: string;
}

export interface TQuizDescSession {
  id: string;
  session_no: number;
  session_type: string;
}

export interface TQuizDescItem {
  id: string;
  title: string;
  duration: number;
  question_point: string;
  total_questions: number;
  remaining_attempts: number;
  last_score: string;
}

export interface TQuizDescData {
  subject: TQuizDescSubject;
  session: TQuizDescSession;
  quiz: TQuizDescItem;
}

export type TQuizDescResponse = TMetaResponseSingle<TQuizDescData>;

export type TQuizTakeItem = {
  type: string;
  duration: number;
  questions_answers: Array<TQuizQuestionsAnswers>;
};

export type TQuizQuestionsAnswers = {
  id: string;
  question: string;
  answers: Array<{
    id: string;
    answer: string;
  }>;
};

export type TQuizTakeResponse = TMetaResponseSingle<TQuizTakeItem>;

export type TQuizRequestSubmit = {
  question: string;
  answer: string;
  help?: boolean;
};

export type TQuestionsAnswersPayloadItem = {
  question: string;
  answer: string;
};

export type TQuizSubmitPayloadReq = {
  questions_answers: TQuestionsAnswersPayloadItem[];
};

export type TQuizSubmitPayload = {
  id: string;
  req: TQuizSubmitPayloadReq;
};

export type TQuizSubmitItem = {
  right: number;
  wrong: number;
  total_question: number;
  remaining_attempt: number;
  time_elapsed: number;
  score: number;
};

export type TQuizSubmitResponse = TMetaResponseSingle<TQuizSubmitItem>;

export type TUseRemaingTimeQuiz = {
  getRemainingTime: number;
  setRemainingTime: (val: number) => void;
};

export type TQuizScoreItem = {
  right: number;
  wrong: number;
  total_question: number;
  remaining_attempt: number;
  time_elapsed: number;
  score: number;
  status: string;
};

export type TQuizScoreResponse = TMetaResponseSingle<TQuizScoreItem>;

export type DetailCardProps = {
  value: string | number;
  type: 'trueAnswer' | 'falseAnswer' | 'timeFinished' | 'totalQuestions';
  link?: string;
};

export type TQuizHistoryData = {
  id: string;
  index: number;
  timestamp_taken: string;
  score: number;
  correct: number;
  wrong: number;
  status: string;
  total_question: number;
  time_elapsed: number;
};

export type TQuizHistoryData2 = {
  id: string;
  index: number;
  timestamp_taken: string;
  score: number;
  right: number;
  wrong: number;
  status: string;
  total_question: number;
  time_elapsed: number;
};

export type TQuizHistoryItem = {
  history_data: TQuizHistoryData[];
  remaining_attempt: number | string;
};

export type TQuizHistoryResponse = TMetaResponseSingle<TQuizHistoryItem>;

export type TQuizQuitPopup = {
  quizTakeId: string;
  status: boolean;
  prevPath: string;
  link: string;
};

export type TQuestionParams = {
  onPrevious: () => void;
  onUndecided: () => void;
  onNext: () => void;
  currentQuestion: number;
  lengthQuestions: number;
  handleSubmit: () => void;
};

export type TQuestionList = {
  questions: { id: string }[];
  currentQuestion: number;
  onQuestionClick: (index: number) => void;
  selectedAnswers: { answer: string | null; status: string }[];
};

export type TMyModal = {
  isOpen: boolean;
  closeModal: () => void;
  handleClickSubmit: () => void;
};

export type TMultipleChoiceQuestion = {
  question: string;
  answers: { id: string; answer: string }[];
  selectedAnswer: { answer: string | null; status: string };
  onAnswerClick: (id: string) => void;
  currentQuestion: number;
};

export type TCountdownTimer = {
  duration: number;
  onSubmit: () => void;
  isAlreadySubmit: boolean;
  id: string;
};
