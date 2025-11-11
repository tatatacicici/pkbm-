import {
  TConversionDetailMatkul,
  TConversionListMatkul,
} from '../../types/konversi';
import { atom } from 'recoil';

export const detailMatkuConversionState = atom<TConversionDetailMatkul>({
  key: 'detail-matkul-conversion',
  default: {
    data: {
      subject: {
        name: '',
        duration_hours: 0,
        credit: 0,
      },
      sessions_details: [
        {
          session_no: 0,
          type: '',
          total_videos: 0,
          total_documents: 0,
          total_assignments: 0,
        },
      ],
      sessions_scores: [
        {
          session_no: 0,
          type: '',
          module_score: '',
          quiz_score: '',
          assignment_score: '',
          average_score: '',
        },
      ],
      subject_outcomes: [
        {
          criteria: '',
          score: 0,
        },
      ],
    },

    code: 0,
    message: '',
    status: '',
  },
});

export const listMatkulConversionState = atom<TConversionListMatkul>({
  key: 'list-matkul-conversion',
  default: {
    data: [
      {
        id: '',
        subject_id: '',
        subject_name: '',
        total_session: 0,
        semester: 0,
        total_credit: 0,
        gpa: '',
        status: '',
        score_final: 0,
        score_letter: '',
      },
    ],
    code: 0,
    message: '',
    status: '',
  },
});
