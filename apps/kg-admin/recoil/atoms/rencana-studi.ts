import { TFacultyResponse, TMajorResponse, TSubjectResponse } from '../../types/rencatastudi';
import { atom } from 'recoil';

export const modalOpenState = atom({
  key: 'modalOpenState', // unique ID (with respect to other atoms/selectors)
  default: false, // nilai default
});

export const modalBerhasil = atom({
    key: 'modal-berhasil-state', // unique ID (with respect to other atoms/selectors)
  default: false, // nilai default
})

export const modalConfirmation = atom({
  key: 'modal-confirmation-state', // unique ID (with respect to other atoms/selectors)
default: false, // nilai default
})

export const modalEdit = atom({
  key: 'modal-edit-state', // unique ID (with respect to other atoms/selectors)
default: false, // nilai default
})

export const modalDelete = atom({
  key: 'modal-delete-state', // unique ID (with respect to other atoms/selectors)
default: false, // nilai default
})

export const modalDeleteSuccess = atom({
  key: 'modal-delete-success-state', // unique ID (with respect to other atoms/selectors)
default: false, // nilai default
})

export const modalEditSuccess = atom({
  key: 'modal-edit-success-state', // unique ID (with respect to other atoms/selectors)
default: false, // nilai default
})

export const idFacultyState = atom({
  key: 'id-faculty',
  default: '',
})


export const facultyDataState  = atom<TFacultyResponse>({
  key: 'faculty-data',
  default: {
    code: 0,
    status: '',
    message: '',
    data: [],
    meta: {
      page_size: 0,
      total_data: 0,
      current_page: 0,
      max_page: 0
    },
    }
  },
);

export const majorDataState  = atom<TMajorResponse>({
  key: 'major-data',
  default: {
    code: 0,
    status: '',
    message: '',
    data: [],
    meta: {
      page_size: 0,
      total_data: 0,
      current_page: 0,
      max_page: 0
    },
    }
  },
);

export const subjectDataState  = atom<TSubjectResponse>({
  key: 'subject-data',
  default: {
    code: 0,
    status: '',
    message: '',
    data: [],
    meta: {
      page_size: 0,
      total_data: 0,
      current_page: 0,
      max_page: 0
    },
    }
  },
);