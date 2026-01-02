// Administration
export {
  AdministrationStudentRoleModalStateAtom,
  AdministrationStudentRoleStateAtom,
  AdministrationStatusStateAtom,
  AdministrationStepStateAtom,
  PrivateInformationStateAtom,
  JobInformationStateAtom,
  FileInformationStateAtom,
  FacultyInformationStateAtom,
  SocialMediaInformationStateAtom,
} from './administration';

// Administrative
export { StatusProvinceStateAtom } from './administrative';

// Article
export {
  articleDataStateAtom,
  articleFavoriteDataStateAtom,
  articleSlugStateAtom,
} from './article';

// Auth
export {
  PopupOtpAtom,
  PopupModalForgotPassAtom,
  forgotPasswordStateAtom,
} from './auth';

// Buku Panduan
export { bookGuideStateAtom, queryPanduanBookAtom } from './buku-panduan';

// Calendar
export { calendarDataStateAtom } from './calendar';

// Dashboard
export {
  dashboardDataStateAtom,
  selectedTasksAtom,
  selectedEventAtom,
  ProgressStateAtom,
  selectedDateAtom,
} from './dashboard';

// Dashboard Selectors
export {
  days,
  months,
  dashboardMatchedCalendarStateAtom,
  limitedCalendarStateAtom,
  filteredCalendarStateAtom,
} from './dashboard-selectors';

// Detail Video Panduan
export {
  detailVideoGuideStateAtom,
  queryPanduanVideoDetailAtom,
} from './detail-video-panduan';

// Drill Simulasi
export {
  PopupModalSubmissionOpenAtom,
  historySimulationsStateAtom,
  queryScheduleSimulationAtom,
  categorySimulationStateAtom,
  chooseScheduleStateAtom,
  chooseSimulasiStateAtom,
  PopupModalScheduleOpenAtom,
  ChooseTimeSimulasiStateAtom,
  sceduleSimulationStateAtom,
  filterSlugAtom,
} from './drill-simulasi';

// Kamus Kampus Gratis
export {
  dictionaryStateAtom,
  queryOptionDictionaryAtom,
} from './kamus-kampus-gratis';

// Konversi
export {
  detailMatkuConversionStateAtom,
  listMatkulConversionStateAtom,
} from './konversi';

// Leaderboard
export {
  PopupProfilLeaderboradAtom,
  popupGetUserAtom,
  filteredDataAtom,
} from './leaderboard';

// Library
export {
  libraryDataStateAtom,
  libraryFavoriteDataStateAtom,
  librarySlugStateAtom,
} from './library';

// Live Mentoring
export {
  liveMentoringDataStateAtom,
  detailLiveMentoringDataStateAtom,
} from './live-mentoring';

// Module Content
export {
  confirmModuleStateAtom,
  PopupModalConfirmModulAtom,
} from './module-content';

// MyStudy Assignment
export { mystudyAssignmentStateAtom } from './mystudy-assignment';

// MyStudy Module
export { queryMyStudySimulationAtom } from './mystudy-module';

// Panduan
export { globalPanduanStateAtom, queryGlobalPanduanAtom } from './panduan';

// Profile
export { editPhotoStateAtom } from './profile';

// Quiz
export { remainingTimeAtom, quizQuitPopupStateAtom } from './quiz';

// Score Sertificate
export {
  PopupModalSuccessOpenAtom,
  ShowDetailStatusAtom,
  CertificateStatusAtom,
} from './score-sertificate';

// Study Plan
export {
  dataMajorContractStateAtom,
  PopupModalConfirmCardAtom,
  PopupModalAddStudyAtom,
  PopupModalSuccessConversiAtom,
  PopupModalConfirmStatusAtom,
} from './study-plan';

// Validasi Kampus
export {
  perguruanAsalStateAtom,
  queryPerguruanAsalAtom,
  prodiAsalStateAtom,
  queryProdiAsalAtom,
  jurusanAsalStateAtom,
  queryJurusanAsalAtom,
} from './validasi-kampus';

// Video Panduan
export {
  videoGuideStateAtom,
  videoIdStateAtom,
  queryPanduanVideoAtom,
} from './video-panduan';

// Semua Fitur
export {
  semuaFiturStateAtom,
  querySemuaFiturAtom,
  filterSemuaFiturAtom,
} from './semuafitur';

// Selectors
export * from './selectors';
