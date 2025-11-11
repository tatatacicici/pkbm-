export interface TQuizTeacherAssessmentResponse {
  code: number;
  status: string;
  message: string;
  data: Data;
}

export interface Data {
  id: string;
  session_no: string;
  status: string;
  questions: Question[];
  teacher: Teacher;
  is_eligible: boolean;
}

export interface Question {
  id: string;
  question: string;
  type: 'OPTION' | 'SCORE' | 'ESSAY';
  answers: number[];
}
